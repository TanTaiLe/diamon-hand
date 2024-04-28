const $LIST = document.querySelector('.recent-list');
const $ITEM = document.querySelector('.recent-list-item');
const $TOGGLE = document.querySelector('.recent-toggle');
const $TOGGLE_TEXT = document.querySelector('.recent-toggle-text');
let itemHeight = $ITEM.offsetHeight;
let listHeight = $LIST.offsetHeight;

let changeHeight = e => {
  e.preventDefault();

  if ($LIST.classList.contains('shrink')) {
    $LIST.classList.remove('shrink');
    $LIST.style.maxHeight = `${itemHeight}px`;
    $TOGGLE.classList.remove('active');
    $TOGGLE_TEXT.innerHTML = 'See all';
  } else {
    $LIST.classList.add('shrink');
    $LIST.style.maxHeight = `${listHeight}px`;
    $TOGGLE.classList.add('active');
    $TOGGLE_TEXT.innerHTML = 'Hide all';
  }
}

window.addEventListener('load', e => changeHeight(e));

$TOGGLE.addEventListener('click', e => changeHeight(e));