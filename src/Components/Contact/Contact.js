import React from 'react';
import Nav from '../Nav/Nav'
import './Contact.css'
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import validate from "./validate";
import useForm from "./useForm";
import { FaHome,FaMobileAlt,FaEnvelope,FaLinkedin,FaGithub,FaWhatsapp } from "react-icons/fa";

const LinkMail = 'mailto:inakiotegui1@gmail.com'
const LinkLinkedIn = 'https://www.linkedin.com/in/iñakiotegui/'
const LinkGithub = 'https://github.com/inakiotegui'
const LinkWsp = 'https://api.whatsapp.com/send?phone=542477469432'

const Toast = Swal.mixin({
    toast: true,
    position: "start-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

export const Contact = () => {
    const submit = () => {
        let templateParams = {
          from_name: values.email,
          to_name: "inakiotegui1@gmail.com",
          subject: values.name,
          message: values.msj,
        };
        emailjs
          .send(
            "service_6jr7dgg",
            "template_v924vqm",
            templateParams,
            "user_s4ksp8kthXIPpoKDWLJp9"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              Toast.fire({
                icon: "success",
                title: "Your message was sent, thank you!",
              });
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
        reset();
    };
    const { values, handleChange, handleSubmit, errors, reset } = useForm(
        submit,
        validate
    );
    let iconStyles1 = { color: "white", fontSize: "1.5rem"};
    let iconStyles2 = { color: "white", fontSize: "2.5rem" , marginRight: '1vw'};
	return (
        <div className='contact-div'>
            <div className='nav-div'>
                <Nav/>
            </div>
            <div className='aux-div-contact'>
                <div className='center-contact-div'>     
                <div className='contact-cont'>
                    <div class='cont-cont'>
                        <div class="cont-content">
                            <div class="cont-content__container">
                                <p class="cont-content__container__text">Contact me</p>
                            </div>
                        </div>
                    </div>
                    <form className='contact-form'>
                        <input className='contact-input' type="text" placeholder="Your name" name="name" value={values.name} onChange={(e) => handleChange(e)}/>
                        {errors.name && <p className='contact-error'>{errors.name}</p>}
                        <input className='contact-input' type="text" placeholder="Email" name="email" value={values.email} onChange={(e) => handleChange(e)}/>
                        {errors.email && <p className='contact-error'>{errors.email}</p>}
                        <textarea className='contact-text' placeholder="Leave me a message" name="msj" style={{width:'32vw'}} rows="4" value={values.msj} onChange={(e) => handleChange(e)}/>
                        {errors.msj && <p className='contact-error'>{errors.msj}</p>}
                        <button className='contact-button' type="submit" value="Send!" onClick={(e) => handleSubmit(e)}>Send!</button>
                    </form>
                </div>
                <div className='contactinfo-cont'>
                    <div class='cont-cont'>
                        <div class="continfo-content">
                            <div class="cont-content__container">
                                <p class="cont-content__container__text">Contact information</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact-info-div'>
                        <FaHome style={iconStyles1}/>
                        <span>LOCATION:</span>
                        <p>Pergamino, Buenos Aires, Argentina</p>
                    </div>
                    <div className='contact-info-div'>
                        <FaMobileAlt style={iconStyles1}/>
                        <span>PHONE:</span>
                        <p>+54 9 2477 46-9432</p>
                    </div>
                    <div className='contact-info-div'>
                        <FaEnvelope style={iconStyles1}/>
                        <span>EMAIL:</span>
                        <a href={LinkMail} target='blank' style={{textDecoration: 'none !important', color:'white'}}>
                            <p>inakiotegui1@gmail.com</p>
                        </a>
                    </div>
                    <div className='contact-info-icons'>
                        <a href={LinkLinkedIn} target='blank' style={{textDecoration: 'none !important', color:'white'}}>
                            <FaLinkedin style={iconStyles2}/>
                        </a>
                        <a href={LinkGithub} target='blank' style={{textDecoration: 'none !important', color:'white'}}>
                            <FaGithub style={iconStyles2}/>
                        </a>
                        <a href={LinkWsp} target='blank' style={{textDecoration: 'none !important', color:'white'}}>
                            <FaWhatsapp style={iconStyles2}/>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
	);
};

export default Contact;