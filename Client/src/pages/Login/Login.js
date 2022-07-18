import React from "react";
import "./Login.css";
import login from '../../img/login.PNG'
import signup from '../../img/signup.png'

export default function Login() {
   
      const signUpButton = () => {
        document.getElementById('container').classList.add('sign-up-mode');
        
        document.getElementById('signin').classList.add('signin-signup2');
        document.getElementById('signin').classList.remove('signin-signup');

        document.getElementById('panel').classList.remove('right-panel2');
        

      };

      const signInButton = () => {
        document.getElementById('container').classList.remove('sign-up-mode');
        
        document.getElementById('signin').classList.remove('signin-signup2');
        document.getElementById('signin').classList.add('signin-signup');

        document.getElementById('panel').classList.add('right-panel2');
        
        
      };

  return (
    <div className="container" id="container">
      <div className="forms-container"> 

        <div className="signin-signup" id="signin">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn solid">Login</button>
            <p className="social-text">Or Sign in with social Platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </form>
        </div>

        <div className="signup-signup" id="signup">
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn solid">Sign Up</button>
            <p className="social-text">Or Sign Up with social Platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </form>
        </div> 
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New Here?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. vero
              sit blanditiis? Maiores reiciendis, ea repudiandae delectus,
              dolorum qui aspernatur odit perferendis doloribus corporis
              laboriosam mollitia suscipit quia inventore quidem!
            </p>
            <button className="btn transparent" id="sign-up-button" onClick={signUpButton}>
              Sign Up
            </button>
          </div>
          <img src={login} className="image" />
        </div>

        <div className="panel right-panel" id="panel">
          <div className="content">
            <h3>One of Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. vero
              sit blanditiis? Maiores reiciendis, ea repudiandae delectus,
              dolorum qui aspernatur odit perferendis doloribus corporis
              laboriosam mollitia suscipit quia inventore quidem!
            </p>
            <button className="btn transparent" id="sign-in-button" onClick={signInButton}>
              Sign In
            </button>
          </div>
          <img src={signup} className="image" />
        </div>
      </div>
      
    </div>
  );
}
