'use client';

import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-blue-300 text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <Link href="/" className="text-2xl font-bold text-indigo-700">
          C-Wash
        </Link>

        <nav className="space-x-6 text-gray-700 hidden md:flex">
          <Link href="/about" className="hover:underline hover:text-blue-500 transition">
            About
          </Link>
          <Link href="/comingSoon" className="hover:underline hover:text-blue-500 transition">
            Coming Soon
          </Link>
        </nav>
      </header>

      {/* Konten Utama */}
      <section className="px-6 py-16 space-y-12 bg-white/50 backdrop-blur-md">
        {/* Tentang Aplikasi */}
        <div className="max-w-3xl mx-auto text-center p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-3xl font-semibold text-indigo-800 mb-4">Tentang C-Wash</h3>
          <p className="text-md text-gray-700 leading-relaxed">
            C-Wash adalah aplikasi mobile yang dirancang untuk memudahkan pengguna menemukan tempat cuci mobil terbaik di sekitar mereka. 
            Aplikasi ini menyediakan informasi lengkap seperti alamat, nomor telepon, rating, dan ulasan pengguna untuk membantu Anda memilih layanan terbaik.
          </p>
        </div>

        {/* Fitur Aplikasi */}
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform hover:scale-105">
          <h4 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Fitur Unggulan</h4>
          <ul className="space-y-5 text-left text-lg text-gray-800 list-disc list-inside">
            <li>
              <strong>Pencarian Lokasi:</strong> Temukan tempat cuci mobil terdekat dengan peta interaktif.
            </li>
            <li>
              <strong>Rating & Ulasan:</strong> Lihat dan berikan ulasan berdasarkan pengalaman pengguna lain.
            </li>
            <li>
              <strong>Detail Tempat:</strong> Informasi lengkap seperti alamat, kontak, jam buka, dan layanan.
            </li>
            <li>
              <strong>Rekomendasi Cerdas:</strong> Rekomendasi berbasis ulasan pengguna dan lokasi Anda.
            </li>
            <li>
              <strong>Desain Modern:</strong> Dibangun dengan Flutter & Firebase, ringan dan cepat.
            </li>
          </ul>
        </div>
      </section>

      {/* Banner Akhir */}
      <section
        className="relative bg-cover bg-center text-white px-8 py-24"
        style={{ backgroundImage: 'url(/images/cwash-logo.png)' }}
      >
        <div className="absolute inset-0 bg-indigo-900/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Temukan Tempat Cuci Mobil Terbaik</h2>
          <p className="text-md leading-relaxed">
            Unduh aplikasi C-Wash dan rasakan kemudahan mencari tempat cuci mobil terpercaya, cepat, dan sesuai kebutuhan Anda.
          </p>
        </div>
      </section>
    </main>
  );
}
