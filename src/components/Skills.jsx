import {
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaLinux,
  FaDatabase,
  FaAndroid,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "Java", icon: FaJava },
    { name: "Spring Boot", icon: FaDatabase },
    { name: "Android Development", icon: FaAndroid },
    { name: "SQL", icon: FaDatabase },
    { name: "MongoDB", icon: FaDatabase },
    { name: "REST APIs", icon: FaDatabase },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Docker", icon: FaDocker },
    { name: "AWS", icon: FaAws },
    { name: "Linux", icon: FaLinux },
    { name: "Postman", icon: FaDatabase },
  ];

  return (
    <section
      id="skills"
      className="skills-section relative min-h-screen overflow-hidden px-8 py-24 text-white md:px-16"
      style={{
        backgroundImage: "url('/images/dragon.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
          What I work with
        </p>

        <h2 className="text-5xl font-bold uppercase md:text-7xl">
          Skills
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-white/40 hover:bg-white/[0.08]"
              >
                <Icon className="text-6xl text-white transition-transform duration-500 group-hover:scale-110" />

                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-gray-400 group-hover:text-white">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;