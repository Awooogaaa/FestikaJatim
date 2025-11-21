# 🌌 GALAXY - Website Edukasi Luar Angkasa

## 📋 Informasi Tim
| Kategori | Keterangan |
| :--- | :--- |
| **Nama Projek** | Galaxy (Website Luar Angkasa) |
| **Nama Tim** | The Sky Full Of Stars |
| **Anggota 1** | Putra Perdana Kurniawan |
| **Anggota 2** | Riko Adi Pratama |
| **Asal Sekolah** | SMKN 1 Dlanggu |
| **Bidang Lomba** | Website (FestikaJatim) |

---

## 🚀 Tentang Projek
**Galaxy** adalah sebuah website edukasi interaktif yang dirancang untuk mengajak pengguna menjelajahi sistem tata surya kita dengan cara yang menyenangkan dan modern. 

Website ini menggabungkan visualisasi antariksa yang indah, data ilmiah yang akurat, serta elemen gamifikasi untuk meningkatkan minat belajar astronomi. Dibangun dengan teknologi web modern yang responsif, Galaxy memberikan pengalaman pengguna yang imersif baik di perangkat desktop maupun seluler.

## ✨ Fitur Utama

### 1. 🌍 Eksplorasi Planet (Landing Page)
Halaman utama yang interaktif memungkinkan pengguna untuk memilih planet dari Merkurius hingga Neptunus.
- **Info Card Dinamis:** Menampilkan data real-time seperti jarak, diameter, lama hari, dan tahun.
- **Detail Modal:** Penjelasan mendalam tentang karakteristik fisik, atmosfer, dan fakta menarik planet.
- **Transisi Halus:** Animasi perpindahan antar planet yang mulus.

### 2. ☀️ Visualisasi Tata Surya (Orbit)
Simulasi pergerakan planet mengelilingi matahari menggunakan animasi CSS murni.
- Pengguna dapat melihat posisi relatif planet dalam orbitnya.
- Interaksi klik pada planet untuk melihat informasi singkat.

### 3. 🧠 Kuis Angkasa Interaktif
Uji pengetahuan pengguna setelah menjelajahi materi.
- Sistem skor real-time.
- Umpan balik (feedback) instan untuk jawaban benar/salah.
- **Fakta Unik:** Setiap jawaban akan memunculkan fakta unik tambahan untuk menambah wawasan.

### 4. 🔊 Fitur Suara (Text-to-Speech)
Fitur unggulan aksesibilitas yang memungkinkan website "berbicara" kepada pengguna.
- Membacakan deskripsi planet dan soal kuis secara otomatis.
- Menggunakan Web Speech API untuk pengalaman yang lebih hidup.

### 5. 📱 Desain Responsif (Mobile Friendly)
Tampilan antarmuka (UI) yang menyesuaikan diri dengan berbagai ukuran layar, memastikan pengalaman yang nyaman di HP, Tablet, maupun Laptop.

---

## 🛠️ Teknologi yang Digunakan

Projek ini dibangun menggunakan *Native Web Technologies* untuk memastikan performa yang ringan dan cepat:

* **HTML5:** Struktur semantik dokumen.
* **CSS3:**
    * *Flexbox & Grid* untuk tata letak.
    * *Keyframes Animation* untuk efek orbit, bintang berkelip, dan transisi UI.
    * *Glassmorphism UI* untuk tampilan modern.
* **JavaScript (Vanilla ES6+):**
    * Manipulasi DOM.
    * Logika Kuis.
    * Web Speech API (Fitur Suara).
    * Local Storage (Menyimpan preferensi suara).

---

## 📂 Struktur File

```text
Galaxy/
├── images/             # Aset gambar planet dan ikon
│   ├── icon/           # Ikon navigasi planet
│   ├── kuis/           # Aset ilustrasi kuis
│   └── ...             # Gambar planet realistis
├── landing_page.html   # Halaman Utama (Eksplorasi)
├── planet.html         # Halaman Visualisasi Orbit
├── quiz.html           # Halaman Kuis
└── README.md           # Dokumentasi Projek
