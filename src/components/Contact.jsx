import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g3v5uac",
        "template_qet5b6u",
        form.current,
        "GERzShOX99QB4Q1Mo"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-6"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-400">
          Contact Me
        </h2>

        <p className="text-gray-400 mt-3">
          Let’s build something amazing together 🚀
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="space-y-6">

          <h3 className="text-2xl font-semibold">
            Get in Touch
          </h3>

          <p className="text-gray-400 leading-relaxed">
            I'm open to internships, freelance work, and AI/ML opportunities.
          </p>

          {/* Email */}
          <a
            href="mailto:mohammedsamsheer39@gmail.com"
            className="flex items-center gap-3 p-4 bg-slate-900 rounded-xl border border-white/10 hover:border-blue-500 hover:scale-105 transition"
          >
            <FaEnvelope className="text-blue-400 text-xl" />
            <span>mohammedsamsheer39@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919746758733"
            className="flex items-center gap-3 p-4 bg-slate-900 rounded-xl border border-white/10 hover:border-blue-500 hover:scale-105 transition"
          >
            <FaPhone className="text-blue-400 text-xl" />
            <span>+91 9746758733</span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-3 p-4 bg-slate-900 rounded-xl border border-white/10 hover:border-blue-500 hover:scale-105 transition">
            📍 Kerala, India
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl pt-4">

            <a
              href="https://github.com/mohammedsamsheer666"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-samsheer-40a6583aa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:mohammedsamsheer39@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-white/10 shadow-xl">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-slate-800 border border-white/10 focus:border-blue-500 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-slate-800 border border-white/10 focus:border-blue-500 focus:outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-slate-800 border border-white/10 focus:border-blue-500 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;