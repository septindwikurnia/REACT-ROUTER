import Akses from './halaman/akses';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand text-white" to="/">
              <i className="fa fa-graduation-cap fa-lg mr-2"></i>HOME
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#nvbCollapse"
              aria-controls="nvbCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="nvbCollapse">
              <ul className="navbar-nav ml-auto">
                <li className={location === '/galeri' ? 'nav-item active pl-1' : 'nav-item pl-1'}>
                  <Link className="nav-link" to="/galeri">
                    <i class="fas fa-photo-video"></i>GALERI
                  </Link>
                </li>
                <li className={location === '/hari' ?   'nav-item active pl-1' : 'nav-item pl-1'}>
                  <Link className="nav-link" to="/hari">
                    <i className="fa fa-th-list fa-fw mr-1"></i>HARI
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
        <Akses />
      
    </div>
  );
}

export default App;