import React from "react";
import "./Home.css";
import Banniere from "../../components/Banniere/Banniere";
import banniereAccueil from "../../assets/images/pages/Home/Banniere.png";
import { NavLink } from "react-router-dom";
import Tuile from "../../components/Tuile/Tuile";
import ListeLogements from "../../assets/api/logements.json";

function Accueil() {
    return(
        <div className="Accueil">
            <Banniere image={banniereAccueil} texte="Chez vous, partout et ailleurs"/>
            <div className="liste-logements">
                {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/Hebergement/"+logement.id+"/#"}><Tuile key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
            </div>
        </div>
    );
}

export default Accueil;
