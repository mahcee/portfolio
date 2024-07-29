import React, { useState } from 'react';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormMessage(`Thank you, ${name}. Your message has been received.`);
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <section id="contact" className="py-20  h-[100vh]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#602EFE] text-center mb-8">Contact</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#deb887]-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#deb887]-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-gray-700 mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#deb887]-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-[#602EFE] text-white font-bold rounded-lg  transition duration-300">Submit</button>
        </form>
        <p className="mt-4 text-center text-[#602EFE]">{formMessage}</p>
      </div>
    </section>
  );
}
export default Contact;







