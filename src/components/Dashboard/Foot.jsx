"use client"
import Link from 'next/link';
import {InstagramLogo, Wallet } from '@phosphor-icons/react';

const Footer = () => {

  return (
    <footer>
      <div className="container gap-2">
        <Link href="https://saweria.co/AkiraTendo" className="underline">
          <button className="footer-btn">
            <span className="footer-text">Support Kami Dengan Cara Donasi<Wallet size={35}/></span> 
          </button>
        </Link>

        <Link href="https://instagram.com/akira_tendoo">
          <button className="footer-btn">
            <InstagramLogo size={35} className="footer-icon" />
          </button>
        </Link>
      </div>

      <div className="text-center justify-center items-center">
        <p className="text-on-primary gap-2">&copy; {new Date().getFullYear()} Akiranime</p>
      </div>
    </footer>
  );
};

export default Footer;
