const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full py-16 px-6 md:px-12 z-10 ">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Hubungi Kami</h2>
        <p className="text-gray-500">
          Punya pertanyaan tentang ERP kami? Tim kami siap membantu.
        </p>
        <form className="flex flex-col gap-4 text-left">
          <input
            type="text"
            placeholder="Nama"
            className="p-3 border border-gray-300 rounded focus:outline-cyan-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded focus:outline-cyan-400"
          />
          <textarea
            rows="4"
            placeholder="Pesan"
            className="p-3 border border-gray-300 rounded focus:outline-cyan-400"
          ></textarea>
          <button
            type="button"
            className="bg-indigo-600 text-white py-3 rounded font-bold hover:bg-indigo-700 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
