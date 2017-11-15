
var Product = require('../models/product');
var mongoose =require('mongoose');

mongoose.connect("mongodb://localhost/shopping_cart");

        var products = [
		    new Product({
		    	imagePath: 'http://cdn2.bigcommerce.com/server3300/iktp8e2/products/918/images/4469/MAGGI_MASALA_NOODLES_75G__34665.1393817983.220.220.JPG?c=2',
		    	title: 'Maggi Noodles',
		    	description: 'Tasty',
		    	price: 15

		    }),
		    new Product({
		    	imagePath: 'http://www.cocacolasabco.com/system/images/BAhbB1sHOgZmSSI5MjAxNC8wNy8xOC8xMC8zMS8zOS83NjUvY29jYWNvbGFfdW5jcm9wcGVkX3RodW1iLmpwZwY6BkVUWwg6BnA6CnRodW1iSSIMMTg0eDE4NAY7BlQ/cocacola_uncropped_thumb.jpg',
		    	title: 'Coca-cola',
		    	description: 'coldrink',
		    	price: 50

		    }),
		    new Product({
		    	imagePath: 'https://pimg.tradeindia.com/01516045/s/5/Aloo-Bhujia-Namkeen.jpg',
		    	title: 'Namkeen aloo bhujia',
		    	description: 'Bikano',
		    	price: 44

		    }),
		    new Product({
		    	imagePath: 'http://www.spicesofindia.co.uk/acatalog/Chings-Veg-Hakka-Noodles-250px.jpg',
		    	title: 'Chings',
		    	description: 'Veg hakka noodles',
		    	price: 20

		    }),
		    new Product({
		    	imagePath: 'http://www.spicesofindia.co.uk/acatalog/Britannia-Good-Day-Biscuits-Cashew-250px.jpg',
		    	title: 'Good-day',
		    	description: 'Biscuit',
		    	price: 20

		    }),
		    new Product({
		    	imagePath: 'http://www.spicesofindia.co.uk/acatalog/Britannia-Good-Day-Biscuits-Pistachio-and-Almond-250px.jpg',
		    	title: 'good day',
		    	description: 'butter',
		    	price: 25

		    }),
		    
		];

		var done=0;
		for(var i=0;i<products.length;i++) {
			products[i].save(function(err,result) {
				done++;
				if(done===products.length){
					exit();
				}

			});
		}

	function exit(){
		mongoose.disconnect();
	}