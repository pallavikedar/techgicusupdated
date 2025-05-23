
"use client";

import type React from "react";
import emailjs from '@emailjs/browser';

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailParams = {
      to_name: "Techgicus Software Solutions",         // Your company name (matches `{{to_name}}`)
      to_email: "businessdeveloper@techgicus.com", // The recipient email address (matches `{{to_email}}`)
      from_name: formData.name,     // Sender's name (matches `{{from_name}}`)
      email: formData.email,        // Sender's email (matches `{{email}}` for the 'Reply To' field)
      subject: formData.subject,    // Subject (matches `{{subject}}`)
      message: formData.message,    // Message content (matches `{{message}}`)
    };
    

    emailjs
      .send(
        "service_8d7ppmp",    // Replace with your EmailJS Service ID
        "template_l3a6363",   // Replace with your EmailJS Template ID
        emailParams,
        "y2Pcyufew3f7q8600"   // Replace with your EmailJS Public Key/User id
      )
      .then(
        () => {
          alert("Thank you for your message. We'll get back to you soon!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-green-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services?
            Reach out to us and let's discuss how we can help your business
            grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-green-400/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-gray-400">
                    Plot No. 12, Mitra Vihar Nagar, New Sahakar Nagar, Kharbi,
                    Nagpur, Maharashtra - 440024.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-400/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className="text-gray-400">
                    <a href="tel:+91-9284614144">+91-9284614144</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-400/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className="text-gray-400">
                    <a href="mailto:businessdeveloper@techgicus.com">
                    businessdeveloper@techgicus.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h4 className="font-bold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>10:30 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:30 AM - 3:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;