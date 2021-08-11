import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logowhite.png';
import Fb from '../assets/img/fb.png';
import Google from '../assets/img/google.png';

function Login() {
  return (
    <div className="l-wrapper">
      <div className="l-header">
        <img src={Logo} alt="logo image" />
      </div>
      <div className="l-main">
        <div className="l-main-text-welcome">
          Selamat Datang
          <br />
          Kembali!👋🏼
        </div>
        <div className="l-main-text-login">
          Masukkan username dan kata sandi yang
          <br />
          telah kamu daftarkan sebelumnya.
        </div>
        <div className="l-main-input">
          <div className="input-user">
            <input type="text" placeholder="Email atau Username" />
          </div>
          <div className="input-pass">
            <input type="password" placeholder="Kata Sandi" />
          </div>
        </div>
        <div className="l-main-button">
          <button>Masuk</button>
        </div>
        <div className="l-forget">
          <Link>Lupa kata sandi?</Link>
        </div>
      </div>
      <div className="l-footer">
        <div className="l-footer-icon">
          <div className="icon-fb">
            <img src={Fb} alt="icon-fb" />
          </div>
          <div className="icon-google">
            <img src={Google} alt="icon-google" />
          </div>
        </div>
        <div className="l-footer-text">
          Belum punya akun? <Link>Daftar sekarang!</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
