/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import {Phone} from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- DATABASE LOGIC ---
    // Here you would send the data to your backend endpoint
    try {
      const response = await fetch("/api/contact", { // Example endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        setIsSubmitted(true);
        // Reset form fields immediately
        setFormData({ fullName: " ", email: " ", message: " " });
        // After 2 seconds, reset the button text from "Sent!" back to "Submit"
        setTimeout(() => {
          setIsSubmitted(false);
        }, 2000);
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-[#9E9E9E] flex items-center justify-center px-6 md:px-10 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[1.6fr_minmax(0,1fr)] gap-12"
      >
        {/* LEFT SECTION */}
        <motion.section
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between"
        >
          <div>
            {/* Heading */}
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[54px] md:text-[96px] leading-none font-semibold text-[#11160f] mb-12"
            >
              Contact
            </motion.h1>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="space-y-8 max-w-xl"
            >
              {/* Full Name */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="space-y-2"
              >
                <label className="text-sm tracking-wide uppercase text-[#11160f]/80">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#11160f] py-3 outline-none text-base"
                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="space-y-2"
              >
                <label className="text-sm tracking-wide uppercase text-[#11160f]/80">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#11160f] py-3 outline-none text-base"
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="space-y-2"
              >
                <label className="text-sm tracking-wide uppercase text-[#11160f]/80">
                  Message
                </label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#11160f] py-3 outline-none resize-none text-base"
                  required
                ></textarea>
              </motion.div>
            </motion.form>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            form="contact-form" // Links button to the form
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-10 inline-flex items-center justify-center px-10 py-3 rounded-full bg-[#11160f] text-sm font-medium tracking-wide text-orange-300 hover:scale-105 transition-transform w-max disabled:opacity-50 disabled:scale-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : isSubmitted ? "Sent!" : "Submit"}
          </motion.button>
        </motion.section>

        {/* RIGHT CONTACT CARD */}
        <motion.aside
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-sm bg-gray-300 rounded-4xl shadow-lg overflow-hidden"
          >
            {/* Top header */}
            <div className="relative bg-[#11160f] text-white px-8 py-7 rounded-t-4xl">
              <span className="absolute h-2 w-2 rounded-full bg-gray-500 top-4 left-6" />
              <span className="absolute h-2 w-2 rounded-full bg-gray-500 top-4 right-6" />
              <span className="absolute h-2 w-2 rounded-full bg-gray-500 bottom-4 left-6" />
              <span className="absolute h-2 w-2 rounded-full bg-gray-500 bottom-4 right-6" />

              <p className="text-sm uppercase tracking-[0.25em] text-orange-300">
                Contact
              </p>
              <h2 className="mt-3 text-lg font-semibold">
                Get in touch with us!
              </h2>
              <p className="text-sm text-gray-200 mt-1">Let's talk!</p>
            </div>

            {/* Contact info */}
            <div className="px-8 py-6 space-y-5 bg-gray-300">
              {/* Email */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-[#11160f] text-xl">
                  @
                </div>
                <div className="">
                  <p className="text-xs text-gray-500 uppercase">Email</p>
                  <p className="text-sm font-medium">
                    adarshnamdeo76@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.65 }}
                className="flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-[#11160f] text-lg">
                 <Phone />

                </div>
                <div className="">
                  <p className="text-xs text-gray-500 uppercase">Phone</p>
                  <p className="text-sm font-medium">+91 7974278003</p>
                </div>
              </motion.div>

              {/* Instagram */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-[#11160f] text-lg">
                  <i className="fi fi-brands-instagram"></i>
                </div>
                <div className="">
                  <p className="text-xs text-gray-500 uppercase">Instagram</p>
                  <p className="text-sm font-medium">@adarshnamdeo30</p>
                </div>
              </motion.div>

              {/* YouTube */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="flex items-center gap-4 "
              >
                <div className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center text-[#11160f] text-lg">
                  <i class="fi fi-brands-linkedin"></i>
                </div>
                <div className="">
                  <p className="text-xs text-gray-500 uppercase">LinkedIn</p>
                  <p className="text-sm font-medium">
                    <a href="https://www.linkedin.com/in/adarsh-namdeo-390700251/">
                      https://www.linkedin.com/in/adarsh-namdeo-390700251/
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.aside>
      </motion.div>
    </div>
  );
};

export default Contact;
