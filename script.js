const planets = {
    mercury: {
        name: "Merkurius",
        desc: "Planet terdekat dari Matahari dan terkecil di tata surya.",
        fact: "Satu hari di Merkurius lebih lama dari satu tahunnya!"
    },
    venus: {
        name: "Venus",
        desc: "Planet terpanas dengan atmosfer tebal berisi karbon dioksida.",
        fact: "Venus berputar berlawanan arah dengan planet lain."
    },
    earth: {
        name: "Bumi",
        desc: "Planet tempat kita tinggal, satu-satunya yang diketahui memiliki kehidupan.",
        fact: "70% permukaannya tertutup air."
    },
    mars: {
        name: "Mars",
        desc: "Dikenal sebagai planet merah karena permukaannya kaya akan besi oksida.",
        fact: "Gunung tertinggi di tata surya, Olympus Mons, ada di Mars!"
    },
    jupiter: {
        name: "Jupiter",
        desc: "Planet terbesar di tata surya, raksasa gas dengan banyak bulan.",
        fact: "Badai raksasa 'Great Red Spot' di Jupiter sudah berlangsung ratusan tahun."
    },
    saturn: {
        name: "Saturnus",
        desc: "Terkenal dengan cincin indah yang tersusun dari es dan batu.",
        fact: "Saturnus memiliki lebih dari 80 bulan!"
    }
};

function showInfo(planetKey) {
    const info = planets[planetKey];
    document.getElementById("planet-name").innerText = info.name;
    document.getElementById("planet-desc").innerText = info.desc;
    document.getElementById("planet-fact").innerText = "💡 " + info.fact;
    document.getElementById("info-box").classList.remove("hidden");
}

function hideInfo() {
    document.getElementById("info-box").classList.add("hidden");
}
