import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const AboutUs = () => {
   return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <h1 className="text-2xl font-bold">
            Za<span className="text-red-500">h</span>id
          </h1>

          {/* Menu Items */}
          <ul className="hidden md:flex gap-6 font-medium">
            <li className="cursor-pointer hover:text-red-500">Home</li>
            <li className="cursor-pointer hover:text-red-500">About</li>
            <li className="cursor-pointer hover:text-red-500">Skills</li>
            <li className="cursor-pointer hover:text-red-500">Projects</li>
            <li className="cursor-pointer hover:text-red-500">Contact</li>
          </ul>

          {/* Contact Button */}
          <button className="hidden md:block bg-white border border-gray-300 px-4 py-1 rounded-full hover:bg-gray-100">
            Contact ↗
          </button>
        </div>
      </nav>

      {/* Social Links - Fixed Right */}
      <div className="fixed top-1/2 right-0 -translate-y-1/2 flex flex-col items-center gap-4 bg-white/90 shadow-md rounded-l-xl px-3 py-4 z-40">
        <a
          href="#"
          className="text-gray-700 text-xl hover:text-red-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="text-gray-700 text-xl hover:text-red-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          className="text-gray-700 text-xl hover:text-red-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <div className="w-px h-12 bg-gray-300"></div>
        <span className="text-xs rotate-90 text-gray-500">Connect on</span>
      </div>

      {/* Banner Section */}
      <section className="pt-32 pb-20 text-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/120" // তোমার নিজের ছবি URL বসাও
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Text */}
        <h3 className="mt-4 text-gray-600">Hi! I’m Zahidul Islam</h3>
        <h1 className="mt-2 text-4xl md:text-5xl font-serif font-bold text-gray-900">
          Frontend web developer <br /> based in Dhaka.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          I’m a Frontend Web Developer based in Dhaka, passionate about creating
          stunning, responsive websites. Focusing on clean code and modern
          design, I turn digital ideas into seamless experiences.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800">
            Contact me →
          </button>
          <button className="bg-white border border-gray-300 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100">
            My Resume ⬇
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs
