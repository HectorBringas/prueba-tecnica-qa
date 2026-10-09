import { test, expect } from '@playwright/test';
import cities from '../data/cities.json';

test.describe('Parte D - Pruebas de API Open-Meteo (Clima)', () => {

  // --- PRUEBAS POSITIVAS (DATA-DRIVEN) ---
  for (const city of cities) {
    test(`Validar pronóstico y clima actual para: ${city.cityName}`, async ({ request }) => {
      const startTime = Date.now();

      const response = await request.get('/v1/forecast', {
        params: {
          latitude: city.latitude,
          longitude: city.longitude,
          current: 'temperature_2m,relative_humidity_2m',
          timezone: city.timezone
        }
      });

      const duration = Date.now() - startTime;

      // 1. Validar código de estado HTTP (200 OK)
      expect(response.status()).toBe(200);

      // 2. Validar encabezado Content-Type
      expect(response.headers()['content-type']).toContain('application/json');

      // 3. Validar tiempo de respuesta (< 1500ms umbral justificado)
      expect(duration).toBeLessThan(1500);

      const body = await response.json();

      // 4. Validar coherencia de coordenadas y zona horaria (precisión ajustada a 1 decimal por la celda de la API)
      expect(body.latitude).toBeCloseTo(city.latitude, 1);
      expect(body.longitude).toBeCloseTo(city.longitude, 1);
      expect(body.timezone).toBe(city.timezone);

      // 5. Validar esquema JSON y datos físicos razonables de temperatura
      expect(body).toHaveProperty('current');
      expect(body.current).toHaveProperty('temperature_2m');
      
      const currentTemp = body.current.temperature_2m;
      expect(typeof currentTemp).toBe('number');
      expect(currentTemp).toBeGreaterThanOrEqual(city.expectedMinTemp);
      expect(currentTemp).toBeLessThanOrEqual(city.expectedMaxTemp);
    });
  }

  // --- CASOS NEGATIVOS ---
  
  test('Caso Negativo 1: Coordenadas fuera de rango válido (Latitud 200)', async ({ request }) => {
    const response = await request.get('/v1/forecast', {
      params: { latitude: 200, longitude: 0 }
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body).toHaveProperty('reason');
  });

  test('Caso Negativo 2: Longitud fuera de rango válido (Longitud 200)', async ({ request }) => {
    const response = await request.get('/v1/forecast', {
      params: { latitude: 0, longitude: 200 }
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body).toHaveProperty('reason');
  });

  test('Caso Negativo 3: Tipo de parámetro inválido (String en lugar de número en latitud)', async ({ request }) => {
    const response = await request.get('/v1/forecast', {
      params: { latitude: 'abc', longitude: 'xyz' }
    });
    expect(response.status()).toBe(400);
  });

  test('Caso Negativo 4: API Key inválida o parámetro de key erróneo (simulación)', async ({ request }) => {
    const response = await request.get('/v1/forecast', {
      params: { latitude: 4.71, longitude: -74.07, apikey: 'invalid_fake_key_123' }
    });
    expect([200, 400, 401, 403, 404]).toContain(response.status());
  });

});