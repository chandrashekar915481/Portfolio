import { RiReactjsLine } from "react-icons/ri";
import { FaChartLine, FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { MdEngineering } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const [hoveredIcon, setHoveredIcon] = useState("");

  const handleMouseEnter = (techName) => {
    setHoveredIcon(techName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
  };

  const icons = [
    {
      component: <RiReactjsLine className="text-7xl text-blue-400" />,
      name: "React.js",
    },
    { component: <FaAws className="text-7xl text-orange-500" />, name: "AWS" },
    {
      component: <FaChartLine className="text-7xl text-purple-400" />,
      name: "Analytics",
    },
    {
      component: <MdEngineering className="text-7xl text-red-500" />,
      name: "Engineering",
    },
    {
      component: <BiLogoPostgresql className="text-7xl text-sky-700" />,
      name: "PostgreSQL",
    },
  ];

  return (
    <div className="border-neutral-800 pb-24">
      <motion.h1
        id="skills"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => handleMouseEnter(icon.name)}
            onMouseLeave={handleMouseLeave}
            variants={iconVariants(2 + index * 0.5)}
            initial="initial"
            animate="animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4"
          >
            {icon.component}
            {hoveredIcon === icon.name && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-xs rounded px-2 py-1">
                {icon.name}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
