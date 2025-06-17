'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const pages = ['/', '/about', '/comingSoon'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index) => {
    setCurrentIndex(index);
    router.push(pages[index]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % pages.length;
    goTo(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
    goTo(prevIndex);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-indigo-600 to-blue-400 relative overflow-hidden">
      
      {/* Navbar */}
      <nav className="absolute top-6 right-10 z-50 space-x-6 text-white text-sm font-medium">
        <a href="/about" className="hover:underline">About</a>
        <a href="/comingSoon" className="hover:underline">Coming Soon</a>
      </nav>

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/images/loadingScreen.png"
          alt="Background"
          fill
          style={{ objectFit: 'cover', opacity: 0.2 }}
        />
      </div>

      {/* PANAH KIRI */}
      <button
        onClick={handlePrev}
        className="absolute left-8 text-white text-4xl z-40 hover:text-gray-200"
        aria-label="Sebelumnya"
      >
        &lt;
      </button>

      {/* PANAH KANAN */}
      <button
        onClick={handleNext}
        className="absolute right-8 text-white text-4xl z-40 hover:text-gray-200"
        aria-label="Selanjutnya"
      >
        &gt;
      </button>

      {/* CARD */}
      <div className="relative z-10 bg-gradient-to-bl from-indigo-300 via-blue-200 to-white rounded-3xl p-8 shadow-2xl max-w-sm w-[90%] text-center transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-3xl font-bold text-black mb-4">C-WASH</h1>

        <div className="flex justify-center mb-6">
          <Image
            src="/images/cwash-logo.png"
            alt="C-Wash Logo"
            width={150}
            height={150}
            className="rounded-md"
          />
        </div>

        <h2 className="text-xl font-bold text-black mb-2">Welcome</h2>
        <p className="text-black text-sm font-medium leading-relaxed">
          Selamat datang di C-WASH <br />
          Temukan tempat cuci mobil terbaik <br />
          di sekitar Anda dengan cepat dan mudah
        </p>

        {/* DOT INDICATOR */}
        <div className="mt-6 flex justify-center space-x-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-3 h-3 rounded-full border border-black ${
                currentIndex === index ? 'bg-black' : 'bg-white hover:bg-gray-300'
              } transition`}
            ></button>
          ))}
        </div>
      </div>
    </main>
  );
}
