window.addEventListener("load", solve);

function solve() {
  //get elements

  let titleEl = document.getElementById('post-title');
  let categoryEl = document.getElementById('post-category');
  let contentEl = document.getElementById('post-content');
  let publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', publishing);
  let reviewEl = document.getElementById('review-list');
  let publishList = document.getElementById('published-list');
  let clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', clear);

  //implement publish logic
function publishing(e){
  let titleValue = titleEl.value;
  let categoryValue = categoryEl.value;
  let contentValue = contentEl.value;

  if(titleValue === '' || categoryValue === '' || contentValue === ''){
    return;
  }

  let liEl = document.createElement('li');
  liEl.classList.add('rpost');
  let articleEl = document.createElement('article');
  let titleInput = document.createElement('h4');
  titleInput.textContent = titleValue;
  let categoryInput = document.createElement('p');
  categoryInput.textContent = `Category: ${categoryValue}`;
  let contentInput = document.createElement('p');
  contentInput.textContent = `Content: ${contentValue}`;
  liEl.appendChild(articleEl);
  articleEl.appendChild(titleInput);
  articleEl.appendChild(categoryInput);
  articleEl.appendChild(contentInput);

  let editBtn = document.createElement('button');
  editBtn.classList.add('action-btn', 'edit');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', editInfo)

  let approveBtn = document.createElement('button');
  approveBtn.classList.add('action-btn', 'approve');
  approveBtn.textContent = 'Approve';
  approveBtn.addEventListener('click', approveInput);
 
  liEl.appendChild(editBtn);
  liEl.appendChild(approveBtn);
  reviewEl.appendChild(liEl);

  //clear input
titleEl.value = '';
categoryEl.value = '';
contentEl.value = '';

  return liEl;

};


// implement edit logic

function editInfo(e){

  //remove li from ul
  let liElement = e.target.parentElement;
  liElement.remove();

  //add input back to input fields
  let h4 = liElement.querySelector('h4');
  titleEl.value = h4.textContent;
  let pCategory = liElement.querySelectorAll('p');
  categoryEl.value = (pCategory[0].textContent).substring(10);
  contentEl.value = (pCategory[1].textContent).substring(9);
};

//implement approve logic
function approveInput(e){

  //remove li from ul
  let liElement = e.target.parentElement;
  liElement.remove();

  //add info to another ul
  //remove buttons from li
  let buttonsToRemove = Array.from(liElement.querySelectorAll('button'));
  buttonsToRemove.forEach(e => e.remove());

  publishList.appendChild(liElement);

};
//implement clear logic for everything in ul after click btn
function clear(e){
let allElToClear = Array.from(publishList.children);
allElToClear.forEach(e => e.remove());
};

}
