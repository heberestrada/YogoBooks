(function(){

    var $textDOM = $("#texto1");

    $textDOM.append(data.book.pages[6]["text"+languageIntern]);
    if($textDOM.find("br")){
        $textDOM.blast({ delimiter: "word" });
        $textDOM.find('span').each(function(i){
            $(this).attr('data-time',  data.book.pages[6]["words"+languageIntern][i].start);
        });
    }

})()
