import React from 'react';
import Image from 'next/image';
import MyAppBar from '../components/AppBar';
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

          <a className="wp" href="https://wa.me/6289681408226">
            <i className="fab fa-whatsapp fa-2x"></i>
            <span>089681408226</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Home;
