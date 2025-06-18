'use client';

import Link from 'next/link';
// Impor ikon dari library (pastikan Anda sudah menginstalnya: npm install lucide-react)
import { Smartphone, Star, MapPin, Sparkles, Code } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <MapPin className="h-10 w-10 text-blue-500" />,
      title: 'Pencarian Lokasi',
      description: 'Temukan tempat cuci mobil terdekat dengan peta interaktif dan pencarian yang mudah.',
    },
    {
      icon: <Star className="h-10 w-10 text-amber-500" />,
      title: 'Rating & Ulasan',
      description: 'Lihat dan berikan ulasan berdasarkan pengalaman pengguna lain untuk pilihan terbaik.',
    },
    {
      icon: <Smartphone className="h-10 w-10 text-indigo-500" />,
      title: 'Detail Lengkap',
      description: 'Informasi lengkap seperti alamat, kontak, jam buka, dan layanan yang tersedia.',
    },
    {
      icon: <Sparkles className="h-10 w-10 text-pink-500" />,
      title: 'Rekomendasi Cerdas',
      description: 'Dapatkan rekomendasi lokasi car wash terbaik berdasarkan ulasan dan lokasi Anda.',
    },
  ];

  return (
    <main className="bg-slate-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-10 py-4 bg-white/80 backdrop-blur-md shadow-sm">
        <Link href="/" className="text-3xl font-bold text-indigo-700 tracking-tighter">
          C-Wash
        </Link>
        <nav className="space-x-6 text-gray-600 hidden md:flex">
          <Link href="/about" className="font-semibold text-indigo-600">
            About
          </Link>
          <Link href="/comingSoon" className="hover:text-indigo-600 transition">
            Download
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-indigo-100 to-white">
        <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-800 mb-4 tracking-tight">Misi Kami</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          Menyediakan platform yang menghubungkan Anda dengan layanan cuci mobil terbaik di kota Anda, dengan informasi yang transparan, terpercaya, dan mudah diakses.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Fitur Unggulan Aplikasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-4 mr-6">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section */}
      <section className="py-20 px-6 bg-indigo-50">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Di Balik Layar</h2>
            <p className="text-lg text-gray-600 mb-8">Aplikasi ini dibangun dengan dedikasi oleh pengembang tunggal.</p>
            <div className="inline-block bg-white p-8 rounded-full shadow-xl">
              <div className="flex flex-col items-center">
                 <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center mb-4">
                    <Code className="h-12 w-12 text-white"/>
                 </div>
                 <h3 className="text-xl font-semibold">Beyonds</h3>
                 <p className="text-indigo-600">Full-Stack Flutter Developer</p>
              </div>
            </div>
         </div>
      </section>

      {/* Banner Akhir (CTA) */}
      <section className="bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap untuk Mobil yang Berkilau?</h2>
          <p className="text-lg text-indigo-200 mb-8">
            Unduh aplikasi C-Wash sekarang dan rasakan kemudahan mencari tempat cuci mobil terpercaya, cepat, dan sesuai kebutuhan Anda.
          </p>
          <Link href="/comingSoon" className="inline-block px-10 py-4 bg-white text-indigo-700 font-bold rounded-lg shadow-lg hover:bg-slate-200 transition-transform hover:scale-105">
              Download Aplikasi
          </Link>
        </div>
      </section>

       {/* Footer */}
       <footer className="text-center py-6 bg-slate-100 text-gray-600">
          <p>&copy; {new Date().getFullYear()} C-Wash. All Rights Reserved.</p>
       </footer>
    </main>
  );
}
