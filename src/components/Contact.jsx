const Contact = () => {
  return (
   <section
  id="contact"
  className="relative min-h-screen overflow-hidden px-8 py-24 text-white md:px-16"
  contact-section 
  style={{
    backgroundImage: "url('/images/kratos-contact.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/45" />
   <div className="section-content relative z-10 mx-auto flex min-h-screen max-w-6xl items-center">

        <div className="w-full">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Let's connect
          </p>

          <h2 className="max-w-4xl text-5xl font-bold uppercase leading-[0.95] md:text-7xl lg:text-8xl">
            Let's build
            <br />
            something great.
          </h2>

          <p className="mt-8 max-w-xl text-lg text-gray-400">
            Open to entry-level Software Engineer and Java Developer
            opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ajaimurugan2004@gmail.com"
              className="rounded-full border border-white px-6 py-3 transition hover:bg-white hover:text-black"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/m-aj-ajai026/"
              className="rounded-full border border-white/20 px-6 py-3 text-gray-300 transition hover:border-white hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ajaimurugan2004-commits"
              className="rounded-full border border-white/20 px-6 py-3 text-gray-300 transition hover:border-white hover:text-white"
              
            >
              
              GitHub
            </a>

          </div>

          <div className="mt-20 border-t border-white/10 pt-6">
            <p className="text-sm text-gray-500">
              © 2026 Ajai Aarumugum M. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;