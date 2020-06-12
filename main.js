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
	$("#food-1 div div img").attr("src", "./img/food/caphetrung/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/caphetrung.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Cà phê trứng")
	$("#food-1 .col-md-8 .card-body .describle").text("Cafe trứng là món thức uống đặc trưng của Hà Nội.")
	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

	$("#food-2 div div img").attr("src", "./img/food/cocktailcherryamaretto/0.jpg")	
	$("#food-2 div div div a").attr("href","./pages/cocktailcherryamaretto.html")
	$("#food-2 .col-md-8 .card-body .card-title").text("Cocktail Cherry Amaretto")
	$("#food-2 .col-md-8 .card-body .describle").text("Cocktail với vị cherry chua chua, ngọt ngọt hòa cùng rượu Amaretto thơm lừng cực ngon và hấp dẫn rất dễ làm nên bạn hãy thử làm ngay nhé.")
	$("#food-2 .col-md-8 .card-body .date .text-muted").text("Last updated 08/06/2020")

	$("#food-3 div div img").attr("src", "./img/food/duadam/0.jpg")	
	$("#food-3 div div div a").attr("href","./pages/duadam.html")
	$("#food-3 .col-md-8 .card-body .card-title").text("Dừa dầm")
	$("#food-3 .col-md-8 .card-body .describle").text("Dừa dầm Hải Phòng - món ăn vặt giải nhiệt cực hấp dẫn cho những tín đồ hảo ngọt.")
	$("#food-3 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

	$("#food-4 div div img").attr("src", "./img/food/milodalgona/0.jpeg")	
	$("#food-4 div div div a").attr("href","./pages/milodalgona.html")
	$("#food-4 .col-md-8 .card-body .card-title").text("Milo dalgona")
	$("#food-4 .col-md-8 .card-body .describle").text(" Dành cho những tín đồ không không thích vị đắng của cà phê.")
	$("#food-4 .col-md-8 .card-body .date .text-muted").text("Last updated 08/06/2020")

	$("#food-5 div div img").attr("src", "./img/food/nuocchanhsahatchia/0.jpg")	
	$("#food-5 div div div a").attr("href","./pages/nuocchanhsahatchia.html")
	$("#food-5 .col-md-8 .card-body .card-title").text("Nước chanh sả hạt chia")
	$("#food-5 .col-md-8 .card-body .describle").text("Nước Chanh Hạt Chia Hương Sả là thức uống detox ngon lành lại đơn giản tại nhà.")
	$("#food-5 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

	$("#food-6 div div img").attr("src", "./img/food/suachuauong/0.jpg")	
	$("#food-6 div div div a").attr("href","./pages/suachuauong.html")
	$("#food-6 .col-md-8 .card-body .card-title").text("Sữa chua uống")
	$("#food-6 .col-md-8 .card-body .describle").text("Ngon tuyệt cú mèo.")
	$("#food-6 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

	$("#food-7 div div img").attr("src", "./img/food/suadauphong/0.jpg")	
	$("#food-7 div div div a").attr("href","./pages/suadauphong.html")
	$("#food-7 .col-md-8 .card-body .card-title").text("Sữa đậu phộng")
	$("#food-7 .col-md-8 .card-body .describle").text("Đậu phộng không chỉ được được chế biến thành nhiều món ăn hấp dẫn mà còn là thức uống rất tốt cho sức khỏe.")
	$("#food-7 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

	$("#food-8 div div img").attr("src", "./img/food/suagaoluc/0.jpg")	
	$("#food-8 div div div a").attr("href","./pages/suagaoluc.html")
	$("#food-8 .col-md-8 .card-body .card-title").text("Sữa gạo lức")
	$("#food-8 .col-md-8 .card-body .describle").text("Sữa Gạo Lức là thức uống từ hạt vô cùng thơm ngon.")
	$("#food-8 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

	$("#food-9 div div img").attr("src", "./img/food/suatuoitranchauduongnau/0.jpg")	
	$("#food-9 div div div a").attr("href","./pages/suatuopitranchauduongnau.html")
	$("#food-9 .col-md-8 .card-body .card-title").text("Sữa tươi trân châu đường nâu")
	$("#food-9 .col-md-8 .card-body .describle").text("Vị béo ngậy của sữa tươi thanh trùng cùng trân châu dai dai, ngọt ngọt - loại topping gây sốt.")
	$("#food-9 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

	$("#food-10 div div img").attr("src", "./img/food/tratranchauhoadaubiec/0.jpg")	
	$("#food-10 div div div a").attr("href","./pages/tranchauhoadaubiec.html")
	$("#food-10 .col-md-8 .card-body .card-title").text("Trân châu hoa đậu biếc")
	$("#food-10 .col-md-8 .card-body .describle").text("Trà hoa Đậu Biếc hay còn được gọi với cái tên thân thương trà Lam Hồ Điệp với màu tim tím đặc trưng.")
	$("#food-10 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")
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
	$("#food-1 div div img").attr("src", "./img/food/banhkem/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhkemredvelvet.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh kem Red Velvet")
	$("#food-1 .col-md-8 .card-body .describle").text("Bánh Red Velvet là sự kết hợp hài hòa của từng lớp bánh đỏ thắm đan xen với những lớp kem trắng mịn, bồng bềnh trông thật thích mắt và ngon miệng.")
	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 12/06/2020")
	
	$("#food-2 div div img").attr("src", "./img/food/banhlantranchau/0.jpg")	
	$("#food-2 div div div a").attr("href","./pages/banhlantrasua.html")
	$("#food-2 .col-md-8 .card-body .card-title").text("Bánh plan trà sữa")
	$("#food-2 .col-md-8 .card-body .describle").text("Bạn thích bánh flan, bạn cũng thích nhâm nhi trà sữa với trân châu đường nâu ngọt lịm. Kết hợp 2 món ăn hấp dẫn này lại với nhau để tạo thành món bánh flan trà sữa trân châu đường đen hấp dẫn.")
	$("#food-2 .col-md-8 .card-body .date .text-muted").text("Last updated 12/06/2020")
})