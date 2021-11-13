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
