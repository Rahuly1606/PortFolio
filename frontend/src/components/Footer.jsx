import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send(
      'service_v8efk9n',
      'template_sne0al6',
      {
        from_name: formData.name,   
        from_email: formData.email, 
      },
      'cdHqFpJdB298Af_V1'
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      alert('Failed to send message. Please try again later.');
    });
  };
  return (
    <footer id="footer" className="bg-gradient-to-r from-blue-50 to-white-100 py-16 shadow-lg rounded-t-3xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h2>
          <div className="flex justify-center lg:justify-start space-x-6 mb-6">
            {[
              { href: "https://github.com/your-github", src: "github.png", alt: "GitHub" },
              { href: "https://instagram.com/your-instagram", src: "icons/instagram.png", alt: "Instagram" },
              { href: "https://twitter.com/your-twitter", src: "icons/twitter.png", alt: "Twitter" },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="p-3 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-blue-500/50"
              >
                <img src={link.src} alt={link.alt} className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
          <div className="space-y-4">
            {[
              { icon: "icons/call.png", text: "+91 9508865788", href: "tel:+919508865788", color: "text-black-600" },
              { icon: "icons/gmail.png", text: "alexrahul9576@gmail.com", href: "mailto:alexrahul9576@gmail.com", color: "text-black-600" },
              { icon: "icons/location.png", text: "Bettiah, Bihar" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                <img src={item.icon} alt={item.text} className="h-6 w-6" />
                {item.href ? (
                  <a href={item.href} className={`text-lg font-medium ${item.color} hover:text-indigo-500`}>
                    {item.text}
                  </a>
                ) : (
                  <span className="text-lg text-gray-900">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 ml-40">Get in Touch</h2>
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              {[
                { type: "text", name: "name", placeholder: "Your Name" },
                { type: "email", name: "email", placeholder: "Your Email" },
              ].map((field, index) => (
                <motion.input
                  key={index}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 shadow-md focus:outline-none"
                  whileFocus={{ scale: 1.05 }}
                  required
                />
              ))}
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 shadow-md focus:outline-none"
                whileFocus={{ scale: 1.05 }}
                required
              ></motion.textarea>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
