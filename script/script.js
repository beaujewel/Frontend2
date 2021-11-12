const navigatieOpen = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');

    burger.addEventListener('click', () => {
        nav.classList.toggle ('nav-active');

        burger.classList.toggle('active');
    });

}

navigatieOpen();

console.log('ik snap dit niet')