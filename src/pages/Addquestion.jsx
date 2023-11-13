import React, { useState } from "react";
import axios from "axios";

const AddQuestion = () => {
  const [formData, setFormData] = useState({
    title: "",
    question: "",
    answer: "",
    image: "",
    url: "",
    submitTime: "",
    subject: "",
    topic: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    // Handle image upload here
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://hungry-boa-neckerchief.cyclic.app/api/info",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Question</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Question Text:
          </label>
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          ></textarea>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Answer:
          </label>
          <textarea
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          ></textarea>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image:
          </label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            URL:
          </label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Submit Time:
          </label>
          <input
            type="text"
            name="submitTime"
            value={formData.submitTime}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Topic:
          </label>
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-6"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuestion;
