var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var productName = document.querySelector('input[name=product-name]');
    var productPrice = document.querySelector('input[name=product-price]');

    items.push({
        nickName: productName.value,
        value: productPrice.value
    })

    let productList = document.querySelector('.product-list');
    let adding = 0;
    productList.innerHTML = "";

    items.map(function(val){
        adding += parseFloat(val.value);
        productList.innerHTML +=`
            <div class="product-list-single">
                <h3>`+val.nickName+`</h3>
                <h3 class="product-value"<span>R$ `+val.value+`</span></h3>
            </div>
        `;
    })

    adding = adding.toFixed(2);
    productName.value = "";
    productPrice.value = "";
    let addingElement = document.querySelector('.product-sum h2 ');
    addingElement.innerHTML = 'R$ ' +adding;
});

document.querySelector('.buttom button[name=clear]')
.addEventListener('click',()=>{
    items = [];
    document.querySelector('.product-list').innerHTML = "";
    document.querySelector('.product-sum h2').innerHTML = "R$ 0";
})