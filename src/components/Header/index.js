import './index.css';

const Header = () => (
    <header className="header">
      <div className="header-content">
        <div className="logo">.dev</div>
        <nav className="nav">
          <ul className='nav-list'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contacts">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
);

export default Header;