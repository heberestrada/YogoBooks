//epicModal.checkQuery();

var credentials = loginModal.getChildData();
var email = credentials.email;

var model=parent.epicModel || epicModel;
var booksRelation = {}
var player={}
var booksFinished={}
var current;
    
//var booksOpened={}
//var playerBooksOp={}
//var divide=0;
//var playerCantSave;
//var playerExists;
var wrapper


 var booksArray = [
     
    //NEW        
                
                { 
                    numberBook:88,
                    ES:"Celebrando a<br> Mamá",
                    EN:"Celebrating<br> Mom",
                    PT:"Celebrating<br> Mom",
                    ZH:"Celebrating<br> Mom",
                    JA:"Celebrating<br> Mom",
                    KO:"Celebrating<br> Mom",
                    urlImage:"master/books/88",
                    new:true,
                    lock:false
                    
                },
	 			{ 
                    numberBook:93,
                    ES:"Tomiko es<br> valiente",
                    EN:"Tomiko is<br> Brave",
                    PT:"Tomiko is<br> Brave",
                    ZH:"Tomiko is<br> Brave",
                    JA:"Tomiko is<br> Brave",
                    KO:"Tomiko is<br> Brave",
                    urlImage:"master/books/93",
                    new:true,
                    lock:false
                    
                },
	 			{ 
                    numberBook:94,
                    ES:"El experimento<br> de Nao",
                    EN:"Nao Works<br> Hard",
                    PT:"Nao Works<br> Hard",
                    ZH:"Nao Works<br> Hard",
                    JA:"Nao Works<br> Hard",
                    KO:"Nao Works<br> Hard",
                    urlImage:"master/books/94",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:46,
                    ES:"La <br>cartera",
                    EN:"The <br>Wallet",
                    PT:"A <br>carteira",
                    ZH:"钱包",
                    JA:"おさいふ",
                    KO:"지갑을 <br>주웠어요",
                    urlImage:"master/books/46",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:40,
                    ES:"Eagle y el árbol<br> de las cometas",
                    EN:"Eagle Doesn't<br> Give Up",
                    PT:"Eagle <br>não desiste",
                    ZH:"伊戈不放弃",
                    JA:"<font-size:0.8px>あきらめないイーグル",
                    KO:"이글이는포기하지않아",
                    urlImage:"master/books/40",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:4,
                    ES:"Cosas <br>hermosas",
                    EN:"Many <br>Beautiful Things",
                    PT:"Muitas <br>coisas bonitas",
                    ZH:"许多美好的事物",
                    JA:"うつくしいもの",
                    KO:"아름다운 <br>것들",
                    urlImage:" master/books/4",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:10,
                    ES:"Camino a<br> la escuela",
                    EN:"Going <br>to School",
                    PT:"A ida <br>para a escola",
                    ZH:"上学",
                    JA:"がっこうにいこう",
                    KO:"학교 <br>가는 길",
                    urlImage:"master/books/10",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:12,
                    ES:"El árbol <br>de los dulces",
                    EN:"The <br>Candy Tree",
                    PT:"A árvore<br> de doces",
                    ZH:"糖果树",
                    JA:"キャンディの木",
                    KO:"사탕 나무",
                    urlImage:"master/books/12",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:15,
                    ES:"El hogar <br>de Arthurius",
                    EN:"Arthurius <br>is Homesick",
                    PT:"Arthurius está<br> com saudade de casa",
                    ZH:"亚瑟鲁想家了",
                    JA:"<font-size:0.8px>いえにかえりたいアーサリウス",
                    KO:"알투리우스는 <br>집이 그리워요",
                    urlImage:"master/books/15",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:20,
                    ES:"¡Por <br>favor!",
                    EN:"Eagle Doesn't<br> Say Please",
                    PT:"Eagle não <br>diz “por favor",
                    ZH:"老鹰不说请字",
                    JA:"<font-size:0.8px>「おねがい」を言わないイーグル",
                    KO:"부탁해!",
                    urlImage:"master/books/20",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:23,
                    ES:"<br>Gracias",
                    EN:"Thank<br> You",
                    PT:"<br>Obrigado",
                    ZH:"<br>谢谢",
                    JA:"<br>ありがとう",
                    KO:"<br>고마워",
                    urlImage:"master/books/23",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:24,
                    ES:"Los objetos <br>de Justice",
                    EN:"Justice's <br>Belongings",
                    PT:"As coisas <br>de Justice",
                    ZH:"贾斯蒂斯的东西",
                    JA:"ジャスティスのもちもの",
                    KO:"저스티스의 물건",
                    urlImage:"master/books/24",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:25,
                    ES:"Cada cosa <br>en su lugar",
                    EN:"Everything in <br>the Right Place",
                    PT:"Cada coisa <br>no seu lugar",
                    ZH:"各得其所",
                    JA:"<font-size:0.8px>すべてはきまったばしょに",
                    KO:"물건을 제자리에 놓기",
                    urlImage:"master/books/25",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:33,
                    ES:"<br>Héroe",
                    EN:"<br>Hero",
                    PT:"<br>Herói",
                    ZH:"<br>英雄",
                    JA:"<br>ヒーロー",
                    KO:"<br>영웅",
                    urlImage:"master/books/33",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:8,
                    ES:"Pelea en la region<br> de hielo y fuego",
                    EN:"The Fight Between<br> Ice and Fire",
                    PT:"A luta entre o<br> gelo e o fogo",
                    ZH:"冰与火之战",
                    JA:"<font-size:0.8px>アイスとファイヤーのけんか",
                    KO:"얼음과 불의 전투",
                    urlImage:"master/books/8",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:9,
                    ES:"El anillo <br>de las emociones",
                    EN:"The Mood<br> Ring",
                    PT:"O anel <br>das emoções",
                    ZH:"心情戒指",
                    JA:"きぶんのゆびわ",
                    KO:"진실 반지",
                    urlImage:"master/books/9",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:3,
                    ES:"No tengas<br> miedo de...",
                    EN:"Don't be<br> Afraid...",
                    PT:"Não tenha<br> medo...",
                    ZH:"别害怕...",
                    JA:"こわくないさ",
                    KO:"무서워 <br>하지 마",
                    urlImage:"master/books/3",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:35,
                    ES:"¡Ahí viene<br> Ignorantia!",
                    EN:"Here Comes<br> Ignorantia",
                    PT:"Lá vem a<br> Ignorantia",
                    ZH:"Ignorantia来了",
                    JA:"<font-size:0.8px>イグノランティアがきた！",
                    KO:"이그노란티아가나타났다! ",
                    urlImage:"master/books/35",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:36,
                    ES:"La decisión<br> de Eagle",
                    EN:"Eagle Makes<br> a Choice",
                    PT:"Eagle faz<br> uma escolha",
                    ZH:"伊戈的抉择",
                    JA:"<font-size:0.7px>イーグルのけつだん",
                    KO:"이글이의선택",
                    urlImage:"master/books/36",
                    new:true,
                    lock:false
                    
                },
                { 
                    numberBook:37,
                    ES:"La bondad <br>de Theffanie",
                    EN:"Theffanie <br>is Kind",
                    PT:"Theffanie <br>mostra bondade",
                    ZH:"善良的范妮",
                    JA:"<font-size:0.6px>やさしいティファニー",
                    KO:"친절한티파니 ",
                    urlImage:"master/books/37",
                    new:true,
                    lock:false
                    
                },
    //OLD
                { 
                    numberBook:22,
                    ES:"El <br>Monstruo",
                    EN:"The <br>Monster",
                    PT:"O <br>monstro",
                    ZH:"怪物",
                    JA:"モンスター",
                    KO:"특별한 친구",
                    urlImage:"master/books/22",
                    new:false,
                    lock:false
                    
                },
                { 
                    numberBook:21,
                    ES:"El<br>río",
                    EN:"<br>The <br>River",
                    PT:"<br>O <br>rio",
                    ZH:"<br>河流",
                    JA:"<br>川",
                    KO:"<br>강 건너기",
                    urlImage:"master/books/21",
                    new:false,
                    lock:false
                    
                },
                { 
                    numberBook:19,
                    ES:"El regalo <br>de navidad",
                    EN:"The Christmas <br>Present",
                    PT:"O presente <br>de Natal",
                    ZH:"圣诞礼物",
                    JA:"<font-size:0.8px>クリスマスプレゼント",
                    KO:"크리스마스 <br>선물",
                    urlImage:"master/books/19",
                    new:false,
                    lock:false
                    
                },
                { 
                    numberBook:16,
                    ES:"Eagle entiende<br> la navidad",
                    EN:"Eagle learns<br> about Christmas",
                    PT:"Eagle entende<br> o Natal",
                    ZH:"伊戈领悟圣诞节的真谛",
                    JA:"<font-size:0.8px>イーグルとクリスマス",
                    KO:"이글이의 <br>크리스마스 이해하기",
                    urlImage:"master/books/16",
                    new:false,
                    lock:false
                    
                },
                { 
                    numberBook:6,
                    ES:"Estoy <br>Enojada",
                    EN:"I'm <br>mad",
                    PT:"Estou <br>com raiva!",
                    ZH:"我很生气！",
                    JA:"おこっているときは",
                    KO:"화가 <br>났어요!",
                    urlImage:"master/books/6",
                    new:false,
                    lock:false
                    
                },
                { 
                    numberBook:13,
                    ES:"El espacio<br> ideal",
                    EN:"Quiet<br> space",
                    PT:"Lugar<br> tranquilo",
                    ZH:"静谧空间",
                    JA:"静かな場所",
                    KO:"조용한 공간",
                    urlImage:"master/books/13",
                    new:false,
                    lock:false
                    
                } 
          ]
 

