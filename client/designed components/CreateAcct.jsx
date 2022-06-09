import Title from './Title'; 
import disco from '../assets/disco-dice.png'; 

const CreateAcct = () => {
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
                        <form>
                            <div className="field m-5">
                                <div className="control">
                                    <input className="input" type="text" placeholder="Username" />
                                </div>
                            </div>
                            <div className="field m-5">
                                <div className="control">
                                    <input className="input" type="text" placeholder="Email" />
                                </div>
                            </div>
                            <div className="field m-5">
                                <div className="control">
                                    <input className="input" type="text" placeholder="Password" />
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

export default CreateAcct; 