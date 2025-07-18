import { motion } from 'framer-motion';

const Home = () => (
  <motion.div
    className="flex flex-col items-center justify-center text-center py-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-5xl font-bold text-blue-800">Hi, I'm Aanya Agrawal</h1>
    <p className="mt-4 text-lg text-gray-700 max-w-xl">
      B.Tech Computer Science student passionate about web development and cloud computing.
      Technical Member at ACM and Codnex Club, with experience in hackathons and collaborative tech projects.
    </p>
  </motion.div>
);

export default Home;