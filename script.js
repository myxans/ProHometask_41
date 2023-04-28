const scrollContainer = document.querySelector('.scroll-container');
const scrollContent = document.querySelector('.scroll-content');

scrollContainer.addEventListener('scroll', () => {
  const scrollTop = scrollContainer.scrollTop;
  const visibleHeight = scrollContainer.offsetHeight;
  const totalHeight = scrollContent.offsetHeight;

  /* Вираховуємо та відображаємо тільки необхідні дані */
  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const endIndex = Math.min(startIndex + visibleHeight / ITEM_HEIGHT + 1, totalHeight / ITEM_HEIGHT);

  for (let i = startIndex; i < endIndex; i++) {
    /* Відображаємо тільки ті дані, які потрібні */
    renderData(i);
  }
});

function renderData(index) {
  /* Рендеримо дані для вказаного індексу */
}