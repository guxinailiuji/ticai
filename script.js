document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Date navigation
  const dateButtons = document.querySelectorAll('[data-lucide="calendar"]');
  dateButtons.forEach(button => {
    button.parentElement.addEventListener('click', function() {
      // In a real app, this would show a date picker
      alert('Date selection will be available in the full version');
    });
  });
  
  // Bookmark functionality
  const bookmarkButtons = document.querySelectorAll('[data-lucide="bookmark"]');
  bookmarkButtons.forEach(button => {
    button.parentElement.addEventListener('click', function() {
      this.classList.toggle('text-blue-600');
      // In a real app, this would save the bookmark to user preferences
    });
  });
  
  // Filter buttons
  const filterButtons = document.querySelectorAll('.bg-white\\/10');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('bg-white/30'));
      this.classList.add('bg-white/30');
      // In a real app, this would filter the matches shown
    });
  });
  
  // Load more button
  const loadMoreButton = document.querySelector('button:has([data-lucide="plus"])');
  if (loadMoreButton) {
    loadMoreButton.addEventListener('click', function() {
      this.innerHTML = '<svg class="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> 加载中...';
      
      setTimeout(() => {
        this.innerHTML = '<i data-lucide="plus" class="w-4 h-4"></i><span>加载更多赛事</span>';
        lucide.createIcons();
        
        // In a real app, this would load more matches
        alert('更多赛事将在完整版中加载');
      }, 1500);
    });
  }
  
  // Disable pinch-to-zoom on mobile
  window.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, { passive: false });
  
  // Prevent zoom on double tap
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
});
