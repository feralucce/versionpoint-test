
document.querySelectorAll('.q').forEach(q => {
  const fb = q.querySelector('.fb');
  q.querySelectorAll('.choice').forEach(b => b.addEventListener('click', () => {
    q.querySelectorAll('.choice').forEach(x => { x.setAttribute('aria-pressed', 'false'); x.classList.remove('right', 'wrong'); });
    const right = b.dataset.right === 'true';
    b.setAttribute('aria-pressed', 'true'); b.classList.add(right ? 'right' : 'wrong');
    fb.className = 'fb ' + (right ? 'right' : 'wrong');
    fb.textContent = (right ? 'Right. ' : 'Not quite. ') + b.dataset.fb;
  }));
});
document.querySelectorAll('form.feedback').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  const r = f.querySelector('input[name=rating]:checked');
  const body = 'Rating (1 to 5): ' + (r ? r.value : 'not given') + '\n\nWhat I would change:\n' + f.comments.value;
  location.href = 'mailto:' + f.dataset.to + '?subject=' + encodeURIComponent('Learn VersionPoint: course feedback') + '&body=' + encodeURIComponent(body);
}));
