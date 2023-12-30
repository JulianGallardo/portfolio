import React from "react";
import "./works.css";
import SnakeIcon from "../../assets/snakeIcon.jpg";
import PVZIcon from "../../assets/pvzIcon.jpg";
import TwoThousandFortyEigthIcon from "../../assets/2048icon.png";
import BDDIcon from "../../assets/parquimetroIcon.png";
import TecladoIcon from "../../assets/mecanografiaIcon.png";
import ConsoleIcon from "../../assets/shellIcon.png";


const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">Mis Proyectos</h2>
            <span className="worksDescription">Esto son los proyectos que he realizado en los años de carrera y por aprendizaje personal.</span>
            <div className="worksList">
                <div className="work">
                    <img className="workImage" src={SnakeIcon} alt="Snake Game Icon"/>
                    <div className="workDescription">
                        <h3 className="workTitle">Clon Snake en Java</h3>
                        <span className="workText">Proyecto realizado en la materia Tecnología de Programacion en grupos de a 4.</span>
                        <a className="workLink" href="https://github.com/sgraziabile/tdp-proyecto-2">Repositorio</a>
                    </div>
                </div>
                <div className="work">
                    <img className="workImage" src={PVZIcon} alt="Plants vs Zombies Icon"/>
                    <div className="workDescription">
                        <h3 className="workTitle">Clon Plantas vs Zombies en Java</h3>
                        <span className="workText">Proyecto realizado en la materia Tecnología de Programacion en grupos de a 4, utilizando patrones de diseño.</span>
                        <a className="workLink" href="https://github.com/joaquinaravena/pvz">Repositorio</a>
                    </div>
                </div>
                <div className="work">
                    <img className="workImage" src={TwoThousandFortyEigthIcon} alt="2048 Game Icon"/>
                    <div className="workDescription">
                        <h3 className="workTitle">Clon 2048 en Navegador usando Prolog</h3>
                        <span className="workText">Proyecto realizado en la materia Logica para Ciencias de la Computación</span>
                        <a className="workLink" href="https://github.com/https://github.com/JulianGallardo/Proyecto1-Logica/pvz">Repositorio</a>
                    </div>
                </div>
                <div className="work">
                    <img className="workImage" src={BDDIcon} alt="Databases Icon"/>
                    <div className="workDescription">
                        <h3 className="workTitle">Simulador de Parquimetro con MySql</h3>
                        <span className="workText">Proyecto realizado en la materia Bases De Datos, donde se busca crear una base de datos con usuarios para simular un parquimetro.</span>
                        <a className="workLink" href="https://github.com/drg-dcic-uns/proyectobd2023-aguilar-gallardo">Repositorio</a>
                    </div>
                </div>
                <div className="work">
                    <img className="workImage" src={TecladoIcon} alt="Keyboard Icon"/>
                    <div className="workDescription">
                        <h3 className="workTitle">Página de Mecanografía</h3>
                        <span className="workText">Proyecto personal realizado con React en mi tiempo libre, buscando hacer una pagina para ver tu velocidad tipeando.</span>
                        <a className="workLink" href="https://github.com/JulianGallardo/Pagina_Mecanografia">Repositorio</a>
                    </div>
                </div>
                <div className="work">
                    <img className="workImage" src={ConsoleIcon} alt="Console Icon"/>
                    <div className="workDescription">
                        <h3 className="workTitle">Sincronizacion de Procesos e Hilos usando C</h3>
                        <span className="workText">Proyecto para la materia de Sistemas Operativos, donde entre otras cosas realizamos una minishell.</span>
                        <a className="workLink" href="https://github.com/JulianGallardo/Proyecto-SistemasOperativos">Repositorio</a>
                    </div>
                </div>

            </div>

        </section>
    );
}
export default Works;