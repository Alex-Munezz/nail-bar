import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Nail Bar. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://api.whatsapp.com/send?phone=254716554709&text=Hello%20Faith...." target="_blank" rel="noopener noreferrer" className="text-white">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
