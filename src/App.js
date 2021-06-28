import React from "react";
import { Route , Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import ShopPage from "./pages/shoppage/shop.components";
import Header from "./components/header/header.component";
import SignInandSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      currrentUser:null
    }
  }

  unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currrentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
      return (
    <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/signin" component={SignInandSignUpPage} />
    </Switch>
      
    </div>
    );
  }
  
}

export default App;
