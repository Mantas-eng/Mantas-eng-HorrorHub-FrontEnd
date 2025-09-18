import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

const DownloadSection: React.FC = () => {
  return (
    <section className="bg-zinc-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl mb-6">
          Stay connected and join our vibrant community.
          <br className="hidden sm:inline" />
          For any inquiries or assistance, feel free to reach out to us.
        </p>
        
        <div className="flex justify-center items-center gap-6 mt-6 mb-8">
          <SocialIcon icon={faFacebook} />
          <SocialIcon icon={faTwitter} />
          <SocialIcon icon={faInstagram} />
          <SocialIcon icon={faLinkedin} />
          <SocialIcon icon={faPinterest} />
        </div>

        <p className="text-xl font-semibold">Download our app now!</p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="#"
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            App Store
          </a>
          <a
            href="#"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
};

const SocialIcon: React.FC<{ icon: any }> = ({ icon }) => (
  <a
    href="#"
    className="text-white hover:text-red-500 transition transform hover:scale-110"
  >
    <FontAwesomeIcon icon={icon} size="2x" />
  </a>
);

export default DownloadSection;
