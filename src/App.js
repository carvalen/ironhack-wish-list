import React from "react";

import Form from './components/Form/Form';
 import List from './components/List/List';

 const wishes = [{ wish: "Travel" }];
function App() {

    const [wishesList, startwishList] = React.useState(wishes);


    return (
        <div className="container">
            <h1>App</h1>
            <div className="cards-container">
                
                    {/* <button className="button">remove</button>
                </div>
                <div className="card">
                    <button className="button">remove</button>
                </div> */}
                <List wishList={wishesList} startwishList={startwishList} />
                
            </div>

            <Form action="" className="form"/>
            
            
        
        </div>
    )
}

export default App