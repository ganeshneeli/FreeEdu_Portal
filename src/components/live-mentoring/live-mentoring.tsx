import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { ThreeDBackground } from '../background/3d-background';
import { Calendar, Clock, Users, Video, BookOpen, Star } from 'lucide-react';

const UPCOMING_CLASSES = [
  {
    id: 'live1',
    title: 'Advanced Mathematics Workshop',
    mentor: 'Dr. Sarah Johnson',
    date: '2024-03-20',
    time: '14:00',
    duration: '2 hours',
    maxStudents: 20,
    enrolled: 15,
    price: 49.99,
    rating: 4.9,
    category: 'academics',
    description: 'Interactive session covering advanced calculus concepts with real-world applications.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'live2',
    title: 'Spanish Conversation Practice',
    mentor: 'Prof. Carlos Mendez',
    date: '2024-03-21',
    time: '16:00',
    duration: '1.5 hours',
    maxStudents: 15,
    enrolled: 10,
    price: 39.99,
    rating: 4.8,
    category: 'languages',
    description: 'Practice your Spanish speaking skills with native speakers in a group setting.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'live3',
    title: 'Web Development Q&A',
    mentor: 'Alex Chen',
    date: '2024-03-22',
    time: '18:00',
    duration: '2 hours',
    maxStudents: 25,
    enrolled: 18,
    price: 59.99,
    rating: 4.9,
    category: 'programming',
    description: 'Get your coding questions answered by an experienced web developer.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
];

export function LiveMentoring() {
  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Live Mentoring Sessions</h1>
          <p className="text-xl text-gray-300">Join interactive live sessions with expert mentors</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {UPCOMING_CLASSES.map((session) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={session.image}
                  alt={session.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Live Session
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{session.title}</h3>
                <p className="text-gray-300 mb-4">{session.description}</p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-yellow-300">
                    <Star className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium">{session.rating}</span>
                  </div>
                  <div className="flex items-center text-blue-300">
                    <Clock className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium">{session.duration}</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <Users className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium">{session.enrolled}/{session.maxStudents}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-white">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{new Date(session.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{session.time}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    ${session.price}
                  </span>
                  <Button 
                    size="sm" 
                    className="bg-red-500 hover:bg-red-600 text-white font-medium"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
