import { useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import ReCAPTCHA from "react-google-recaptcha";

import { IContactForm, sendContact } from '../../service/contactService';
import './styles.scss';

const ERROR_MESSAGES = {
  required: "El campo es requerido.",
  maxLength: "El nombre ingresado es muy largo.",
  pattern: "El valor ingresado no es un email valido."
};

const Contact = () => {
  const captchaRef = useRef<ReCAPTCHA>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [generalMessage, setGeneralMessage] = useState<{status: "success" | "error"; message: string} | null>();

  const { mutate } = useMutation((values: FieldValues) => sendContact(values))

  const onError = (error: any) => {
    if (error.response.status === 422) {
      setGeneralMessage( {
        status: "error",
        message: "El mensaje fue detectado como sospechoso y no se envio el contacto. Por favor enviar un email directamente a boulevardhuidobro@gmail.com"
      });
    } else {
      setGeneralMessage( {
        status: "error",
        message: "Error inesperado, por favor enviar un email directamente a boulevardhuidobro@gmail.com"
      });
    }
  }

  const onSuccess = () => {
    captchaRef!.current!.reset();
    reset();
    setGeneralMessage( {
      status: "success",
      message: "El mensaje fue enviado correctamente"
    });
  }

  const onSubmit = (data: FieldValues) => {
    const token = captchaRef!.current!.getValue();
    if (token) {
      const dataWithToken = {
        ...data,
        'g-recaptcha-response': token
      };
      mutate(dataWithToken, { onError, onSuccess });
    } else {
      setGeneralMessage( {
        status: "error",
        message: "Se debe completar el reCAPTCHA para avanzar"
      });
    }
};

  return (
    <article className="contact-content">
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="contact-form-label" htmlFor="name">Nombre:</label>
          <input className="contact-form-input" id="name" {...register('name', { required: true, maxLength: 60 })} />
          { errors.name?.type === 'required' && <p className="contact-error">El nombre es requerido.</p> }
          { errors.name?.type === 'maxLength' && <p className="contact-error">El nombre es muy largo.</p> }
        </div>
        <div className="form-group">
          <label className="contact-form-label" htmlFor="email">Email:</label>
          <input className="contact-form-input" id="email" {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} />
          { errors.email?.type === 'required' && <p className="contact-error">El email es requerido.</p> }
          { errors.email?.type === 'pattern' && <p className="contact-error">El formato de email es incorrecto.</p> }
        </div>
        <div className="form-group">
          <label className="contact-form-label" htmlFor="message">Mensaje:</label>
          <textarea className="contact-form-textarea" id="message" {...register('message', { required: true })} />
          { errors.message && <p className="contact-error">El mensaje es requerido.</p> }
        </div>
        <ReCAPTCHA
          className="form-group"
          sitekey={"6LfxivAhAAAAABnI380PCCLd1VcatvW4vXrE3Iop"}
          ref={captchaRef}
        />
        <div className="form-group">
          <button type="submit" className="contact-form-button">
            Enviar
          </button>
          <p className={`contact-general-message ${generalMessage?.status}`}>{generalMessage?.message}</p>
        </div>
      </form>
    </article>
  );
};

export default Contact;
