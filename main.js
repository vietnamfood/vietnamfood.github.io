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
	
	$("#food-2 div div img").attr("src", "./img/food/hutieumytho/0.jpg")	
	$("#food-2 div div div a").attr("href","./pages/hutieucuamytho.html")
	$("#food-2 .col-md-8 .card-body .card-title").text("Hủ tiếu cua Mỹ Tho")

	$("#food-1 div div img").attr("src", "./img/food/nuino/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/nuoinonauthitbam.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Nui nơ nấu thịt bằm")

	$("#food-1 div div img").attr("src", "./img/food/canhgachiennuocmam/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/canhgachiennuocmam.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Cánh gà chiên nước mắm")

	$("#food-1 div div img").attr("src", "./img/food/goidudusohuyet/0.jpg")	
	$("#food-1 div div div a").attr("href", "./pages/goidudusohuyet.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Gỏi đu đủ sò huyết")

	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")

	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")

	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")

	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")

	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")
})


$("li#lunch-btn").click(function(){
	$("li#lunch-btn a").addClass("active")
	$("li#main-btn a").removeClass("active")
	$("li#dinner-btn a").removeClass("active")
	$("li#drink-btn a").removeClass("active")
	$("li#fastfood-btn a").removeClass("active")
	
	//loading----------------------------------
	loadContainer();

	$("#food-1 div div img").attr("src", "./img/food/canhchuacaithao.jpg")	
	$("#food-1 div div div a").attr("href","./pages/canhchuacaithao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Canh chua cải thảo")
})


$("li#dinner-btn").click(function(){
	$("li#lunch-btn a").removeClass("active")
	$("li#main-btn a").removeClass("active")
	$("li#dinner-btn a").addClass("active")
	$("li#drink-btn a").removeClass("active")
	$("li#fastfood-btn a").removeClass("active")

	//loading----------------------------------
	loadContainer();
})


$("li#drink-btn").click(function(){
	$("li#lunch-btn a").removeClass("active")
	$("li#main-btn a").removeClass("active")
	$("li#dinner-btn a").removeClass("active")
	$("li#drink-btn a").addClass("active")
	$("li#fastfood-btn a").removeClass("active")

	//loading----------------------------------
	loadContainer();

	//food attr
	$("#food-1 div div img").attr("src", "./img/food/caphetrung/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/caphetrung.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Cà phê trứng")
	
})

$("li#fastfood-btn").click(function(){
	$("li#lunch-btn a").removeClass("active")
	$("li#main-btn a").removeClass("active")
	$("li#dinner-btn a").removeClass("active")
	$("li#drink-btn a").removeClass("active")
	$("li#fastfood-btn a").addClass("active")

	//loading----------------------------------
	loadContainer();
})