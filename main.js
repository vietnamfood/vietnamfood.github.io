// Menu click
$("li#main-btn").click(function(){
	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")
	
})


$("li#lunch-btn").click(function(){
	$("#food-1 div div img").attr("src", "./img/food/canhchuacaithao.jpg")	
	$("#food-1 div div div a").attr("href","./pages/canhchuacaithao.html")
	$("#food-1 .col-md-8 .card-body .card-title").text("Canh chua cải thảo")
})


$("li#dinner-btn").click(function(){
	alert("Dinner")
})


$("li#drink-btn").click(function(){
	alert("drink")
})
