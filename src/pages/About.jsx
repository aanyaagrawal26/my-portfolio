const About = () => (
  <div className="max-w-3xl mx-auto p-4">
    <h2 className="text-3xl font-bold text-blue-700">About Me</h2>
    <p className="mt-4 text-gray-700">
      Motivated and detail-oriented student currently pursuing B.Tech in Computer Science at SRM University,
      specializing in Cloud Computing. I enjoy learning new technologies and applying them in real-world projects.
      My experience includes organizing and contributing to technical events through Codnex and ACM clubs.
    </p>
    <a
  href="/resume.pdf"
  download
  className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
>
  Download Resume
</a>
  </div>
);

export default About;