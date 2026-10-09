# Diseño de Casos de Prueba: Módulo de Recargas / Paquetes Movistar
**Técnicas aplicadas:** Partición de Equivalencia (PE), Análisis de Valores Límite (AVL) y Transición de Estados (TE).

---

### CP-01: Validación de ingreso de número válido en el flujo de Recarga en Línea (PE / AVL)
* **ID:** CP-01
* **Título:** Validar el despliegue del campo de entrada y el indicador de paso al interactuar con el menú de navegación.
* **Trazabilidad:** Requisito RF-REC-01 (Navegación e ingreso de línea)
* **Precondiciones:** El usuario se encuentra en la página de inicio (Home) de Movistar.
* **Datos de prueba:** Número móvil válido de 10 dígitos (ej. 3001234567).
* **Pasos:**
  1. Posicionar el cursor (hover) sobre la opción de navegación principal para desplegar el submenú.
  2. Hacer clic en la opción "Recarga en línea".
  3. Visualizar el cuadro de diálogo indicador con el texto "Recarga Saldo" y el cuadro de texto inferior.
  4. Digitar el número Movistar de 10 dígitos en el cuadro de texto.
* **Resultado Esperado:** El sistema acepta el número y habilita la siguiente sección o paso para seleccionar el monto de la recarga.
* **Prioridad:** Alta (P1)

### CP-02: Validación de ingreso de número inválido de 9 dígitos en el flujo de Recarga en Línea (AVL)
* **ID:** CP-02
* **Título:** Validar botón para Continuar inhabilitado por introducción de número inválido.
* **Trazabilidad:** Requisito RF-REC-02 (Validación de longitud mínima de la línea móvil - Análisis de Valores Límite)
* **Precondiciones:** El usuario se encuentra en la página de inicio (Home) de Movistar.
* **Datos de prueba:** Número móvil inválido de 10 dígitos (ej. 300123456).
* **Pasos:**
  1. Posicionar el cursor (hover) sobre la opción de navegación principal para desplegar el submenú.
  2. Hacer clic en la opción "Recarga en línea".
  3. Visualizar el cuadro de texto del número Movistar.
  4. Digitar el número Movistar de 9 dígitos en el cuadro de texto.
  5. Intentar interactuar con el botón Continuar.
* **Resultado Esperado:** El sistema impide seguir con el proceso y muestra el botón Continuar como inhabilitado debido a que no se ha proporcionado un número teléfonico válido.
* **Prioridad:** Alta (P1)

### CP-03: Validación de ingreso de número inválido de 11 dígitos en el flujo de Recarga en Línea (AVL)
* **ID:** CP-03
* **Título:** Validar el limitador de dígitos permitidos en el cuadro de texto a 10.
* **Trazabilidad:** Requisito RF-REC-03 (Validación de longitud máxima de la línea móvil - Análisis de Valores Límite)
* **Precondiciones:** El usuario se encuentra en la página de inicio (Home) de Movistar.
* **Datos de prueba:** Número móvil inválido de 10 dígitos (ej. 30012345678).
* **Pasos:**
  1. Posicionar el cursor (hover) sobre la opción de navegación principal para desplegar el submenú.
  2. Hacer clic en la opción "Recarga en línea".
  3. Visualizar el cuadro de texto del número Movistar.
  4. Digitar el número Movistar de 11 dígitos en el cuadro de texto.
* **Resultado Esperado:** El sistema impide ingresar el último dígito (8), indicando que 10 dígitos es el lílimite del cuadro de texto.
* **Prioridad:** Alta (P1)

### CP-04: Validación de ingreso de caracteres en el flujo de Recarga en Línea (TE)
* **ID:** CP-04
* **Título:** Validar el ingreso de información a solo dígitos en el cuadro de texto.
* **Trazabilidad:** Requisito RF-REC-04 (Restricción de formato y tipos de caracteres permitidos - Partición de Equivalencia)
* **Precondiciones:** El usuario se encuentra en la página de inicio (Home) de Movistar.
* **Datos de prueba:** Número: "300A"
* **Pasos:**
  1. Posicionar el cursor (hover) sobre la opción de navegación principal para desplegar el submenú.
  2. Hacer clic en la opción "Recarga en línea".
  3. Visualizar el cuadro de texto del número Movistar.
  4. Digitar el número Movistar "300A" en el cuadro de texto.
