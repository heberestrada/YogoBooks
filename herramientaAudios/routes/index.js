var express = require('express');

var router = express.Router();
const fs = require('fs');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const speech = require('@google-cloud/speech');
// Imports the Google Cloud client library
const linear16 = require('linear16');
var track
var data = {}
data.book = []


//INITIALIZE THE FIRST AUDIO AND THE FIRST PAGE OF THE BOOK
var pages=6;

var audios=1;//ALWAYS CHECK THE AUDIO IS AT 16000Hz

//HERE GOES THE TOTAL NUMBER OF AUDIOS OF THE BOOK
var HowMuchAudios=6;

//RECURSIVITY
var isWorking=false;

//HERE GOES THE TOTAL NUMBER OF PAGES OF THE BOOK
var pagesCompleted=20;

// CHECK THE LANGUAGE CODES BEFORE CHECKING THIS
var language="ES";


fs.readFile('result/datos.json',function(err,content){ 	
	if(err) {
		fs.createReadStream('Templates/master6.json').pipe(fs.createWriteStream('result/datos.json')),function(err){
			if(err) throw err;
		}
		
	}else{
		data = JSON.parse(content);
		console.log("Loading:0%");
		//linear16('result/1ES.mp3', 'result/1ES.flac')
   			//.then(outPath => console.log(outPath));
		recursive(data);

		
		
		
		//console.log("hay".trim().indexOf("y".trim())>=0)
	}
})



