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

## Puntos a mencionar sobre el challenge.
- No se realiza una persistencia en la DB del ordenamiento elegido, ya que se entendio que es un procesamiento muy pesado para que este en un frontend.
- Se hace uso del concepto de "optimistic update" para el update y delete de tareas. Se realiza dentro de las posibilidades que brinda la libreria utilizada de firebase sobre el tema.
- Si bien se usa por defecto el dark Mode, se persiste el ultimo modo elegido por el usuario.
- Se intento realizar la aplicacion de la manera mas accesible posible desde teclado y screen readers.
- Esta aplicación intenta estar enfocada en la performance y obtener una buenas métricas de web vital en su carga inicial.


## Metricas de la app en su version desktop.
<img width="626" alt="Screen Shot 2023-04-19 at 18 38 11" src="https://user-images.githubusercontent.com/55720334/233206291-3c3e20fd-f787-4b1a-b59e-686243963029.png">

## Metricas de la app en su mersion mobile.
<img width="626" alt="Screen Shot 2023-04-19 at 18 38 41" src="https://user-images.githubusercontent.com/55720334/233206350-04721c5c-ae13-42b0-95fc-5ec995dc70db.png">
