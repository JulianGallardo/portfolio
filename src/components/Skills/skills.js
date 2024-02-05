import React from "react";
import "./skills.css";
import JavaAplications from "../../assets/codigo.png";
import DataBases from "../../assets/mysql.png";
import SoftwareRequirements from "../../assets/desarrollo-de-software.png";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">Un Poco Sobre Mi</span>
            <span className="skillDesc">Soy un estudiante en 4to año de Ingeniería de Sistemas de Información en la Universidad Nacional del Sur. Me apasiona la programación ,la organización y planificación de proyectos de sistemas. Mi portafolio es una muestra de mi trabajo y habilidades en el campo de la programación, incluye proyectos que he desarrollado en mi tiempo libre o realizados para materias en la universidad y habilidades que he adquirido a lo largo del desarrollo de ellos. Espero que disfrutes explorando mi portafolio y conozcas más sobre mí y mi trabajo.</span>
            <ul className="skillBars">
                <div className="skillBar">
                    <img className="skillBarImg" alt="UIDesign" src={JavaAplications}/>
                    <div className="skillBarText">
                        <h2>Desarrollo de aplicaciones en JAVA</h2>
                        <p>A lo largo de mis años en la universidad he desarrollado proyectos, principalmente utilizando java, como los que verá más abajo, utilizando patrones de diseño y planificando el desarrollo anteriormente con diagramas en conjunto con el resto de mis compañeros.</p>
                    </div>
                </div>
            </ul>
            <ul className="skillBars">
                <div className="skillBar">
                    <img className="skillBarImg" alt="WebDesign" src={DataBases}/>
                    <div className="skillBarText">
                        <h2>Desarrollo de Bases De Datos</h2>
                        <p>El cuatrimestre anterior desarrollamos una aplicación que simula un parquímetro, en donde se utiliza una base de datos diseñada por nosotros mismos para guardar, controlar y gestionar todas las acciones que tienen que realizar los distintos tipos de usuarios.</p>
                    </div>
                </div>
            </ul>
            <ul className="skillBars">
                <div className="skillBar">
                    <img className="skillBarImg" alt="AppDesign" src={SoftwareRequirements}/>
                    <div className="skillBarText">
                        <h2>Definir Requerimientos del Proyecto</h2>
                        <p>Me gusta organizar y gestionar proyectos, ya sea realizando las historias de usuarios con sus respectivos requerimientos, hasta charlar con el cliente para entender correctamente qué es lo que quiere y necesita.</p>
                    </div>
                </div>
            </ul>

        </section>
    );
};
export default Skills;