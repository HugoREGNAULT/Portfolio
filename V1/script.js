document.addEventListener('DOMContentLoaded', () => {
    const roleText = document.getElementById('role-text');
    const roles = [
        { text: 'UI/UX Designer', className: 'role-text-1' },
        { text: 'Student', className: 'role-text-2' },
        { text: 'Developer', className: 'role-text-3' },
        { text: 'Discord Bot Developer', className: 'role-text-4' },
    ];

    let index = 0;

    function updateRoleText() {
        roleText.classList.remove(roles[index].className);
        index = (index + 1) % roles.length;
        roleText.textContent = roles[index].text;
        roleText.classList.add(roles[index].className);
    }

    setInterval(updateRoleText, 2000); // Changement toutes les 2 secondes
});

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateCarousel(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel(currentIndex);
    });

    // Initial call to position the carousel
    updateCarousel(currentIndex);
});
