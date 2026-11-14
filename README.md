# Portofolio Bayu Safyndra

Website portofolio statis (HTML, CSS, JavaScript). Tanpa build dan tanpa instalasi.

## Struktur
```
index.html            isi dan teks halaman
css/style.css         tampilan, warna (variabel di :root), tema terang dan gelap
js/main.js            tombol tema, foto, dan perbesar foto
assets/img/           letakkan foto di sini
```

## Menjalankan
Buka `index.html` di browser. Untuk pratinjau lokal yang lebih rapi: `python3 -m http.server`, lalu buka http://localhost:8000.

## Menambahkan foto
Simpan file ke `assets/img/` dengan nama berikut. Bingkai kosong otomatis terisi, tanpa mengubah kode.

| File | Tempat |
|---|---|
| `profil.jpg` | Foto profil, dipakai sebagai latar hero (rasio 4:5, latar polos paling cocok) |
| `galeri-1.jpg` | Rakerwil ke-5 Permikomnas Wilayah Sumsel Babel, Baturaja (besar) |
| `galeri-2.jpg` | Audiensi dengan Bupati |
| `galeri-3.jpg` | Audiensi dengan Bupati |
| `galeri-4.jpg` | Audiensi dengan RRI |
| `galeri-5.jpg` | Audiensi dengan RRI |
| `galeri-6.jpg` | Audiensi dengan RRI |
| `galeri-7.jpg` | Siaran di RRI |

Saran: lebar sekitar 1600 px, format JPG, ukuran di bawah 400 KB per foto. Untuk format lain (png, webp), ubah `src` di `index.html`. Keterangan foto ada di `<figcaption>`.

## Yang perlu diganti
- Bagian kontak di `index.html`: `emailkamu@contoh.com` dan tautan LinkedIn, GitHub, Instagram (`username-kamu`).
- Peran di INFEST 2026 dan bidang LKS, jika ingin dicantumkan lebih spesifik.
- Bagian proyek: tambahkan `<section class="sec" id="proyek">` dengan pola `<ul class="list">` seperti di bagian Kiprah.

## Hosting gratis
- **Netlify Drop**: seret folder ini ke app.netlify.com/drop.
- **GitHub Pages**: unggah ke repositori, lalu Settings, Pages, pilih branch `main`.
