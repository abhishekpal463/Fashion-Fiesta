import React from "react";
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import { Route , Switch} from 'react-router-dom';

const HatsPage = () =>(
  <div>
    <h1>Hat Page</h1>
  </div>
)

function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={HatsPage} />
    </Switch>
      
    </div>

  );
}

export default App;
