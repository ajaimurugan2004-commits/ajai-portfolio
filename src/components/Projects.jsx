const Projects = () => {
  const projects = [
    {
      title: "PayFlow",
      subtitle: "Payment Processing & Settlement Platform",
      description:
        "Backend payment platform with authentication, transactions, refunds, settlements, webhooks and asynchronous processing.",
      tech: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Redis",
        "Kafka",
        "Docker",
      ],
    },
    {
      title: "SupportSense AI",
      subtitle: "AI-Powered Support Backend",
      description:
        "AI orchestration backend with provider-independent integrations, structured responses, PII redaction and resilient API processing.",
      tech: [
        "Java",
        "Spring Boot",
        "OpenAI",
        "Anthropic",
        "Redis",
        "Docker",
      ],
    },
    {
      title: "Biometric Payment System",
      subtitle: "Secure Merchant Payment System",
      description:
        "Biometric-enabled payment system using fingerprint verification, ESP32, secure communication and transaction management.",
      tech: [
        "ESP32",
        "C++",
        "R307",
        "SHA-256",
        "MySQL",
        "HTTPS",
      ],
    },
  ];

  return (
   <section
  id="projects"
  className="relative min-h-screen overflow-hidden px-8 py-24 text-white md:px-16"
  projects-section
  style={{
    backgroundImage: "url('/images/kratos-projects.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
    <div className="absolute inset-0 bg-black/70" />
   <div className="section-content relative z-10 mx-auto max-w-6xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
          Selected work
        </p>

        <h2 className="text-5xl font-bold uppercase md:text-7xl">
          Projects
        </h2>

        <div className="mt-16 space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.06]"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

                <div className="max-w-2xl">
                  <p className="mb-3 text-sm text-gray-500">
                    0{index + 1}
                  </p>

                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-6 leading-7 text-gray-300">
                    {project.description}
                  </p>
                </div>

                <div className="flex max-w-sm flex-wrap gap-3 md:justify-end">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;