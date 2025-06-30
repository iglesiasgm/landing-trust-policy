const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} NB CREA SAU Todos los derechos reservados | Av. Belgrano 1415 Mendoza, Argentina.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
