import Navbar from './Navbar'; 

const CreateChar = () => {
    return (
        <div>
            <section className="section">
                <Navbar />
            </section>
            <section className="section">
                <div className="content has-text-centered mb-5">
                    <h2 id="heading-txt">Choose Your Character Options</h2>
                </div>
                <div className="columns is-centered m-6">
                    <div className="column is-4">
                        <form>
                            <div className="field">
                                <div className="control">
                                    <div className="select is-danger">
                                        <select>
                                            <option>
                                                Gender
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <div className="select is-danger">
                                        <select>
                                            <option>
                                                Race
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <div className="select is-danger">
                                        <select>
                                            <option>
                                                Class
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <div className="select is-danger">
                                        <select>
                                            <option>
                                                Background
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button id="login-btn" className="button mt-6">Create character</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreateChar; 