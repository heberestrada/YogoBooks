    // $("#texto5").append(data.book.pages[14]["text"+languageIntern])
    //
    // if(!$("#texto5").find("br")){
    //
    //     }else{
    //       $("#texto5").blast({ delimiter: "word" });
    //
    //     $("#texto5").find('span').each(function(i){
    //     $(this).attr('id', 'c_' + i);
    //      });
    //     }
(function(){

    var $textDOM = $("#texto5");

    $textDOM.append(data.book.pages[14]["text"+languageIntern]);
    if($textDOM.find("br")){
        $textDOM.blast({ delimiter: "word" });
        $textDOM.find('span').each(function(i){
            $(this).attr('data-time',  data.book.pages[14]["words"+languageIntern][i].start);
        });
    }

})()
