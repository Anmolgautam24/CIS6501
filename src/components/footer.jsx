import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-secondary text-white py-8 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Phoenix Energy</h2>
          <p className="text-gray-300">
            Leading provider of sustainable energy solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-light hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="text-light hover:text-accent">About</Link></li>
            <li><Link to="/products" className="text-light hover:text-accent">Products</Link></li>
            <li><Link to="/projectsites" className="text-light hover:text-accent">Project Sites</Link></li>
            <li><Link to="/dashboard" className="text-light hover:text-accent">Dashboard</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us on</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-light hover:text-accent"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              className="text-light hover:text-accent"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-light hover:text-accent"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Phoenix Energy. All rights reserved.</p>
        <p>
          <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link> | 
          <Link to="/terms" className="hover:text-accent ml-2">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
