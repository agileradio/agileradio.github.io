/*
 * hamburger menu
 */
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});


/*
 * pager
 */
function pager(now, pages, range)
{
  const range_half = Math.floor(range / 2);

  let min = now - range_half;
  let max = now + range_half;
  if (min < 1) {
    min = 1;
    max = Math.min(range, pages);
  }
  else if (max > pages) {
    max = pages;
    min = Math.max(1, pages - range + 1);
  }

  const pagers = document.querySelectorAll(`.pager`);
  for (let i = min; i <= max; i++) {
    pagers[i - 1].classList.remove('is-hidden');
  }
  document.querySelector('.pager:first-child').classList.remove('is-hidden');
  document.querySelector('.pager:last-child').classList.remove('is-hidden');

  if (min > 2) {
    document.querySelector('.pager_ellipsis').classList.remove('is-hidden');
  }
  if (max < pages - 1) {
    document.querySelectorAll('.pager_ellipsis')[1].classList.remove('is-hidden');
  }
}
