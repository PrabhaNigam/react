
var fetchData = function () {
	$.get("./products.json", function (data, status) {
		$("#display-row").empty();
		for (var d of data) {
			var item = document.createElement('div');
			item.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 col-xs-12");
			item.setAttribute("id", "item" + d.id);
			document.getElementById('display-row').appendChild(item);

			var card = document.createElement('div');
			card.setAttribute('class', 'card');
			card.setAttribute('id', 'card' + d.id);
			document.getElementById("item" + d.id).appendChild(card);

			var image = document.createElement('img');
			image.setAttribute('class', 'card-img-top');
			image.setAttribute('src', d.image[0]);
			document.getElementById('card' + d.id).appendChild(image);

			var cBody = document.createElement('div');
			cBody.setAttribute('class', 'card-body');
			cBody.setAttribute('id', 'body' + d.id);
			document.getElementById('card' + d.id).appendChild(cBody);

			var nameField = document.createElement('h4');
			nameField.setAttribute('class', 'card-title');
			nameField.setAttribute('id', 'card-title' + d.id);
			document.getElementById('card' + d.id).appendChild(nameField);
			document.getElementById('card-title' + d.id).innerHTML = d.name;

			var price = document.createElement('p');
			price.setAttribute('class', 'price');
			price.setAttribute('id', 'card-price' + d.id);
			document.getElementById('card' + d.id).appendChild(price);
			document.getElementById('card-price' + d.id).innerHTML =  d.price;

			var btn = document.createElement('button');
				btn.setAttribute('class', 'btn btn-success');
				btn.setAttribute('id', 'btnWish' + d.id);
				btn.addEventListener('click', (e) => {
					var pId=(e.target.id).slice(-2)
					if(localStorage.getItem('AddWish') != null)
					{
						var addWish = [];
						for(var item of localStorage.getItem('AddWish').split(',')){
							addWish.push(item);
						}
						addWish.push(pId);
					  localStorage.setItem('AddWish',addWish);
					  alert("Item added to Wishlist successfully!");
					}
					else{
						var addWish = [];
						addWish.push(pId)
					  localStorage.setItem('AddWish',addWish);
					  alert("Item added to Wishlist successfully!");
					  
					}
				});
				document.getElementById('card' + d.id).appendChild(btn);
				document.getElementById('btnWish' + d.id).innerHTML = "Add to Wishlist";


			var Addbtn = document.createElement('button');
				Addbtn.setAttribute('class', 'btn btn-primary');
				Addbtn.setAttribute('id', 'btnCart' + d.id);
				Addbtn.addEventListener('click', (c) => {
					
					var pId=(c.target.id).slice(-2)
					if(localStorage.getItem('AddCart') != null)
					{
						var addCart = [];
						for(var item of localStorage.getItem('AddCart').split(',')){
							addCart.push(item);
							
						}
						addCart.push(pId);
					  localStorage.setItem('AddCart',addCart);
					  alert("Item added to cart successfully!");
					}
					else{
						var addCart = [];
						addCart.push(pId)
					  localStorage.setItem('AddCart',addCart);
					  alert("Item added to cart successfully!");
					  
					}
				});
				document.getElementById('card' + d.id).appendChild(Addbtn);
				document.getElementById('btnCart' + d.id).innerHTML = "Add to Cart";

		}
	});
}


$(document).ready(function () {
	$.get("./category.json", function (data, status) {

		for (var category of data) {
			//console.log(category.category);
			var subtype = "";
			for (var item of category.sub_category) {

				subtype += "<li  style='list-style-type: none'><a onClick='categorywise($(this).text())'>" + item.category + "</a></li>";
				//console.log(subtype)
			}
			var type = "<li  class=\"dropdown\"><a type=\"button\" data-toggle=\"collapse\">" + category.category + " </a><ul class='sub-category'>" + subtype +
				"</ul></li>";
			$(".type").append(type);
		}
		$(".sub-category").hide();
		$(".type li").not($('.type sub-category')).click(function () {
			$('ul.sub-category').not($(this).children()).slideUp();
			$(this).children("ul.sub-category").slideToggle();
		});


	});
});

