import React from "react";
import { Route , Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import './App.css';

import Homepage from './pages/homepage/hompage.component';
import ShopPage from "./pages/shoppage/shop.components";
import SignInandSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";
import {auth ,createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";


class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
        setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          
        });
        //console.log(this.state);
      });
      
      }
      else{
        setCurrentUser(userAuth);
      }
      
    });
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
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route 
        exact 
        path="/signin" 
        render={()=> 
        this.props.currentUser ? (
        <Redirect to = '/' />
        ):(
        <SignInandSignUpPage/>
        )
}  
        />
    </Switch>
      
    </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
