import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
    
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
          console.log({...formState})
        const { data } = await login({
          variables: { ...formState }
        });
      
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };
    
    return (
        <div>
            <section className="section">
                <div className="columns is-centered">
                    <div className="column is-5">
                        <form className="box" onSubmit={handleFormSubmit}>
                            <div className="field">
                                <div className="control">
                                    <input 
                                    className="input is-medium" 
                                    name='email'
                                    type="email" 
                                    placeholder="Email" 
                                    value={formState.email}
                                    onChange={handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input 
                                    className="input is-medium"
                                    name='password'
                                    type="password" 
                                    placeholder="Password" 
                                    value={formState.password}
                                    onChange={handleChange}/>
                                </div>
                                <p className="help has-text-centered m-5">Forgot password?</p>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button id="login-btn" className="button is-medium is-fullwidth" type='submit'>Login</button>
                                </div>
                            </div>
                            
                        </form>
                        <div className="field">
                                <div className="control">
                                    <button id="create-acct-btn" className="button is-medium is-fullwidth">
                                        <Link className='has-text-white' to="/signup">
                                        Create new account
                                        </Link>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    ); 
}; 

export default Login; 