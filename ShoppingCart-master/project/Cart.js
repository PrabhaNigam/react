/*------------Adding to cart-----------------------------*/
function AddToCart() {
    var CartItem = localStorage.getItem('AddCart').split(',');
    $.getJSON("./products.json", function (result) {
        for (var d of result) {
            for (var item of CartItem) {
                if (item == d.id) {
                    var cartItem = document.createElement('div');
                    cartItem.setAttribute("class", "cartItem");
                    cartItem.setAttribute("id", "cartItem" + d.id);
                    document.getElementById('cartList').appendChild(cartItem);

                    var img = document.createElement('img');
                    img.setAttribute('id', 'cartimg' + d.id);
                    img.setAttribute('src', d.image[0]);
                    document.getElementById('cartItem' + d.id).appendChild(img);

                    var itemDesc = document.createElement('div');
                    itemDesc.setAttribute("class", "itemDesc");
                    itemDesc.setAttribute("id", "items" + d.id);
                    document.getElementById('cartItem' + d.id).appendChild(itemDesc);

                    var cartab = document.createElement('table');
                    cartab.setAttribute("id", "cartab" + d.id);
                    document.getElementById('items' + d.id).appendChild(cartab);

                    document.getElementById('cartab' + d.id).innerHTML = '<tr><th><h3 id="name' + d.id +
                     '">Name :</h3></th></tr ><tr><th><h3 id="price' + d.id + '">Price :</h3></th></tr><tr><th><h3 id="brand' + d.id + '">Brand :</h3></th></tr><tr><td><input type="button" class="btn btn-danger remove" value="Remove"   onClick="removeProductCart()"/></td><td><input type="button" class="btn btn-success success" value="Buy Now" onClick="buyNow()" /></td></tr>'
                    document.getElementById('name'+d.id).innerHTML = "Name : "+d.name;
                    document.getElementById('price'+d.id).innerHTML = "Price : "+d.price;
                    document.getElementById('brand'+d.id).innerHTML = "Brand : "+d.brand;
                }
            }
        }
    })
};

/*---------------Remove from Cart-----------------------------*/


  function removeProductCart(id){
    var removeCart = localStorage.getItem('AddCart').split(',');
   for (var r = 0; r < removeCart.length; r++){
       if (removeCart[r].id == id)
        
       {
           removeCart.splice(r,1);
           console.log(removeCart);
       }
       
   }
   console.log(removeCart);
   // localStorage.setItem("AddCart");
    //window.location = "./Cart.html";
    //console.log(Cart);
};

   
function buyNow(){
   alert("Thanks for Shopping with Us!!");
   window.location = "./welcome.html";
}














  