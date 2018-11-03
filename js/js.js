$(document).ready(function() {


var products = [
  {'name':'Snikers #1', 'price':125.22, 'image':'bg-01.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #2', 'price':180.42, 'image':'bg-02.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #3', 'price':145.65, 'image':'bg-03.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #4', 'price':565.32, 'image':'bg-04.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #5', 'price':387.32, 'image':'bg-05.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #6', 'price':123.33, 'image':'bg-06.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #7', 'price':876.21, 'image':'bg-07.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #8', 'price':871.25, 'image':'bg-08.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #9', 'price':125.22, 'image':'bg-08.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #10', 'price':180.42, 'image':'bg-07.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #11', 'price':145.65, 'image':'bg-06.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #12', 'price':565.32, 'image':'bg-05.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #13', 'price':387.32, 'image':'bg-04.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #14', 'price':123.33, 'image':'bg-03.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #15', 'price':876.21, 'image':'bg-02.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #16', 'price':871.25, 'image':'bg-01.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #17', 'price':876.21, 'image':'bg-07.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #18', 'price':123.33, 'image':'bg-06.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #19', 'price':876.21, 'image':'bg-07.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #20', 'price':871.25, 'image':'bg-08.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  {'name':'Snikers #21', 'price':871.26, 'image':'bg-08.jpg', 'description':'Some quick example text to build on the card title and make up the bulk of the cards content.'},
];


function createNewElement(tag, innerContent=null, classStr=null, attr=null){
 var el = document.createElement(tag);
 el.innerHTML = (innerContent)?innerContent:"";
 el.className = (classStr)?classStr:"";

 if(attr){
 	attr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));
 }

 return el;
}

function createCard(product){
 var link = createNewElement("a", "Add to cart", "btn btn-primary",[{"name":"href","value":"#"}]);
 var p = createNewElement("p", product.description, "card-text");
 var title = createNewElement("h5", product.name, "card-title");
 var price = createNewElement("h4", product.price, "price");
 var cardBody = attachChilderToParant(createNewElement("div",null,"card-body"),[title,price,p,link]);

 var image = createNewElement("img", null, "card-img-top", [{"name":"src", "value":"images/"+product.image},
 	                                                        {"name":"alt", "value":product.name}]); 

 var card = attachChilderToParant(createNewElement("div",null, "card"), [image,cardBody]);
 
 var catalogItem = attachChilderToParant(createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item"),[card]);


 return catalogItem;
}

function attachChilderToParant(html, array_el){
   array_el.map((el)=>html.appendChild(el));
   return html;
}



var catalog = document.getElementById("catalog");

var newProducts = products.slice(0,8);

newProducts.map((el)=>catalog.appendChild(createCard(el)));





but.onclick = function() {	
  	
 var name = document.getElementById('name').value;

	while (catalog.firstChild) {
    	   catalog.removeChild(catalog.firstChild); }

	newProducts = products.filter((x)=> (x.name.indexOf(name)!= -1) ? x:null ) ; 

	newProducts.map((el)=>catalog.appendChild(createCard(el)));
	
	how_much.innerHTML = "Вот вам ваши кросовочки";
};

 	




 
for(i=0; i<products.length; i++){
    if(i%8==0){
       pag.appendChild(createNewElement("li", (i/8+1), "btn btn-primary", [{"name":"id","value":"pag"+(i/8+1)}]));
    }
};





how_much.innerHTML = "На этой странице всего лишь " + newProducts.length + " пар кросачей из " + products.length +" возможных.";


var li = document.querySelectorAll("#pag li");
	for(var i = 0;  i <li.length; i++){
  		li[i].onclick = function (){

		var x = this.textContent*8-8;
		var y = this.textContent*8;

		var newProducts = products.slice(x,y);

    while (catalog.firstChild) {
    catalog.removeChild(catalog.firstChild); }

newProducts.map((el)=>catalog.appendChild(createCard(el)));
how_much.innerHTML = "И ещё " + newProducts.length + " штук";
  }

}




});// documenr ready