import React from "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth,SignInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:"",password:""});
        }
        catch(error){
            console.log(error);
        }
        
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                        required />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        label="password"
                        required />
                    
                    <div className="buttons">
                        <CustomButton  type="submit">Sign In</CustomButton>
                        <CustomButton  onClick={SignInWithGoogle} isGoogleSignIn >
                        Sign In With google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
} 

export default SignIn;