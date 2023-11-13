// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthForm from "./Components/AuthComponents";
import Addquestion from "./pages/Addquestion";
import Dashboard from "./pages/Dashboard";
import QuestionDetails from "./pages/QuestionDetails.jsx"; // Add this import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Auth" element={<AuthForm />} />
        <Route path="/add-question" element={<Addquestion />} />
        <Route path="/question/:id" element={<QuestionDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
