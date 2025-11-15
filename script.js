// TAMBAHAN: Ambil elemen tata surya
const solarSystem = document.querySelector('.solar-system');

// Ini adalah data planet Anda yang sudah ada
const planets = {
    mercury: {
        name: "Merkurius",
        desc: "Mari kita mulai perjalanan kita ke Merkurius, si pelari cepat yang paling dekat dengan Matahari! Planet mungil ini adalah dunia yang penuh kontradiksi ekstrem. Bayangkan sebuah tempat di mana satu sisi terpanggang oleh panas yang bisa melelehkan timah (430°C), sementara sisi lainnya membeku dalam kegelapan yang lebih dingin dari kutub Bumi (-180°C).",
        fact: "<b>Tahukah kamu?</b> kalau satu hari di Merkurius (176 hari Bumi) DUA KALI lebih lama dari satu tahunnya (88 hari)?<br><br><b>Fakta menarik dari planet ini ialah</b> ia memiliki 'ekor' seperti komet yang terbuat dari atom natrium!",
        data: {
            jarak: 58, 
            diameter: 4879 
        }
    },
    venus: {
        name: "Venus",
        desc: "Selamat datang di Venus, 'Kembaran Jahat' Bumi. Meski ukurannya mirip, Venus adalah neraka sesungguhnya. Planet ini diselimuti awan tebal asam sulfat yang memerangkap panas dalam efek rumah kaca tak terkendali, menjadikannya planet terpanas di tata surya—lebih panas dari Merkurius!",
        fact: "<b>Tahukah kamu?</b> kalau Venus berputar ke arah yang berlawanan? Matahari di sana terbit di barat.<br><br><b>Fakta menarik dari planet ini ialah</b> tekanan udara di permukaannya 92 kali lebih besar dari di Bumi, setara dengan tekanan 1 km di bawah laut.",
        data: {
            jarak: 108,
            diameter: 12104
        }
    },
    earth: {
        name: "Bumi",
        desc: "Inilah rumah kita, Bumi! Sebuah oase kehidupan yang langka di alam semesta. Dari lautan biru yang luas hingga hutan hijau yang rimbun, planet kita adalah satu-satunya tempat yang kita tahu memiliki air cair di permukaannya dan atmosfer kaya oksigen yang dilindungi perisai magnet tak terlihat.",
        fact: "<b>Tahukah kamu?</b> kalau Bumi sebenarnya tidak berputar 24 jam penuh? Waktu tepatnya adalah 23 jam, 56 menit, dan 4 detik. Inilah mengapa kita punya Tahun Kabisat.<br><br><b>Fakta menarik dari planet ini ialah</b> kita memiliki 'Bulan kedua' bernama 3753 Cruithne, sebuah asteroid yang mengikuti lintasan Bumi.",
        data: {
            jarak: 150,
            diameter: 12742
        }
    },
    mars: {
        name: "Mars",
        desc: "Mari kita kunjungi tetangga kita yang berdebu, Mars! Planet Merah ini memikat imajinasi kita dengan lanskapnya yang mirip gurun. Para ilmuwan percaya miliaran tahun lalu, Mars adalah dunia yang basah dengan sungai, danau, dan mungkin lautan. Kini, ia menjadi target utama pencarian tanda-tanda kehidupan di masa lalu.",
        fact: "<b>Tahukah kamu?</b> kalau Mars adalah rumah bagi gunung berapi terbesar di tata surya? Olympus Mons tiga kali lebih tinggi dari Gunung Everest!<br><br><b>Fakta menarik dari planet ini ialah</b> Mars mengalami badai debu raksasa yang bisa menutupi seluruh planet selama berminggu-minggu.",
        data: {
            jarak: 228,
            diameter: 6779
        }
    },
    jupiter: {
        name: "Jupiter",
        desc: "Bersiaplah bertemu sang Raja Tata Surya, Jupiter! Raksasa gas ini begitu kolosal sehingga bisa menampung 1.300 Bumi di dalamnya. Ia adalah bola gas hidrogen dan helium raksasa dengan puncak awan amonia yang berputar-putar kencang, menciptakan sabuk dan zona berwarna-warni yang indah sekaligus ganas.",
        fact: "<b>Tahukah kamu?</b> kalau Jupiter memiliki 'Bintik Merah Raksasa'? Itu adalah badai raksasa yang lebih besar dari Bumi dan telah berkecamuk setidaknya selama 350 tahun!<br><br><b>Fakta menarik dari planet ini ialah</b> Jupiter bertindak sebagai 'pengawal' Bumi, menarik komet dan asteroid berbahaya dengan gravitasinya.",
        data: {
            jarak: 778,
            diameter: 139820
        }
    },
    saturn: {
        name: "Saturnus",
        desc: "Inilah dia, permata tata surya kita, Saturnus! Tidak ada planet lain yang bisa menandingi keanggunan cincinnya yang spektakuler. Cincin ini bukanlah benda padat; mereka terdiri dari miliaran kepingan es dan batu—beberapa sekecil butiran debu, lainnya sebesar rumah. Sistem cincin ini sangat luas namun sangat tipis.",
        fact: "<b>Tahukah kamu?</b> kalau Saturnus adalah satu-satunya planet yang kepadatannya lebih ringan dari air? Jika ada bak mandi raksasa yang cukup besar, Saturnus akan mengapung!<br><br><b>Fakta menarik dari planet ini ialah</b> bulannya, Titan, adalah satu-satunya tempat selain Bumi yang memiliki danau dan sungai (tapi terbuat dari metana cair).",
        data: {
            jarak: 1400,
            diameter: 116460
        }
    }
};

function showInfo(planetKey) {
    const info = planets[planetKey];
    
    document.getElementById("planet-name").innerText = info.name;
    document.getElementById("planet-desc").innerText = info.desc;
    document.getElementById("planet-fact").innerHTML = "💡 " + info.fact;
    
    // TAMBAHAN: Memicu animasi zoom-out pada tata surya
    solarSystem.classList.add('zoomed-out');
    
    document.getElementById("info-box").classList.remove("hidden");
}

function hideInfo() {
    // TAMBAHAN: Mengembalikan tata surya seperti semula
    solarSystem.classList.remove('zoomed-out');

    document.getElementById("info-box").classList.add("hidden");
}