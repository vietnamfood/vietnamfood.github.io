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
	
	$("#food-2 div div img").attr("src", "./img/food/banhmikhoailangtim/banhmi.jpeg")	
	$("#food-2 div div div a").attr("href","./pages/banhmikhoailangtim.html")
	$("#food-2 .col-md-8 .card-body .card-title").text("Bnah1 mì khoai lang tím")
	$("#food-2 .col-md-8 .card-body .describle").text("Vào những dịp cuối tuần sum họp của gia đình, hoặc những ngày lễ như Tết Trung thu, bạn có muốn làm một món bánh thơm ngon để thưởng thức cùng với những người thân thương trong gia đình. Mọi người cùng nhau nhâm nhi miếng bánh, uống một tách trà nóng, cùng nhau trò chuyện, tăng không gian gần gũi và ấm cúng. Cooky xin giới thiệu cho bạn món Bánh mì khoai lang tím vừa dễ làm lại thơm mềm, vừa đẹp mắt sẽ làm hấp dẫn cả nhà đấy. Tham khảo cách làm bánh mì khoai lang tím dưới đây bạn nhé!")
	$("#food-2 .col-md-8 .card-body .date .text-muted").text("Last updated 12/6/2020")

	$("#food-3 div div img").attr("src", "./img/food/chaohau/chaohao.jpg")	
	$("#food-3 div div div a").attr("href","./pages/chaohauhatsen.html")
	$("#food-3 .col-md-8 .card-body .card-title").text("Cháo hàu hạt sen")
	$("#food-3 .col-md-8 .card-body .describle").text("Cháo hàu hạt sen là một sự kết hợp hoàn hảo và đầy dưỡng chất, cháo hàu hạt sen không những tốt cho gia đình bạn mà đặc biệt với các bé biếng ăn nữa đấy. Hãy cùng Barona vào bếp để có một bữa sáng đầy đủ năng lượng cho cả gia đình bạn nhé!")
	$("#food-3 .col-md-8 .card-body .date .text-muted").text("Last updated 10/6/2020")

	$("#food-4 div div img").attr("src", "./img/food/comcahoi/0.jpg")	
	$("#food-4 div div div a").attr("href","./pages/comgaoluccahoivisa.html")
	$("#food-4 .col-md-8 .card-body .card-title").text("Cơm gạo lức cá hồi vị sả")
	$("#food-4 .col-md-8 .card-body .describle").text("Nếu như cơm gạo lứt là phần không thể thiếu dành cho những bạn muốn áp dụng chế độ ăn kiêng giảm cân hay ăn uống lành mạnh. Bạn có thể chọn món cơm gạo lứt cá hồi được tẩm ướp xốt vị sả của Barona, thì khẩu phần ăn dinh dưỡng của bạn hẳn là đã đủ chất mà cũng chẳng lo ngán đâu")
	$("#food-4 .col-md-8 .card-body .date .text-muted").text("Last updated 11/6/2020")

	$("#food-5 div div img").attr("src", "./img/food/hutieumytho/0.jpg")	
	$("#food-5 div div div a").attr("href","./pages/hutieucuamytho.html")
	$("#food-5 .col-md-8 .card-body .card-title").text("Hủ tiếu cua mỹ tho")
	$("#food-5 .col-md-8 .card-body .describle").text("Hủ tiếu cua Mỹ Tho được nhắc đến như một đặc sản của Mỹ Tho. Những ai có dịp du hí đến vùng đất này cũng nên thử qua một lần để trải nghiệm.Phần nước dùng đậm đà mang hương vị của xương ống, mực nướng và các loại củ làm ngọt nước. Tô hủ tiếu có tôm, thịt bằm, tim, gan, có rau thơm...thêm một chút thịt cua. Nhìn thôi đã ưng ý và bắt mắt, ăn vào lại càng hài lòng. Hãy cùng Cooky vào bếp để nấu món đặc sản hủ tiếu cua Mỹ Tho chiêu đãi gia đình nhé.")
	$("#food-5 .col-md-8 .card-body .date .text-muted").text("Last updated 8/6/2020")
	
	$("#food-6 div div img").attr("src", "./img/food/mitepmo/0.jpg")	
	$("#food-6 div div div a").attr("href","./pages/mitrontepmo.html")
	$("#food-6 .col-md-8 .card-body .card-title").text("Mì trộn tép mỡ")
	$("#food-6 .col-md-8 .card-body .describle").text("Mì trộn tóp mỡ, món ăn với cách chế biến đơn giản nhưng hương vị đặc sắc vô cùng. Sợi mì mềm dai,quyện với tóp mỡ vừa bùi vừa béo, thêm nhiều topping ăn kèm như: thịt bò thanh ngọt, tươi ngon của tôm, thanh mát của rau cải, thêm phần trứng ốp-la như tan chảy trong miệng, dùng kèm với tương ớt cay nồng làm tăng thêm hương vị món ăn thì ngon hết sẩy rồi.")
	$("#food-6 .col-md-8 .card-body .date .text-muted").text("Last updated 7/6/2020")

	$("#food-7 div div img").attr("src", "./img/food/nuino/0.jpg")	
	$("#food-7 div div div a").attr("href","./pages/nuinonauthitbam.html")
	$("#food-7 .col-md-8 .card-body .card-title").text("Nui nơ nấu thịt bằm")
	$("#food-7 .col-md-8 .card-body .describle").text("Nui nơ nấu thịt bằm là món ăn sáng nhanh gọn, mới lạ thay cho món nui truyền thống. Đặc biệt là với cách nấu nui nơ thịt bằm này, màu sắc của nui nơ sẽ giúp cả nhà ăn ngon miệng, đặc biệt thu hút trẻ em. Với cách nấu nơ mềm, nhưng không nát, vẫn giữ được màu sắc đặc trưng, nước lèo đậm đà, tin chắc cả nhà sẽ có một bữa ăn sáng đủ chất đấy. ")
	$("#food-7 .col-md-8 .card-body .date .text-muted").text("Last updated 7/6/2020")

	$("#food-8 div div img").attr("src", "./img/food/salatbap/0.jpg")	
	$("#food-8 div div div a").attr("href","./pages/salatbapnuhoangdo.html")
	$("#food-8 .col-md-8 .card-body .card-title").text("Salat bắp nữ hoàng đỏ")
	$("#food-8 .col-md-8 .card-body .describle").text("Bắp Nữ hoàng đỏ là một loại bắp hẳn còn khá mới mẻ với người tiêu dùng, đây là giống bắp ngọt đầu tiên tại Việt Nam có thể ăn sống mà không cần phải trải qua chế biến. Loại bắp này có thể kết hợp với nhiều nguyên liệu để tạo thành các món ăn khác nhau, trong đó có món salad bắp với màu sắc bắt mắt và hấp dẫn. Salad bắp Nữ hoàng đỏ là một món salad mới, lạ nhưng rất ngon và bổ dưỡng rất thích hợp dùng trong mỗi bữa cơm gia đình. Hãy cùng Nova vào bếp thực hiện món salad bắp Nữ hoàng đỏ dễ dàng và siêu ngon này nhé!")
	$("#food-8 .col-md-8 .card-body .date .text-muted").text("Last updated 10/6/2020")

	$("#food-9 div div img").attr("src", "./img/food/salattomhum/salat.jpg")	
	$("#food-9 div div div a").attr("href","./pages/salattomhum.html")
	$("#food-9 .col-md-8 .card-body .card-title").text("Salat tôm hùm")
	$("#food-9 .col-md-8 .card-body .describle").text("Salad Tôm Hùm , món ngon dễ làm cho bạn, chỉ trong tích tắc. Giải cứu tôm hùm miền Trung, áp dụng ngay cách làm salad tôm hùm kết hợp với bắp Mỹ, bơ trái và sốt trộn mayonnaise, chua chua và béo béo cực hấp dẫn. Đảm bảo các bé nhà bạn sẽ thấy thích thú.")
	$("#food-9 .col-md-8 .card-body .date .text-muted").text("Last updated 7/6/2020")

	$("#food-10 div div img").attr("src", "./img/food/xucxichphomai/cooky-recipe-cover-r39840.jpg")	
	$("#food-10 div div div a").attr("href","./pages/xucxichphomai.html")
	$("#food-10 .col-md-8 .card-body .card-title").text("Xúc xích phô mai")
	$("#food-10 .col-md-8 .card-body .describle").text("Xúc xích phô mai là món ăn vặt chiên giòn tan được áo một lớp bột và khoai tây bên ngoài, ăn kèm tương cà và sốt mayonnaise ngon lành. Các bạn lưu lại cách làm ngay nhé!")
	$("#food-10 .col-md-8 .card-body .date .text-muted").text("Last updated 10/6/2020")

	
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