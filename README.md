# reactlist
# Technical Proof React App (Typescript)

## Front-end

	Se requiere maquetar (html y estilos) y desarrollar (javascript) una
	aplicación para gestionar una lista de cadenas de texto.

	Puedes encontrar el diseño en el fichero:
 		list.jpg

### Especificación Funcional

	La aplicación debe tener una interfaz de usuario que cuente, al menos,
	con los siguientes elementos:
		● Un contenedor donde se irán añadiendo o borrando cadenas de
		texto.
		● Una caja de entrada de texto, donde el usuario pueda escribir los
		textos que desee añadir a la lista.
		● Un botón para agregar nuevas entradas.
		● Un botón para eliminar de la lista.

	La aplicación debe:
		● Añadir entradas de texto, permitir al usuario escribir y añadir la
		entrada de texto, a un listado. No se pueden añadir entradas
		vacías.
		● Eliminar un elemento de la lista (los ítems de la lista deben ser
		seleccionables por el usuario). No se pueden eliminar elementos
		de la lista sin haber seleccionado uno o varios de los elementos de
		la lista. No se requiere poder seleccionar múltiples items para
		poder borrarlos a la vez, pero se tendrá en cuenta. Es deseable,
		pero no requerido, que el usuario pueda eliminar elementos de la
		lista haciendo doble click sobre el ítem que se desea eliminar.
		● Es deseable, pero no requerido, permitir al usuario deshacer, como
		mínimo, el último cambio realizado. Para ello se deberá incluir un
		botón de deshacer.

### Especificación Técnica.

	Es deseable realizar una prueba en Vanilla JS y otra utilizando React. Si
	se encuentran dificultades para realizar el desarrollo en Vanilla JS, se
	puede entregar solo la prueba con React.


# Technical Proof React App (Typescript)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
