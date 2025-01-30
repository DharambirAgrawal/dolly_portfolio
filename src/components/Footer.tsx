import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Dolly Agarwal</h3>
            <p className="text-gray-400">Aspiring Accounting Professional</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400" />
            </a>
            <a
              href="#"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <Github className="w-6 h-6 text-gray-400 hover:text-gray-200" />
            </a>
            <a
              href="#"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Dolly Agarwal. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
