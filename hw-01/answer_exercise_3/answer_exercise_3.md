# answer_exercise_3

## Pasos seguidos

1. Crear el Dockerfile. En la carpeta html se encuentra el archivo index.html que se va a copiar a nginx

```dockerfile
FROM nginx:1.19.3

COPY ./html/ /usr/share/nginx/html/
```

2. Crear el Volumen

```console
docker volume create static_content
```

3. Crear la imagen

```console
docker build -t answer_exercise_3:1.0 .
```

4. Correr el contenedor

```console
docker run -d -p 8080:80 -v static_content:/usr/share/nginx/html answer_exercise_3:1.0
```
