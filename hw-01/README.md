# README

## answer_exercise_3

Después de ver las observaciones del ejercicio 3 en Slack me quedo la duda sobre si resolví correctamente el ejercicio.
Se me ocurrió la siguiente solución:

Instalar nano para poder modificar archivos:
```
FROM nginx:1.19.3
RUN apt-get update && apt-get install nano
# COPY ./html/ /usr/share/nginx/html/
```
Después acceder al contenedor y modificar el contenido del archivo:
```
docker run -d -p 8080:80 -v static_content:/usr/share/nginx/html answer_exercise_3:1.0
docker exec -it [NOMBRE O ID DEL CONTENEDOR] sh
nano /usr/share/nginx/html/index.html
```
# Referencia

![Ejercicio3](https://user-images.githubusercontent.com/10359307/141670468-d36510d4-63a8-4e16-aed8-54626199c33a.gif)
