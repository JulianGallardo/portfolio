import React, { useRef } from "react";
import "./contact.css";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedInIcon from "../../assets/linkedInIcon.png";
import emailjs from '@emailjs/browser'
import { clear } from "@testing-library/user-event/dist/clear";
import toast from "react-hot-toast";


const Contact = () => {
    const form = useRef();

    const clearForm = () => {
        form.current.reset();
    }


    const sendEmail = (e) => {
        e.preventDefault();
        const inputs = form.current.querySelectorAll('input, textarea');
        const isFormFilled = Array.from(inputs).every(input => input.value.trim() !== '');

        if(!isFormFilled){
            toast.error("Por favor, rellena todos los campos");

        }
        else{
            
            emailjs.sendForm('service_dallrvn', 'template_gyfgemg', form.current, 'l_zI83MQnhwoRwusL')
          .then((result) => {
              toast.success("Mensaje enviado correctamente");
              console.log(result.text);
          }, (error) => {
              toast.error("Ha ocurrido un error al enviar el mensaje");  
              console.log(error.text);
          });
            clearForm();
         
        
        }
    };


    return (
        <section id="contactSection">
            <div id="contact">
                <h1 className="contactPageTitle">Contacto</h1>
                <span className="contactDescription">Si quieres contactarme para alguna oferta laboral o simplemente para saludar, puedes hacerlo por cualquiera de las siguientes vías:</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input className="name" type="text" placeholder="Nombre" name='from_name'/>
                    <input className="email" type="email" placeholder="Email" name='from_email'/>
                    <textarea className="msg" type="text" rows="5" placeholder="Mensaje" name='message'/>
                    <button className="contactBtn" type="submit" value="Send">Enviar</button>
                </form>
                <div className="contactList">
                    <a className="contactLink" href="https://twitter.com/JuliaanGallardo">
                        <img className="ContactImage" src={TwitterIcon} alt="Twitter Icon"/>
                    </a>
                    <a className="contactLink" href="http://www.instagram.com/juliangallardoo_">
                        <img className="ContactImage" src={InstagramIcon} alt="Instagram Icon"/>
                    </a>
                    <a className="contactLinkLinkedIn" href="">
                        <img className="ContactImageLinkedIn" src={LinkedInIcon} alt="Linked In Icon"/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;