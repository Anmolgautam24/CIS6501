import React, { useState } from 'react';
import Chatbot from '../components/Chatbot';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Projects',
    message: '',
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle reCAPTCHA callback
  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
    setError(''); // Clear any previous error
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if reCAPTCHA is completed
    if (!recaptchaToken) {
      setError('Please complete the reCAPTCHA to verify you are not a robot.');
      return;
    }

    // Proceed with form submission if reCAPTCHA is completed
    alert('Form is submitted. Our team will contact you shortly.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: 'Projects',
      message: '',
    });
    setRecaptchaToken(null); // Reset reCAPTCHA
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-12">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-8">

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-gray-800 bg-opacity-75 rounded-lg shadow-lg p-10">
          <h2 className="text-4xl font-extrabold text-center text-gray-100 mb-8">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full sm:w-1/2 px-4 py-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition duration-300 mb-4 sm:mb-0"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full sm:w-1/2 px-4 py-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition duration-300"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition duration-300"
            />

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition duration-300"
            >
              <option value="Projects">Projects</option>
              <option value="Support">Support</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition duration-300"
            ></textarea>

            {/* reCAPTCHA Placeholder */}
            <div className="flex justify-center my-4">
              <div
                className="g-recaptcha"
                data-sitekey="6Lew8HYqAAAAALAeZgyF3KwlJRo592bELEOP0UeO"
                data-callback={(token) => handleRecaptcha(token)}
              ></div>
            </div>

            {/* Error message for reCAPTCHA */}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-400 transition-transform transform hover:scale-105 duration-500"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Communication Section */}
        <div className="w-full lg:w-1/2 bg-gray-800 bg-opacity-75 rounded-lg shadow-lg p-10">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-100">Communication is Key</h3>
          <p className="text-lg text-center mb-6 text-gray-300">
            We strive to stay in communication with our clients. Have a question about our business or want to see if we match your needs? Send us a message or give us a call. We're always happy to meet new customers!
          </p>
          <div className="text-center space-y-2 text-gray-200">
            <p className="font-semibold text-lg">Phoenix Energy</p>
            <p>2/5 Mill Street, Goondiwindi, QLD 4390, Australia</p>
            <p>Email: <a href="mailto:admin@phoenixenergyqld.com.au" className="text-teal-400 hover:underline">admin@phoenixenergyqld.com.au</a></p>
            <p>P: (07) 4671 2720</p>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full mt-12   rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6723477041796!2d150.31590567432096!3d-28.5495665635747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ba31696de2e4acd%3A0xb71b8e0bd8a0ab8c!2s2%2F5%20Mill%20St%2C%20Goondiwindi%20QLD%204390%2C%20Australia!5e0!3m2!1sen!2sin!4v1730891913121!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Chatbot />
    </div>
  );
}

export default ContactUs;
