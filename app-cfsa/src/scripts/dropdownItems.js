document.addEventListener("DOMContentLoaded", () => {
  const dropdownItems = document.querySelectorAll('.dropdown-toggle');
  
  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      const dropdownMenu = item.nextElementSibling;
      dropdownMenu.classList.toggle('show');
    });
  });
});
