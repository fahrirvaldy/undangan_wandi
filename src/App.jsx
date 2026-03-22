import React, { useState, useRef } from 'react';
import imgCover from './assets/foto-cover.jpg'; // Pastikan file foto sudah ada
import imgEvent from './assets/foto-acara.jpg';
import bgMusic from './assets/pure-love-304010.mp3';

export default function UltraMinimalistInvitation() {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || 'Tamu Kehormatan';

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-slate-200">
      {/* Elemen Audio (Tersembunyi) */}
      <audio ref={audioRef} src={bgMusic} loop preload="auto" />

      {/* Tombol Musik Melayang */}
      <button
        onClick={toggleMusic}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-sm text-slate-800 rounded-full shadow-xl border border-slate-200 flex items-center justify-center transition-all duration-300 hover:scale-110 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          // Ikon Nada Musik (Menyala)
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.236l8-1.6V11.114A4.369 4.369 0 0015 11c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" /></svg>
        ) : (
          // Ikon Mute (Mati)
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
        )}
      </button>
      
      {/* SECTION 1: COVER (FOTO 1) */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <img src={imgCover} alt="Cover Pernikahan" className="absolute inset-0 w-full h-full object-cover z-0 object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90 z-0"></div>
        
        <div className="relative z-10 mt-auto pb-24 w-full max-w-2xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-slate-600 font-medium">Pernikahan</p>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-12 text-slate-900 leading-tight">Wandi <br/><span className="italic font-light">&</span> Siti</h1>
          
          <div className="border-t border-slate-400/50 pt-8 mt-8">
            <p className="text-xs uppercase tracking-widest text-slate-600 mb-2">Kepada Yth.</p>
            <p className="text-xl md:text-2xl font-serif text-slate-900 font-medium">{guestName}</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROFIL */}
      <section className="py-32 px-6 md:px-20 max-w-4xl mx-auto text-center space-y-16">
        <p className="text-lg md:text-2xl font-light leading-relaxed text-slate-500 italic font-serif">
          "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami."
        </p>
        
        <div className="flex flex-col gap-12 pt-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Wandi Maulana</h2>
            <p className="text-sm uppercase tracking-widest text-slate-400 mt-4">Putra Kesatu dari Bpk. Mulyadi & Ibu Aidah</p>
          </div>
          <div className="w-[1px] h-16 bg-slate-300 mx-auto"></div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Siti Rohati</h2>
            <p className="text-sm uppercase tracking-widest text-slate-400 mt-4">Putri Kedua dari Bpk. Bani & Ibu Anih</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: INFORMASI ACARA (FOTO 2) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <img src={imgEvent} alt="Potret Mempelai" className="w-full md:w-1/2 aspect-[3/4] object-cover object-center rounded-sm shadow-xl" />
          
          <div className="w-full md:w-1/2 space-y-12 text-center md:text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Akad & Resepsi</p>
              <h2 className="text-4xl font-serif text-slate-900">Waktu & Tempat</h2>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-serif">Minggu, 29 Maret 2026</h3>
              <p className="text-slate-500 font-light">Jam 08.00 WIB s/d Selesai</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-serif">Kediaman Mempelai</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                KP. Cibogo, RT 06/RW 03, Desa Ciengang, <br/>
                Kec. Gegerbitung, Kab. Sukabumi, <br/>
                Jawa Barat 43197
              </p>
            </div>
            
            <div className="pt-4">
              {/* Link otomatis mencari koordinat yang diberikan klien */}
              <a href="https://www.google.com/maps/search/?api=1&query=X2H6%2BVFF+Ciengang+Gegerbitung+Sukabumi" target="_blank" rel="noreferrer" className="inline-block px-8 py-4 border border-slate-900 text-slate-900 text-xs tracking-[0.2em] uppercase hover:bg-slate-900 hover:text-white transition-all duration-300">
                Buka Peta Lokasi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TANDA KASIH & TURUT MENGUNDANG */}
      <section className="py-24 px-6 bg-white border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto space-y-24">
          
          {/* Tanda Kasih (Rekening) */}
          <div className="space-y-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400">Tanda Kasih</h3>
            <p className="text-slate-500 font-light leading-relaxed max-w-lg mx-auto">
              Bagi keluarga dan sahabat yang ingin memberikan tanda kasih untuk memperindah kebahagiaan kami, dapat mengirimkan melalui:
            </p>
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl inline-block text-center shadow-sm">
              <p className="font-semibold text-slate-800 text-lg">Bank BCA</p>
              <p className="text-3xl font-mono text-slate-900 my-4 tracking-widest selection:bg-slate-300">3521667140</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest">A.N Wandi Maulana</p>
            </div>
          </div>

          {/* Turut Mengundang */}
          <div className="space-y-10">
            <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-4 inline-block">Turut Mengundang</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 text-sm md:text-base text-slate-600 font-light">
              <p>Bpk. Ajum (RW)</p>
              <p>Bpk. Iyal Muhamad</p>
              <p>Bpk. Bana (RT)</p>
              <p>Bpk. Daman</p>
              <p>Bpk. Deden</p>
              <p>Bpk. Acu</p>
              <p>Bpk. Adang</p>
              <p>Bpk. Cepiansyah</p>
              <p>Bpk. Adi Sugiarto</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: PENUTUP (Color Blocking) */}
      <section className="py-32 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto space-y-12">
          <p className="text-lg md:text-xl font-light leading-relaxed text-slate-300 font-serif italic">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
          
          <div className="w-12 h-[1px] bg-slate-700 mx-auto"></div>
          
          <h2 className="text-4xl font-serif">Terima Kasih</h2>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Wandi & Siti</p>
        </div>
      </section>

    </div>
  );
}
