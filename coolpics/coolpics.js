document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");

    function toggleMenu() {
        menu.classList.toggle("hide");
    }

    function handleResize() {
        if (window.innerWidth > 1000) {
            menu.classList.remove("hide");
        } else {
            menu.classList.add("hide");
        }
    }

    menuButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set correct menu state
});

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    const target = event.target.closest('figure');
    if (!target) return;
    const img = target.querySelector('img');
    const src = img.src.split('-')[0] + "-full.jpeg";
    const alt = img.alt;
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(src, alt));

    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);
