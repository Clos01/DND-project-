import Navbar from './Navbar'; 
import disco from '../assets/disco-dice.png'; 

const Characters = () => {
    return (
        <div>
            <section className="section">
                <Navbar />
            </section>
            <section className="section">
                <div className="content mb-5">
                    <h2 id="heading-txt">Characters 
                        <span className="ml-6">
                            <button id="login-btn" className="button">New character</button>
                        </span>
                    </h2>
                </div>
            </section>
            <section className="section">
                <div className="columns">
                    <div className="column is-3">
                        <div id="char-box" className="box">
                            <div className="content">
                                <h3>Jane</h3>
                            </div>
                            <figure class="image is-128x128 mb-4">
                                <img src={disco} />
                            </figure>
                            <div className="field is-grouped">
                                <p className="control">
                                    <button className="button is-primary is-light is-outlined">View</button>
                                </p>
                                <p className="control">
                                    <button className="button is-danger is-light is-outlined">Delete</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        <div id="char-box" className="box">
                            <div className="content">
                                <h3>Jane</h3>
                            </div>
                            <figure class="image is-128x128 mb-4">
                                <img src={disco} />
                            </figure>
                            <div className="field is-grouped">
                                <p className="control">
                                    <button className="button is-primary is-light is-outlined">View</button>
                                </p>
                                <p className="control">
                                    <button className="button is-danger is-light is-outlined">Delete</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        <div id="char-box" className="box">
                            <div className="content">
                                <h3>Jane</h3>
                            </div>
                            <figure class="image is-128x128 mb-4">
                                <img src={disco} />
                            </figure>
                            <div className="field is-grouped">
                                <p className="control">
                                    <button className="button is-primary is-light is-outlined">View</button>
                                </p>
                                <p className="control">
                                    <button className="button is-danger is-light is-outlined">Delete</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        <div id="char-box" className="box">
                            <div className="content">
                                <h3>Jane</h3>
                            </div>
                            <figure class="image is-128x128 mb-4">
                                <img src={disco} />
                            </figure>
                            <div className="field is-grouped">
                                <p className="control">
                                    <button className="button is-primary is-light is-outlined">View</button>
                                </p>
                                <p className="control">
                                    <button className="button is-danger is-light is-outlined">Delete</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Characters; 