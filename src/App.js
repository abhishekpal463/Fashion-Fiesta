import React from "react";
import { Route , Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import ShopPage from "./pages/shoppage/shop.components";
import Header from "./components/header/header.component";
import SignInandSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import {auth ,createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      currrentUser:null
    }
  }

  unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
        this.setState({
          currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }
        });
        //console.log(this.state);
      });
      
      }
      else{
        this.setState({currentUser:userAuth});
      }
      
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
      return (
    <div>
    <Header currentUser={this.state.currentUser}/>
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
