import React, { useState, useRef } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const formVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5 }
    },
  };

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setErrMsg("");
    setSuccessMsg("");

    if (!email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)) {
      setErrMsg("Provide a valid Email!");
      return;
    }

    // Check if required fields are empty
    if (!username || !phoneNumber || !email || !subject || !message) {
      setErrMsg("Please fill out all the fields.");
      return;
    }

    // if (!recaptchaRef.current.getValue()) {
    //   setErrMsg("Please complete the CAPTCHA.");
    //   return;
    // }

    emailjs.sendForm('service_8mgjsd8', 'template_pjffufb', form.current, 's7XZaMAAPA68swR3u')
      .then(() => {
          console.log('SUCCESS!');
          setSuccessMsg(`Thank you ${username}, your message has been sent successfully! I will get in contact with you soon!`);
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        }, (error) => {
          console.log('FAILED...', error.text);
          setErrMsg("Failed to send the message, please try again.");
        });
  };

  return (
  <motion.section
        id="contact"
        className="w-full py-10 lg:py-20 border-b-[1px] border-b-black"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={formVariants}
      >
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Get in Contact With Me!" />
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <ContactLeft />
            <motion.div
              className="flex-1 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-6 lg:p-8"
              initial="hidden"
              animate={controls}
              variants={formVariants}
            >
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              {errMsg && <div className="text-red-500 text-center mb-4">{errMsg}</div>}
              {successMsg && <div className="text-green-500 text-center mb-4">{successMsg}</div>}
              <input name="from_name" value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="w-full p-3 rounded" placeholder="Your Name" />
              <input name="phone_number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="w-full p-3 rounded" placeholder="Your Phone Number" />
              <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full p-3 rounded" placeholder="Your Email" />
              <input name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} type="text" className="w-full p-3 rounded" placeholder="Subject" />
              <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="10" className="w-full p-3 rounded" placeholder="Your Message"></textarea>
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LcA93gpAAAAAKu3PC1uizNpbRdV4LsIwX4nrfVN"
                  onChange={() => setErrMsg("")}
                  size="small" // Set compact size
                  data-theme ="dark light"
                />
              </div>
              <button type="submit" className="w-full h-12 bg-[#141518] rounded text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                Send Message
              </button>
              </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;


