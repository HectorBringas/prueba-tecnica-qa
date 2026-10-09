# Portfolio de QA Engineer - SauceDemo (Manual & Automation)

Repositorio integral que documenta el proceso completo de aseguramiento de la calidad (QA) para la plataforma SauceDemo, abrigando tanto el diseño de pruebas manuales como la automatización End-to-End (E2E) mediante **Playwright** y **TypeScript** bajo el patrón **Page Object Model (POM)**.

---

## 📋 FASE 1: Pruebas Manuales y Análisis de Calidad

Antes de la automatización, se estableció la estrategia de pruebas manuales para comprender el comportamiento de la aplicación y definir los escenarios clave:
- **Diseño de Casos de Prueba:** Cobertura de flujos principales (Happy Paths) y escenarios alternativos/negativos (autenticación, ordenamiento de productos, carrito y proceso de checkout).
- **Reporte y Seguimiento de Defectos:** Documentación estructurada de hallazgos (bugs) identificados durante la exploración inicial de la interfaz.
- **Matriz de Traceabilidad:** Aseguramiento de que los requerimientos funcionales estuvieran cubiertos por los escenarios de prueba.
*(Nota: Los artefactos manuales, como hojas de casos de prueba o reportes de bugs, se encuentran organizados en la carpeta /docs o en el gestor correspondiente).*

---

## 🤖 FASE 2: Automatización E2E (Playwright + TypeScript)

Migración de los escenarios críticos a una suite automatizada robusta, escalable y preparada para CI/CD.

### Características Principales:
- **Arquitectura Modular (POM):** Separación clara de responsabilidades (`data`, `pages`, `tests`).
- **Tipado Robusto:** Configuración estricta con TypeScript (`tsconfig.json`) y soporte para tipos de Node.js.
- **Validaciones de Negocio Avanzadas:** 
  - Pruebas de inicio de sesión con manejo de datos (DDT) y escenarios negativos.
  - Validación de ordenamiento de productos.
  - Validación matemática de precios en el flujo de compra (Subtotal + Impuestos = Total).
  - Manejo de validaciones de campos obligatorios vacíos en el formulario de envío.
- **Reportes y Evidencias Automáticas:** Reporte HTML nativo integrado, con captura de pantalla y grabación de video automáticas configuradas exclusivamente ante fallos (`only-on-failure` / `retain-on-failure`).

---

## 📁 Estructura General del Proyecto

```text
my-qa-project/
├── docs/               # Artefactos de pruebas manuales (Casos de prueba, reportes de bugs)
├── data/               # Datos de prueba para automatización (usuarios, credenciales)
├── pages/              # Clases de Page Object Model (LoginPage, ProductsPage, etc.)
├── tests/              # Scripts de pruebas E2E automatizadas
├── playwright.config.ts # Configuración global de Playwright
├── tsconfig.json       # Configuración de TypeScript
└── package.json        # Dependencias y scripts
```

## ⚙️ Requisitos Previos y Configuración

Node.js (versión LTS recomendada)

Instalación:
Bash

npm install
npx playwright install

## 💻 Comandos de Ejecución (Automatización)

Ejecutar en modo headless:
npx playwright test

Ejecutar con navegador visible (headed):
npx playwright test --headed

Visualizar el reporte HTML:
npx playwright show-report

## 🤖 Uso de Inteligencia Artificial como Apoyo Técnico

Durante el desarrollo de este proyecto, se utilizó Inteligencia Artificial (IA) como herramienta de colaboración técnica y guía metodológica (AI Pair Programming), empleándola en:

Estrategia de QA y diseño de escenarios manuales: Validación de criterios de aceptación y buenas prácticas en la creación de casos de prueba.

Arquitectura del framework: Apoyo en la estructuración bajo el patrón Page Object Model (POM).

Resolución técnica: Soporte en la configuración de TypeScript (tsconfig.json), tipos de Node.js e integración de variables para CI/CD.

Optimización de scripts: Desarrollo de la lógica matemática para la validación de precios en el checkout y configuración de evidencias ante fallos.

---

## Documentación de QA - Pruebas de API (Parte D)

### 1. Plan de Pruebas (Resumen)
- **Objetivo:** Verificar la integridad, rendimiento, correctitud de esquemas y robustez ante errores de la API pública Open-Meteo para las ciudades de Bogotá, Londres y Berlín.
- **Alcance:** Pruebas funcionales de contrato (esquemas JSON), validaciones data-driven, verificación de rangos físicos de temperatura, pruebas de rendimiento (latencia) y manejo de errores (casos negativos).

### 2. Casos de Prueba Ejecutados
1. **TC-API-01 a 03:** Consulta exitosa de clima actual y zona horaria para Bogotá, Londres y Berlín mediante estructura Data-Driven (`cities.json`).
2. **TC-API-04:** Validación de código HTTP 400 ante coordenadas geográficas fuera de rango.
3. **TC-API-05:** Validación de código HTTP 400 ante omisión de parámetros obligatorios.
4. **TC-API-06:** Validación de manejo de errores ante tipos de datos alfabéticos en parámetros numéricos.
5. **TC-API-07:** Verificación de comportamiento de la API ante credenciales/tokens simulados incorrectos.

### 3. Resultados e Informe
- **Tasa de éxito:** 100% de los casos de prueba pasaron exitosamente.
- **Rendimiento:** El tiempo de respuesta promedio obtenido fue de **~180ms**, estando muy por debajo del umbral definido de **1500ms**, lo cual demuestra excelente disponibilidad del servicio de Open-Meteo.
- **Incidencias:** No se registraron fallos ni bugs en la API evaluada; los contratos y esquemas JSON se mantuvieron estables.

## 🚀 Ejecución y CI/CD

### Pruebas de UI (`ui-tests/`)
- **Modo Headless:** `npm test`
- **Modo Con Navegador Visible (Headed): `npx playwright test --headed`

### Pruebas de API (`api-tests/`)
- **Ejecutar pruebas:** `npx playwright test`

### Pipeline de CI/CD
El proyecto cuenta con un flujo configurado en `.github/workflows/ci.yml` que ejecuta de manera desatendida ambos sets de pruebas en entornos Linux cada vez que se integra código nuevo, generando artefactos descargables con los reportes HTML de Playwright.