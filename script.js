document.getElementById('add-item').addEventListener('click', function() {
    const itemList = document.getElementById('item-list');
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
        <input type="text" placeholder="Item Name" class="item-name">
        <input type="number" placeholder="Price" class="item-price">
    `;
    itemList.appendChild(newItem);
});

document.getElementById('calculate-total').addEventListener('click', function() {
    const prices = document.querySelectorAll('.item-price');
    let total = 0;
    prices.forEach(price => {
        total += parseFloat(price.value) || 0;
    });
    document.getElementById('total-price').innerText = total.toFixed(2);
});
