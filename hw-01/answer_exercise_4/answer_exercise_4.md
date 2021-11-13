# answer_exercise_4

## Pasos seguidos

1. Cree una aplicación sencilla en Node.js. El endpoint loop simplemente pone el servicio en un loop infinito para que la instrucción del HEALTCHECK falle.

```dockerfile
FROM nginx:1.19.3

COPY ./html/ /usr/share/nginx/html/
```

2. Dockerfile para la creación de la imagen

```Dockerfile
FROM node:alpine3.14

RUN apk --no-cache add curl

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080

HEALTHCHECK --interval=45s \
            --timeout=5s \
            --start-period=15s \
            --retries=2 \
            CMD curl http://localhost:8080 || exit 1

CMD ["node","app.js"]
```

3. Construir la imagen

```console
docker build -t answer_exercise_4:1.0 .
```

3. Comando ejecutado para levantar al contenedor

```console
docker run -d -p 8080:8080 answer_exercise_4:1.0
```

## Referencia

![ejercicio4-1](https://user-images.githubusercontent.com/10359307/141606248-76e0c723-0826-4721-a802-5a8a17969a36.png)

![ejercicio4-2](https://user-images.githubusercontent.com/10359307/141606254-fe18261d-6a38-4e09-b011-cd5b8e0f94b4.png)
