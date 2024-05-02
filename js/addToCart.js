let btnsAdd = document.getElementsByClassName('btn-add');
let btnsRemove = document.getElementsByClassName('btn-remove');
let textProducts = document.getElementById('products');
let textTotalAmount = document.getElementById('totalAmount');

let products = [];
let totalAmount = 0;

for (const btnAdd of btnsAdd) {
    btnAdd.addEventListener('click', function () {
        let amount = this.nextElementSibling;
        let amountInt = parseInt(amount.textContent);

        if (amountInt == 0) {
            this.nextElementSibling.nextElementSibling.classList.remove('disabled');
            
            products.push(this.parentElement.previousElementSibling.textContent);
            textProducts.textContent = products.join(", ");
        }
        amount.textContent = amountInt + 1;

        
        totalAmount += 1;
        textTotalAmount.textContent = totalAmount;
    })
}

for (const btnRemove of btnsRemove) {
    btnRemove.addEventListener('click', function () {
        let amount = this.previousElementSibling;
        let amountInt = parseInt(amount.textContent);
        
        if (amountInt == 1) {
            this.classList.add('disabled');

            let index = products.indexOf(this.parentElement.previousElementSibling.textContent);
            products.splice(index, 1);

            if (products.length > 0) {
                textProducts.textContent = products.join(", ");
            } else {
                textProducts.textContent = 'Not found';
            }
        }
        amount.textContent = amountInt - 1;

        totalAmount -= 1;
        textTotalAmount.textContent = totalAmount;
    })
}