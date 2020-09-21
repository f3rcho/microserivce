
# Microservice
Technologias utilizas:
NodeJS, ExpressJs, mySql, sequelize, docker, graphql y apollo server

Los servicios fue creados cada uno en un contenedor de docker con docker-compose, cada uno con su propio base de datos (mySql). Se utilizo NodeJS y ExpressJS para realizar los respectivos servidores.
Se creo un Gateway como puerta de enlace para recolectar las informacion y tratarla, ademas para no exponer las api de los servicos.
Para este Gateway utilice GraphQL porque me parecio la mejor manera de resolver este problema de comunicacion y manejo de datos. Entonces, basicamente lo que hice fue crear 5 servicios, cada uno con su API Rest y base de datos. Y a traves del API Gateway acceder a los datos y mostrarlos al cliente.


## Comenzando 🚀

Para probar la app debes revisar los pre-requisitos


### Pre-requisitos 📋
- Instalamos NodeJS desde su pagina oficial: https://nodejs.org/en/ 

- Necesitamos Docker y Docker-Compose. Aqui dejo un enlace para esto :
  https://docs.docker.com/engine/install/
  
- Necesitamos instalar yarn de forma global
```
  $ npm install -g yarn
```

### Instalación 🔧
Para copiar el repo a tu pc realiza un git clone "direccion-del-repo"

Una vez instalado los pre-requisitos, solo basta con corre en la terminal  

```
$ docker-compose up
```

Si estas en linux tendras que darle permisos con sudo:

```
$ sudo docker-compose up
```

Una vez hecho esto, docker se encargara de levantar los servicios y crear la imanges correspondientes necesaria para la aplicacion.

## Ejecutando consultas ⚙️

Para empezar a realizar consultas desde el gateway creado con graphQL, solo debes acceder a la ruta en tu navegador 

```
http://localhost:7000/graphql
```

### Analizando las consultas 🔩

Para saber que consultar, en la parte derecha de la interface de graphql tenemos dos pestañas (docs y schema). En docs podremos ver el tipo de queries que estan permitidas para realizar y como hacerlas. En schema se presenta la estructura de los datos que consultar. 

Por ejemplo, pudes realizar una cosulta de asi para saber todos los pagos existentes
```
{
  getAllPayments {
    id
    order_id {
      id
      user_id {
        id
        username
      }
      cart_id {
        id
        
      }
    }
  }
}
```

Todas las tablas estan encadenadas segun el diagrama de relacion/entidad. Asi que se puede realizar todas la consultas posibles segun ellas.
```
{
  getCartItem(id: 101) {
    id
    product_id {
      id
      name
    }
    cart_id {
      id
      user_id {
        id
        username
      }
    }
  }
}

```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [ExpressJS](http://expressjs.com/) - El framework web usado
* [GraphQL](hhttps://graphql.org/) - Manejador de la data
* [NodeJS](https://nodejs.org/es/) - Ambiente de trabajo
* [YARN](https://yarnpkg.com/) - Manejador de paquetes
* [ApolloServer](https://www.apollographql.com/docs/apollo-server/) - Protocolo de comunicacion



## Autores ✒️

* **Fernando Cordero** - *Trabajo Inicial* -(https://github.com/f3rcho)



## Licencia 📄

Este proyecto está bajo la Licencia MIT

