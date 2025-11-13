 // Generate stars
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }

        // Parallax scroll effect for floating elements
        const rocket = document.querySelector('.rocket');
        const planet1 = document.querySelector('.planet-1');
        const planet2 = document.querySelector('.planet-2');
        const planet3 = document.querySelector('.planet-3');
        const asteroid = document.querySelector('.asteroid');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Calculate scroll progress (0 to 1)
            const scrollProgress = scrolled / (documentHeight - windowHeight);
            
            // Rocket moves from bottom-right to top-left
            const rocketX = 80 - (scrollProgress * 100);
            const rocketY = 80 - (scrollProgress * 150);
            rocket.style.right = rocketX + '%';
            rocket.style.top = rocketY + '%';
            rocket.style.transform = `rotate(${-45 + scrollProgress * 90}deg)`;
            
            // Planet 1 moves diagonally
            const planet1X = 10 + (scrollProgress * 70);
            const planet1Y = 20 + (scrollProgress * 120);
            planet1.style.left = planet1X + '%';
            planet1.style.top = planet1Y + '%';
            
            // Planet 2 moves in opposite direction
            const planet2X = 85 - (scrollProgress * 60);
            const planet2Y = 40 + (scrollProgress * 100);
            planet2.style.left = planet2X + '%';
            planet2.style.top = planet2Y + '%';
            
            // Planet 3 moves vertically
            const planet3X = 50 + Math.sin(scrollProgress * Math.PI * 2) * 30;
            const planet3Y = 10 + (scrollProgress * 140);
            planet3.style.left = planet3X + '%';
            planet3.style.top = planet3Y + '%';
            
            // Asteroid moves across screen
            const asteroidX = -10 + (scrollProgress * 120);
            const asteroidY = 60 + (scrollProgress * 80);
            asteroid.style.left = asteroidX + '%';
            asteroid.style.top = asteroidY + '%';
            asteroid.style.transform = `rotate(${scrollProgress * 720}deg)`;
        });

        function scrollToSection() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }

        function exploreGalaxy() {
            alert('✨ Selamat! Petualangan galaksi Anda dimulai! 🚀');
        }

        // Initial position
        window.dispatchEvent(new Event('scroll'));