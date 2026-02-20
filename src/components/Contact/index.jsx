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
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => toast.success('Message sent successfully!', { position: 'bottom-center' }),
        (error) => toast.error(error.text)
      );
  };

  return (
    <div className="contact">
      <Heading>Contact</Heading>

      <p className="contact__intro">
        Have a role or project in mind? Send a message or{' '}
        <a href="/Resume Angel Plascencia.pdf" download>
          download my resume
        </a>
        .
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact__form" noValidate>
        <div className="contact__row">
          <div className="contact__field">
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder=" "
              required
              aria-label="Your name"
            />
            <label htmlFor="user_name">Name</label>
          </div>

          <div className="contact__field">
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder=" "
              required
              aria-label="Your email address"
            />
            <label htmlFor="user_email">Email</label>
          </div>
        </div>

        <div className="contact__field">
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder=" "
            required
            aria-label="Subject"
          />
          <label htmlFor="subject">Subject</label>
        </div>

        <div className="contact__field contact__field--textarea">
          <textarea
            name="message"
            id="message"
            placeholder=" "
            required
            aria-label="Your message"
          />
          <label htmlFor="message">Message</label>
        </div>

        <div className="contact__submit">
          <Button type="submit">Send Message</Button>
        </div>
      </form>

      <Toaster />
    </div>
  );
};

export default Contact;
