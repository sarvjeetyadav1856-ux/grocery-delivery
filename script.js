let cart=[];
function addToCart(name,price){
    cart.push({name,price});
    displayCart();

}
function displayCart(){
    let carList=document.getElementById("cart");
    carList.innerHTML="";
    cart.forEach(item=>{
        let li=document.createElement("li");
        li.innerText=item.name +"- ₹" +item.price;
        carList.appendChild(li);
    });
}