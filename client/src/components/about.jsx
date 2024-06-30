import React from "react";

export const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6 ">
                        {" "}
                        <img src="/img/about.png" className="img-responsive" alt=""/>{" "}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>a propos</h2>
                            <p>Le Centre National de Formation et de Perfectionnement des Formateurs et des Acteurs de
                                la Formation Professionnelle (CENAFFIF) est un organisme public créé en 1993 et relevant
                                du Ministère de la Formation Professionnelle et de l’Emploi. Sa mission principale est
                                de concevoir et de mettre en œuvre des programmes de formation, ainsi que de
                                perfectionner les formateurs et les acteurs de la formation.
                                Le CENAFFIF se distingue par son expertise dans l'approche par compétences, et il
                                propose ses services tant aux institutions publiques qu'aux entreprises privées, aussi
                                bien au niveau national qu'international. En résumé, il contribue au développement et à
                                l'amélioration des compétences professionnelles à travers la formation et le
                                perfectionnement des acteurs du secteur.</p>

                            <h3>Nos missions</h3>

                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>

                                        <li>Supprimer les méthodologies de l'ingénierie de la formation.</li>
                                        <li>Créer et mettre à jour les programmes de formation professionnelle, et
                                            soutenir leur implémentation dans les établissements de formation.
                                        </li>
                                        <li>Créer les outils pédagogiques pour appliquer les programmes de formation.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