function callBackLogIn(){
           var credentials = loginModal.getChildData()
		var email = credentials.parentMail
		if(email){
			$("#menuUserMovil").css("display","block");
			$("#menuUser").css("display","flex");
			$(".accesButtons").hide();
			$(".accesButtonsMovil").hide();
			$(".navbar").addClass("navbar-login");
			$("#id_user").text(email)
			$("#id_userMovil").text(email)
		}
    
    
//    player = credentials.gameData || localStorage.getItem("gameData");
//    playerExists=true;
  
    

    
//    for(var init=0;init<=booksArray.length-1;init++){
//        booksRelation[booksArray[init].numberBook] = init
//    }
//    
//    //player.books
//    wrapper.selectIndex(booksRelation[player.currentBook])
//    if(player!=null){
//        for(var read in player){
//            var preWord = booksRelation[read];
//                if(player[read]){
//                    for(var placeWord=0; placeWord<player[read].length; placeWord++){
//                        if(divide==0){
//                            if(player[read][placeWord]!="/"){
//                                if(booksOpened[read]==undefined){
//                                    booksOpened[read]=player[read][placeWord];
//                                }else{
//                                    booksOpened[read]+=player[read][placeWord];
//                                }
//                            }else if(   player[read][placeWord]=="/"){
//                                divide++;
//                            }
//                        }else if(divide==1){
//                            if(player[read][placeWord]!="/"){
//                                if(booksFinished[read]==undefined){
//                                    booksFinished[read]=player[read][placeWord]; 
//                                }else{
//                                    booksFinished[read]+=player[read][placeWord]; 
//                                }
//                            }
//                        }
//                    }
//                    divide=0;
//                }
//        }
//    }else{
//        player={};
//        playerBooksOp={};
//        booksFinished=player;
//        booksOpened=playerBooksOp;
//    }
//    
//    
//    placeStars();
//    wrapper.selectIndex(booksRelation[player.currentBook])

}





