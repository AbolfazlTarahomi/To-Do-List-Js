const inoutBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inoutBox.value === '') {
    alert('enter Your Task...');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inoutBox.value;
    listContainer.appendChild(li);
  }

  inoutBox.value = ' ';
}
