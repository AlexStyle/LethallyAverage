import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-la-gray bg-la-black py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-center">
        <p className="font-body text-sm text-la-muted italic max-w-md">
          "You don't need to be an expert to protect yourself online. You just need to start."
        </p>

        <div className="flex gap-6">
          <Link to="/" className="font-body text-xs text-la-muted hover:text-la-white transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-body text-xs text-la-muted hover:text-la-white transition-colors">
            About
          </Link>
          <Link to="/community" className="font-body text-xs text-la-muted hover:text-la-white transition-colors">
            Community
          </Link>
        </div>

        <p className="font-body text-xs text-la-muted">
          Built in the Bronx. Free forever.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