* **Resultado Esperado:** El campo restringe los caracteres no numéricos, omitiendolos por completo.
* **Prioridad:** Alta (P1)

### CP-05: Validación de ingreso de número vacío en el flujo de Recarga en Línea (TE)
* **ID:** CP-05
* **Título:** Validar botón para Continuar inhabilitado por introducción de número vacío.
* **Trazabilidad:** Requisito RF-REC-05 (Validación de campos obligatorios en el flujo de entrada)
* **Precondiciones:** El usuario está en la página de inicio de Movistar.
* **Datos de prueba:** Campo de texto del número de línea completamente en blanco ("" o vacío).
* **Pasos:**
  1. Posicionar el cursor (hover) sobre la opción de navegación principal para desplegar el submenú.
  2. Hacer clic en la opción "Recarga en línea".
  3. Visualizar el cuadro de texto del número Movistar.
  4. Intentar interactuar con el botón Continuar.
* **Resultado Esperado:** El sistema impide seguir con el proceso y muestra el botón Continuar como inhabilitado debido a que no se ha proporcionado un número teléfonico válido.
* **Prioridad:** Alta (P1)

### CP-06: Validación del despliegue del menú (Hover) (TE)
* **ID:** CP-06
* **Título:** Validar el comportamiento de los desplegables al posicionarse en el menú correspondiente.
* **Trazabilidad:** Requisito RNF-UI-01 (Comportamiento interactivo y visualización del menú de navegación principal)
* **Precondiciones:** El usuario está en la página de inicio de Movistar.
* **Datos de prueba:** Ninguno (Interacción de usuario con el cursor).
* **Pasos:**
  Ubicar el cursor del mouse sobre la opción principal de navegación correspondiente en el Home de Movistar.
  2. Observar la respuesta del componente visual.
* **Resultado Esperado:** Al posicionar el cursor sobre la opción de navegación principal, el submenú correspondiente se despliega de manera inmediata (en menos de 1 segundo), mostrando de forma clara y sin alteraciones visuales la opción "Recarga en línea" lista para ser seleccionada.
* **Prioridad:** Media (P2)

### CP-07: Visibilidad del indicador de paso en flujo de Recarga en Línea
* **ID:** CP-07
* **Título:** Validar que el cuadro de dialogo "Recarga saldo" se encuentre alineado hacia la izquierda, indicando que es el primer paso del proceso.
* **Trazabilidad:** Requisito RNF-UI-02 (Claridad en la guía visual de pasos de usuario en la interfaz)
* **Precondiciones:** El usuario está en la página de inicio de Movistar.
* **Datos de prueba:** Ninguno.
* **Pasos:**
  1. Posicionar el cursor (hover) sobre la opción de navegación principal para desplegar el submenú.
  2. Hacer clic en la opción "Recarga en línea".
  3. Visualizar el cuadro de diálogo "Recarga saldo". 
* **Resultado Esperado:** El cuadro de diálogo debe posicionarse en un inicio a la izquierda, debido a que solo es el primer paso de 2 para completar el proceso.
* **Prioridad:** Media (P2)

### CP-08: Validación de eliminación de caracteres en el cuadro de texto
* **ID:** CP-08
* **Título:** Validar que el usuario pueda modificar o eliminar dígitos erróneos utilizando el teclado dentro del cuadro de texto.
* **Trazabilidad:** RNF-UI-03 (Facilidad de edición e interacción de los componentes de entrada de texto)
* **Precondiciones:** El navegador web se encuentra abierto en la página de inicio de Movistar, se ha desplegado el menú y se encuentra visible el cuadro de texto para ingresar el número de línea.
* **Datos de prueba:** Secuencia numérica parcial de prueba (ej. "300123").
* **Pasos:**
  1. Hacer clic dentro del cuadro de texto del número móvil.
  2. Digitar una secuencia numérica incompleta o errónea (ej. "300123").
  3. Presionar repetidamente la tecla "Backspace" (retroceso) del teclado para borrar los dígitos de derecha a izquierda.
* **Resultado Esperado:** El sistema elimina los caracteres de forma fluida y en tiempo real conforme se presiona la tecla, permitiendo al usuario corregir el número sin que el campo se bloquee ni requiera recargar la página.
* **Prioridad:** Media (P2)