function recursive(datas){
	if(!isWorking){
	// Creates a client
		isWorking=true;
		
		const client = new speech.SpeechClient();
		var filename="";
		// The name of the audio file to transcribe
		if(language=="ES"){
			fileName = 'result/'+audios+'ES.flac';
		}else if(language=="EN"){
			fileName = 'result/'+audios+'EN.flac';
		}else if(language=="PT"){
			fileName = 'result/'+audios+'PT.flac';
		}else if(language=="ZH"){
			fileName = 'result/'+audios+'ZH.flac';
		}else if(language=="JA"){
			fileName = 'result/'+audios+'JA.flac';
		}else if(language=="KO"){
			fileName = 'result/'+audios+'KO.flac';
		}	
		// Reads a local audio file and converts it to base64
		const file = fs.readFileSync(fileName);
		const audioBytes = file.toString('base64');
		

		// The audio file's encoding, sample rate in hertz, and BCP-47 language code
		const audio = {
		  content: audioBytes,
		};

		global["pageToReplace"+pages] = {};
		global["pageToReplace"+pages] = [];
			
		var config={};

		if(language=="ES"){
			config = {
				encoding: 'FLAC',
				enableWordTimeOffsets: true,
				sampleRateHertz: 16000,
				languageCode: 'es-MX',
				speechContext: {
					phrases: [
						datas.book.pages[pages].textES
					],
				}
			};
		}else if(language=="EN"){
			config = {
				encoding: 'FLAC',
				enableWordTimeOffsets: true,
				sampleRateHertz: 16000,
				languageCode: 'en-US',
				speechContext: {
					phrases: [
						datas.book.pages[pages].textEN
					],
				}
		   };
			//client.setPhrases(datas.book.pages[pages].textEN)
		}else if(language=="KO"){
			 config = {
				 encoding: 'FLAC',
				 enableWordTimeOffsets: true,
				 sampleRateHertz: 16000,
				 languageCode: 'ko-KR',
				 speechContext: {
					phrases: [
						datas.book.pages[pages].textKR
					],
				}
		   };
			//client.setPhrasess(datas.book.pages[pages].textKR)			
		}else if(language=="JA"){
			 config = {
				 encoding: 'FLAC',
				 enableWordTimeOffsets: true,
				 sampleRateHertz: 16000,
				 languageCode: 'ja-JP',
				 speechContext: {
					phrases: [
						datas.book.pages[pages].textJP
					],
				}
		   };
			//client.setPhrases(datas.book.pages[pages].textJP)
		}else if(language=="PT"){
			config = {
			   encoding: 'FLAC',
			   enableWordTimeOffsets: true,
			   sampleRateHertz: 16000,
			   languageCode: 'pt-PT',
				speechContext: {
					phrases: [
						datas.book.pages[pages].textPT
					],
				}
			};
			//client.setPhrases(datas.book.pages[pages].textPT)
		}else if(language=="ZH"){
			config = {
			   encoding: 'FLAC',
			   enableWordTimeOffsets: true,
			   sampleRateHertz: 16000,
			   languageCode: 'zh-CN',
				speechContext: {
					phrases: [
						datas.book.pages[pages].textCN
					],
				}
		   };
			//client.setPhrases(datas.book.pages[pages].textCN)
		}


		

		const request = {
		  audio: audio,
		  config: config,
		};
		var timestamps="";

		// Detects speech in the audio file
		client
		  .recognize(request)
		  .then(data => {
			
			//global["pageToReplace"+pages]=[];
			const response = data[0];
			response.results.forEach(result => {
			  //console.log(`Transcription: ${result.alternatives[0].transcript}`);
			  result.alternatives[0].words.forEach(wordInfo => {
				// NOTE: If you have a time offset exceeding 2^32 seconds, use the
				// wordInfo.{x}Time.seconds.high to calculate seconds.
				const startSecs =
				  `${wordInfo.startTime.seconds}` +
				  `.` +
				  wordInfo.startTime.nanos / 100000000;
				const endSecs =
				  `${wordInfo.endTime.seconds}` +
				  `.` +
				  wordInfo.endTime.nanos / 100000000;
				  timestamps={start:startSecs,text:wordInfo.word,end:endSecs};			

				  global["pageToReplace"+pages].push(timestamps);
			});
			});
			if(language=="ES" && pages<=pagesCompleted-4){
				//datas.book.pages[pages].wordsES= global["pageToReplace"+pages];
				datas=Dictionary(datas,global["pageToReplace"+pages]);
				pages+=2;
				if((pages/pagesCompleted)*100<100){
					console.log("Loading:"+ Math.round((pages/(pagesCompleted-2))*100)+"%")
				}else if((pages/pagesCompleted)*100===100){
					console.log("Action Completed")
				}
				recursive(datas);
			}else if(language=="EN" && pages<=pagesCompleted-4){
				datas=Dictionary(datas,global["pageToReplace"+pages]);
				pages+=2;
				if((pages/pagesCompleted)*100<100){
					console.log("Loading:"+ Math.round((pages/(pagesCompleted-2))*100)+"%")
				}else if((pages/pagesCompleted)*100===100){
					console.log("Action Completed")
				}
				recursive(datas);
			}else if(language=="ZH" && pages<=pagesCompleted-4){
				datas=Fonetic(datas,global["pageToReplace"+pages]); 
				pages+=2;
				if((pages/pagesCompleted)*100<100){
					console.log("Loading:"+ Math.round((pages/(pagesCompleted-2))*100)+"%")
				}else if((pages/pagesCompleted)*100===100){
					console.log("Action Completed")
				}
				recursive(datas);
			}else if(language=="KO" && pages<=pagesCompleted-4){
				datas=Fonetic(datas,global["pageToReplace"+pages]);
				pages+=2;
				if((pages/pagesCompleted)*100<100){
					console.log("Loading:"+ Math.round((pages/(pagesCompleted-2))*100)+"%")
				}else if((pages/pagesCompleted)*100===100){
					console.log("Action Completed")
				}
				recursive(datas);
			}else if(language=="JA" && pages<=pagesCompleted-4){
				datas=Fonetic(datas,global["pageToReplace"+pages]);
				pages+=2;
				if((pages/pagesCompleted)*100<100){
					console.log("Loading:"+ Math.round((pages/(pagesCompleted-2))*100)+"%")
				}else if((pages/pagesCompleted)*100===100){
					console.log("Action Completed")
				}
				recursive(datas);
			}else if(language=="PT" && pages<=pagesCompleted-4){
				datas=Dictionary(datas,global["pageToReplace"+pages]);
				pages+=2;
				if((pages/pagesCompleted)*100<100){
					console.log("Loading:"+ Math.round((pages/(pagesCompleted-2))*100)+"%")
				}else if((pages/pagesCompleted)*100===100){
					console.log("Action Completed")
				}
				recursive(datas);
			}
		})
			.catch(err => {
			console.error('ERROR:', err);
		});
				
		

			
			
			if(pages<=pagesCompleted-4){
				
				isWorking=false;
				if(audios<HowMuchAudios)audios++;
				timestamps="";
			}else{
				if(language=="ES"){
					Save(datas);
				}else if(language=="EN"){
					Save(datas);
				}else if(language=="ZH"){
					Save(datas);
				}else if(language=="PT"){
					Save(datas);
				}else if(language=="JA"){
					Save(datas);
				}else if(language=="KO"){
					Save(datas);
				}
			}
		}
	
}
	
	/* GET home page. */
	router.get('', function(req, res, next) {
	  res.render('index', { title: 'Express'});
		console.log(obj)
	});


	module.exports = router;
	


function Save(data){
	console.log("JSON Saved Correctly, Thank You for waitting");
	fs.writeFile('result/datos.json',JSON.stringify(data,null,4),function(err){
		if(err) throw err;
	})
}



