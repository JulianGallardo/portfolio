import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hola,</span>
                <span className="introText">Soy <span className="introName">Julian Gallardo</span> <br/> Estudiante de Ingenieria en Sistemas</span>
                <p className="introPara">Soy un estudiante avanzado de la carrera Ingenieria En Sistemas de Informacion en la Universidad Nacional Del Sur ubicada en Bahia Blanca,Buenos Aires, Argentina. </p>
                <Link><button className="btn"><img src={btnImg} alt="" className="btnImg"/> Contratame </button></Link>
            </div>
            <img src={bg} alt="profile" className="bg"/>
        </section>
    );
}
export default Intro;