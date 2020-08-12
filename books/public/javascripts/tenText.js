	// $("#texto3").append(data.book.pages[10]["text"+languageIntern])
	//
    // if(!$("#texto3").find("br")){
	//
    //     }else{
    //       $("#texto3").blast({ delimiter: "word" });
	//
    //     $("#texto3").find('span').each(function(i){
    //     $(this).attr('id', 'c_' + i);
    //      });
    //     }
(function(){

    var $textDOM = $("#texto3");

    $textDOM.append(data.book.pages[10]["text"+languageIntern]);
    if($textDOM.find("br")){
        $textDOM.blast({ delimiter: "word" });
        $textDOM.find('span').each(function(i){
            $(this).attr('data-time',  data.book.pages[10]["words"+languageIntern][i].start);
        });
    }

})()
