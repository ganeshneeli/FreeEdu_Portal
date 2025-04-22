import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { Hero } from './components/home/hero';
import { CourseList } from './components/courses/course-list';
import { CourseCategories } from './components/courses/course-categories';
import { LiveMentoring } from './components/live-mentoring/live-mentoring';
import { Cart } from './components/cart/cart';
import { Login } from './components/auth/login';
import { Signup } from './components/auth/signup';
import { BecomeTutor } from './components/tutor/become-tutor';
import { About } from './components/about/about';
import { AIChatbot } from './components/chatbot/ai-chatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/courses" element={<CourseCategories />} />
          <Route path="/courses/:category" element={<CourseList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/live-mentoring" element={<LiveMentoring />} />
          <Route path="/become-tutor" element={<BecomeTutor />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <AIChatbot />
      </div>
    </Router>
  );
}

export default App;