import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Bülten için Kayıt Olun</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="E-mail adresi"
                  aria-label="E-mail adresi"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Abone Ol
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Bize Ulaşın</h4>
              <div>
                <address className="text-white fs-6">
                  İstanbul, <br />
                  Küçükçekmece, <br />
                  Türkiye <br />
                </address>
                <a
                  href="tel:+90 5313833389"
                  className="mt-3 d-block mb-2 text-white"
                >
                  +90 531383389
                </a>
                <a
                  href="mailto:kblyclkn2@gmail.com"
                  className="mt-3 d-block mb-0 text-white"
                >
                  kblyclkn2@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="">
                   <BsGithub className="text-white fs-3" />
                  </a>
                  <a href="">
                    <BsLinkedin className="text-white fs-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Bilgi</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">
                  Gizlilik Politikası
                </Link>
                <Link className="text-white py-2 mb-1">İade Politikası</Link>
                <Link className="text-white py-2 mb-1">Nakliye Politikası</Link>
                <Link className="text-white py-2 mb-1">Şartlar & Koşullar</Link>
                <Link className="text-white py-2 mb-1">Blog</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Hesap</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Ara</Link>
                <Link className="text-white py-2 mb-1">Hakkımızda</Link>
                <Link className="text-white py-2 mb-1">SSS</Link>
                <Link className="text-white py-2 mb-1">İletişim</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Hızlı Bağlantı</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Notebook</Link>
                <Link className="text-white py-2 mb-1">Kulaklıklar</Link>
                <Link className="text-white py-2 mb-1">Tabletler</Link>
                <Link className="text-white py-2 mb-1">Saatler</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}Dev Corner Tarafından
              Desteklenmektedir.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
