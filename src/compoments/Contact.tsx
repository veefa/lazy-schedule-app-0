import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-indigo-100 px-6 md:px-20 py-20">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 font-bold text-violet-900 text-3xl">Contact</h2>
        <p className="mb-10 text-violet-700">
          Have a question or just want to say hello? Drop us a message!
        </p>

        <form className="gap-6 grid grid-cols-1 md:grid-cols-2 text-left">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-violet-800 text-sm">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="px-4 py-2 border border-violet-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-violet-800 text-sm">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="px-4 py-2 border border-violet-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label htmlFor="message" className="mb-1 text-violet-800 text-sm">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Type your message..."
              className="px-4 py-2 border border-violet-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-violet-800 hover:bg-violet-600 mt-4 px-8 py-2 rounded-md font-medium text-indigo-100 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;