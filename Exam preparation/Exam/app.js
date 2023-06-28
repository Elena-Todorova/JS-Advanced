window.addEventListener('load', solve);

function solve() {

        const carModelInput = document.getElementById('car-model')
        const carYearInput = document.getElementById('car-year')
        const partNameInput = document.getElementById('part-name')
        const partNumlInput = document.getElementById('part-number')
        const conditionInput = document.getElementById('condition')
        const nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', add);
        const listInfoEl = document.querySelectorAll('ul');
        const imgEl = document.getElementById('complete-img');
        const imgText = document.getElementById('complete-text');

        function add(e) {
                e.preventDefault();

                let carModelInputValue = carModelInput.value;
                let carYearInputValue = carYearInput.value;
                let partNameInputValue = partNameInput.value;
                let partNumlInputValue = partNumlInput.value;
                let conditionInputValue = conditionInput.value;

                if (carModelInputValue === '' || partNameInputValue === '' || partNumlInputValue === ''
                        || conditionInputValue === '' || carYearInputValue === '' || carYearInputValue <= 1980
                        || carYearInputValue >= 2023) {
                        return;
                }

                let li = document.createElement('li');
                li.classList.add('part-content');
                let article = document.createElement('article');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');
                p1.textContent = `Car Model: ${carModelInputValue}`;
                p2.textContent = `Car Year: ${carYearInputValue}`;
                p3.textContent = `Part Name: ${partNameInputValue}`;
                p4.textContent = `Part Number: ${partNumlInputValue}`;
                p5.textContent = `Condition: ${conditionInputValue}`;

                let editBtn = document.createElement('button');
                editBtn.classList.add('edit-btn');
                editBtn.textContent = 'Edit';
                editBtn.addEventListener('click', editInfo)

                let continueBtn = document.createElement('button');
                continueBtn.classList.add('continue-btn');
                continueBtn.textContent = 'Continue';
                continueBtn.addEventListener('click', action);

                article.appendChild(p1);
                article.appendChild(p2);
                article.appendChild(p3);
                article.appendChild(p4);
                article.appendChild(p5);

                li.appendChild(article);
                li.appendChild(editBtn);
                li.appendChild(continueBtn);

                listInfoEl[0].appendChild(li);

                carModelInput.value = '';
                carYearInput.value = '';
                partNameInput.value = '';
                partNumlInput.value = '';
                conditionInput.value = '';

                nextBtn.disabled = true;

                // imgEl.style.visibility = "hidden";
                // imgText.textContent = ""


                return li;

                function editInfo(e) {

                        carModelInput.value = carModelInputValue;
                        carYearInput.value = carYearInputValue;
                        partNameInput.value = partNameInputValue;
                        partNumlInput.value = partNumlInputValue;
                        conditionInput.value = conditionInputValue;

                        li.remove();
                        nextBtn.disabled = false;

                };

                function action(e) {

                        let li2 = document.createElement('li');

                        let confirmBtn = document.createElement('button');
                        confirmBtn.classList.add('confirm-btn');
                        confirmBtn.textContent = 'Confirm';
                        confirmBtn.addEventListener('click', confirmInfo)

                        let cancelBtn = document.createElement('button');
                        cancelBtn.classList.add('cancel-btn');
                        cancelBtn.textContent = 'Cancel';
                        cancelBtn.addEventListener('click', cancelInfo);

                        li2.appendChild(article);
                        li2.appendChild(confirmBtn);
                        li2.appendChild(cancelBtn);
                        listInfoEl[1].appendChild(li2);

                        editBtn.remove();
                        continueBtn.remove();

                        function confirmInfo(e) {

                                li2.remove();
                                nextBtn.disabled = false;

                                imgEl.style.visibility = "visible";
                                imgText.textContent = "Part is Ordered!"
                        };
                        function cancelInfo(e) {
                                li2.remove();
                                nextBtn.disabled = false;
                        }

                }


        }
};




