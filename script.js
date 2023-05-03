// JavaScript-код для скроллу
      const scrollContainer = document.getElementById('scroll-container');
      const scrollItems = document.getElementsByClassName('scroll-item');

      const containerHeight = scrollContainer.clientHeight;
      const itemHeight = scrollItems[0].clientHeight;

      scrollContainer.addEventListener('scroll', function() {
        const scrollTop = scrollContainer.scrollTop;
        const visibleCount = Math.ceil(containerHeight / itemHeight);

        const startIndex = Math.floor(scrollTop / itemHeight);
        const endIndex = startIndex + visibleCount;

        for (let i = 0; i < scrollItems.length; i++) {
          if (i < startIndex || i >= endIndex) {
            scrollItems[i].classList.add('hidden');
          } else {
            scrollItems[i].classList.remove('hidden');
          }
        }
      });