import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-6">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded p-2"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded p-2"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border rounded p-2"
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
