# KeDA Tech ERP Frontend Test

## Teknologi yang Digunakan & Alasannya:

1. **React JS (v19) dengan Vite (v8)**
   - *Alasan:* React dipilih karena arsitektur berbasis komponen yang memudahkan pengelolaan UI yang kompleks (seperti modal, section, dan navigasi). Vite digunakan sebagai build tool karena kecepatannya yang luar biasa dalam Hot Module Replacement (HMR) dibandingkan Create React App.

2. **Tailwind CSS (v4)**
   - *Alasan:* Tailwind memungkinkan pembuatan styling secara cepat langsung di dalam file JSX. Sangat efisien untuk membuat desain custom seperti lengkungan (border-radius) pada header dan gradient pada background dekorasi tanpa harus menulis file CSS terpisah yang panjang. Menggunakan plugin `@tailwindcss/vite` sesuai standar v4.

3. **React Router DOM (v7)**
   - *Alasan:* Digunakan untuk manajemen routing, mempersiapkan jika nanti aplikasi ERP dikembangkan menjadi multi-halaman (seperti Dashboard, Inventory, dll).

4. **Lucide React**
   - *Alasan:* Library ikon ringan dan modern berbasis SVG yang memudahkan konsistensi visual ikon di seluruh aplikasi.

5. **Jest & React Testing Library**
   - *Alasan:* Memenuhi syarat unit test dari soal. Digunakan untuk memastikan komponen (seperti PricingSection) merender data dengan benar sesuai ekspektasi.

## Fitur yang Diimplementasikan:
- Landing Page Responsive sesuai desain referensi.
- Section Hero, About, Pricing (Tier 1-3 sesuai soal), dan Contact.
- Tombol Login yang memunculkan Popup Modal (tanpa fungsi backend).
- Dekorasi Gradient dan Shape menggunakan CSS murni/Tailwind.
- Unit Test untuk komponen Pricing.

## Cara Menjalankan:
1. `npm install`
2. `npm run dev` (untuk menjalankan server lokal)
3. `npm run test` (untuk menjalankan unit test)