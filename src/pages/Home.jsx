import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>PROFESYONEL SÜPER ŞARJ</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>20.000 TL den başlayan fiyatlarla</p>
                  <Link className="button">SATIN AL</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>ÇOK SATAN</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      20.000 TL den <br /> başlayan fiyatlarla
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>YENİ ÜRÜN</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      20.000 TL den <br /> başlayan fiyatlarla
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>YENİ ÜRÜN</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      20.000 TL den <br /> başlayan fiyatlarla
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>YENİ ÜRÜN</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      20.000 TL den <br />
                      başlayan fiyatlarla
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Ücretsiz Kargo</h6>
                    <p className="mb-0">100TL üzeri tüm siparişlerde.</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Günlük Sürpriz Teklifler</h6>
                    <p className="mb-0">%25'e varan indirimler</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>7/24 Canlı Destek</h6>
                    <p className="mb-0">Bir uzmanla alışveriş yapın.</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Uygun Fiyatlar</h6>
                    <p className="mb-0">Fabrika satış fiyatı.</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Güvenli Ödeme</h6>
                    <p className="mb-0">100% Korumalı Ödeme</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Kameralar</h6>
                    <p>10 İtems</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Müzik & Oyun</h6>
                    <p>10 İtems</p>
                  </div>
                  <img src="images/speaker.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Akıllı TV</h6>
                    <p>10 İtems</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Kulaklıklar</h6>
                    <p>10 İtems</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Kameralar</h6>
                    <p>10 İtems</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Müzik & Oyun</h6>
                    <p>10 İtems</p>
                  </div>
                  <img src="images/speaker.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Akıllı TV</h6>
                    <p>10 İtems</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Kulaklıklar</h6>
                    <p>10 İtems</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Öne Çıkanlar</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    <section className="famous wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img className="img-fluid" src="images/famous-1.webp" alt="famous" />
              <div className="famous-content position-absolute">
              <h5>Büyük Ekran</h5>
              <h6>Akıllı Saat Seri 7</h6>
              <p>7700 TL'den Başlayan Fiyatlarla</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img className="img-fluid" src="images/famous-2.webp" alt="famous" />
              <div className="famous-content position-absolute">
              <h5 className="text-dark">Stüdyo Ekranı</h5>
              <h6 className="text-dark">600 nits parlaklık</h6>
              <p className="text-dark">27" 5K Retina Ekran</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img className="img-fluid" src="images/famous-3.webp" alt="famous" />
              <div className="famous-content position-absolute">
              <h5 className="text-dark">AKILLI TELEFON</h5>
              <h6 className="text-dark">Smartphone 13 Pro.</h6>
              <p className="text-dark">Şimdi Yeşil Rengi 20.000 TL'den başlayan fiyatlarla</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img className="img-fluid" src="images/famous-4.webp" alt="famous" />
              <div className="famous-content position-absolute">
              <h5 className="text-dark">EV HOPARLORLERİ</h5>
              <h6 className="text-dark">Odanı Sesle Doldur.</h6>
              <p className="text-dark">Şimdi 2000 TL den başlayan fiyatlarla.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Sana Özel Ürünler</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Popüler Ürünler</h3>
            </div>
          </div>
          <div className="row">
           
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">En Son Bloglar</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