/*----------Populating category wise------------*/
var AllProducts = [];
var categorywise = function (sub_category) {

	$.get("./products.json", function (data) {
		AllProducts = [];
		for (var g of data) {
			if (g.sub_category == sub_category) {
				AllProducts.push(g);
			}
			//console.log(AllProducts)
			$("#display-row").empty();
			for (var d of AllProducts) {
				var item = document.createElement('div');
				item.setAttribute("class", "col-lg-4 col-md-4 col-sm-6 col-xs-12");
				item.setAttribute("id", "item" + d.id);
				document.getElementById('display-row').appendChild(item);



				var card = document.createElement('div');
				card.setAttribute('class', 'card');
				card.setAttribute('id', 'card' + d.id);
				document.getElementById("item" + d.id).appendChild(card);



				var image = document.createElement('img');
				image.setAttribute('class', 'card-img-top');
				image.setAttribute('src', d.image[0]);
				document.getElementById('card' + d.id).appendChild(image);



				var cBody = document.createElement('div');
				cBody.setAttribute('class', 'card-body');
				cBody.setAttribute('id', 'body' + d.id);
				document.getElementById('card' + d.id).appendChild(cBody);



				var nameField = document.createElement('h4');
				nameField.setAttribute('class', 'card-title');
				nameField.setAttribute('id', 'card-title' + d.id);
				document.getElementById('card' + d.id).appendChild(nameField);
				document.getElementById('card-title' + d.id).innerHTML = d.name;



				var price = document.createElement('p');
				price.setAttribute('class', 'price');
				price.setAttribute('id', 'card-price' + d.id);
				document.getElementById('card' + d.id).appendChild(price);
				document.getElementById('card-price' + d.id).innerHTML = d.price;


/*--------------function for add to wishlist button----------------*/
				var btn = document.createElement('button');
				btn.setAttribute('class', 'btn btn-success');
				btn.setAttribute('id', 'btnWish' + d.id);
				btn.addEventListener('click', (e) => {
					var pId=(e.target.id).slice(-2)
					if(localStorage.getItem('AddWish') != null)
					{
						var addWish = [];
						for(var item of localStorage.getItem('AddWish').split(',')){
							addWish.push(item)
						}
						addWish.push(pId)
					  localStorage.setItem('AddWish',addWish);
					  alert("Item added to Wishlist successfully!");
					}
					else{
						var addWish = [];
						addWish.push(d.id)
					  localStorage.setItem('AddWish',addWish);
					 
					  
					}
				});
				document.getElementById('card' + d.id).appendChild(btn);
				document.getElementById('btnWish' + d.id).innerHTML = "Add to Wishlist";



/*----------------------Function for Add to Cart button -----------------------------------*/
				var Addbtn = document.createElement('button');
				Addbtn.setAttribute('class', 'btn btn-primary');
				Addbtn.setAttribute('id', 'btnCart' + d.id);
				Addbtn.addEventListener('click', (c) => {
					
					var pId=(c.target.id).slice(-2)
					if(localStorage.getItem('AddCart') != null)
					{
						var addCart = [];
						for(var item of localStorage.getItem('AddCart').split(',')){
							addCart.push(item)
							
						}
						addCart.push(pId)
					  localStorage.setItem('AddCart',addCart);
					  alert("Item added to cart successfully!");
					}
					else{
						var addCart = [];
						addCart.push(d.id)
					  localStorage.setItem('AddCart',addCart);
					  alert("Item added to cart successfully!");
					  
					}
				});
				document.getElementById('card' + d.id).appendChild(Addbtn);
				document.getElementById('btnCart' + d.id).innerHTML = "Add to Cart";
			}
		}
	});
};
