import "./styles.css";
import React, { Fragment, useState } from "react";
import List from "./components/DictionaryListTwo";
import Description from "./components/Description";

export default function App() {
  const [definitions] = useState({
    name: "Frank",
    "last-name": "Zappa"
  });


//render sería la segunda props como argumento
/*
En este caso le hemos pasado una función como prop render al 
componente List definiendo explícitamente qué es lo que vamos 
a renderear dentro de cada li
*/
  return (
    <div className="App">
      <Description />
      <List
        data={definitions}
        render={({ key, description }) => (
          <Fragment>
            {key}:<strong> {description}</strong>
          </Fragment>
        )}
      />
    </div>
  );
}
