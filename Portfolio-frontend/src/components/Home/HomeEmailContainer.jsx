// src/components/HomeEmailContainer.jsx

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './HomeEmailContainer.scss';

const HomeEmailContainer = () => {
  const form = useRef();
  const messageRef = useRef(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false); //  state variable that indicates whether an email has been sent (true) or not (false).

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.style.height = 'auto';
      messageRef.current.style.height = `${messageRef.current.scrollHeight}px`;
    }
  }, [message]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9atn6to',
        'template_7cczwsr',
        form.current,
        'IdfaL7par9F3B65vL'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setFirstName('');
          setLastName('');
          setContact('');
          setEmail('');
          setMessage('');
          setIsEmailSent(true);
          setTimeout(() => {
            setIsEmailSent(false);
          }, 3000); // Sets the time to show the message (in milliseconds)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className='emailContainer' ref={form} onSubmit={sendEmail}>
      <div className='emailContact'>
        <input
          className='contactInformation'
          type='text'
          name='firstName'
          placeholder='First Name*'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onFocus={() => setFirstName('')}
          required
        />

        <input
          className='contactInformation'
          type='text'
          name='lastName'
          placeholder='Last name*'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onFocus={() => setLastName('')}
          required
        />

        <input
          className='contactInformation'
          type='text'
          name='contact'
          placeholder='Contact'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          onFocus={() => setContact('')}
        />

        <input
          className='contactInformation'
          type='email'
          name='email'
          placeholder='Email*'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmail('')}
          required
        />
      </div>

      <textarea
        className='your-message-here'
        name='message'
        placeholder='Your message here...*'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onFocus={() => setMessage('')}
        ref={messageRef}
        required
      />

      <input
        className={`button ${isEmailSent ? 'clicked' : ''}`}
        type='submit'
        value={isEmailSent ? 'Email Sent!' : "Let's get in touch"}
      />

      {isEmailSent && (
        <div className='popup'>
          <p>Email sent successfully!</p>
        </div>
      )}
    </form>
  );
};

export default HomeEmailContainer;
