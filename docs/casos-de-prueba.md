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

### CP-07: Visibilidad del indicador de paso en flujo de Recarga en Línea (TE)
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
* **Trazabilidad:** Requisito RNF-UI-03 (Facilidad de edición e interacción de los componentes de entrada de texto)
* **Precondiciones:** El navegador web se encuentra abierto en la página de inicio de Movistar, se ha desplegado el menú y se encuentra visible el cuadro de texto para ingresar el número de línea.
* **Datos de prueba:** Secuencia numérica parcial de prueba (ej. "300123").
* **Pasos:**
  1. Posicionar el cursor (hover) sobre la opción de navegación principal para desplegar el submenú.
  2. Hacer clic en la opción "Recarga en línea".
  3. Visualizar el cuadro de texto del número Movistar.
  4. Hacer clic dentro del cuadro de texto del número móvil.
  5. Digitar una secuencia numérica incompleta o errónea (ej. "300123").
  6. Presionar repetidamente la tecla "Backspace" (retroceso) del teclado para borrar los dígitos de derecha a izquierda.
* **Resultado Esperado:** El sistema elimina los caracteres de forma fluida y en tiempo real conforme se presiona la tecla, permitiendo al usuario corregir el número sin que el campo se bloquee ni requiera recargar la página.
* **Prioridad:** Media (P2)

### CP-09: Validación de pegado (Paste) de número de teléfono mediante portapapeles
* **ID:** CP-09
* **Título:** Validar el comportamiento del campo al intentar pegar un número de teléfono copiado desde el portapapeles.
* **Trazabilidad:** Requisito RF-REC-06 (Mecanismos alternativos de entrada de datos)
* **Precondiciones:** El usuario está en la página de inicio de Movistar.
* **Datos de prueba:** Cadena copiada: "3001234567".
* **Pasos:**
  1. Posicionar el cursor (hover) sobre la opción de navegación principal para desplegar el submenú.
  2. Hacer clic en la opción "Recarga en línea".
  3. Visualizar el cuadro de texto del número Movistar.
  4. Hacer clic dentro del cuadro de texto del número móvil.
  5. Copiar un número válido de 10 dígitos desde otra fuente (bloc de notas).
  6. Hacer clic derecho sobre el cuadro de texto y seleccionar "Pegar" (o usar Ctrl+V).
* **Resultado Esperado:** El sistema acepta la cadena pegada en el campo de texto y evalúa su longitud de manera idéntica al ingreso manual por teclado.
* **Prioridad:** Media (P2)

### CP-10: Validación de ingreso con espacios en blanco intermedios
* **ID:** CP-10
* **Título:** Validar la sanitización o rechazo de espacios en blanco introducidos dentro de la secuencia numérica.
* **Trazabilidad:** Requisito RF-REC-07 (Sanitización y formato de datos de entrada)
* **Precondiciones:** El usuario está en la página de inicio de Movistar.
* **Datos de prueba:** "300 123 4567"
* **Pasos:**
  1. Ingresar el número de teléfono incluyendo espacios en blanco entre los bloques de dígitos.
  2. Observar el comportamiento del campo de entrada.
* **Resultado Esperado:** El sistema ignora los espacios introducidos por el usuario, permitiendo procesar únicamente los datos numéricos.
* **Prioridad:** Media (P2)

