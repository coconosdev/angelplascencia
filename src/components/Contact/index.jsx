import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Heading from '../Heading';
import Button from '../Button';
import './styles.scss';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        toast.success('E-mail sent successfully!', {
          position: 'bottom-center',
        });
      },
      (error) => {
        toast.error(error.text);
      }
    );
  };

  return (
    <div>
      <Heading>Contact</Heading>
      <p>
        Or just download my{' '}
        <a href="/Resume Angel Plascencia.pdf" download>
          resume
        </a>
        .
      </p>
      <form ref={form} onSubmit={sendEmail} className="form-wrapper">
        <div className="divider-wrapper">
          <div>
            <input type="text" name="user_name" placeholder="Name" required />
          </div>
          <div>
            <input type="email" name="user_email" placeholder="Email" required />
          </div>
        </div>
        <input type="subject" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" required />
        <div className="button-wrapper">
          <Button type="submit">Send</Button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Contact;
