'use strict'

$(document).ready(function() {
	var ads = [
	//1
		{
			title: "Photo Play Paper Collections",
			description: "Don't miss these brand new Photo Play Paper Collections!",
			start_date: "2018-09-01",
			end_date: "2018-12-30",
			offer: "50% Off",
			num_of_products: "7 AVAILABLE"
		},
	//2	
		{
			title: "Foil & Foiling Accessories",
			description: "Once you add this color & shine to your paper, wood, fabric, or other porous surfaces you'll want to do it over and over again.",
			start_date: "2018-08-01",
			end_date: "2018-11-30",
			offer: "Save $25",
			num_of_products: "10 AVAILABLE"
		},	
		{
			title: "The Halloween Shop",
			description: "Shop all our spooky supplies in one place!",
			start_date: "2018-09-01",
			end_date: "2018-10-30",
			offer: "35% Off",
			num_of_products: "8 AVAILABLE"
		},
		{
			title: "Waffle Flower Crafts Stamps & Dies",
			description: "We can't stop talking about these new Waffle Flower Stamps and Dies!",
			start_date: "2018-09-01",
			end_date: "2018-09-30",
			offer: "Save $30",
			num_of_products: "19 AVAILABLE"
		},
		{
			title: "Die Cutting & Embossing",
			description: "Save on Die Cutting and Embossing Folders at Blitsy! Shop hundreds of amazing Dies and Embossing Folders from brilliant designers at Sizzix, Spellbinders, and CottageCutz (to name a few!)",
			start_date: "2018-08-01",
			end_date: "2018-12-30",
			offer: "Save $50",
			num_of_products: "23 AVAILABLE"
		},
		{
			title: "American Crafts Tools, Paper Collections & More",
			description: "American Crafts prides themselves on innovation with their scrapbooking products. You can find crafting embellishments, stickers, and more.",
			start_date: "2018-08-01",
			end_date: "2018-11-30",
			offer: "45% Off",
			num_of_products: "35 AVAILABLE"
		},
		{
			title: "The Fall Shop!",
			description: "The Fall Shop has everything you need for the upcoming season!",
			start_date: "2018-09-01",
			end_date: "2018-09-30",
			offer: "60% Off",
			num_of_products: "50 AVAILABLE"
		},
		{
			title: "Moxy Glitter, Embossing Powers, & More!",
			description: "Eye catching glitters from this new brand by American Crafts!",
			start_date: "2018-09-01",
			end_date: "2018-09-30",
			offer: "10% Off",
			num_of_products: "24 AVAILABLE"
		},
		{
			title: "Brutus Monroe Stamps, Dies, Tools & More",
			description: "On Sale Now! New Arrivals from Brutus Monroe",
			start_date: "2018-08-01",
			end_date: "2018-10-30",
			offer: "Save $75",
			num_of_products: "10 AVAILABLE"
		},
		{
			title: "Fiskars Tools & Accessories",
			description: "Shop All the New Tools & Accessories that will make your life easier.",
			start_date: "2018-08-01",
			end_date: "2018-09-30",
			offer: "15% Off",
			num_of_products: "5 AVAILABLE"
		},
		]

	renderAds(ads);

	document.getElementById("orderList").onchange=function() {
		sortAds(this.value, ads);
    }
})

function sortAds(sortKey, ads){
	    if (sortKey=="") return; // please select - possibly you want something else here

	    var sortedAds= ads.sort(function(a,b){
	    	var x = a[sortKey]; var y = b[sortKey];
	    	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	    });

	    renderAds(sortedAds);
}

function renderAds(ads){
	var adsHTML = $.map(ads, function(ad) {
			    return`
			    <div class= "adslayout">
				    <div class= "left">
					  <span class= "info boxhalf" id= "play-paper">
						  <h5 class= "title">${ad["title"]}</h5>
						  <p class="description">${ad["description"]}</p>
							  <span class="dates">
							  ${ad["start_date"]+ " | " + ad["end_date"]}
							  </span>
								  <span class="number-of-product">
								  ${ad["num_of_products"]}
								  </span>
					  </span>
					</div>

					<div class="right">       
					  <button class="offer">${ad["offer"]}</button>
				    </div>
				</div>`
				    
		})
	$('#ads').html(adsHTML);
}





  


