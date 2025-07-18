import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0, opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

const Projects = () => (
  <div className="max-w-4xl mx-auto p-4">
    <h2 className="text-3xl font-bold text-blue-700 mb-6">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {[
        ["Portfolio Website", "React/Tailwind", "/"],
        ["Hackathon Organizer", "Managed team, backend/frontend", "/"]
      ].map(([title, desc], i) => (
        <motion.div
          key={i}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-600">{desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);
export default Projects;
