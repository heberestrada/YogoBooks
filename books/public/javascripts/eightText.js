// $("#texto2").append(data.book.pages[8]["text"+languageIntern])
//
// if(!$("#texto2").find("br")){
//
//     }else{
//       $("#texto2").blast({ delimiter: "word" });
//
//     $("#texto2").find('span').each(function(i){
//     $(this).attr('id', 'c_' + i);
//      });
//     }
(function(){

    var $textDOM = $("#texto2");

    $textDOM.append(data.book.pages[8]["text"+languageIntern]);
    if($textDOM.find("br")){
        $textDOM.blast({ delimiter: "word" });
        $textDOM.find('span').each(function(i){
            $(this).attr('data-time',  data.book.pages[8]["words"+languageIntern][i].start);
        });
    }

})()
