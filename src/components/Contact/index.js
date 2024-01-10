import React from 'react';
// import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  // const [errorMessage, setErrorMessage] = useState('');
  // const { name, email, message } = formState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     setFormState({ [e.target.name]: e.target.value });
  //     console.log('Form', formState);
  //   }
  // };

  // const handleChange = (e) => {
  //   if (e.target.name === 'email') {
  //     const isValid = validateEmail(e.target.value);
  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid.');
  //     } else {
  //       setErrorMessage('');
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage('');
  //     }
  //   }
  // };

  return (
    // <section className="resume-section" id="contact">
    //   <div className="contact-section-content">
    //     <h2 className="mb-5" data-testid='h2tag'>Contact Me</h2>
    //     <form id="contact-form" onSubmit={handleSubmit} method='post' action="mailto:kwax@kwacks.net" >
    //     <div>
    //       <label className='mb-0' htmlFor="name">Name:</label>
    //       <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
    //     </div>
    //     <div>
    //       <label className='mb-0' htmlFor="email">Email address:</label>
    //       <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
    //     </div>
    //     <div>
    //       {/* <label className='mb-0 message' htmlFor="message">Message:</label> */}
    //       <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
    //     </div>
    //     {errorMessage && (
    //       <div>
    //         <p className="error-text">{errorMessage}</p>
    //       </div>
    //     )}
    //     <button data-testid="button" type="submit" value="Send">Submit</button>
    //     <input type="hidden" name="recipient" value="kwax@kwacks.net" />
    //     <input type="hidden" name="subject" value="Subject" />
    //     {/* <input type="hidden" name="redirect"  value="https://www.example.com/thanks.html" /> */}
    //     {/* <input type="hidden" name="missing_fields_redirect"  value="https://www.example.com/error.html" /> */}
    //     <input type="hidden" name="required" value="name,email,message" />
    //   </form>
    //   </div>
    // </section>
    <section id="contact" class="contact resume-section">
      <div className="container" data-aos="fade-up">
        {/* section header */}
        <div className="section-header">
          <h2>Drop a Line</h2>
        </div>
        
        <div className="row gx-lg-0 gy-4">
          <div className="col-lg-8">
            <form action="https://formspree.io/f/mqkjbkkw" method="POST" className='justify-content-left'>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required></input>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required></input>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required></input>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="7" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
              </div>
              <div className="text-center"><button className='submitbtn' type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;
