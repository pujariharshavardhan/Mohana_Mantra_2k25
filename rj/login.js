document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header');
    const navbar = document.querySelector('.header .navbar');
    const menuBtn = document.querySelector('#menu-btn');
    const profilePic = document.querySelector('.profile-pic');
    const dropdown = document.querySelector('.dropdown');

    // Toggle Navbar in Mobile View
    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation(); 
            navbar.classList.toggle('active');
        });

        document.addEventListener("click", (event) => {
            if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
                navbar.classList.remove('active');
            }
        });

        window.addEventListener("scroll", () => {
            navbar.classList.remove('active');
            header.classList.toggle('active', window.scrollY > 0);
        });
    }

    // Toggle Profile Dropdown with Animation
    if (profilePic && dropdown) {
        profilePic.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdown.classList.toggle("show");
        });

        document.addEventListener("click", (e) => {
            if (!profilePic.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.remove("show");
            }
        });
    }

    // Countdown Timer
    const countDate = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
    
    function countDown() {
        const now = new Date().getTime();
        const gap = countDate - now;

        if (gap <= 0) {
            document.getElementById('day').innerText = "0";
            document.getElementById('hour').innerText = "0";
            document.getElementById('minute').innerText = "0";
            document.getElementById('second').innerText = "0";
            return;
        }

        const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

        document.getElementById('day').innerText = Math.floor(gap / day);
        document.getElementById('hour').innerText = Math.floor((gap % day) / hour);
        document.getElementById('minute').innerText = Math.floor((gap % hour) / minute);
        document.getElementById('second').innerText = Math.floor((gap % minute) / second);
    }

    setInterval(countDown, 1000);
    countDown();
});


function openForm() {
    document.getElementById("overlay_r").style.display = "flex";
}

function closeForm() {
    document.getElementById("overlay_r").style.display = "none";
}