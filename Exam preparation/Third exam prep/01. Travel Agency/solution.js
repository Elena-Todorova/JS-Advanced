window.addEventListener('load', solution);

function solution() {
  //take elements
  const fNameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const codeInput = document.getElementById('code');
  const ulEl = document.getElementById('infoPreview');

  const submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', fill);

  const editBtn = document.getElementById('editBTN');
  const continueBTN = document.getElementById('continueBTN');
  const finalMessage = document.getElementById('block')


  //calback functions
  function fill(e) {
    e.preventDefault();

    const fNameInputValue = fNameInput.value;
    const emailInputValue = emailInput.value;
    const phoneInputValue = phoneInput.value;
    const addressInputValue = addressInput.value;
    const codeInputValue = codeInput.value;

    if (fNameInputValue === '' || emailInputValue === '') {
      return;
    }

    const fnameLi = document.createElement('li');
    const emailLi = document.createElement('li');
    const phoneLi = document.createElement('li');
    const addressLi = document.createElement('li');
    const codeLi = document.createElement('li');
    fnameLi.textContent = `Full name: ${fNameInputValue}`
    emailLi.textContent = `Email: ${emailInputValue}`
    phoneLi.textContent = `Phone Number: ${phoneInputValue}`
    addressLi.textContent = `Address: ${addressInputValue}`
    codeLi.textContent = `Postal Code: ${codeInputValue}`;

    ulEl.appendChild(fnameLi);
    ulEl.appendChild(emailLi);
    ulEl.appendChild(phoneLi);
    ulEl.appendChild(addressLi);
    ulEl.appendChild(codeLi);

    fNameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
    codeInput.value = '';


    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBTN.disabled = false;

    editBtn.addEventListener('click', edit);

    function edit(e) {
      e.preventDefault();

      fNameInput.value = fNameInputValue;
      emailInput.value = emailInputValue;
      phoneInput.value = phoneInputValue;
      addressInput.value = addressInputValue;
      codeInput.value = codeInputValue;

      let list = Array.from(ulEl.children);
      list.forEach(el => el.remove());

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBTN.disabled = true;

    };

    continueBTN.addEventListener('click', readyMessage);

    function readyMessage(e){
      e.preventDefault();

      let messageEl = document.createElement('h3');
      messageEl.textContent = "Thank you for your reservation!"

      let list = Array.from(finalMessage.children);
      list.forEach(el => el.remove());  // we can use finalMessage.innerHTML = '';
      
      finalMessage.appendChild(messageEl);


    }
  };
}
