import React from "react";

import Form from './components/Form/Form';
 import List from './components/List/List';

 function App() {
    const [wishes, setWishes] = React.useState([]);
    const addWish = wish => setWishes([wish, ...wishes])
    const removeWish = wish => {
      const newState = wishes.filter(wishName => wishName !== wish)
      setWishes(newState)
    }
    return (
      <div className="App">
        {/* List recibe por props wishes y removeWish
        removeWish, es una funcion que recibe el nombre del wish y ejecuta un 
        setWishes removiendo el wish del array de wishes */}
        <List wishes={wishes} removeWish={removeWish} />
        <Form addWish={addWish} />
      </div>
    );
    }
    
  export default App;
  