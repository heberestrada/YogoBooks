

if(size==20 || size==22){

	$(".magazine .p20").css("background-image","url('/books/"+id+"/"+data.book.pages[20].image+"')");
	$("#P20").removeClass("textPage");
}else if(size==24){

	var div1 = document.createElement('div');
	div1.className = 'buttonSound';
	div1.setAttribute("id","buttonSOUND2");
	var imgSound= document.createElement('img');
	imgSound.setAttribute("src","images/sound.png");
	document.getElementById('all2').appendChild(div1);
	document.getElementById('buttonSOUND2').appendChild(imgSound);
	// $("#texto8").append(data.book.pages[20]["text"+languageIntern])

	// if(!$("#texto8").find("br")){
    //
	// }else{
	// 	$("#texto8").blast({ delimiter: "word" });
    //
	// 	$("#texto8").find('span').each(function(i){
	// 		$(this).attr('id', 'c_' + i);
	// 	});
	// }
    //
    (function(){

        var $textDOM = $("#texto8");

        $textDOM.append(data.book.pages[20]["text"+languageIntern]);
        if($textDOM.find("br")){
            $textDOM.blast({ delimiter: "word" });
            $textDOM.find('span').each(function(i){
                $(this).attr('data-time',  data.book.pages[20]["words"+languageIntern][i].start);
            });
        }

    })()
}
