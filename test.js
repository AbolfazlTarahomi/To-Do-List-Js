const inoutBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inoutBox.value === '') {
    alert('enter Your Task...');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inoutBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }

  inoutBox.value = '';
}

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
    }
  },
  false,
);
