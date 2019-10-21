import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import {BrowserRouter,Link,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
              <div className="App">
                     <Link to="/home"></Link>  
              </div>
              <div className="ml-3 mt-3">
                      <Route exact render={()=> <Home />} />
                      {/* <Route path="/player/:id" render={(props)=><div>Player name with id {props.match.params.id} to be diplayed</div>}/> */}
              </div>
    </BrowserRouter>
    
  );
}

export default App;
