import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
const WorkExperience = () => {
  return (
    <div className="border-neutral-900 pb-4">
      <motion.h2
        id="experience"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="px-4 sm:px-8 lg:ml-12">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-10 flex flex-col lg:flex-row lg:justify-between lg:items-start p-4 rounded-lg"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="text-sm text-neutral-400 mb-2 lg:mb-0 lg:w-1/4"
            >
              {experience.year}
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="lg:w-3/4"
            >
              <h6 className="font-semibold text-lg mb-1">
                {experience.role} -{" "}
                <span className="text-purple-400">{experience.company}</span>
              </h6>
              <p className="text-neutral-400 mb-4">{experience.description}</p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-700 rounded-full text-purple-100 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
