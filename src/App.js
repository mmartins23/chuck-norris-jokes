import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [buttons, setButtons] = useState([]);
  const [joke, setJoke] = useState([]);

  const getJoke = async (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setJoke(json);
    } catch (error) {
        console.log("error", error);
    }
  }

  useEffect(() => {
    const url = 'https://api.chucknorris.io/jokes/categories';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setButtons(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Chuck Norris Jokes</p>
        <div className='btn-wrapper'>
        {buttons.map((category) =>{
          return (
            <button 
            key={category} className='btn'
            onClick={() => getJoke(category)}
            >{category}</button>
          )
        })}
        </div>
        <div className='joke-wrapper'>
          {joke.value}
        </div>
      </header>
    </div>
  );
}

export default App;