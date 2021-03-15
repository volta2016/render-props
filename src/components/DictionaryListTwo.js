import React from "react";


//Usando render props podemos invertir la responsabilidad de render a nuestro componente App:

const List = ({ data, render }) => {
  return (
    <ul>
      {Object.entries(data).map(([key, description]) => (
        <li key={key}>
          {render({key, description})}
        </li>
      ))}
    </ul>
  );
};

export default List;