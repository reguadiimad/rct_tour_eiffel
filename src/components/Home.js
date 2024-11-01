// src/components/Home.js
import { motion } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
    >
      <motion.h1 variants={childVariants} className="text-4xl font-bold text-center mb-4">
        Welcome to the Eiffel Tower Tour Schools
      </motion.h1>
      <motion.p variants={childVariants} className="text-lg text-center mb-6">
        Experience the beauty and history of the Eiffel Towerj like never before.
      </motion.p>
      <motion.button
        variants={childVariants}
        whileHover={{ scale: 1.05 }}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
      >
        Start Tour
      </motion.button>
    </motion.div>
  );
};

export default Home;
