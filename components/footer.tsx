const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { label: 'FAQ', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Account', href: '#' },
    { label: 'Media Center', href: '#' },
    { label: 'Investor Relations', href: '#' },
    { label: 'Jobs', href: '#' },
    { label: 'Redeem Gift Cards', href: '#' },
    { label: 'Buy Gift Cards', href: '#' },
    { label: 'Ways to Watch', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Cookie Preferences', href: '#' },
    { label: 'Corporate Information', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Speed Test', href: '#' },
    { label: 'Legal Notices', href: '#' },
    { label: 'Only on Netflix', href: '#' },
  ];

  return (
    <footer className="bg-[#141414] text-gray-500 py-8 px-4 md:px-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-4">
          <a href="#" className="hover:text-gray-400">Questions? Contact us.</a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          {footerLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="mt-6 flex flex-col space-y-4">
          <div className="inline-block border border-gray-700 p-2 rounded">
            <select className="bg-transparent text-gray-500 focus:outline-none">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
          </div>
          
          <p className="text-xs">Netflix Clone &copy; {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;