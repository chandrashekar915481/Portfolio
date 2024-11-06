import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate data engineer and full stack developer with a strong background in building scalable, efficient, and robust data pipelines, as well as interactive web applications. My expertise spans various technologies, including Python, Apache Spark, and cloud platforms like AWS and GCP, with a focus on delivering high-quality data solutions that empower data-driven decision-making and enhance business intelligence. In addition, I bring experience in front-end and back-end development, creating seamless and responsive user experiences that bridge functionality with modern design principles.`;

export const ABOUT_TEXT = `I am Chandrashakar Gudipally, a dedicated data engineer and full stack developer with a Master’s in Computer Science from George Mason University. My professional experience includes AI, database management, and advanced NLP, where I have developed and optimized solutions to enhance operational efficiency and customer satisfaction. My projects span from data processing and machine learning to comprehensive web applications, showcasing my skills in both backend logic and frontend user experiences. With a continuous learning mindset, I stay updated with the latest advancements in technology to tackle new challenges. Beyond coding, I enjoy contributing to open-source projects and exploring innovative tech developments.`;

export const EXPERIENCES = [
  {
    year: "Nov 2021 - Oct 2022",
    role: "Product Engineer",
    company: "Loyalty Juggernaut Inc",
    description: `Implemented and optimized ETL pipelines using Apache Airflow, AWS EMR, and DMS, reducing errors and inconsistencies in member data by 25%. Developed large-scale data structures in PostgreSQL and Redshift, supporting real-time data accessibility and reducing manual processing time by 30%. Worked on data integration for membership systems with clients such as HDFC, ICICI, FAH, and JUMEIRAH.`,
    technologies: ["Python", "AWS", "Airflow", "PostgreSQL", "Redshift", "Django"]
  },
  {
    role: "Python Developer Intern",
    company: "IIT Bombay",
    location: "Remote",
    year: "Jan 2021 - Jun 2021",
    description: [
      "Developed automation scripts in Python to generate HTML pages for a Flask-based website, leveraging dataset attributes to streamline page creation.",
      "Created data visualization dashboards using Pandas, NumPy, and Matplotlib, reducing manual data processing by 30%."
    ],
    technologies: ["Python", "Flask", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    role: "Python Developer Intern",
    company: "Chattel Technologies",
    location: "Remote",
    year: "Jun 2020 - Jul 2020",
    description: [
      "Led a team of three to develop a facial expression recognition model using the Cohn Kanade+ dataset.",
      "Built a CNN-based model in Python with TensorFlow, achieving classification of seven key human expressions (Happy, Sad, Contempt, Anger, Surprise, Disgust, Fear) and handling neutral expressions, enhancing model accuracy and robustness."
    ],
    technologies: ["Python", "TensorFlow", "CNN", "Cohn Kanade+ dataset"]
  },
  {
    role: "Python Developer Intern",
    company: "Conscript HR Advisors Pvt Ltd",
    location: "Remote",
    year: "Jun 2020 - Jul 2020",
    description: [
      "Designed and developed web pages for an email website, including login and signup functionality using Python, ensuring user authentication and secure access."
    ],
    technologies: ["Python", "Web Development"]
  },
  {
    role: "Web Development Intern",
    company: "Cantilever Labs",
    location: "Hyderabad, India",
    year: "Jul 2020 - Aug 2020",
    description: [
      "Analyzed technical requirements and developed an online testing engine to meet user needs.",
      "Created MySQL-backed web applications using JSP, JDBC, JavaScript, AJAX, HTML, and CSS, ensuring compatibility across browsers and devices through rigorous testing."
    ],
    technologies: ["MySQL", "JSP", "JDBC", "JavaScript", "AJAX", "HTML", "CSS"]
  }
];

export const PROJECTS = [
  {
    title: "Responsive React Portfolio Website",
    image: project5,
    description: `Built and deployed a responsive portfolio website to showcase projects, skills, and contact information. The website leverages modern design principles, with smooth animations and an intuitive layout using Framer Motion for animations and Tailwind CSS for styling. The project emphasizes responsiveness and user experience, providing a seamless way for visitors to view the portfolio across all devices.`,
    technologies: ["React", "Framer Motion", "Tailwind CSS"]
  },
  {
    title: "Restaurant Table Reservation and Food Ordering System",
    image: project1,
    description: `Developed a backend system using Django to manage reservations, menus, and profiles, reducing server response time by 40%. Integrated a voice assistant feature to increase user satisfaction by 25%.`,
    technologies: ["Python", "Django", "HTML", "CSS"]
  },
  {
    title: "Microservices-based Student Survey Application",
    image: project2,
    description: `Built a student survey application using microservices architecture. Utilized Docker, Kubernetes, Spring Boot, and Amazon RDS, achieving 99% uptime and reducing deployment time by 75% through a CI/CD pipeline with Jenkins.`,
    technologies: ["Kubernetes", "Spring Boot", "React", "Amazon RDS", "Jenkins"]
  },
  {
    title: "Stock Price Prediction Using Machine Learning",
    image: project3,
    description: `Developed a stock price prediction model with Ensemble Machine Learning Algorithms, achieving an accuracy of 85%. Automated data preprocessing, which reduced processing time by 80%, and visualized data for improved understanding among stakeholders.`,
    technologies: ["Python", "CNN", "SVM", "LSTM", "Data Visualization"]
  },
  {
    title: "Text-to-SQL Conversion using NLP",
    image: project4,
    description: `Led a project to enable non-technical users to query databases using natural language. Utilized transformer-based models like T5 and OpenAI with datasets like Spider and WikiSQL to convert natural language inputs into SQL queries. The system includes schema embedding, SQL generation, and query validation to ensure accuracy and usability. Deployed on cloud platforms like Google Cloud and AWS EC2, with testing focused on BLEU score evaluation and SQL execution accuracy.`,
    technologies: ["NLP", "Transformer Models", "T5", "OpenAI", "Google Cloud", "AWS EC2"]
  }
];

export const CONTACT = {
  address: "Fairfax, VA, USA",
  phoneNo: "+1 571-354-1998",
  email: "cgudipal@gmu.edu",
  linkedin: "https://www.linkedin.com/in/chandrashakar-gudipally-93a9b9161/",
  github: "https://github.com/chandrashekar915481"
};

export const EDUCATION = [
  {
    institution: "George Mason University",
    degree: "Master of Science in Computer Science",
    gpa: "GPA: 3.79"
  },
  {
    institution: "Sreenidhi Institute of Science and Technology",
    degree: "Bachelor of Technology in Computer Science",
    gpa: "GPA: 3.4"
  }
];

export const SKILLS = {
  languages: ["Python", "Java", "C"],
  frameworks: ["Django", "React", "Spring Boot", ".NET"],
  databases: ["MySQL", "PL/SQL", "MongoDB", "Postgres", "Redshift", "DynamoDB"],
  tools: ["Git", "Jira", "Confluence", "Docker", "AWS", "Azure", "Airflow", "DMS", "EMR"],
  webTechnologies: ["HTML", "CSS", "JavaScript", "React", "Django"]
};
