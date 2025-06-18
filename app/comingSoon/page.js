'use client';

import Head from 'next/head';
import Link from 'next/link';
import { Instagram, Twitter, DownloadCloud } from 'lucide-react';

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Download Aplikasi C-Wash</title>
        <meta name="description" content="Unduh aplikasi direktori untuk menemukan tempat cuci mobil terbaik." />
        <link rel="icon" href="/images/cwash-icon.png" />
      </Head>

      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 font-sans">
        {/* Kolom Kiri - Informasi & CTA */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-8 lg:p-12">
          <div className="max-w-md w-full text-center lg:text-left">
            <Link href="/" className="inline-block text-4xl font-bold tracking-tighter mb-8">
              C-Wash
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-md">
              Aplikasi Terbaik untuk Mobil Bersih Anda.
            </h1>

            <p className="text-lg md:text-xl mb-8 text-indigo-200">
              Temukan, bandingkan, dan kunjungi tempat cuci mobil terbaik di kota Anda. Tersedia untuk perangkat Android.
            </p>

            {/* Tombol Download Utama */}
            <a 
              href="https://drive.google.com/uc?export=download&id=1aJsFh1cAxQ-uMc0fV1WHGYPu2efsFPOg"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full text-center px-8 py-4 mb-10 bg-white text-indigo-700 font-bold text-lg rounded-lg shadow-xl transition-transform hover:scale-105"
            >
              <DownloadCloud className="mr-3 h-6 w-6" />
              Download di Sini
            </a>

            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white">
                <Instagram size={28} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white">
                <Twitter size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Kolom Kanan - Gambar & Countdown */}
        <div className="hidden lg:flex items-center justify-center bg-slate-100 p-12 relative">
           {/* Anda bisa mengganti ini dengan screenshot aplikasi Anda */}
           <img 
             src="/images/app-mockup.png" // Ganti dengan path ke gambar mockup Anda
             alt="C-Wash App Mockup" 
             className="max-w-sm rounded-3xl shadow-2xl"
           />
           {/* Atau jika tidak ada gambar, gunakan bagian ini
           <div className="w-80 h-[580px] bg-white rounded-3xl shadow-2xl flex items-center justify-center">
              <p className="text-gray-400">App Screenshot</p>
           </div>
           */}
        </div>
      </main>
    </>
  );
}
