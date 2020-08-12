
if(size==20){
	$(".magazine .p18").css("background-image","url('/books/"+id+"/"+data.book.pages[18].image+"')");
	 $("#P18").removeClass("textPage");
}else if(size==22 || size==24){
	var div1 = document.createElement('div');
	div1.className = 'buttonSound';
	div1.setAttribute("id","buttonSOUND");
	var imgSound= document.createElement('img');
	imgSound.setAttribute("src","images/sound.png");
	document.getElementById('all').appendChild(div1);
	document.getElementById('buttonSOUND').appendChild(imgSound);
	// $("#texto7").append(data.book.pages[18]["text"+languageIntern])

	// if(!$("#texto7").find("br")){
	//
	// }else{
	// 	$("#texto7").blast({ delimiter: "word" });
	//
	// 	$("#texto7").find('span').each(function(i){
	// 		$(this).attr('id', 'c_' + i);
	// 	});
	// }ç
	(function(){

	    var $textDOM = $("#texto7");

	    $textDOM.append(data.book.pages[18]["text"+languageIntern]);
	    if($textDOM.find("br")){
	        $textDOM.blast({ delimiter: "word" });
	        $textDOM.find('span').each(function(i){
	            $(this).attr('data-time',  data.book.pages[18]["words"+languageIntern][i].start);
	        });
	    }

	})()
}
