import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section className="resume-section" id="contact">
      <div className="contact-section-content">
        <h2 className="mb-5" data-testid='h2tag'>Contact Me</h2>
        <form id="contact-form" onSubmit={handleSubmit} method='post' action="mailto:kwax@kwacks.net" >
        <div>
          <label className='mb-0' htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label className='mb-0' htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          {/* <label className='mb-0 message' htmlFor="message">Message:</label> */}
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" value="Send">Submit</button>
        <input type="hidden" name="recipient" value="kwax@kwacks.net" />
        <input type="hidden" name="subject" value="Subject" />
        {/* <input type="hidden" name="redirect"  value="https://www.example.com/thanks.html" /> */}
        {/* <input type="hidden" name="missing_fields_redirect"  value="https://www.example.com/error.html" /> */}
        <input type="hidden" name="required" value="name,email,message" />
      </form>
      </div>
    </section>
  );
}

export default ContactForm;
