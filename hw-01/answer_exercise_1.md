# answer_exercise_1

## Indica la diferencia entre el uso de la instrucción CMD y ENTRYPOINT (Dockerfile)

`CMD` ejecuta un comando que se puede sobrescribir en la línea de comandos al momento de correr el contenedor.

`ENTRYPOINT` también ejecuta un comando, pero este no puede ser reemplazado y todos los parámetros pasados por la línea de comandos serán anexados al comando.

La mejor practica para el uso de `ENTRYPOINT` es para ejecutar el comando principal de la imagen y utilizar `CMD` para pasar argumentos al comando.
