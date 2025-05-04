
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-dancing text-2xl mb-2">Happy Birthday Isha!</h3>
        <p className="font-poppins text-sm opacity-80">
          Made with ❤️ for your special day
        </p>
        <p className="font-poppins text-sm mt-4 opacity-60">© {new Date().getFullYear()} | Birthday Wishes</p>
      </div>
    </footer>
  );
};

export default Footer;
