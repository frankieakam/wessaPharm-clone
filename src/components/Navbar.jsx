import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="logo">
        <img src="/logos/wessapharma-logo.png" alt="" />
      </div>

      <ul>
        <li className='welcome'><a href="#welcome">Welcome</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#experience">Wessapharm Experience</a></li>
        <li><a href="#quality">Products Quality</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;