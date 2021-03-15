import "./styles.css";
import React, {useState} from 'react';
import List from './components/DictionaryList'
import Description from './components/Description'

export default function App() {

  const [ definitions ] = useState({
      "name": "Frank",
      "last-name": "Zappa"
  })


  return (
    <div className="App">
      <Description />
      <List data={definitions}/>
      
    </div>
  );
}
