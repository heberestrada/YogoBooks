var express = require('express');
var router = express.Router();
const fs = require('fs');
var path = require('path');
var bookData;
var languages

/* GET home page. */
router.get('/', function (req, res, next) {
	var allBooks;
//	if(req.params.language){
//		res.sendFile(path.join(__dirname, "../public/landing/yogobooks.html?language="+req.params.language));
//	}else{
//		res.sendFile(path.join(__dirname, "../public/landing/yogobooks.html"));
//	}
	fs.readFile('public/landing/assets/js/yogobooks/book.json',function(err,content){ 
		allBooks=JSON.parse(content);
		res.render('landing',{books:JSON.stringify(allBooks)})
	})
})

router.get('/:id', function(req, res, next) {
	
	const book=req.params.id;
	var allBooks;
    if(req.headers["accept-language"]){
	   languages=req.headers["accept-language"].substring(0, 2).toUpperCase();
    }else{
        languages="EN";
    }
	var titles;
	fs.readFile('public/books/'+book+'/js/datos.json',function(err,content){ 	
		if(err) {
			console.warn(err)
           	fs.readFile('public/landing/assets/js/yogobooks/book.json',function(err,content){ 
				allBooks=JSON.parse(content);
				res.render('landing',{lang:languages,books:JSON.stringify(allBooks)})
			})
		}else{
			bookData=JSON.parse(content);
			if(languages=="ES"){
				titles=bookData.book.titleES;
			}else if(languages=="EN"){
				titles=bookData.book.titleEN;
			}else if(languages=="PT"){
				titles=bookData.book.titlePT;
			}else if(languages=="KR"){
				titles=bookData.book.titleKO;
			}else if(languages=="ZH"){
				titles=bookData.book.titleCN;
			}else if(languages=="JA"){
				titles=bookData.book.titleJP;
			}else{
				titles=bookData.book.titleEN;
			}
            res.render('index', {title: titles,language:languages,id: req.params.id, bookDatas: JSON.stringify(bookData)});
		}
        
	})
    
});


module.exports = router;