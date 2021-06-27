import React from "react";
import { Route , Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import ShopPage from "./pages/shoppage/shop.components";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
      
    </div>

  );
}

export default App;
