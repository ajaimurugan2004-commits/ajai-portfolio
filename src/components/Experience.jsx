const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden px-8 py-24 text-white md:px-16"
      experience-section
      style={{
        backgroundImage: "url('/images/kratos-eye.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* RIGHT SIDE CONTENT */}
      <div className="section-content relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-end">

        <div className="w-full max-w-2xl">

          {/* Heading */}
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            My journey
          </p>

          <h2 className="text-5xl font-bold uppercase md:text-7xl">
            Experience
          </h2>

          {/* Experience Timeline */}
          <div className="mt-16 border-l border-white/20 pl-8">

            <div className="relative">

              <div className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-white" />

              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Oct 2026 — Present
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Android & Generative AI Engineering Intern
              </h3>

              <p className="mt-1 text-gray-400">
                Mindmatrix · Bengaluru
              </p>

              <p className="mt-6 max-w-xl leading-7 text-gray-300">
                Building an Android application using Kotlin, Jetpack Compose,
                MVVM and Firebase, with Gemini-powered AI features for cultural
                storytelling and contextual recommendations.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Kotlin",
                  "Jetpack Compose",
                  "MVVM",
                  "Gemini AI",
                  "Firebase",
                  "Room",
                ].map((tech) => (
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

        </div>
      </div>
    </section>
  );
};

export default Experience;