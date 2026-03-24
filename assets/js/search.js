// Client-side search for the posts page
// Works with data attributes injected by Jekyll on each .post-card element

(function () {
  const input = document.getElementById('search-input');
  const cards = document.querySelectorAll('.post-card[data-searchable]');
  const noResults = document.getElementById('no-results');

  if (!input) return;

  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // strip diacritics for better matching
  }

  function filter() {
    const query = normalize(input.value.trim());
    let visible = 0;

    cards.forEach(function (card) {
      const text = normalize(card.dataset.searchable);
      const match = !query || text.includes(query);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    if (noResults) {
      noResults.style.display = visible === 0 ? 'block' : 'none';
    }
  }

  input.addEventListener('input', filter);
})();
