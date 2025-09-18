import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a0d0e] text-[#c89396] px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
        <nav className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-base font-medium">
          <FooterLink label="Support" href="#" />
          <FooterLink label="Legal" href="#" />
          <FooterLink label="Social Media" href="#" />
        </nav>
        <div className="w-full border-t border-[#472426] pt-4">
          <p className="text-sm tracking-wide text-center">
            © 2025 Horror Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ label: string; href: string }> = ({ label, href }) => (
  <a
    href={href}
    className="hover:text-red-500 transition-colors duration-200"
  >
    {label}
  </a>
);

export default Footer;
