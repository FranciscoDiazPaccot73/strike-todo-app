# Challenge tecnico para Strike.
Autor: **[Francisco Diaz Paccot](https://franciscodiazpaccot.dev)**.

## [Live Demo](https://fdiazpaccot-strike-todo-app.vercel.app/)

## Tecnologias usadas.
Para este challenge tecnico se utilizo **NextJs, Tailwind, Typescript, Firebase, Jest**

## Dependencias
Para poder cumplir de la mejor forma con los puntos del challenge, se utilizaron las siguientes dependencias adicionales:

| Dependencia           | Detalle                         |
| --------------------- | ------------------------------- |
| clsx                  | Manejo de clases en componentes |
| framer-motion         | Animacione                      |
| react-beautiful-dnd   | Funcionalidad de Drag & Drop    |
| react-rough-notation  | Tachado de tareas realizadas    |


## Ambiente local
Para poder correr la aplicacion en un ambiente local, se debera incorporar un archivo `.env.local` para poder cargar las keys de firebase localmente, ya que para los fines de este proyecto estan declaradas en Vercel. En el caso de ser necesario, solicitarlo.

Una vez se haya hecho clone/fork del proyecto, correr `yarn` o `npm i` para poder instalar las dependencias y tener todo disponible para poder ejecutar `yarn dev` o `npm run dev` y poder tener disponible la aplicacion en el browser en `http://localhost:3000/`

## Scripts disponibles.
```bash
  yarn dev
  yarn build
  yarn start
  yarn lint
  yarn test
  yarn test:watch
  yarn test:coverage
```

## Arquitectura basica de archivos
```
project
└───components
│   │   __tests__
|   |   Footer.tsx
|   |   ...
│   │
│   └───utils
│       │   constants.ts
|
└───pages
|   │   _app.tsx
|   │   _document.tsx
|   │   index.tsx
|
└───services
|   │   firebase.ts
|
└───store
|   │   actions.ts
|   │   index.tsx
|   │   reducers.ts
|
└───styles
|   │   globals.scss
|
└───utils
|   │   constants.ts
|   │   index.ts
|
└───firebaseConfig.js
```

## Puntos a mencionar sobre el challenge.
- No se realiza una persistencia en la DB del ordenamiento elegido, ya que se entendio que es un procesamiento muy pesado para que este en un frontend.
- Dada la simplicidad de la app y la confianza que brinda el servicio de firebase, se hace uso del concepto de "optimistic update" para el update y delete de tareas (no se incluye en add, ya que se usa el id que genera Firebase para el documento). Se realiza dentro de las posibilidades que brinda la libreria utilizada de firebase sobre el tema.
- Si bien se usa por defecto el dark Mode, se persiste el ultimo modo elegido por el usuario.
- Se intento realizar la aplicacion de la manera mas accesible posible desde teclado y para screen readers.
- Se agregan test unitarios para algunos componentes funcionales usando la liberia `testing-library/react`. No estan todos los componentes cubiertos ni los servicios hacia firebase.
- Se utilizo Firebase por su simplicidad de uso, pero se habia desarrollado una app en node con una imagen de docker con mongo, pero vercel no permite deploy de imagenes de docker y el resto de servicios gratuitos, como Heroku, tienen una durabilidad de 15 minutos las instancias vivas, antes de desactivarlas por falta de trafico.
- Se usa context api para el manejo de estados globales, ya que por la simplicidad de la app no se vio necesario incluir una libreria externa para esto.
- Esta aplicación intenta estar enfocada en la performance y obtener una buenas métricas de web vital en su carga inicial.


## Metricas de la app en su version desktop.
<img width="564" alt="Screen Shot 2023-04-20 at 18 07 03" src="https://user-images.githubusercontent.com/55720334/233488024-db5e8ab5-7a6a-4ab5-acc1-7d316074da45.png">


## Metricas de la app en su mersion mobile.
<img width="564" alt="Screen Shot 2023-04-20 at 18 07 50" src="https://user-images.githubusercontent.com/55720334/233488055-9c240e13-b655-4338-92b7-e3d9ac98d1c4.png">

