const PricingSection = () => {
  const tiers = [
    {
      title: "TIER 1 / Basic",
      price: "Rp 99.000",
      features: [
        "Mencatat barang masuk",
        "Mencatat barang keluar",
        "Mencatat hasil keuntungan",
      ],
    },
    {
      title: "TIER 2 / Business",
      price: "Rp 249.000",
      features: [
        "Semua fitur Basic",
        "Analisa penjualan dengan Chart",
        "Support 7x24 Jam",
      ],
    },
    {
      title: "TIER 3 / Entrepreneur",
      price: "Rp 499.000",
      features: [
        "Semua fitur Business",
        "Export data ke Excel",
        "AI Prediksi penghasilan",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="relative w-full py-16 px-6 md:px-12 z-10 bg-indigo-500"
    >
      <div className="mb-10">
        <p className="text-3xl font-bold text-center text-white">
          Pilih Paket Anda
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className="group shadow-md relative transform overflow-hidden rounded-2xl bg-white border border-gray-100 duration-300 ease-in-out hover:rotate-3 hover:shadow-2xl hover:scale-105  hover:z-20 active:scale-100 p-8 flex flex-col cursor-pointer"
            style={{ transition: "0.3s" }}
          >
            <h3 className="text-lg font-bold text-indigo-600 mb-2">
              {tier.title}
            </h3>
            <div className="text-3xl font-extrabold text-gray-800 mb-6">
              {tier.price}{" "}
              <span className="text-sm text-gray-500 font-normal">/bulan</span>
            </div>
            <ul className="grow space-y-4 mb-8">
              {tier.features.map((feat, i) => (
                <li key={i} className="flex items-start text-start text-gray-600 text-sm">
                  <span className="text-green-500 mr-2">✓</span> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full py-2 border-2 border-indigo-500 text-indigo-500 font-bold rounded hover:bg-indigo-500 hover:text-white transition cursor-pointer duration-100">
              Pilih Paket
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
