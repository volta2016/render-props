import React from "react";
//Para comprender cómo funcionan los render props, tenemos que
//entender que JSX no es más que azúcar sintáctica para React.createElement:


//React.createElement("tag", props, ...children)

export const Hello = ({ name = "World!" }) => <h3>Hello {name}</h3>;

export const Hello2 = ({ name = 'World Two' }) => {
  return React.createElement("h3", null, "Hello ", name);
}

/*Y como React.createElement no es más que una función común y silvestre, podemos 
tratarla como cualquier valor primitivo en JavaScript. Notemos que lo que 
retorna nuestro componente Hello es la evaluación de una función, es decir, 
una expresión. Podríamos wrappear la invocación de React.createElement en 
una IIFE (Immediately Invoked Function Expression) de la siguiente manera:*/

export const HelloThree = ({ name = 'World' }) => {
  return (
    (_name) => React.createElement("h3", null, "Hello 3", _name)
  )(name);
}

export const HelloFour = ({ name = 'World' }) => {
  return (
    function render(_name) {
      return React.createElement("h4", null, "Hello 4 ", _name);
    }
  )(name);
}

/*Y reemplazando la función anónima en el componente Hello por 
nuestra función render obtenemos:*/

export const HelloArrow = ({ name = 'World' }) => {
  return (render)(name);
}

/*Si convertimos nuestro ejemplo de vuelta a JSX terminamos con lo siguiente:*/

function render(name) {
  return <h1>Hello {name}</h1>;
};

export const HelloJsx = ({ name = 'World' }) => render(name);

/*Pues bien, es claro que nuestro componente Hello renderea un pedazo de JSX 
proveniente de una fuente externa, en este caso de la función 
render definida en el mismo scope. Podemos explotar este patrón y 
hacerlo reutilizable si en vez de acceder a la función render a través 
de un closure, lo hacemos directamente vía props:*/

/*const HelloRender = ({ name = 'World', render }) => render(name);

//Y luego ocupamos nuestro componente HelloRender de la siguiente forma:

const App = () => {
  return (
    <HelloRender 
      render={(name) => <h1>Hello {name}</h1>}
      name="Bob"
    />
  );
}; */




