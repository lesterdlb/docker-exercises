# answer_exercise_5

## Pasos seguidos

1. Crear el docker-compose.yml

```yaml
---
version: '3.6'

services:
  elasticsearch:
    # Utilizar la imagen de elasticsearch v7.9.3
    image: elasticsearch:7.9.3
    # Asignar un nombre al contenedor
    container_name: contenedor-elastic
    # Define las siguientes variables de entorno:
    # discovery.type=single-node
    environment:
      - 'discovery.type=single-node'
    # Emplazar el contenedor a la red de elastic
    networks:
      - red-elastic
    # Mapea el Puerto externo 9200 al puerto interno del contenedor 9200
    # Idem para el puerto 9300
    ports:
      - 9200:9200
      - 9300:9300
  kibana:
    # Utilizar la imagen kibana v7.9.3
    image: kibana:7.9.3
    # Asignar un nombre al contenedor
    container_name: contenedor-kibana
    # Emplazar el contenedor a la red de elastic
    networks:
      - red-elastic
    # Define las siguientes variables de entorno:
    # ELASTICSEARCH_HOST=elasticsearch
    # ELASTICSEARCH_PORT=9200
    environment:
      - ELASTICSEARCH_HOST=elasticsearch
      - ELASTICSEARCH_PORT=9200
    # Mapear el puerto externo 5601 al puerto interno 5601
    ports:
      - 5601:5601
    # El contenedor Kibana depe esperar a la disponibilidad del servicio elasticsearch
    depends_on:
      - elasticsearch
# Definir la red elastic (bridge)
networks:
  red-elastic:
    driver: bridge
```

2. Levantar los contenedores utilizando el comando `docker-compose` dentro de la carpeta que contiene el archivo .yml

```console
docker-compose up -d
```

## Referencia

![ejercicio5](https://user-images.githubusercontent.com/10359307/141606269-f927cbcd-dd1d-4560-ad83-2d60300578e3.png)
