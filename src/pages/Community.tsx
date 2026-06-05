import { Users, Award, Heart, CheckCircle } from 'lucide-react';

const klubRajut = {
  name: 'Komunitas Rajut & Kriya Kreatif Purwokerto',
  tagline: 'Merajut Keterampilan, Mengukir Kemandirian Ekonomi',
  desc: `Wadah kolaborasi pengrajin rajut di Purwokerto yang dirintis sejak tahun 2018 untuk melatih keterampilan kriya tekstil. Komunitas ini fokus memberdayakan ibu rumah tangga dengan memanfaatkan bahan ramah lingkungan dan barang sisa menjadi karya seni fungsional yang bernilai tinggi.`,
  details: [
    'Pelatihan teknis terstruktur dari tingkat dasar hingga mahir (pembuatan tas, pola dekoratif, hingga boneka rajut)',
    'Pelatihan rajut kolaboratif bersama lembaga kemasyarakatan tingkat daerah (seperti TP-PKK)',
    'Akses keikutsertaan dalam festival kerajinan daerah, seperti pameran Craftopia Banyumas',
    'Aktivitas komunal yang memberikan dampak terapeutik untuk mengurangi stres dan melatih motorik halus pengrajin',
  ],
  stats: [
    { label: 'Tahun Dirintis', value: '2018' },
    { label: 'Teknik Utama', value: 'Rajut & Hakpen' },
    { label: 'Karya per Bulan', value: '20+' },
  ],
};

const rumahBUMN = {
  name: 'Rumah BUMN Purwokerto',
  tagline: 'UMKM Tangguh, Mandiri, Modern, Go Online, Go Global',
  desc: `Pusat inkubasi bisnis dan standardisasi produk yang dikelola secara resmi oleh Bank BRI Cabang Purwokerto. Lembaga ini difokuskan pada pendampingan legalitas, pengembangan kompetensi produksi, dan kemudahan akses permodalan maupun pemasaran digital untuk pelaku usaha kreatif.`,
  details: [
    'Pelatihan intensif terkait digitalisasi e-commerce, manajemen keuangan, dan optimalisasi media sosial',
    'Fasilitas ruang pameran (Showcase UMKM fisik) untuk memajang produk unggulan secara gratis dengan sistem konsinyasi',
    'Pendaftaran dan pengintegrasian produk UMKM ke platform Pasar Digital (PaDi) BUMN untuk akses pengadaan korporat nasional',
    'Pendampingan sertifikasi legalitas usaha dan rekomendasi keikutsertaan pada ajang pameran besar berskala nasional seperti Brilian Preneur',
  ],
  stats: [
    { label: 'UMKM di Banyumas', value: '90.000+' },
    { label: 'Binaan Go-Online', value: '110' },
    { label: 'Pendampingan Berhasil', value: '87,12%' },
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