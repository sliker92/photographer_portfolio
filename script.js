document.querySelector('.menu__mobile-burger').addEventListener('click', showMenu, false);

function showMenu() {
  const item = document.getElementsByTagName('span');
  const list = document.querySelector('.menu_mobile_wrapper');
  if (item[0].className === 'burgerline') {
    item[0].className = 'open';
    list.style.display = 'block';
  } else {
    item[0].className = 'burgerline';
    list.style.display = 'none';
  }
}
