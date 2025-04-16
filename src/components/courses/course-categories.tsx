import { motion } from 'framer-motion';
import { ThreeDBackground } from '../background/3d-background';
import { BookOpen, Languages, Music, Code, Briefcase, Palette, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 'academics',
    title: 'Academics',
    icon: BookOpen,
    description: 'Master core academic subjects with expert guidance',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: Languages,
    description: 'Learn new languages with native speakers',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'music',
    title: 'Music',
    icon: Music,
    description: 'Develop your musical talents with professional instructors',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: Code,
    description: 'Build your coding skills with hands-on projects',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'business',
    title: 'Business',
    icon: Briefcase,
    description: 'Grow your business knowledge and skills',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'design',
    title: 'Design',
    icon: Palette,
    description: 'Unleash your creativity with design courses',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    icon: Heart,
    description: 'Improve your health and wellbeing',
    color: 'from-teal-500 to-teal-600'
  }
];

export function CourseCategories() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="mt-16 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Explore Our Courses</h1>
            <p className="text-xl text-gray-300">Choose from a wide range of categories to start your learning journey</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 cursor-pointer hover:border-white/20 transition-all"
              onClick={() => navigate(`/courses/${category.id}`)}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
              <p className="text-gray-300">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 