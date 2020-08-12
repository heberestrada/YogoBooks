

if(size==20){
	id=array[1].substr(0)
	$(".magazine .p22").css("background-image","url('/books/"+id+"/"+data.book.pages[22].image+"')");
}else if(size==22 || size==24){
	// $("#texto9").append(data.responseJSON.book.pages[22]["text"+languageIntern])

	// if(!$("#texto9").find("br")){
    //
	// }else{
	// 	$("#texto9").blast({ delimiter: "word" });
    //
	// 	$("#texto9").find('span').each(function(i){
	// 		$(this).attr('id', 'c_' + i);
	// 	});
	// }
    //
    (function(){

        var $textDOM = $("#texto9");

        $textDOM.append(data.book.pages[22]["text"+languageIntern]);
        if($textDOM.find("br")){
            $textDOM.blast({ delimiter: "word" });
            $textDOM.find('span').each(function(i){
                $(this).attr('data-time',  data.book.pages[22]["words"+languageIntern][i].start);
            });
        }

    })()
}
