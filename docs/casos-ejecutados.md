1. Resumen de Ejecución

    Fecha de Ejecución: Octubre de 2026

    Ambiente: Web de Escritorio (Mozilla Firefox) / Versión Móvil (Responsive View)

    Estado General: Bloqueado por incidencia crítica en el primer paso del flujo.

2. Detalle de Resultados por Caso de Prueba
CP-01: Validación de ingreso de número válido en el flujo de Recarga en Línea

    Ambiente: Escritorio

    Resultado: ❌ Falló

    Observación y Evidencia: Al introducir un número móvil de 10 dígitos 100% válido, la plataforma lo interpreta erróneamente como inválido, desplegando un mensaje de error restrictivo en la parte inferior del campo e impidiendo continuar.

    Evidencia asociada: evidencias/CP01_fallo_numero_valido.png

CP-02: Validación de ingreso de número inválido de 9 dígitos (AVL)

    Ambiente: Escritorio

    Resultado: ✅ Pasó

    Observación y Evidencia: Al introducir un número de 9 dígitos, el sistema detecta la longitud incompleta y mantiene el botón Continuar inhabilitado.

    Evidencia asociada: evidencias/CP02_9ditos.png

CP-03: Validación de ingreso de número inválido de 11 dígitos (AVL)

    Ambiente: Escritorio

    Resultado: ✅ Pasó

    Observación y Evidencia: El cuadro de texto limita de forma estricta la entrada, impidiendo escribir el undécimo dígito en la interfaz.

CP-04: Validación de ingreso de caracteres en el flujo de Recarga (PE)

    Ambiente: Escritorio

    Resultado: ✅ Pasó

    Observación y Evidencia: Al intentar digitar letras (ej. "300A"), el campo restringe los caracteres no numéricos y los omite por completo.

CP-05: Validación de ingreso de número vacío (TE)

    Ambiente: Escritorio

    Resultado: ✅ Pasó

    Observación y Evidencia: Con el campo completamente en blanco, el sistema mantiene el botón de continuar inhabilitado por falta de datos obligatorios.

    Evidencia asociada: evidencias/CP05_0ditos.png

CP-06: Validación del despliegue del menú (Hover) (TE)

    Ambiente: Escritorio

    Resultado: ✅ Pasó

    Observación y Evidencia: Al posicionar el cursor sobre el menú principal, el submenú de recargas se despliega de forma inmediata y sin alteraciones visuales.

CP-07: Visibilidad del indicador de paso en flujo de Recarga

    Ambiente: Escritorio

    Resultado: ✅ Pasó

    Observación y Evidencia: El cuadro de diálogo "Recarga saldo" se posiciona y alinea correctamente a la izquierda, indicando el inicio del proceso.

CP-08: Validación de eliminación de caracteres (Backspace)

    Ambiente: Escritorio

    Resultado: ✅ Pasó

    Observación y Evidencia: La tecla Backspace elimina de manera fluida y en tiempo real los dígitos de derecha a izquierda sin congelar el navegador.

CP-09: Validación de pegado (Paste) de número de teléfono

    Ambiente: Escritorio

    Resultado: ✅ Pasó (con observación del sistema de validación)

    Observación y Evidencia: Al copiar y pegar una cadena de puros dígitos desde el portapapeles, el campo de texto la acepta correctamente e integra la secuencia numérica de inmediato sin corromper el formato. (Nota: Aunque el pegado es exitoso, el sistema posteriormente activa el bloqueo general de validación de línea descrito en el INC-01).

CP-10: Validación de ingreso con espacios en blanco intermedios

    Ambiente: Escritorio

    Resultado: ✅ Pasó (con observación del sistema de validación)

    Observación y Evidencia: Al copiar y pegar una cadena de puros dígitos desde el portapapeles, el campo de texto la acepta correctamente e integra la secuencia numérica de inmediato sin corromper el formato. (Nota: Aunque el pegado es exitoso, el sistema posteriormente activa el bloqueo general de validación de línea descrito en el INC-01).

CP-11: Validación de comportamiento ante caracteres especiales

    Ambiente: Escritorio

    Resultado: ✅ Pasó

    Observación y Evidencia: El campo bloquea o rechaza de inmediato símbolos como guiones o signos de suma al intentar escribirlos.

CP-12: Validación de resistencia al refrescar la página (Estado del formulario)

    Ambiente: Escritorio

    Resultado: ✅ Pasó

    Observación y Evidencia: Al ingresar dígitos de manera parcial en el campo de recarga y actualizar la página del navegador (F5), el sistema limpia de inmediato el estado temporal del formulario y restablece la vista inicial, asegurando que no se queden datos remanentes en la interfaz.

CP-13: Validación de despliegue de menú y respuesta táctil (Móvil)

    Ambiente: Móvil (Responsive View)

    Resultado: ✅ Pasó

    Observación y Evidencia: El menú responde correctamente al estímulo táctil (tap), desplegando el formulario de recarga adaptado a pantallas verticales.

    Evidencia asociada: evidencias/CP13_mobile_menu.png

CP-14: Validación de despliegue del teclado numérico nativo

    Ambiente: Móvil (Responsive View)

    Resultado: ✅ Pasó

    Observación y Evidencia: Al enfocar el cuadro de texto en la vista de smartphone, el sistema operativo activa automáticamente el teclado numérico nativo.

CP-15: Validación de adaptabilidad visual (Responsive Design)

    Ambiente: Móvil (Responsive View)

    Resultado: ✅ Pasó

    Observación y Evidencia: Los elementos visuales del formulario se ajustan correctamente al ancho del dispositivo móvil sin generar desplazamiento horizontal (scroll).