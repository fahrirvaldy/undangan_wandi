import React from 'react';
import imgCover from './assets/foto-cover.jpg'; // Pastikan file foto sudah ada
import imgEvent from './assets/foto-acara.jpg';

export default function UltraMinimalistInvitation() {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || 'Tamu Kehormatan';

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-slate-200">
      
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
