(() => {
  const menuBtnRef = document.querySelector('.js-mobile-menu-button');
  const mobileMenuRef = document.querySelector('.js-mobile-menu');
  const menuLinks = document.querySelector('.js-mobile-menu-links');

  const toggleMenu = () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  };

  menuBtnRef.addEventListener('click', toggleMenu);
  menuLinks.addEventListener('click', toggleMenu);
})();
