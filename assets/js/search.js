// Client-side search for the posts page
// Toggles between paginated view and full search results

(function () {
  var input = document.getElementById('search-input');
  var paginatedList = document.getElementById('posts-list');
  var allPostsList = document.getElementById('all-posts-list');
  var paginationNav = document.querySelector('.pagination');
  var noResults = document.getElementById('no-results');

  if (!input || !allPostsList) return;

  var cards = allPostsList.querySelectorAll('.post-card[data-searchable]');

  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function filter() {
    var query = normalize(input.value.trim());

    if (!query) {
      // No query: show paginated view
      paginatedList.style.display = '';
      allPostsList.style.display = 'none';
      if (paginationNav) paginationNav.style.display = '';
      if (noResults) noResults.style.display = 'none';
      return;
    }

    // Active search: hide pagination, show all posts filtered
    paginatedList.style.display = 'none';
    allPostsList.style.display = '';
    if (paginationNav) paginationNav.style.display = 'none';

    var visible = 0;
    cards.forEach(function (card) {
      var text = normalize(card.dataset.searchable);
      var match = text.includes(query);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    if (noResults) {
      noResults.style.display = visible === 0 ? 'block' : 'none';
    }
  }

  var timer;
  function debouncedFilter() {
    clearTimeout(timer);
    timer = setTimeout(filter, 150);
  }

  input.addEventListener('input', debouncedFilter);

  // "/" keyboard shortcut to focus search
  document.addEventListener('keydown', function (e) {
    if (
      e.key === '/' &&
      document.activeElement.tagName !== 'INPUT' &&
      document.activeElement.tagName !== 'TEXTAREA'
    ) {
      e.preventDefault();
      input.focus();
    }
  });
})();
