// toggle Event
const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(toggleId),
        nav = document.querySelector(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}

showMenu('#nav-toggle', '#nav-menu');


