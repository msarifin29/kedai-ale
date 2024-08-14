import React from 'react';
import Image from 'next/image';
import MyAppBar from '../components/AppBar';
import SliderCart from '../components/SliderCart';
import SliderFood from '../components/SliderFood';
import '../components/ImageWithOverlay.css';
import '../components/WhatsAppButton.css';

const Home: React.FC = () => {
  return (
    <div>
      <MyAppBar />
      <div className="image-container">
        <Image
          src="/food.png"
          alt="Banner food"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="row">
          <p className="overlay-text">
            Butuh jajanan dan makanan untuk acara Anda?
            Kami siap menyesuaikan menu sesuai dengan keinginan dan budget Anda.
            Mulai dari menu tradisional hingga modern.
            Untuk informasi lebih lanjut.
          </p>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
          <a className="wp" href="https://wa.me/6289654549600">
            <i className="fa fa-whatsapp "></i>
            <span style={{ fontFamily: "serif" }}>Bu Helmi</span>
          </a>
        </div>
      </div>
      <SliderCart />
      <SliderFood />
    </div>
  );
};

export default Home;
