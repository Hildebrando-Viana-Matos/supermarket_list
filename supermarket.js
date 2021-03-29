var items = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var productName = document.querySelector('input[name=productName').value;
    var productValue= document.querySelector('input[name=productValue').value;

    items.push({
        name: productName,
        value: productValue
    });

    console.log(productName.value);

    /*
    <
    */
    let listProduct = document.querySelector('.listProduct .container');
    let soma = 0;
    listProduct.innerHTML = "";
    items.map(function(val) {
        soma+=parseFloat(val.value);

        listProduct.innerHTML+=`
        <div class="listProductSingle">
            <h3>${val.name}</h3>
            <span>R$ ${val.value}</span>
        </div>
        `;
    });
    soma = soma.toFixed(2);
    let total = document.querySelector('.total h3');
    total.innerHTML = `Total: R$ ${soma}`;


    productName = "";
    productValue = "";
})