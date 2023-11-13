// QuestionDetails.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const QuestionDetails = () => {
  const { id } = useParams();
  const [questionDetails, setQuestionDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch question details using Axios
    axios
      .get(`https://hungry-boa-neckerchief.cyclic.app/api/info/${id}`)
      .then((response) => {
        setQuestionDetails(response.data.data); // Assuming the actual question details are returned by the API
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-500">
        {questionDetails.title}
      </h1>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div>
          <p className="text-gray-700 mb-4">{questionDetails.question}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src={questionDetails.image}
                alt="Question Image"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-2">
                Answer: {questionDetails.answer}
              </p>
              <p className="text-gray-700 mb-2">URL: {questionDetails.url}</p>
              <p className="text-gray-700 mb-2">
                Submit Time: {questionDetails.submitTime}
              </p>
              <p className="text-gray-700 mb-2">
                Subject: {questionDetails.subject}
              </p>
              <p className="text-gray-700 mb-2">
                Topic: {questionDetails.topic}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionDetails;