### CP-11: Validación de comportamiento ante caracteres especiales y símbolos
* **ID:** CP-11
* **Título:** Validar el bloqueo o filtrado de símbolos especiales (ej. guiones, paréntesis, signos de suma) en el campo de número.
* **Trazabilidad:** Requisito RF-REC-08 (Restricción de caracteres especiales - Partición de Equivalencia)
* **Precondiciones:** El usuario está en la página de inicio de Movistar.
* **Datos de prueba:** "+57-300-1234567" o "300-4567".
* **Pasos:**
  1. Posicionar el cursor (hover) sobre la opción de navegación principal para desplegar el submenú.
  2. Hacer clic en la opción "Recarga en línea".
  3. Visualizar el cuadro de texto del número Movistar.
  4. Hacer clic dentro del cuadro de texto del número móvil.
  5. Intentar digitar caracteres como guiones (-), paréntesis (() o signo más (+) en el cuadro de texto.
* **Resultado Esperado:** El sistema impide la escritura de dichos símbolos o los omite de forma estricta, permitiendo únicamente el ingreso numérico puro.
* **Prioridad:** Media (P2)

### CP-12: Validación de resistencia al refrescar la página (Estado del formulario)
* **ID:** CP-12
* **Título:** Validar el comportamiento de los cuadros de texto al actualizar (F5) la página del navegador.
* **Trazabilidad:** Requisito RNF-UI-04 (Gestión de estado del DOM ante recargas).
* **Precondiciones:** El usuario está en la página de inicio de Movistar.
* **Datos de prueba:** Número parcial escrito (ej. "300").
* **Pasos:**
  1. Posicionar el cursor (hover) sobre la opción de navegación principal para desplegar el submenú.
  2. Hacer clic en la opción "Recarga en línea".
  3. Visualizar el cuadro de texto del número Movistar.
  4. Hacer clic dentro del cuadro de texto del número móvil.
  5. Escribir "300" en el campo Número Movistar.
  6. Presionar la tecla F5 o el botón de recargar del navegador web.
* **Resultado Esperado:** La página se recarga limpiando el estado temporal del cuadro de texto, devolviendo el sitio a su condición inicial, solicitando un nuevo número.
* **Prioridad:** Baja (P3)

### CP-13: Validación de despliegue de menú y respuesta táctil (Mobile Tap)
* **ID:** CP-13
* **Título:** Validar que el submenú de recargas se despliegue correctamente mediante interacción táctil (tap) en navegador móvil.
* **Trazabilidad:** Requisito RNF-UI-05 (Interacción táctil y navegación móvil).
* **Precondiciones:** La página web de Movistar se encuentra abierta en un navegador móvil o emulador en resolución móvil (ej. 375x667).
* **Datos de prueba:** Ninguno (Interacción táctil de usuario).
* **Pasos:**
  1. Acceder a la versión móvil del sitio de Movistar.
  2. Hacer un toque (tap) sobre el menú de navegación principal o menú hamburguesa para desplegar las opciones.
  3. Seleccionar la opción "Recarga en línea".
* **Resultado Esperado:** El menú responde de manera fluida al estímulo táctil, desplegando el formulario de recarga adaptado a la pantalla vertical sin retrasos perceptibles.
* **Prioridad:** Alta (P1)

### CP-14: Validación de despliegue del teclado numérico nativo en dispositivo móvil (Mobile UX)
* **ID:** CP-14
* **Título:** Validar que al enfocar el campo de texto del número móvil en la vista de smartphone, el sistema active el teclado numérico nativo.
* **Trazabilidad:** Requisito RNF-UI-06 (Experiencia de usuario móvil y tipos de entrada).
* **Precondiciones:** El usuario se encuentra visualizando el campo de ingreso de número en el flujo de recarga móvil.
* **Datos de prueba:** Ninguno (Activación de eventos de foco en input numérico).
* **Pasos:**
  1. Tocar con el dedo dentro del cuadro de texto destinado para el número de teléfono Movistar.
  2. Observar la respuesta del sistema operativo del dispositivo móvil.
* **Resultado Esperado:** El campo recibe el foco correctamente y el sistema despliega automáticamente el teclado numérico nativo (en lugar del teclado alfabético completo), facilitando la escritura del usuario.
* **Prioridad:** Media (P2)

### CP-15: Validación de adaptabilidad visual (Responsive Design) y ausencia de scroll horizontal
* **ID:** CP-15
* **Título:** Validar que el diseño del flujo de recarga se ajuste al ancho de la pantalla móvil sin generar desbordamientos visuales.
* **Trazabilidad:** Requisito RNF-UI-07 (Adaptabilidad responsiva en resoluciones móviles estándar)
* **Precondiciones:** El navegador móvil se encuentra configurado en una resolución de referencia (ej. 375x812 - iPhone X/12 o equivalente).
* **Datos de prueba:** Resolución de pantalla móvil de prueba.
* **Pasos:**
  1. Cargar el Home y acceder a la sección de recargas en la vista móvil.
  2. Inspeccionar visualmente el cuadro de texto, etiquetas y botones de acción en busca de recortes o superposiciones.
  3. Intentar desplazar la pantalla horizontalmente de izquierda a derecha.
* **Resultado Esperado:** Todos los componentes de la interfaz se adaptan de forma fluida a las dimensiones de la pantalla móvil, los textos son legibles y no se genera desplazamiento horizontal (scroll horizontal).
* **Prioridad:** Media (P2)