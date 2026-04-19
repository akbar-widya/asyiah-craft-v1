import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';

const communities = [
  {
    name: 'Klub Rajut Indonesia',
    desc: 'Komunitas para pecinta rajut dari seluruh Indonesia. Berbagi inspirasi, pola, dan dukungan satu sama lain.',
    icon: '🧶',
    members: '1.200+ anggota',
  },
  {
    name: 'Rumah BUMN',
    desc: 'Mitra resmi program pemberdayaan UMKM dari Kementerian BUMN untuk pengembangan kerajinan lokal.',
    icon: '🏛️',
    members: 'Program Nasional',
  },
];

export default function CommunityPreview() {
  return (
    <section className="py-20 px-4 bg-cream-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-warm-500 text-sm uppercase tracking-widest mb-2">Dipercaya Bersama</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            Komunitas Kami
          </h2>
          <p className="text-warm-500 max-w-md mx-auto text-sm leading-relaxed">
            Asyiah Craft tumbuh bersama komunitas yang saling mendukung dan memberdayakan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {communities.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-cream-200 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-serif font-bold text-warm-800 text-lg mb-2">{c.name}</h3>
              <p className="text-warm-500 text-sm leading-relaxed mb-4">{c.desc}</p>
              <div className="flex items-center gap-2 text-warm-400 text-xs font-medium">
                <Users size={14} />
                {c.members}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-warm-700 hover:text-warm-900 font-semibold text-sm underline underline-offset-4 transition-colors"
          >
            Pelajari Lebih Lanjut
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