function Fonetic(json,Api){
	
	
	var wordsApi=[];
	var timesApi=[];
	var porcent=0;
	var wordsScript;
	var sameWords=0;
	var constructWord="";
	var n=0;
	var timestamps=[];
	var howManyCharacters=0;
	
	
	wordsScript=data.book.pages[pages].textCN;
	//wordsScript=wordsScript.toLocaleLowerCase();
	wordsScript=wordsScript.split(" ");
	global["words"+pages] = {};
	global["words"+pages] = [];
	
	//Here we will initialize the wordsAPI
	for(var fill=0; fill<Object.keys(Api).length; fill++){
		//wordsApi[fill]=Api[fill].text.toLocaleLowerCase();
		wordsApi[fill]=Api[fill].text;
		if(fill!=0){
			timesApi[fill]=Api[fill].start;
		}else{
			timesApi[fill]="0.1";
		}
	}
	for(var checkWithScript1=0; checkWithScript1<wordsScript.length; checkWithScript1++){
		for(var checkWithScript2=0; checkWithScript2<wordsApi.length; checkWithScript2++){
			if(wordsApi[checkWithScript2]!="$"){
				if(wordsScript[checkWithScript1].trim().includes(wordsApi[checkWithScript2].trim())>=0){
					constructWord=wordsScript[checkWithScript1];
					console.log(wordsScript[checkWithScript1])
					wordsApi[checkWithScript2]="$";
					timestamps={ start:timesApi[checkWithScript2],text:constructWord };
					if(wordsApi[checkWithScript2+1]!=null){
						if(wordsScript[checkWithScript1].trim().indexOf(wordsApi[checkWithScript2+1].trim())>=0){
							wordsApi[checkWithScript2+1]="$";
						}
					}
					global["words"+pages].push(timestamps);
					constructWord="";
					break;
				}
			}
		}
	}

	if(language=="ES"){
		json.book.pages[pages].wordsES= global["words"+pages];
	}else if(language=="EN"){
		json.book.pages[pages].wordsEN= global["words"+pages];
	}else if(language=="ZH"){
		json.book.pages[pages].wordsCN= global["words"+pages];
	}else if(language=="PT"){
		json.book.pages[pages].wordsPT= global["words"+pages];
	}else if(language=="JA"){
		json.book.pages[pages].wordsJP= global["words"+pages];
	}else if(language=="KO"){
		json.book.pages[pages].wordsKR= global["words"+pages];
	}
	
	return(json);
}

//Here goes the Dictionary that will help with the words with out time it converts it to an array

