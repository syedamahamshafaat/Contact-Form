import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  // Handle form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with submission
      alert("Form submitted successfully!");
      console.log("Form submitted:", formData);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } else {
      // Set errors to display
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-400 flex items-center justify-center p-4">
      {/* Contact Us form card */}

      <div className="bg-gray-800 text-white m-auto w-full max-w-2xl shadow-2xl p-8 rounded-lg ">
        {/* Contact Form */}
        <form
          className="space-y-6 placeholder:text-white"
          onSubmit={handleSubmit}
          
        >
          <h1 className="text-center text-lg p-3 rounded-lg bg-pink-600">
            Contact Us
          </h1>

          <label className="font-semibold">Full Name</label>
          <div className="relative mt-2">
            <img
              src="/fullname.png"
              alt="name icon"
              className=" w-5 h-5 absolute left-2 top-4 "
            />
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full pl-10 pr-2 py-3 focus:outline-none focus:border-transparent border border-gray-500 rounded focus:ring-1"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <label className="font-semibold">E-mail</label>
          <div className="relative mt-2">
            <img
              src="/email.png"
              alt="email icon"
              className=" w-5 h-5 absolute left-2 top-4 "
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-9 pr-2 py-3 focus:outline-none focus:border-transparent border border-gray-500 rounded focus:ring-1"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <label className="font-semibold">Subject</label>
          <div className="relative mt-2">
            <img
              src="/subject.png"
              alt="subject icon"
              className="w-5 h-5 absolute left-2 top-4 "
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full pl-9 pr-2 py-3 focus:outline-none focus:border-transparent border border-gray-500 rounded focus:ring-1"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <label className="font-semibold">Message</label>
          <div className="relative mt-2">
            <img
              src="/message.png"
              alt="message icon"
              className=" w-5 h-5 absolute left-2 top-4 "
            />
            <textarea
              type="text"
              name="message"
              placeholder="Your message...."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-9 pr-2 py-3 focus:outline-none focus:border-transparent border border-gray-500 rounded focus:ring-1"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-pink-600 text-white py-2 text-lg font-semibold rounded hover:bg-pink-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
