 open = document.getElementById('open');
 modal_container = document.getElementById('modal_container');
 close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});


 open = document.getElementById('open_two');
 modal_container = document.getElementById('modal_container_two');
 close = document.getElementById('close_two');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});