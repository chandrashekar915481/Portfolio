import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/cs.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-neutral-900 pb-4 lg:mb-40 mt-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-8 lg:px-28">
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-6 lg:mb-0">
          <motion.img
            variants={container(0)}
            initial="hidden"
            animate="visible"
            src={profilePic}
            alt="Chandrashakar Gudipally"
            className="rounded-2xl w-full sm:w-3/4 lg:w-full object-cover"
          />
        </div>

        <div className="w-full lg:w-2/3 lg:pl-16">
          <motion.h1
            variants={container(0)}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="text-4xl sm:text-3xl lg:text-5xl font-thin tracking-tight text-center lg:text-left mb-4"
          >
            Chandrashakar Gudipally
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="block text-2xl sm:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-center lg:text-left mb-4"
          >
            Full Stack Developer
          </motion.span>

          <motion.p
            variants={container(1)}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-gray-400 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed tracking-tight text-center lg:text-left"
          >
            I am Chandrashakar Gudipally, a data engineer with over a year of
            experience in designing and managing large-scale data
            infrastructures. Proficient in ETL/ELT processes, SQL, and AWS
            technologies like Redshift and EMR, I specialize in building
            scalable data solutions that enhance business analytics and
            decision-making. My background includes developing high-performance
            ETL pipelines with tools like Apache Airflow and Spark,
            synchronizing PostgreSQL and Redshift databases, and creating
            interactive dashboards in QuickSight and Tableau for actionable
            insights. Currently pursuing a Master’s in Computer Science at
            George Mason University, I am dedicated to leveraging data
            engineering skills to drive efficiency and innovation.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
