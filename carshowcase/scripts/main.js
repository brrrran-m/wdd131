document.addEventListener('DOMContentLoaded', function () {
    const cars = document.querySelectorAll('.car');

    cars.forEach(car => {
        car.addEventListener('click', function () {
            car.style.color = car.style.color === 'var(--accent1-color)' ? 'var(--primary-color)' : 'var(--accent1-color)';
        });
    });
});