function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
};

function placeStars(){
    
    localStorage.gameData=JSON.stringify(player);
    localStorage.gameDataBook=JSON.stringify(playerBooksOp);
    
    

    for(book in booksFinished){
        var id = booksRelation[book];
        $("#book" + id).find(".bookStar img").attr("src", "assets/images/books/Estrella.png");
    }
    for(booked in booksOpened){
        var id = booksRelation[booked];
        $("#container-books").find("#book" + id).find(".new-ribbon").remove();
    }
    
    
}

var detectOrigins=false;
var nombre="Yogome";

//AQUI VA PARA SABER EL LENGUAGE
        function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//detectOrigins = getParameterByName("app");
//nombre= getParameterByName("name");



//Here I get the language
if(localStorage.language){
    language=localStorage.language;
}

//Here I get the name
if(localStorage.name){
    nombre=localStorage.name;
}else{
    nombre="Yogome";
}

//Here I recognize if it is in app or in web
if(localStorage.app){
    detectOrigins=localStorage.app;
}else{
    detectOrigins="false";
}

        

       
        
        
function placeTheBooks(){


    
//    player=model.getPlayer()
//    if(player!=null){
//        booksFinished=player;
//        booksOpened=playerBooksOp;
//    }else{
//        player={};
//        playerBooksOp={};
//        booksFinished=player;
//        booksOpened=playerBooksOp;
//    }
            
    
        var id=0;

          for(i=0;i<=booksArray.length-1;i++){
              
             // booksRelation[booksArray[i].numberBook] = i

              $("#container-books").append('<li id="book'+ i +'"class="responsiveGallery-item"></li>');
              
              
              if(booksArray[i].new){
                  $("#container-books").find("#book" + i).append('<div class="new-ribbon"> <div class="new-text text52">NEW!</div></div>');
              }
              
              
              $("#book" + i).attr("number",booksArray[i].numberBook);
              
              if(language == "ES"){
                   $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].urlImage + '/1ESV.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                  
                    console.log(i +  ": " + booksArray[i].lock);
                  
                    if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
                  $("#book" + i).click(function(){
                        magic.play();
                      id=$(this).attr("number");
                      if(nombre && nombre!="Yogome" && nombre!=null){
                          //window.open(booksArray[$(this).attr("number")].url + "#" + language  + epicModel.getCredentials().name, "_self"); 
                          window.open("master/#" +id, "_self");
                      }else{
                          window.open("master/#" +id, "_self");
                      }
                        
                  });
                  
              }else if(language == "EN"){
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].urlImage + '/1ENV.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
                  $("#book" + i).click(function(){
                        flipcard.play();
                        id=$(this).attr("number");
                        if(nombre && nombre!="Yogome" && nombre!=null){
                          //window.open(booksArray[$(this).attr("number")].url + "#" + language  + epicModel.getCredentials().name, "_self"); 
                          window.open("master/#" +id, "_self"); 
                            
                      }else{
                         window.open("master/#" +id, "_self");
                      }
                  });
              }else if(language == "ZH"){
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].urlImage + '/1ZHV.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
                  $("#book" + i).click(function(){
                        flipcard.play();
                        id=$(this).attr("number");
                        if(nombre && nombre!="Yogome" && nombre!=null){
                          //window.open(booksArray[$(this).attr("number")].url + "#" + language  + epicModel.getCredentials().name, "_self"); 
                          window.open("master/#" +id, "_self");  
                      }else{
                          window.open("master/#" +id, "_self"); 
                      }
                  });
              }else if(language == "PT"){
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].urlImage + '/1PTV.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
                  $("#book" + i).click(function(){
                        flipcard.play();
                        id=$(this).attr("number");
                        if(nombre && nombre!="Yogome" && nombre!=null){
                          //window.open(booksArray[$(this).attr("number")].url + "#" + language  + epicModel.getCredentials().name, "_self"); 
                          window.open("master/#" +id, "_self"); 
                      }else{
                         window.open("master/#" +id, "_self");  
                      }
                  });
              }else if(language == "JA"){
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].urlImage + '/1JAV.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
                  $("#book" + i).click(function(){
                        flipcard.play();
                        id=$(this).attr("number");
                        if(nombre && nombre!="Yogome" && nombre!=null){
                          //window.open(booksArray[$(this).attr("number")].url + "#" + language  + epicModel.getCredentials().name, "_self"); 
                          window.open("master/#" +id, "_self"); 
                      }else{
                          window.open("master/#" +id, "_self"); 
                      }
                  });
              }else if(language == "KO"){
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].urlImage + '/1KOV.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
                  $("#book" + i).click(function(){
                        flipcard.play();
                        id=$(this).attr("number");
                        if(nombre && nombre!="Yogome" && nombre!=null){
                          //window.open(booksArray[$(this).attr("number")].url + "#" + language  + epicModel.getCredentials().name, "_self"); 
                         window.open("master/#" +id, "_self"); 
                      }else{
                          window.open("master/#" +id, "_self"); 
                      }
                  });
              }else{
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].urlImage + '/1ENV.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
                  $("#book" + i).click(function(){
                        flipcard.play();
                        id=$(this).attr("number");
                        if(nombre && nombre!="Yogome" && nombre!=null){
                          //window.open(booksArray[$(this).attr("number")].url + "#ES" + epicModel.getCredentials().name, "_self"); 
                         window.open("master/#" +id, "_self"); 
                      }else{
                         window.open("master/#" +id, "_self"); 
                      } 
                  });
              }
              
               var id = booksArray[i].numberBook;
                if(booksFinished[id]){
//                    $("#container-books").find("#book" + i).append('<div class="bookStar"><img src="assets/images/books/Estrella.png"/></div><div id="textBook' + i +'" class="w-responsivGallery-info2"></div>');
                    $("#container-books").find("#book" + i).append('<div id="textBook' + i +'" class="w-responsivGallery-info2"></div>');
                }else{
//                    $("#container-books").find("#book" + i).append('<div class="bookStar"><img src="assets/images/books/EstrellaEmpty.png"/></div><div id="textBook' + i +'" class="w-responsivGallery-info2"></div>');
                    $("#container-books").find("#book" + i).append('<div id="textBook' + i +'" class="w-responsivGallery-info2"></div>');
                }
        
               if(language == "ES"){
                   document.cookie = "language=ES";
                $("#container-books").find("#textBook" + i).append('<h4 class="responsivGallery-name">'+ booksArray[i].ES +'</h4>');
               }else if(language == "EN"){
                   document.cookie = "language=EN";
                   $("#container-books").find("#textBook" + i).append('<h4 class="responsivGallery-name">'+ booksArray[i].EN +'</h4>');     
                    }else if(language == "ZH"){
                        document.cookie = "language=ZH";
                   $("#container-books").find("#textBook" + i).append('<h4 class="responsivGallery-name">'+ booksArray[i].ZH +'</h4>');     
                    }else if(language == "PT"){
                        document.cookie = "language=PT";
                   $("#container-books").find("#textBook" + i).append('<h4 class="responsivGallery-name">'+ booksArray[i].PT +'</h4>');     
                    }else if(language == "KO"){
                        document.cookie = "language=KO";
                   $("#container-books").find("#textBook" + i).append('<h4 class="responsivGallery-name">'+ booksArray[i].KO +'</h4>');     
                    }else if(language == "JA"){
                        document.cookie = "language=JA";
                   $("#container-books").find("#textBook" + i).append('<h4 class="responsivGallery-name">'+ booksArray[i].JA +'</h4>');     
                    }else{
                        document.cookie = "language=EN";
                     $("#container-books").find("#textBook" + i).append('<h4 class="responsivGallery-name">'+ booksArray[i].EN +'</h4>');   
                }
          }
}

  
placeTheBooks()


//  $(function () {
//        $('.responsiveGallery-wrapper').responsiveGallery({
//            animatDuration: 400, 
//            $btn_prev: $('.responsiveGallery-btn_prev'),
//            $btn_next: $('.responsiveGallery-btn_next'),
//            currentIndex:parseInt(booksRelation[player.currentBook]),
//        });
//    });