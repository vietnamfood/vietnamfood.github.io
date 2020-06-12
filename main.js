var timer;

function loadContainer() {
	$("#menu-container").attr("style","display:none")
	$("#loader").attr("style","display:block")
	timer = setTimeout(showPage, 1500);
}

function showPage() {
	$("#menu-container").attr("style","display:block")
	$("#loader").attr("style","display:none")
}

// Menu click

// ==================================== main ==================================
$("li#main-btn").click(function(){
	//=====================================
	$("li#lunch-btn a").removeClass("active")
	$("li#main-btn a").addClass("active")
	$("li#dinner-btn a").removeClass("active")
	$("li#drink-btn a").removeClass("active")
	$("li#fastfood-btn a").removeClass("active")
	
	//=======================================
	loadContainer();
	

	//food attr
	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")
	$("#food-1 .col-md-8 .card-body .describle").text("Bánh mì chảo là món ăn buổi sáng được hầu hết mọi người ưa thích.")
	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 6/6/2020")
	
	$("#food-2 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-2 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-2 .col-md-8 .card-body .card-title").text("Bánh mì chảo")
	$("#food-2 .col-md-8 .card-body .describle").text("Bánh mì chảo là món ăn buổi sáng được hầu hết mọi người ưa thích.")
	$("#food-2 .col-md-8 .card-body .date .text-muted").text("Last updated 6/6/2020")

})


// ==================================== lunch ==================================
$("li#lunch-btn").click(function(){
	$("li#lunch-btn a").addClass("active")
	$("li#main-btn a").removeClass("active")
	$("li#dinner-btn a").removeClass("active")
	$("li#drink-btn a").removeClass("active")
	$("li#fastfood-btn a").removeClass("active")
	
	//loading----------------------------------
	loadContainer();

	//food attr
	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")
	$("#food-1 .col-md-8 .card-body .describle").text("Bánh mì chảo là món ăn buổi sáng được hầu hết mọi người ưa thích.")
	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 6/6/2020")

	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")
	$("#food-1 .col-md-8 .card-body .describle").text("Bánh mì chảo là món ăn buổi sáng được hầu hết mọi người ưa thích.")
	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 6/6/2020")
})


// ==================================== dinner ==================================
$("li#dinner-btn").click(function(){
	$("li#lunch-btn a").removeClass("active")
	$("li#main-btn a").removeClass("active")
	$("li#dinner-btn a").addClass("active")
	$("li#drink-btn a").removeClass("active")
	$("li#fastfood-btn a").removeClass("active")

	//loading----------------------------------
	loadContainer();

	//food attr
	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")
	$("#food-1 .col-md-8 .card-body .describle").text("Bánh mì chảo là món ăn buổi sáng được hầu hết mọi người ưa thích.")
	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 6/6/2020")

	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")
	$("#food-1 .col-md-8 .card-body .describle").text("Bánh mì chảo là món ăn buổi sáng được hầu hết mọi người ưa thích.")
	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 6/6/2020")

})


// ==================================== drink ==================================
$("li#drink-btn").click(function(){
	$("li#lunch-btn a").removeClass("active")
	$("li#main-btn a").removeClass("active")
	$("li#dinner-btn a").removeClass("active")
	$("li#drink-btn a").addClass("active")
	$("li#fastfood-btn a").removeClass("active")

	//loading----------------------------------
	loadContainer();

	//food attr
	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")
	$("#food-1 .col-md-8 .card-body .describle").text("Bánh mì chảo là món ăn buổi sáng được hầu hết mọi người ưa thích.")
	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 6/6/2020")

	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")
	$("#food-1 .col-md-8 .card-body .describle").text("Bánh mì chảo là món ăn buổi sáng được hầu hết mọi người ưa thích.")
	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 6/6/2020")
	
})


// ==================================== fastfood ==================================
$("li#fastfood-btn").click(function(){
	$("li#lunch-btn a").removeClass("active")
	$("li#main-btn a").removeClass("active")
	$("li#dinner-btn a").removeClass("active")
	$("li#drink-btn a").removeClass("active")
	$("li#fastfood-btn a").addClass("active")

	//loading----------------------------------
	loadContainer();

	//food attr
	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")
	$("#food-1 .col-md-8 .card-body .describle").text("Bánh mì chảo là món ăn buổi sáng được hầu hết mọi người ưa thích.")
	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 6/6/2020")
	

})