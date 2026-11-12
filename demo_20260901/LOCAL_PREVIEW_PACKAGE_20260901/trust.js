(() => {
  const careBand = document.querySelector('.care-band');
  if (!careBand) return;
  const section = document.createElement('section');
  section.id = 'trust';
  section.className = 'trust-section';
  section.setAttribute('aria-labelledby', 'trust-title');
  section.innerHTML = `
    <div class="trust-shell">
      <div class="trust-lead">
        <p class="trust-label">The Pawcasso approach</p>
        <h2 id="trust-title">Care is built into the appointment, from the first conversation.</h2>
      </div>
      <div class="trust-proof">
        <article><strong>Since 2002</strong><p>Pawcasso describes its grooming experience as starting in 2002.</p></article>
        <article><strong>Professional membership</strong><p>The official site lists membership of the Pet Industry Federation and British Dog Groomers Association.</p></article>
        <article><strong>Pet welfare first</strong><p>That is the care priority stated by Pawcasso before an owner makes an enquiry.</p></article>
      </div>
      <figure class="trust-still"><img src="assets/concept-care-tools.png" alt="A calm illustrative still life of grooming tools and a folded blue towel"></figure>
    </div>`;
  careBand.insertAdjacentElement('afterend', section);
})();
