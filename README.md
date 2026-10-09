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


Requisitos Previos y Configuración

Node.js (versión LTS recomendada)

Instalación:
Bash

npm install
npx playwright install

Comandos de Ejecución (Automatización)

Ejecutar en modo headless:
npx playwright test

Ejecutar con navegador visible (headed):
npx playwright test --headed

Visualizar el reporte HTML:
npx playwright show-report