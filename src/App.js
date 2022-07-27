import './App.css';
import Header from "./header";
import Footer from "./footer";
import React, { useEffect, useState } from 'react';


function App() {

  const [inputValue, setInputValue] = useState("");
  const [array, setArray] = useState([]);

  return (
    <div className="App">
      <section className="todoapp">
        <Header
          inputValue={inputValue}
          setInputValue={setInputValue}
          array={array}
          setArray={setArray}
        />

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">
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
            {
              array.map((element, index) => (
                <li key={index}>
                  <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>{element}</label>
                    <button className="destroy"></button>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
        <Footer />
      </section>


    </div>
  );
}

export default App;
