import { Users, Award, Heart, CheckCircle } from 'lucide-react';

const klubRajut = {
  name: 'Klub Rajut Indonesia',
  tagline: 'Bersama Kita Berkreasi',
  desc: `Klub Rajut Indonesia adalah komunitas yang menyatukan para pecinta dan praktisi rajut dari
    Sabang sampai Merauke. Lahir dari semangat berbagi dan berkolaborasi, komunitas ini telah
    menjadi wadah bagi lebih dari seribu anggota aktif yang saling menginspirasi.`,
  details: [
    'Forum diskusi teknik rajut dari pemula hingga mahir',
    'Sharing pola rajut gratis setiap minggu',
    'Workshop online dan offline rutin setiap bulan',
    'Pameran karya anggota setiap kuartal',
    'Program mentoring 1-on-1 untuk pemula',
  ],
  stats: [
    { label: 'Anggota Aktif', value: '1.200+' },
    { label: 'Kota di Indonesia', value: '45+' },
    { label: 'Workshop Dilakukan', value: '80+' },
  ],
};

const rumahBUMN = {
  name: 'Rumah BUMN',
  tagline: 'Memberdayakan UMKM Lokal',
  desc: `Rumah BUMN adalah program strategis dari Kementerian BUMN Republik Indonesia yang
    bertujuan memberdayakan Usaha Mikro, Kecil, dan Menengah (UMKM) agar mampu bersaing
    di era digital. Asyiah Craft dengan bangga bergabung sebagai mitra dalam program
    pemberdayaan kerajinan tangan lokal ini.`,
  details: [
    'Pelatihan digital marketing dan e-commerce',
    'Pendampingan legalitas usaha dan HAKI',
    'Akses pasar ke platform belanja nasional',
    'Dukungan pembiayaan usaha mikro',
    'Sertifikasi produk SNI dan halal',
  ],
  stats: [
    { label: 'UMKM Binaan', value: '50.000+' },
    { label: 'Provinsi Terjangkau', value: '34' },
    { label: 'Tahun Berdiri', value: '2019' },
  ],
};

export default function Community() {
  return (
    <main className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-14">
          <p className="text-warm-500 text-sm uppercase tracking-widest mb-2">Kepercayaan & Komunitas</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            Komunitas Kami
          </h1>
          <p className="text-warm-500 max-w-lg mx-auto text-sm leading-relaxed">
            Asyiah Craft percaya bahwa kekuatan sebuah usaha datang dari komunitas di sekitarnya.
            Kami bangga menjadi bagian dari komunitas-komunitas luar biasa berikut ini.
          </p>
        </div>

        {[klubRajut, rumahBUMN].map((org, idx) => (
          <div
            key={idx}
            className="mb-12 bg-white rounded-2xl shadow-sm border border-cream-200 overflow-hidden"
          >
            <div
              className="px-6 py-8 sm:px-10"
              style={{
                background:
                  idx === 0
                    ? 'linear-gradient(135deg, #F2E8CC, #E8D9B0)'
                    : 'linear-gradient(135deg, #EAD9CB, #D4B99A)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warm-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  {idx === 0 ? (
                    <Users size={22} className="text-cream-100" />
                  ) : (
                    <Award size={22} className="text-cream-100" />
                  )}
                </div>
                <div>
                  <h2 className="font-serif font-bold text-warm-900 text-xl sm:text-2xl">
                    {org.name}
                  </h2>
                  <p className="text-warm-600 text-sm font-medium mt-0.5">{org.tagline}</p>
                </div>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-10">
              <p className="text-warm-600 text-sm leading-relaxed mb-6">{org.desc}</p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {org.stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="font-bold font-serif text-warm-800 text-xl sm:text-2xl">
                      {s.value}
                    </p>
                    <p className="text-warm-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5">
                <p className="font-semibold text-warm-800 text-sm mb-3 flex items-center gap-2">
                  <Heart size={15} className="text-warm-600" />
                  Program & Manfaat
                </p>
                {org.details.map((d, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-warm-600 text-sm">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
