import { ArrowRight, BookOpen, Languages, Music, Code, Video, Users, Clock, Star, Brain, Globe, GraduationCap } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Video className="h-6 w-6" />,
    title: "Live 1-on-1 Sessions",
    description: "Interactive video calls with expert tutors"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Group Learning",
    description: "Join study groups and learn together"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexible Scheduling",
    description: "Book sessions at your convenience"
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Expert Tutors",
    description: "Learn from industry professionals"
  }
];

const academicSubjects = [
  { icon: <Brain className="h-8 w-8" />, title: "Mathematics", description: "From basic arithmetic to advanced calculus" },
  { icon: <GraduationCap className="h-8 w-8" />, title: "Science", description: "Physics, Chemistry, and Biology" },
  { icon: <BookOpen className="h-8 w-8" />, title: "Literature", description: "Classic and modern literature studies" },
  { icon: <Code className="h-8 w-8" />, title: "Computer Science", description: "Programming and computer fundamentals" }
];

const languageCourses = [
  { icon: <Globe className="h-8 w-8" />, title: "Spanish", description: "Beginner to advanced levels" },
  { icon: <Globe className="h-8 w-8" />, title: "French", description: "Master the language of love" },
  { icon: <Globe className="h-8 w-8" />, title: "German", description: "Learn with native speakers" },
  { icon: <Globe className="h-8 w-8" />, title: "Japanese", description: "Explore Japanese culture" }
];

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl">
                <span className="block">Transform Your Learning</span>
                <span className="block text-blue-300">With Live Tutoring</span>
              </h1>
              <p className="mt-3 text-lg text-gray-100 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                Connect with expert tutors in academics, programming, languages, and music. 
                Get personalized learning paths powered by AI to achieve your goals faster.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white font-medium text-lg"
                  onClick={() => navigate('/courses/academics')}
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/20 font-medium text-lg"
                >
                  Become a Tutor
                </Button>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="Students learning together"
        />
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20"
            >
              <div className="text-blue-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-100 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Academic Subjects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white">Academic Excellence</h2>
          <p className="mt-4 text-lg text-gray-100">Master core subjects with expert guidance</p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {academicSubjects.map((subject, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20"
            >
              <div className="text-blue-300 mb-4">
                {subject.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{subject.title}</h3>
              <p className="mt-2 text-sm text-gray-100 text-center">{subject.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Language Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white">Language Learning</h2>
          <p className="mt-4 text-lg text-gray-100">Learn new languages with native speakers</p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {languageCourses.map((course, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20"
            >
              <div className="text-blue-300 mb-4">
                {course.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{course.title}</h3>
              <p className="mt-2 text-sm text-gray-100 text-center">{course.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Live Tutoring Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Live Tutoring Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Interactive Learning</h3>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Real-time video and audio communication
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Interactive whiteboard for visual learning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Screen sharing for code review and demonstrations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Instant feedback and Q&A sessions
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Personalized Support</h3>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Customized learning plans
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Progress tracking and analytics
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  Recorded sessions for review
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  24/7 support and resources
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}