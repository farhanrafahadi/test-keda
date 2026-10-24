import dashboardImage from "../assets/dashboard.svg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full px-6 md:px-12 py-20 md:py-28 z-10 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl italic text-gray-800 font-serif tracking-wide border-l-4 border-indigo-500 pl-4 py-1">
              " Solusi cerdas mencatat stok barang dan profit harian bisnis Anda
              "
            </h2>

            <div className="text-gray-600 leading-relaxed text-justify space-y-4 text-sm md:text-base">
              <p>
                KeDA ERP membantu pengusaha mencatat setiap barang yang keluar
                masuk, menghitung keuntungan harian, dan menganalisa penjualan
                secara real-time.
              </p>
              <p>
                Dengan antarmuka yang modern dan mudah digunakan, pantau bisnis
                Anda kapan saja dan di mana saja tanpa perlu repot membuka buku
                catatan manual.
              </p>
            </div>

            <ul className="mt-2 space-y-3 text-gray-700 text-sm md:text-base">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Pencatatan barang masuk & keluar
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Laporan keuntungan harian otomatis
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Analisa penjualan dengan grafik
              </li>
            </ul>
          </div>

          <div className="relative w-full max-w-md mx-auto md:ml-auto">
            <div className="absolute inset-0 bg-indigo-100 rounded-2xl transform translate-x-3 translate-y-3 -z-10"></div>
            <img src={dashboardImage} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
