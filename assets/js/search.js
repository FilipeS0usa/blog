// Client-side search for the posts page
// Works with data attributes injected by Jekyll on each .post-card element

(function () {
  var input = document.getElementById('search-input');
  var cards = document.querySelectorAll('.post-card[data-searchable]');
  var noResults = document.getElementById('no-results');

  if (!input) return;

  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // strip diacritics for better matching
  }

  function filter() {
    var query = normalize(input.value.trim());
    var visible = 0;

    cards.forEach(function (card) {
      var text = normalize(card.dataset.searchable);
      var match = !query || text.includes(query);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    if (noResults) {
      noResults.style.display = visible === 0 ? 'block' : 'none';
    }
  }

  // Debounce: 150ms delay
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
