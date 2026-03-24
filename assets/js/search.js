// Client-side search for the posts page
// Filters the single post list by query

(function () {
  var input = document.getElementById('search-input');
  var postsList = document.getElementById('posts-list');
  var noResults = document.getElementById('no-results');

  if (!input || !postsList) return;

  var cards = postsList.querySelectorAll('.post-card[data-searchable]');

  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function filter() {
    var query = normalize(input.value.trim());

    if (!query) {
      cards.forEach(function (card) {
        card.style.display = '';
      });
      if (noResults) noResults.style.display = 'none';
      return;
    }

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
