    // $("#texto4").append(data.book.pages[12]["text"+languageIntern])
    //
    // if(!$("#texto4").find("br")){
    //
    //     }else{
    //       $("#texto4").blast({ delimiter: "word" });
    //
    //     $("#texto4").find('span').each(function(i){
    //     $(this).attr('id', 'c_' + i);
    //      });
    //     }
(function(){

    var $textDOM = $("#texto4");

    $textDOM.append(data.book.pages[12]["text"+languageIntern]);
    if($textDOM.find("br")){
        $textDOM.blast({ delimiter: "word" });
        $textDOM.find('span').each(function(i){
            $(this).attr('data-time',  data.book.pages[12]["words"+languageIntern][i].start);
        });
    }

})()
