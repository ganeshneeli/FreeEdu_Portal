export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  students: number;
}

export const courses: Course[] = [
  // Programming & Development
  {
    id: 'prog1',
    title: 'Advanced JavaScript Mastery',
    description: 'Master modern JavaScript concepts and advanced patterns',
    price: 99.99,
    category: 'Programming',
    image: '/courses/js-advanced.jpg',
    duration: '8 weeks',
    level: 'Advanced',
    rating: 4.8,
    students: 1200
  },
  {
    id: 'prog2',
    title: 'Python for Data Science',
    description: 'Learn Python programming for data analysis and visualization',
    price: 89.99,
    category: 'Programming',
    image: '/courses/python-ds.jpg',
    duration: '6 weeks',
    level: 'Intermediate',
    rating: 4.7,
    students: 2500
  },
  {
    id: 'prog3',
    title: 'Full Stack Web Development',
    description: 'Build complete web applications from frontend to backend',
    price: 129.99,
    category: 'Programming',
    image: '/courses/fullstack.jpg',
    duration: '12 weeks',
    level: 'Intermediate',
    rating: 4.9,
    students: 1800
  },

  // Mathematics
  {
    id: 'math1',
    title: 'Advanced Calculus',
    description: 'Deep dive into calculus concepts and applications',
    price: 79.99,
    category: 'Mathematics',
    image: '/courses/calculus.jpg',
    duration: '10 weeks',
    level: 'Advanced',
    rating: 4.6,
    students: 900
  },
  {
    id: 'math2',
    title: 'Linear Algebra',
    description: 'Master linear algebra concepts and their applications',
    price: 69.99,
    category: 'Mathematics',
    image: '/courses/linear-algebra.jpg',
    duration: '8 weeks',
    level: 'Intermediate',
    rating: 4.5,
    students: 1100
  },
  {
    id: 'math3',
    title: 'Discrete Mathematics',
    description: 'Learn fundamental concepts of discrete mathematics',
    price: 59.99,
    category: 'Mathematics',
    image: '/courses/discrete-math.jpg',
    duration: '6 weeks',
    level: 'Intermediate',
    rating: 4.4,
    students: 800
  },

  // Science
  {
    id: 'sci1',
    title: 'Quantum Physics',
    description: 'Explore the fascinating world of quantum mechanics',
    price: 119.99,
    category: 'Science',
    image: '/courses/quantum.jpg',
    duration: '12 weeks',
    level: 'Advanced',
    rating: 4.8,
    students: 700
  },
  {
    id: 'sci2',
    title: 'Organic Chemistry',
    description: 'Comprehensive study of organic chemistry principles',
    price: 89.99,
    category: 'Science',
    image: '/courses/org-chem.jpg',
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.7,
    students: 1200
  },
  {
    id: 'sci3',
    title: 'Astrophysics',
    description: 'Study the physics of celestial objects and phenomena',
    price: 99.99,
    category: 'Science',
    image: '/courses/astrophysics.jpg',
    duration: '8 weeks',
    level: 'Advanced',
    rating: 4.9,
    students: 600
  },

  // Business
  {
    id: 'bus1',
    title: 'Digital Marketing Strategy',
    description: 'Master modern digital marketing techniques',
    price: 79.99,
    category: 'Business',
    image: '/courses/digital-marketing.jpg',
    duration: '6 weeks',
    level: 'Intermediate',
    rating: 4.6,
    students: 2000
  },
  {
    id: 'bus2',
    title: 'Financial Analysis',
    description: 'Learn advanced financial analysis techniques',
    price: 89.99,
    category: 'Business',
    image: '/courses/financial-analysis.jpg',
    duration: '8 weeks',
    level: 'Intermediate',
    rating: 4.7,
    students: 1500
  },
  {
    id: 'bus3',
    title: 'Business Analytics',
    description: 'Data-driven decision making for business',
    price: 99.99,
    category: 'Business',
    image: '/courses/business-analytics.jpg',
    duration: '10 weeks',
    level: 'Advanced',
    rating: 4.8,
    students: 1800
  },

  // Arts & Design
  {
    id: 'art1',
    title: 'Digital Illustration',
    description: 'Master digital art creation techniques',
    price: 69.99,
    category: 'Arts & Design',
    image: '/courses/digital-art.jpg',
    duration: '8 weeks',
    level: 'Intermediate',
    rating: 4.7,
    students: 1400
  },
  {
    id: 'art2',
    title: '3D Modeling',
    description: 'Create stunning 3D models and animations',
    price: 89.99,
    category: 'Arts & Design',
    image: '/courses/3d-modeling.jpg',
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.6,
    students: 900
  },
  {
    id: 'art3',
    title: 'UI/UX Design',
    description: 'Master user interface and experience design',
    price: 79.99,
    category: 'Arts & Design',
    image: '/courses/ui-ux.jpg',
    duration: '8 weeks',
    level: 'Intermediate',
    rating: 4.8,
    students: 2200
  }
];

export const categories = [
  'Programming',
  'Mathematics',
  'Science',
  'Business',
  'Arts & Design'
]; 