    // $("#texto6").append(data.book.pages[16]["text"+languageIntern])
    //
    // if(!$("#texto6").find("br")){
    //
    //     }else{
    //       $("#texto6").blast({ delimiter: "word" });
    //
    //     $("#texto6").find('span').each(function(i){
    //     $(this).attr('id', 'c_' + i);
    //      });
    //     }
    //
(function(){

    var $textDOM = $("#texto6");

    $textDOM.append(data.book.pages[16]["text"+languageIntern]);
    if($textDOM.find("br")){
        $textDOM.blast({ delimiter: "word" });
        $textDOM.find('span').each(function(i){
            $(this).attr('data-time',  data.book.pages[16]["words"+languageIntern][i].start);
        });
    }

})()
