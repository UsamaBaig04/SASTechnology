import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Contacts = () => {
     const [state, handleSubmit] = useForm("xyyroond"); // replace with your Formspree form ID
     if (state.succeeded) {
    return (
      <div className='text-center py-10'>
        <h2 className='text-green-600 text-2xl font-semibold'>Thank you!</h2>
        <p className='text-gray-700 mt-2'>Your message has been successfully sent. We will get back to you soon.</p>
      </div>
    // Alert.alert('Your message has been sent successfully')
    );
  }
  return (
    <div className='md:p-5 lg:p-5 px-3' id='contacts'>
      <h1 className='px-5 mb-3 raleway'>Contact Us</h1>
      <p className='px-5 text-base md:text-lg lg:text-xl font-semibold mb-4 text-gray-700 roboto'>
        Get in touch with us for tailored solutions to meet your business needs. Reach out through the form below, and we'll be happy to assist you.
      </p>

      <div className='2xl:flex lg:gap-8 md:px-5 lg:px-2 lg:ml-5 w-[100vw] pb-2'>
        {/* Contact Info + Map */}
        <div className='2xl:w-[45%] w-[90%] md:w-[95%] lg:w-[95%] p-5 md:shadow-lg lg:shadow-2xl md:border-2 border-2 shadow-md mt-4'>
          <div>
            <h4 className='raleway'>Address</h4>
            <p className='lg:text-xl md:text-lg  2xl:text-xl roboto'>
              Building No. 3808, 25 Street,
              Ath Thuqbah Dist 34625,
              AlKhobar, Saudi Arabia
            </p>
          </div>
          <div>
            <h4 className='raleway'>Call Us</h4>
            <p className='lg:text-xl md:text-lg 2xl:text-xl roboto'>
              +91-900-329-2301   +91-895-648-6237  +91-985-041-8036
            </p>
          </div>
          <div>
            <h4 className='raleway'>Email Us</h4>
            <p className='lg:text-xl md:text-lg 2xl:text-xl roboto'>marketing@sasnextgen.co.in</p>
          </div>
          <div className='lg:w-[100%] '>
            <iframe 
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.409331685175!2d73.79664727411765!3d18.645618882472363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b834df48985b%3A0x7a02a9e9af27c5af!2sSAS%20Automation%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1727170960378!5m2!1sen!2sin"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14308.321138967383!2d50.1985618502091!3d26.291497220411053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBuilding%20No.%203808%2C%2025%20Street%2C%20Ath%20Thuqbah%20Dist%2034625%2C%20AlKhobar%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1752233075230!5m2!1sen!2sin"
              style={{ border: 0, width: '100%', height: '270px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className='2xl:w-[50%] w-[90%] md:w-[95%] lg:w-[95%] md:shadow-lg lg:shadow-2xl p-5 lg:text-xl md:text-md md:border-2 border-2 shadow-md mt-4 lg:mt-0'>
          <form onSubmit={handleSubmit}>
            <div className='md:flex lg:flex w-[100%]'>
              <div className='md:w-1/2 lg:w-1/2 h-[12vh]'>
                <label className='mb-2 raleway'>Your Name</label><br />
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className='border-2 h-[50%] w-[100%] md:w-[95%] lg:w-[95%] roboto'
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div className='md:w-1/2 h-[12vh]'>
                <label className='mb-2 raleway'>Your Email</label><br />
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className='border-2 h-[50%] w-[100%] md:w-[95%] lg:w-[95%] md:ml-4 lg:ml-4 roboto'
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div className='w-full mt-2 h-[12vh]'>
              <label className='mb-2 raleway'>Subject</label><br />
              <input
                id="subject"
                type="text"
                name="subject"
                required
                className='border-2 w-[100%] h-[50%] roboto'
              />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} />
            </div>

            <div className='mt-2 h-[30vh]'>
              <label className='mb-2 raleway'>Message</label><br />
              <textarea
                id="message"
                name="message"
                required
                className='border-2 w-[100%] h-[90%] resize-none p-2 roboto'
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className='flex justify-center mt-4'>
              <button
                type="submit"
                disabled={state.submitting}
                className='bg-[#009970] rounded-2xl px-4 py-2 text-white raleway'
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
