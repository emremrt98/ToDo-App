import './App.css';
import Header from "./header";
import Footer from "./footer";
import React, {useState} from 'react';


function App() {
  
  const [inputValue, setInputValue] = useState(""); 
  const [entryValue, setEntryValue] = useState([]);
  

  return (
    <div className="App">
      <section className="todoapp">
      <Header inputValue = {inputValue} setInputValue = {setInputValue} />

        <section className="main">
        <input className="toggle-all" type="checkbox" />
          <label for="toggle-all">
            Mark all as complete
          </label>

          <ul className="todo-list">
            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn JavaScript</label>
                <button className="destroy"></button>
              </div>
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn React</label>
                <button className="destroy"></button>
              </div>
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Have a life!</label>
                <button className="destroy"></button>
              </div>
            </li>
          </ul>
        </section>
        <Footer />
      </section>


    </div>
  );
}

export default App;
