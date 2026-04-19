const steps = [
  {
    number: '01',
    title: 'Pilih Produk',
    desc: 'Jelajahi katalog kami dan tambahkan produk ke keranjang sesuai selera.',
  },
  {
    number: '02',
    title: 'Kirim Pesan',
    desc: 'Klik tombol "Pesan via WhatsApp" untuk mengirim daftar pesanan ke kami.',
  },
  {
    number: '03',
    title: 'Konfirmasi Stok & Harga',
    desc: 'Kami akan membalas untuk mengkonfirmasi ketersediaan stok dan harga terkini.',
  },
  {
    number: '04',
    title: 'Pembayaran',
    desc: 'Lakukan pembayaran sesuai instruksi yang kami berikan via WhatsApp.',
  },
  {
    number: '05',
    title: 'Produk Dikirim',
    desc: 'Pesanan dikemas dengan hati-hati dan dikirim ke alamat tujuan.',
  },
];

export default function CaraOrder() {
  return (
    <section
      id="cara-order"
      className="py-20 px-4"
      style={{ background: 'linear-gradient(180deg, #F2E8CC 0%, #F9F3E3 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-warm-500 text-sm uppercase tracking-widest mb-2">Mudah & Cepat</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            Cara Order
          </h2>
          <p className="text-warm-500 max-w-md mx-auto text-sm leading-relaxed">
            Proses pemesanan yang sederhana dan transparan. Tidak perlu registrasi, cukup
            chat WhatsApp.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[2.35rem] top-6 bottom-6 w-0.5 bg-cream-300" />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-warm-700 text-cream-50 flex items-center justify-center font-bold text-sm shadow-md z-10">
                  {step.number}
                </div>
                <div className="flex-1 bg-white rounded-2xl px-5 py-4 shadow-sm border border-cream-200">
                  <h3 className="font-serif font-semibold text-warm-800 mb-1">{step.title}</h3>
                  <p className="text-warm-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
