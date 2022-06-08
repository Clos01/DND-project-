import Title from './Title'; 

const Login = () => {
    return (
        <div>
            <section className="section">
                <Title />
            </section>
            <section className="section">
                <div className="columns is-centered">
                    <div className="column is-5">
                        <form className="box">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-medium" type="text" placeholder="Email" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input is-medium" type="text" placeholder="Password" />
                                </div>
                                <p className="help has-text-centered m-5">Forgot password?</p>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button id="login-btn" className="button is-medium is-fullwidth">Login</button>
                                </div>
                            </div>
                            <hr />
                            <div className="field">
                                <div className="control">
                                    <button id="create-acct-btn" className="button is-medium is-fullwidth">Create new account</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    ); 
}; 

export default Login; 