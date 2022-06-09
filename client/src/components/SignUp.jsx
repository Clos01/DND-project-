import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Title from './Title'; 
import disco from '../images/disco-dice.png'; 

const SignUp = () => {
  
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form (notice the async!)
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
    
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      username:'',
      email: '',
      password: '',
    });
  };

    return (
        <div>
            <section className="section">
                <Title />
            </section>
            <section className="section">
                <div className="columns is-centered">
                    <div className="column is-4">
                        <figure className="image is-1x1">
                            <img src={disco} alt="" />
                        </figure>
                    </div>
                    <div className="column is-4">
                        <form onSubmit={handleFormSubmit}>
                            <div className="field m-5">
                                <div className="control">
                                    <input 
                                    className="input" 
                                    type="username"
                                     name="username" 
                                     placeholder="Username" 
                                    value={formState.username}
                                    onChange={handleChange} />
                                </div>
                            </div>
                            <div className="field m-5">
                                <div className="control">
                                    <input
                                     className="input" 
                                     type="email"
                                     name='email' 
                                     placeholder="Email"
                                     value={formState.email}
                                      onChange={handleChange}
                                      />
                                </div>
                            </div>
                            <div className="field m-5">
                                <div className="control">
                                    <input
                                     className="input" 
                                     type="password" 
                                     name='password'
                                     placeholder="Password" 
                                     value={formState.password}
                                     onChange={handleChange}
                                     />
                                </div>
                            </div>
                            <div className="field m-5">
                                <div className="control">
                                    <button id="create-acct-btn" className="button">Create new account</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp; 