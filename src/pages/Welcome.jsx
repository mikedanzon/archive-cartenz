import React from 'react';
import Logo from '../assets/img/logo.png';
import Wscreen from '../assets/img/wscreen.png';
import Google from '../assets/img/google.png';
import Fb from '../assets/img/fb.png';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="w-wrapper">
      <div className="w-header">
        <img src={Logo} alt="logo main" />
      </div>
      <div className="w-main">
        <div className="w-main-img">
          <img src={Wscreen} alt="image welcome" />
        </div>
        <div className="w-main-halo">Halo!👋🏼</div>
        <div className="w-main-text">
          Selamat datang di Marketa! Satu aplikasi
          <br />
          untuk semua kebutuhan digital marketing-mu.
        </div>
        <div className="w-main-buttons">
          <div className="button-daftar">
            <Link>Daftar</Link>
          </div>
          <div className="button-masuk">
            <Link to="/login">Masuk</Link>
          </div>
        </div>
      </div>
      <div className="w-footer">
        <div className="w-footer-text">Atau menggunakan social media</div>
        <div className="w-footer-icon">
          <div className="icon-fb">
            <img src={Fb} alt="fb-image" />
          </div>
          <div className="icon-google">
            <img src={Google} alt="google-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
