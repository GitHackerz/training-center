import React from "react";

export const Header = (props) => {
    return (
        <header id="header">
            <div className="intro">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 intro-text">
                                <div className="col-xs-12 col-md-6 ">
                                    <img src="/img/about.png" className="img-responsive" alt=""/>{" "}
                                </div>
                                <h1>
                                    <p>Centre National de Formation de Formateurs et d'Ingénierie de Formation</p>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