function Dictionary(json,Api){
	//console.log(Api.length)
	var wordNumber=0;
	var searched=false;
	var counNotFinded=0;
	var actualTime=0
	var analyzeApi=0;
	global["tracks"+pages] = {};
	global["tracks"+pages] = [];
	wordNumber=0;
	
	
		if(language=="ES"){
			for(var clean=0; clean<=json.book.pages[pages].textES.length-1; clean++){
				global["word"+clean]="";
			}
			for(var read=0; read<=json.book.pages[pages].textES.length-1; read++){
				if(json.book.pages[pages].textES[read]!=" "){
					if(global["word"+wordNumber]!=undefined){
						global["word"+wordNumber]+=json.book.pages[pages].textES[read];
					}else{
						global["word"+wordNumber]=json.book.pages[pages].textES[read];
					}
				}else{
					wordNumber++;
				}
				if(read==json.book.pages[pages].textES.length-1){
					wordNumber++;
				}
			}
		}else if(language=="EN"){
			for(var clean=0; clean<=json.book.pages[pages].textEN.length-1; clean++){
				global["word"+clean]="";
			}
			for(var read=0; read<=json.book.pages[pages].textEN.length-1; read++){
				if(json.book.pages[pages].textEN[read]!=" "){
					if(global["word"+wordNumber]!=undefined){
						global["word"+wordNumber]+=json.book.pages[pages].textEN[read];
					}else{
						global["word"+wordNumber]=json.book.pages[pages].textEN[read];
					}
				}else{
					wordNumber++;
				}
				if(read==json.book.pages[pages].textEN.length-1){
					wordNumber++;
				}
			}
		}else if(language=="ZH"){
			for(var clean=0; clean<=json.book.pages[pages].textCN.length-1; clean++){
				global["word"+clean]="";
			}
			for(var read=0; read<=json.book.pages[pages].textCN.length-1; read++){
				if(json.book.pages[pages].textCN[read]!=" " && json.book.pages[pages].textCN[read]!="."){
					if(global["word"+wordNumber]!=undefined){
						global["word"+wordNumber]+=json.book.pages[pages].textCN[read];
					}else{
						global["word"+wordNumber]=json.book.pages[pages].textCN[read];
					}
				}else{
					wordNumber++;
				}
				if(read==json.book.pages[pages].textCN.length-1){
					wordNumber++;
				}
			}
		}else if(language=="JA"){
			for(var clean=0; clean<=json.book.pages[pages].textJP.length-1; clean++){
				global["word"+clean]="";
			}
			for(var read=0; read<=json.book.pages[pages].textJP.length-1; read++){
				if(json.book.pages[pages].textJP[read]!=" " && json.book.pages[pages].textJP[read]!="."){
					if(global["word"+wordNumber]!=undefined){
						global["word"+wordNumber]+=json.book.pages[pages].textJP[read];
					}else{
						global["word"+wordNumber]=json.book.pages[pages].textJP[read];
					}
				}else{
					wordNumber++;
				}
				if(read==json.book.pages[pages].textJP.length-1){
					wordNumber++;
				}
			}
		}else if(language=="PT"){
			for(var clean=0; clean<=json.book.pages[pages].textPT.length-1; clean++){
				global["word"+clean]="";
			}
			for(var read=0; read<=json.book.pages[pages].textPT.length-1; read++){
				if(json.book.pages[pages].textPT[read]!=" " && json.book.pages[pages].textPT[read]!="."){
					if(global["word"+wordNumber]!=undefined){
						global["word"+wordNumber]+=json.book.pages[pages].textPT[read];
					}else{
						global["word"+wordNumber]=json.book.pages[pages].textPT[read];
					}
				}else{
					wordNumber++;
				}
				if(read==json.book.pages[pages].textPT.length-1){
					wordNumber++;
				}
			}
		}else if(language=="KO"){
			for(var clean=0; clean<=json.book.pages[pages].textKR.length-1; clean++){
				global["word"+clean]="";
			}
			for(var read=0; read<=json.book.pages[pages].textKR.length-1; read++){
				if(json.book.pages[pages].textKR[read]!=" " && json.book.pages[pages].textKR[read]!="."){
					if(global["word"+wordNumber]!=undefined){
						global["word"+wordNumber]+=json.book.pages[pages].textKR[read];
					}else{
						global["word"+wordNumber]=json.book.pages[pages].textKR[read];
					}
				}else{
					wordNumber++;
				}
				if(read==json.book.pages[pages].textKR.length-1){
					wordNumber++;
				}
			}
		}	
	
	for(var fillSemiArray=0; fillSemiArray<wordNumber; fillSemiArray++){
		global["passing"+fillSemiArray]=global["word"+fillSemiArray];
	}
	
	for(var analyzeScript=0; analyzeScript<wordNumber;analyzeScript++){
		for(analyzeApi=0; analyzeApi<Api.length; analyzeApi++){
			
			if(!Api[analyzeApi].text.localeCompare(global["word"+analyzeScript]))
			{	
				global["word"+analyzeScript]="$";
				actualTime=(Number(Api[analyzeApi].start)-Number(Api[analyzeApi].end))/2;
				if(analyzeScript>0){
					
					if(actualTime>timestamps.start[analyzeScript-1]){
						actualTime=actualTime.toString();
						Api[analyzeApi].text="";
						searched=true;
						break;
					}
				}
			}
		}
		if(searched){
			searched=false;
			timestamps={ start:actualTime,text:global["passing"+analyzeScript] };
			global["tracks"+pages].push(timestamps);
		}else{
			if(analyzeScript===0){
				actualTime="0.100";
			}else if(analyzeScript!=0 && analyzeScript<wordNumber){
				if(Api[analyzeScript-1]){
					//actualTime=Api[analyzeScript-1].end;
					actualTime=Api[analyzeScript-1].end;
				}
			}else if(analyzeScript===wordNumber){
				if(Api[analyzeScript-1]){
					actualTime=Api[analyzeScript-1].end;
				}
			}
			
			timestamps={ start:actualTime,text:global["passing"+analyzeScript] };
			global["tracks"+pages].push(timestamps);
		}
	}
	
	if(language=="ES"){
		json.book.pages[pages].wordsES= global["tracks"+pages];
	}else if(language=="EN"){
		json.book.pages[pages].wordsEN= global["tracks"+pages];
	}else if(language=="ZH"){
		json.book.pages[pages].wordsCN= global["tracks"+pages];
	}else if(language=="PT"){
		json.book.pages[pages].wordsPT= global["tracks"+pages];
	}else if(language=="JA"){
		json.book.pages[pages].wordsJP= global["tracks"+pages];
	}else if(language=="KO"){
		json.book.pages[pages].wordsKR= global["tracks"+pages];
	}
	   
	   
	return(json)
}
