          var booksArray = [
    //NEW
                { 
                    id:10,
                    EN:"Walking <br>to School",
                    ES:"Camino a <br>la escuela",
                    url:"http://play.yogome.com/yogomebooks/10",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:12,
                    EN:"The Candy <br>Tree",
                    ES:"El árbol de <br>los dulces",
                    url:"http://play.yogome.com/yogomebooks/12",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:15,
                    EN:"Arthurius’ <br>Home",
                    ES:"El hogar de <br>Arthurius",
                    url:"http://play.yogome.com/yogomebooks/15",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:20,
                    EN:"Please",
                    ES:"Por favor",
                    url:"http://play.yogome.com/yogomebooks/20",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:23,
                    EN:"Thank You",
                    ES:"Gracias",
                    url:"http://play.yogome.com/yogomebooks/23",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:24,
                    EN:"Justice's Toys",
                    ES:"Los objetos <br>de Justice",
                    url:"http://play.yogome.com/yogomebooks/24",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:25,
                    EN:"Every item <br>in it's place",
                    ES:"Cada cosa <br>en su lugar",
                    url:"http://play.yogome.com/yogomebooks/25",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:33,
                    EN:"Hero",
                    ES:"Héroe",
                    url:"http://play.yogome.com/yogomebooks/33",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:8,
                    EN:"Dispute in the <br>ice and fire reign",
                    ES:"Pelea en la región <br>de hielo y fuego",
                    url:"http://play.yogome.com/yogomebooks/8",
                    new:true,
                    lock:false
                    
                },
                { 
                    id:9,
                    EN:"The Mood Ring",
                    ES:"El anillo de <br>las emociones",
                    url:"http://play.yogome.com/yogomebooks/9",
                    new:true,
                    lock:false
                    
                },
    //OLD
                { 
                    id:22,
                    EN:"The Monster",
                    ES:"El Monstruo",
                    url:"https://play.yogome.com/yogomebooks/22",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:21,
                    EN:"The River",
                    ES:"El Río",
                    url:"https://play.yogome.com/yogomebooks/21",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:16,
                    EN:"The Christmas<br> Present",
                    ES:"El regalo<br> de navidad",
                    url:"https://play.yogome.com/yogomebooks/16",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:27,
                    EN:"Eagle learns<br>about Christmas",
                    ES:"Eagle entiende<br>la navidad",
                    url:"https://play.yogome.com/yogomebooks/27",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:6,
                    EN:"I am<br> Angry",
                    ES:"Estoy<br> Enojada",
                    url:"https://play.yogome.com/yogomebooks/6",
                    new:false,
                    lock:false
                    
                },
                { 
                    id:13,
                    EN:"Quiet <br>space",
                    ES:"El espacio <br> ideal",
                    url:"https://play.yogome.com/yogomebooks/13",
                    new:false,
                    lock:false
                    
                }
          ]
          
          for(i=0;i<=booksArray.length-1;i++){
              
              
              $("#container-books").append('<li id="book'+ i +'"class="responsiveGallery-item"></li>');
              
              if(booksArray[i].new){
                  $("#container-books").find("#book" + i).append('<div class="new-ribbon"></div>');
              }
              
              $("#book" + i).attr("number",i);
              
              if(language == "ES"){
                   $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].url + '/bookpages/1ES.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                    console.log(i +  ": " + booksArray[i].lock);
                  
                    if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
//                  $("#book" + i).click(function(){
//                        window.open(booksArray[$(this).attr("number")].url + "?language=" + language , "_blank"); 
//                  });
                  
                  $("#book" + i).click(function(){
                        if(email){
                          window.open(booksArray[$(this).attr("number")].url + "#" + language  + epicModel.getCredentials().name, "_self"); 
                      }else{
                          window.open(booksArray[$(this).attr("number")].url + "#" + language  + "/&name=Yogome", "_self"); 
                      }
                  });
                  
              }else if(language == "EN"){
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].url + '/bookpages/1EN.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
//                  $("#book" + i).click(function(){
//                        window.open(booksArray[$(this).attr("number")].url + "?language=" + language , "_blank"); 
//                  });
                  
                  $("#book" + i).click(function(){
                        flipcard.play();
                        if(email){
                          window.open(booksArray[$(this).attr("number")].url + language + epicModel.getCredentials().name, "_self"); 
                      }else{
                          window.open(booksArray[$(this).attr("number")].url + language  + "/&name=Yogome", "_self"); 
                      } 
                  });
              }else{
                  $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].url + '/bookpages/1EN.png" height="320" width="320" alt="" class="responsivGallery-pic">');
                   if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }
                  
//                  $("#book" + i).click(function(){
//                        window.open(booksArray[$(this).attr("number")].url + "?language=ES", "_blank"); 
//                  });
                  
                  $("#book" + i).click(function(){
                        if(email){
                          window.open(booksArray[$(this).attr("number")].url + "#ES" + epicModel.getCredentials().name, "_self"); 
                      }else{
                          window.open(booksArray[$(this).attr("number")].url + "#ES"  + "/&name=Yogome", "_self"); 
                      } 
                  });
              }

              $("#container-books").find("#book" + i).append('<div class="bookStar"><img src="assets/images/books/EstrellaEmpty.png"/></div><div id="textBook' + i +'" class="w-responsivGallery-info2"></div>');
          
               if(language == "ES"){
                $("#container-books").find("#textBook" + i).append('<h2 class="responsivGallery-name">'+ booksArray[i].ES +'</h2>');
               }else if(language == "EN"){
                   $("#container-books").find("#textBook" + i).append('<h2 class="responsivGallery-name">'+ booksArray[i].EN +'</h2>');     
                    }else{
                     $("#container-books").find("#textBook" + i).append('<h2 class="responsivGallery-name">'+ booksArray[i].ES +'</h2>');   
                }
          
          }
          
    