const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen overflow-hidden px-8 py-24 text-white md:px-16"
      education-section
      style={{
        backgroundImage: "url('/images/kratos-education.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Main Content */}
   <div className="section-content relative z-10 mx-auto flex min-h-screen max-w-5xl items-center justify-center -translate-x-56">

        <div className="w-full max-w-3xl">

          {/* Heading */}
          <div className="mb-14">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-300">
              Academic Background
            </p>

            <h2 className="text-5xl font-bold uppercase text-white md:text-7xl">
              Education
            </h2>
          </div>

          {/* Education Details */}
          <div className="border-l border-white/30 pl-8">

            <p className="text-sm uppercase tracking-[0.2em] text-gray-300">
              Dec 2022 — Sep 2026
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Bachelor of Engineering — Computer Science & Engineering
            </h3>

            <p className="mt-3 text-lg text-gray-300">
              ACS College of Engineering · Bengaluru
            </p>

            {/* CGPA */}
            <div className="mt-10">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-300">
                CGPA
              </p>

              <p className="mt-2 text-5xl font-bold text-white">
                8.5 / 10
              </p>
            </div>

            {/* Coursework */}
            <div className="mt-10">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-300">
                Relevant Coursework
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Data Structures & Algorithms",
                  "DBMS",
                  "Operating Systems",
                  "Computer Networks",
                  "Cloud Computing",
                  "Embedded Systems",
                  "OOP",
                ].map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm text-gray-200 backdrop-blur-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;