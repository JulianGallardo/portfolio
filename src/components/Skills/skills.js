import React from "react";
import "./skills.css";
import JavaAplications from "../../assets/codigo.png";
import DataBases from "../../assets/mysql.png";
import SoftwareRequirements from "../../assets/desarrollo-de-software.png";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">Un Poco Sobre Mi</span>
            <span className="skillDesc">Soy un estudiante avanzado de la carrera de Ingeniería de Sistemas de Información en la Universidad Nacional del Sur, Argentina. Me apasiona la producción sistemática del software y la Ingeniería del Software. Mi portafolio es una muestra de mi trabajo y habilidades en el campo de la programación. Incluye proyectos que he desarrollado, habilidades que he adquirido y mi experiencia laboral. Espero que disfrutes explorando mi portafolio y conozcas más sobre mí y mi trabajo</span>
            <ul className="skillBars">
                <div className="skillBar">
                    <img className="skillBarImg" alt="UIDesign" src={JavaAplications}/>
                    <div className="skillBarText">
                        <h2>Desarrollo de aplicaciones en JAVA</h2>
                        <p>Texto demo, no se que poner.</p>
                    </div>
                </div>
            </ul>
            <ul className="skillBars">
                <div className="skillBar">
                    <img className="skillBarImg" alt="WebDesign" src={DataBases}/>
                    <div className="skillBarText">
                        <h2>Desarrollo de Bases De Datos</h2>
                        <p>Texto demo, no se que poner.</p>
                    </div>
                </div>
            </ul>
            <ul className="skillBars">
                <div className="skillBar">
                    <img className="skillBarImg" alt="AppDesign" src={SoftwareRequirements}/>
                    <div className="skillBarText">
                        <h2>Definir Requerimientos del Proyecto</h2>
                        <p>Texto demo, no se que poner.</p>
                    </div>
                </div>
            </ul>

        </section>
    );
};
export default Skills;