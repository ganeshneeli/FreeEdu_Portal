import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useCartStore } from '@/store/cart';
import { motion } from 'framer-motion';
import { ThreeDBackground } from '../background/3d-background';
import { Star, Clock, Users, Video } from 'lucide-react';

const COURSES = {
  academics: [
    { 
      id: 'ac1', 
      title: 'Advanced Mathematics', 
      price: 99.99, 
      category: 'academics', 
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '12 weeks',
      students: 1200,
      liveSessions: true
    },
    { 
      id: 'ac2', 
      title: 'Physics Fundamentals', 
      price: 97.60, 
      category: 'academics', 
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      duration: '10 weeks',
      students: 950,
      liveSessions: true
    },
    { 
      id: 'ac3', 
      title: 'Chemistry Basics', 
      price: 79.99, 
      category: 'academics', 
      image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      duration: '8 weeks',
      students: 800,
      liveSessions: true
    },
    { 
      id: 'ac4', 
      title: 'Biology Essentials', 
      price: 89.99, 
      category: 'academics', 
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      duration: '10 weeks',
      students: 1100,
      liveSessions: true
    },
    { 
      id: 'ac5', 
      title: 'History of Science', 
      price: 69.99, 
      category: 'academics', 
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      duration: '8 weeks',
      students: 750,
      liveSessions: true
    }
  ],
  languages: [
    { 
      id: 'lang1', 
      title: 'Spanish for Beginners', 
      price: 69.99, 
      category: 'languages', 
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      duration: '16 weeks',
      students: 1500,
      liveSessions: true
    },
    { 
      id: 'lang2', 
      title: 'French Intermediate', 
      price: 79.99, 
      category: 'languages', 
      image: 'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '12 weeks',
      students: 1100,
      liveSessions: true
    },
    { 
      id: 'lang3', 
      title: 'German Advanced', 
      price: 89.99, 
      category: 'languages', 
      image: 'https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      duration: '14 weeks',
      students: 900,
      liveSessions: true
    },
    { 
      id: 'lang4', 
      title: 'Japanese for Beginners', 
      price: 99.99, 
      category: 'languages', 
      image: 'https://images.unsplash.com/photo-1525006117752-57a3d2cbf8e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '20 weeks',
      students: 1300,
      liveSessions: true
    },
    { 
      id: 'lang5', 
      title: 'Mandarin Chinese', 
      price: 89.99, 
      category: 'languages', 
      image: 'https://images.unsplash.com/photo-1544465544-1b69a9a5a5b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      duration: '18 weeks',
      students: 1000,
      liveSessions: true
    }
  ],
  music: [
    { 
      id: 'mus1', 
      title: 'Piano Basics', 
      price: 59.99, 
      category: 'music', 
      image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      duration: '8 weeks',
      students: 1300,
      liveSessions: true
    },
    { 
      id: 'mus2', 
      title: 'Guitar Masterclass', 
      price: 69.99, 
      category: 'music', 
      image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '10 weeks',
      students: 1000,
      liveSessions: true
    },
    { 
      id: 'mus3', 
      title: 'Vocal Training', 
      price: 79.99, 
      category: 'music', 
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      duration: '12 weeks',
      students: 1200,
      liveSessions: true
    },
    { 
      id: 'mus4', 
      title: 'Music Theory', 
      price: 49.99, 
      category: 'music', 
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      duration: '6 weeks',
      students: 800,
      liveSessions: true
    },
    { 
      id: 'mus5', 
      title: 'Electronic Music Production', 
      price: 89.99, 
      category: 'music', 
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '14 weeks',
      students: 900,
      liveSessions: true
    }
  ],
  programming: [
    { 
      id: 'prog1', 
      title: 'Web Development Bootcamp', 
      price: 129.99, 
      category: 'programming', 
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      duration: '16 weeks',
      students: 2000,
      liveSessions: true
    },
    { 
      id: 'prog2', 
      title: 'Python for Data Science', 
      price: 99.99, 
      category: 'programming', 
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '12 weeks',
      students: 1500,
      liveSessions: true
    },
    { 
      id: 'prog3', 
      title: 'Mobile App Development', 
      price: 119.99, 
      category: 'programming', 
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      duration: '14 weeks',
      students: 1300,
      liveSessions: true
    },
    { 
      id: 'prog4', 
      title: 'Machine Learning Fundamentals', 
      price: 149.99, 
      category: 'programming', 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      duration: '18 weeks',
      students: 1800,
      liveSessions: true
    },
    { 
      id: 'prog5', 
      title: 'Blockchain Development', 
      price: 139.99, 
      category: 'programming', 
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '16 weeks',
      students: 1600,
      liveSessions: true
    }
  ],
  business: [
    { 
      id: 'bus1', 
      title: 'Business Management', 
      price: 119.99, 
      category: 'business', 
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '12 weeks',
      students: 1800,
      liveSessions: true
    },
    { 
      id: 'bus2', 
      title: 'Digital Marketing', 
      price: 89.99, 
      category: 'business', 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      duration: '10 weeks',
      students: 1400,
      liveSessions: true
    },
    { 
      id: 'bus3', 
      title: 'Entrepreneurship', 
      price: 99.99, 
      category: 'business', 
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '14 weeks',
      students: 1600,
      liveSessions: true
    },
    { 
      id: 'bus4', 
      title: 'Financial Analysis', 
      price: 109.99, 
      category: 'business', 
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      duration: '12 weeks',
      students: 1200,
      liveSessions: true
    },
    { 
      id: 'bus5', 
      title: 'Project Management', 
      price: 89.99, 
      category: 'business', 
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      duration: '10 weeks',
      students: 1000,
      liveSessions: true
    }
  ],
  design: [
    { 
      id: 'des1', 
      title: 'Graphic Design Fundamentals', 
      price: 79.99, 
      category: 'design', 
      image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      duration: '8 weeks',
      students: 1600,
      liveSessions: true
    },
    { 
      id: 'des2', 
      title: 'UI/UX Design', 
      price: 99.99, 
      category: 'design', 
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '10 weeks',
      students: 1200,
      liveSessions: true
    },
    { 
      id: 'des3', 
      title: '3D Modeling', 
      price: 119.99, 
      category: 'design', 
      image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      duration: '12 weeks',
      students: 900,
      liveSessions: true
    },
    { 
      id: 'des4', 
      title: 'Motion Graphics', 
      price: 89.99, 
      category: 'design', 
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '10 weeks',
      students: 1100,
      liveSessions: true
    },
    { 
      id: 'des5', 
      title: 'Digital Illustration', 
      price: 79.99, 
      category: 'design', 
      image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      duration: '8 weeks',
      students: 800,
      liveSessions: true
    }
  ],
  health: [
    { 
      id: 'hlth1', 
      title: 'Yoga & Meditation', 
      price: 49.99, 
      category: 'health', 
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      duration: '6 weeks',
      students: 2000,
      liveSessions: true
    },
    { 
      id: 'hlth2', 
      title: 'Nutrition & Wellness', 
      price: 59.99, 
      category: 'health', 
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      duration: '8 weeks',
      students: 1500,
      liveSessions: true
    },
    { 
      id: 'hlth3', 
      title: 'Personal Training', 
      price: 69.99, 
      category: 'health', 
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '10 weeks',
      students: 1800,
      liveSessions: true
    },
    { 
      id: 'hlth4', 
      title: 'Mental Health & Wellbeing', 
      price: 59.99, 
      category: 'health', 
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      duration: '8 weeks',
      students: 1400,
      liveSessions: true
    },
    { 
      id: 'hlth5', 
      title: 'Holistic Health', 
      price: 79.99, 
      category: 'health', 
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '12 weeks',
      students: 1600,
      liveSessions: true
    }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function CourseList() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  
  const courses = category ? COURSES[category as keyof typeof COURSES] || [] : [];

  if (!category || !courses.length) {
    return (
      <div className="relative min-h-screen">
        <ThreeDBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">No Courses Found</h1>
            <p className="text-xl text-gray-300 mb-8">Please select a valid category from the navigation menu.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button 
                variant="outline" 
                className="w-full bg-transparent border-white/30 text-white hover:bg-white/20"
                onClick={() => navigate('/courses')}
              >
                Back to Categories
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="mt-16 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center"
          >
            <h1 className="text-4xl font-bold text-white capitalize">{category} Courses</h1>
            <Button 
              variant="outline" 
              className="bg-transparent border-white/30 text-white hover:bg-white/20"
              onClick={() => navigate('/courses')}
            >
              Back to Categories
            </Button>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
        {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/20"
            >
              <div className="relative h-48 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {course.liveSessions && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    Live Sessions
                  </div>
                )}
              </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                {course.title}
              </h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-yellow-300">
                    <Star className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center text-blue-300">
                    <Clock className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <Users className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium">{course.students}+ students</span>
                  </div>
                </div>
              <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                  ${course.price}
                </span>
                <Button 
                    onClick={() => addItem({
                      ...course,
                      description: `${course.title} - ${course.duration} course with live sessions`
                    })}
                  size="sm"
                    className="bg-blue-500 hover:bg-blue-400 text-white font-medium"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
            </motion.div>
        ))}
        </motion.div>
      </div>
    </div>
  );
}