let addBtn=document.querySelector('#add');
let subBtn=document.querySelector('#sub');
let qty=document.querySelector('#qtyBox');

addBtn.addEventListener('click',()=>{
    qty.value=parseInt(qty.value)+1;
});
subBtn.addEventListener('click',()=>{
    qty.value=parseInt(qty.value)-1;
    if (qty.value==0){

        window.alert("value is zero");
    
    }
});

