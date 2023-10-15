import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [errors, setErrors] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });

  
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    const { fullName, subject, email, body } = formData;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    let newErrors = {
      fullName: fullName.length >= 3 ? '' : 'Full name must be at least 3 characters.',
      subject: subject.length >= 3 ? '' : 'Subject must be at least 3 characters.',
      email: emailRegex.test(email) ? '' : 'Enter a valid email address.',
      body: body.length >= 3 ? '' : 'Body must be at least 3 characters.'
    };
    
    setIsFormValid(!Object.values(newErrors).some(error => error !== ''));
    setErrors(newErrors);

  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit called");

    setAttemptedSubmit(true);

    if (isFormValid) {
        console.log('Form is valid');
        console.log('Form data submitted:', formData);
    } else {
        console.log('Form is not valid');
    }
};

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-5xl font-bold mb-12">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-2">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
            minLength={3}
            className="w-full p-2 border rounded"
          />
          {attemptedSubmit && errors.fullName && <p className="text-red-500 mt-2">{errors.fullName}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="The subject of your message"
            value={formData.subject}
            onChange={handleChange}
            required
            minLength={3}
            className="w-full p-2 border rounded"
          />
          {attemptedSubmit && errors.subject && <p className="text-red-500 mt-2">{errors.subject}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@something.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          {attemptedSubmit && errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="body" className="block mb-2">Your message:</label>
          <textarea
            id="body"
            name="body"
            placeholder="Write you message here..."
            rows={5}
            value={formData.body}
            onChange={handleChange}
            required
            minLength={3}
            className="w-full p-2 border rounded"
          />
          {attemptedSubmit && errors.body && <p className="text-red-500 mt-2">{errors.body}</p>}
        </div>

        <button type="submit" className="bg-gray-900 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
          Submit
        </button>
      </form>
    </div>
);
};

export default ContactForm;
