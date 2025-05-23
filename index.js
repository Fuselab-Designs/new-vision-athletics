/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

console.log("JavaScript is amazing!");
// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');

  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    setTimeout(() => {
      menu.classList.remove('-translate-y-4', 'opacity-0');
      menu.classList.add('translate-y-0', 'opacity-100');
    }, 10);
  } else {
    menu.classList.add('-translate-y-4', 'opacity-0');
    setTimeout(() => {
      menu.classList.add('hidden');
    }, 300);
  }
}
// ScrollSpy: Highlight active nav item
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY;
  const buffer = 200; // how early to trigger highlight

  sections.forEach(section => {
    const sectionTop = section.offsetTop - buffer;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');

    const link = document.querySelector(`nav a[href="#${id}"]`);
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
  link?.classList.add('text-white');
} else {
  link?.classList.remove('text-white');
}

  });
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.Typed) {
    new Typed("#typed-hero", {
      strings: ["Train With a<br class='hidden md:block' /> Purpose."],
      typeSpeed: 50,
      backSpeed: 0,
      showCursor: false
    });
  } else {
    console.warn("Typed.js not loaded");
  }
});
 <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
</body>
</html>
