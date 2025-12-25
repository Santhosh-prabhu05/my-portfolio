const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Santhosh Prabhu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
