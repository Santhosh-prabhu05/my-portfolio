import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="flex flex-col items-center gap-4">

        {/* GitHub */}
        <a
          href="https://github.com/Santhosh-prabhu05"
          target="_blank"
          rel="noreferrer"
          className="text-2xl hover:text-yellow-400 transition"
        >
          <FaGithub />
        </a>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Santhosh Prabhu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
