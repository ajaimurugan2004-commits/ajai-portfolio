const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle University",
      date: "Oct 2025",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      date: "Oct 2025",
    },
    {
      title: "AI Skills Passport",
      issuer: "EY & Microsoft",
      date: "2025",
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "Forage · Commonwealth Bank",
      date: "Mar 2026",
    },
    {
      title: "Green Skills and Artificial Intelligence",
      issuer: "Edunet Foundation · AICTE & Shell India",
      date: "Sep — Nov 2025",
    },
    {
      title: "Claude Code 101",
      issuer: "Anthropic",
      date: "Apr 2026",
    },
    {
      title: "Introduction to Claude Cowork",
      issuer: "Anthropic",
      date: "Apr 2026",
    },
  ];

  return (
    <section
  id="certifications"
  className="relative min-h-screen overflow-hidden px-8 py-24 text-white md:px-16"
  certifications-section
  style={{
    backgroundImage: "url('/images/kratos-certifications.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/55" />
      <div className="section-content relative z-10 mx-auto max-w-6xl">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
          Credentials
        </p>

        <h2 className="text-5xl font-bold uppercase md:text-7xl">
          Certifications
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-2">

          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">

                <span className="text-sm text-gray-600">
                  0{index + 1}
                </span>

                <span className="text-xs uppercase tracking-widest text-gray-500">
                  {cert.date}
                </span>

              </div>

              <h3 className="mt-8 text-xl font-semibold leading-7">
                {cert.title}
              </h3>

              <p className="mt-4 text-sm uppercase tracking-wider text-gray-400">
                {cert.issuer}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;