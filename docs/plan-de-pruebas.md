# Plan de Pruebas: Flujo de Recarga / Paquetes Movistar (Persona Natural)
**Norma de referencia:** ISO/IEC/IEEE 29119-3  
**Terminología:** Glosario ISTQB

---

## 1. Resumen Ejecutivo y Objetivo
* **Objetivo:** Validar la funcionalidad, usabilidad, compatibilidad y rendimiento percibido del flujo de recarga de saldo y compra de paquetes para personas naturales en la plataforma web de Movistar (versión escritorio y móvil), garantizando la calidad antes de su paso a producción.
* **Alcance (Incluido):**
  * Navegación en la web de Movistar (escritorio y responsivo móvil).
  * Selección del flujo de recarga o paquetes para línea prepago/pospago.
  * Ejecución del flujo estrictamente hasta el **paso previo a la confirmación del pago** (cumpliendo restricciones éticas y de seguridad de la prueba).
  * Validación de campos obligatorios, montos válidos/inválidos y mensajes de error.
* **Alcance (Excluido):**
  * Transacciones de pago reales (uso de tarjetas de crédito/débito o pasarelas bancarias reales).
  * Pruebas de estrés masivo o rendimiento contra los servidores de producción de Movistar.

## 2. Enfoque y Tipos de Pruebas
* **Pruebas Funcionales:** Verificación de la lógica del negocio (montos permitidos, selección de paquetes, campos obligatorios).
* **Pruebas de UI/UX:** Validación de alineación, textos e interfaz responsiva.
* **Pruebas No Funcionales:**
  * *Usabilidad:* Facilidad de navegación e intuición del flujo.
  * *Compatibilidad:* Ejecución en Google Chrome, Mozilla Firefox y simulación de pantalla móvil.
  * *Accesibilidad:* Análisis estático de accesibilidad (Lighthouse / axe DevTools).
  * *Rendimiento Percibido:* Métricas del lado del cliente (Core Web Vitals: LCP, CLS, tiempo de carga).

## 3. Riesgos y Mitigación
* **Riesgo 1 (Proyecto):** Cambios en la interfaz de producción de Movistar durante la ejecución de las pruebas.
  * *Mitigación:* Capturar evidencias en tiempo real y acotar los selectores estables.
* **Riesgo 2 (Producto):** Bloqueos de seguridad o pasarela de pago simulada.
  * *Mitigación:* Limitar la prueba al paso previo a la transacción financiera, utilizando datos sintéticos.

## 4. Ambientes de Prueba
* **Escritorio:** Google Chrome y Mozilla Firefox (Resolución 1920x1080).
* **Móvil:** Emulador de dispositivo (Google Chrome DevTools - Pixel 5 o iPhone 12/14).

## 5. Criterios de Entrada, Salida y Suspensión
* **Criterios de Entrada:** Disponibilidad del portal público web de Movistar y herramientas de auditoría listas.
* **Criterios de Salida:** 100% de los casos de prueba ejecutados y documentados, con sus respectivas evidencias de ejecución y reporte de incidencias.
* **Criterios de Suspensión:** Caída temporal del sitio web de Movistar que impida acceder al flujo de recarga.