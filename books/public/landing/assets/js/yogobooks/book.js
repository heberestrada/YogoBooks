//epicModal.checkQuery();

var credentials = loginModal.getChildData();
var email = credentials.email;
var booksRelation = {}
var place

console.log("Hola")




//var booksArray = [
//    //NEW        
//                { 
//                    numberBook:181,
//                    ES: "La flor de México",
//                    EN: "The Flower of Mexico",
//                    PT: "A flor do México",
//                    ZH: "墨西哥之花",
//                    JA: "メキシコの花",
//                    KO: "멕시코의 꽃",
//                    urlImage:"../books/181",
//                    new:true,
//                    lock:false
//                },
//                { 
//                    numberBook:175,
//                    ES: "La oportunidad de Paz",
//                    EN: "Paz Gets a Chance",
//                    PT: "Paz ganha uma oportunidade",
//                    ZH: "帕兹获得了一次机会",
//                    JA: "パスがチャンスを得る",
//                    KO: "파즈에게 기회가 왔어요",
//                    urlImage:"../books/175",
//                    new:false,
//                    lock:false
//                },            
//                { 
//                    numberBook:174,
//                    ES: "Las aventuras de Theffanie",
//                    EN: "The Adventures of Theffanie",
//                    PT: "As aventuras de Theffanie",
//                    ZH: "范妮的冒险",
//                    JA: "ティファニーの冒険",
//                    KO: "티파니의 모험",
//                    urlImage:"../books/174",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:170,
//                    ES: "Oona salva el día",
//                    EN: "Oona Saves the Day",
//                    PT: "Oona salva o dia",
//                    ZH: "奥娜帮了大忙",
//                    JA: "ウーナがトラブルから救う",
//                    KO: "똑똑한 루나",
//                    urlImage:"../books/170",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:161,
//                    ES: "Un nuevo comienzo",
//                    EN: "A Fresh Start",
//                    PT: "Um novo começo",
//                    ZH: "崭新的开始",
//                    JA: "新しいスタート",
//                    KO: "새로운 시작",
//                    urlImage:"../books/161",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:160,
//                    ES: "Una obra de independencia",
//                    EN: "A Play to Celebrate Mexico’s Independence Day",
//                    PT: "Uma peça de teatro pela independência",
//                    ZH: "庆祝墨西哥独立日的一场话剧",
//                    JA: "メキシコの独立記念日を祝う劇",
//                    KO: "멕시코의 독립기념일에 대한 연극을 해요",
//                    urlImage:"../books/160",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:157,
//                    ES: "La nueva tradición de Dinamita",
//                    EN: "Dinamita’s New Tradition",
//                    PT: "A nova tradição de Dinamita",
//                    ZH: "迪纳米塔的新传统",
//                    JA: "ディナミタの新しい伝統",
//                    KO: "다이나미타의 새로운 전통",
//                    urlImage:"../books/157",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:156,
//                    ES: "El profesor suplente",
//                    EN: "OThe Substitute Teacher",
//                    PT: "O professor substituto",
//                    ZH: "代课老师",
//                    JA: "代理教師",
//                    KO: "대리 선생님",
//                    urlImage:"../books/156",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:135,
//                    ES: "Nuestro amigo el Sol",
//                    EN: "Our Friend the Sun",
//                    PT: "Nosso amigo o Sol",
//                    ZH: "我们的好朋友 - 太阳",
//                    JA: "私たちのともだち、太陽",
//                    KO: "우리의 친구 태양",
//                    urlImage:"../books/135",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:132,
//                    ES: "¿Qué lleva un héroe en su mochila?",
//                    EN: "What’s Inside a Hero’s Backpack?",
//                    PT: "O que um herói carrega em sua mochila?",
//                    ZH: "一个英雄的书包里都有什么？",
//                    JA: "ヒーローのランドセルには何が入っているの？",
//                    KO: "히어로의 가방 안을 들여다볼까요?",
//                    urlImage:"../books/132",
//                    new:false,
//                    lock:false
//                },
//				{ 
//                    numberBook:131,
//                    ES: "Aventura en el espacio",
//                    EN: "An Adventure in the Solar System",
//                    PT: "Aventura no espaço",
//                    ZH: "太阳系的探险之旅",
//                    JA: "太陽系の冒険",
//                    KO: "태양계에서 한 모험",
//                    urlImage:"../books/131",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:129,
//                    ES: "A Fourth of July Celebration",
//                    EN: "A Fourth of July Celebration",
//                    PT: "A Fourth of July Celebration",
//                    ZH: "A Fourth of July Celebration",
//                    JA: "A Fourth of July Celebration",
//                    KO: "A Fourth of July Celebration",
//                    urlImage:"../books/129",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:128,
//                    ES: "Un viaje por los Estados Unidos",
//                    EN: "Road Trip Across the United States",
//                    PT: "Viagem pelos Estados Unidos",
//                    ZH: "横跨美国的公路旅行",
//                    JA: "アメリカ横断ロードトリップ",
//                    KO: "미국에서 장거리 자동차 여행을 해요",
//                    urlImage:"../books/128",
//                    new:false,
//                    lock:false
//                    
//                },//Faltan audios en Portugués
//                { 
//                    numberBook:127,
//                    ES: "La independencia del hielo",
//                    EN: "The Independence of Two Lands",
//                    PT: "Independência de duas terras",
//                    ZH: "两片土地的独立",
//                    JA: "2つの国のどくりつ",
//                    KO: "두 나라의 독립",
//                    urlImage:"../books/127",
//                    new:false,
//                    lock:false
//                    
//                },//Faltan audios en Portugués    
//                { 
//                    numberBook:126,
//                    ES: "Los colores del cielo",
//                    EN: "The Colors of the Sky",
//                    PT: "As cores do céu",
//                    ZH: "天空的颜色",
//                    JA: "空の色",
//                    KO: "하늘의 색",
//                    urlImage:"../books/126",
//                    new:false,
//                    lock:false
//                    
//                },// --- Faltan audios en Potugués
//                { 
//                    numberBook:120,
//                    ES: "Estrella cuenta patrones numéricos",
//                    EN: "Estrella Counts Number Patterns",
//                    PT: "Estrella conta padrões numéricos",
//                    ZH: "埃斯特蕾拉计算数字的规律",
//                    JA: "エストレラが数字のパターンを数える",
//                    KO: "에스트레야가 숫자를 묶음으로 세어요",
//                    urlImage:"../books/120",
//                    new:true,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:118,
//                    ES: "Eagle cuenta estrellas",
//                    EN: "Eagle Counts in Space",
//                    PT: "Eagle conta estrelas",
//                    ZH: "伊戈在太空数数",
//                    JA: "イーグルが宇宙で数を数える",
//                    KO: "이글이가 우주에서 숫자를 세요",
//                    urlImage:"../books/118",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:112,
//                    ES:"El Campamento",
//                    EN:"Let's Go Camping",
//                    PT:"O acampamento",
//                    ZH:"我们去露营吧",
//                    JA:"キャンプに行こう",
//                    KO:"즐거운 캠핑을 떠나요",
//                    urlImage:"../books/112",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:111,
//                    ES: "Las formas del juego",
//                    EN: "Shapes of a Game",
//                    PT: "As formas do jogo",
//                    ZH: "比赛中的形状",
//                    JA: "ゲームの特徴",
//                    KO: "경기의 모양",
//                    urlImage:"../books/111",
//                    new:false,
//                    lock:false
//                },
//				{ 
//                    numberBook:110,
//                    ES:"El gol de Justice",
//                    EN:"Justice's First Soccer Goal",
//                    PT:"Primeiro gol de Justice no futebol",
//                    ZH:"贾斯蒂斯的第一个进球",
//                    JA:"ジャスティスの初めてのゴール",
//                    KO:"저스티스의 첫 골",
//                    urlImage:"../books/110",
//                    new:false,
//                    lock:false
//                    
//                },
//                {
//                    numberBook:107,
//                    ES: "Justice descubre las figuras geométricas",
//                    EN: "Justice Discovers Shapes",
//                    PT: "Justice descobre formas geométricas",
//                    ZH: "贾斯蒂斯认识形状",
//                    JA: "ジャスティスはかたちをはっけんします",
//                    KO: "저스티스가 도형을 발견해요",
//                    urlImage:"../books/107",
//                    new:true,
//                    lock:false
//                },
//                { 
//                    numberBook:105,
//                    ES:"La creación de Arthurius",
//                    EN:"The Creation of Arthurius",
//                    PT:"A criação de Arthurius",
//                    ZH:"亚瑟鲁的创造",
//                    JA:"アーサリウスが作ったもの",
//                    KO:"알투리우스의 작품",
//                    urlImage:"../books/105",
//                    new:false,
//                    lock:false  
//                },
//                { 
//                    numberBook:103,
//                    ES: "Luna resuelve un gran rompecabezas",
//                    EN: "Luna Solves a Big Puzzle",
//                    PT: "Luna resolve um grande quebra-cabeça",
//                    ZH: "露娜解出了一道大难题",
//                    JA: "ルナ、大きなパズルを解く",
//                    KO: "루나가 큰 퍼즐을 풀어요",
//                    urlImage:"../books/103",
//                    new:true,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:102,
//                    ES: "El primer partido de Nao",
//                    EN: "Nao's First Soccer Match",
//                    PT: "A primeira partida de futebol de Nao",
//                    ZH: "奈绪的第一场足球赛",
//                    JA: "ナオの初めてのサッカー",
//                    KO: "나오의 첫 축구 시합",
//                    urlImage:"../books/102",
//					new:false,
//                    lock:false
//				},
//				{ 
//                    numberBook:101,
//                    ES:"¡La gran final!",
//                    EN:"The Final Match",
//                    PT:"A partida final",
//                    ZH:"决赛",
//                    JA:"決勝戦",
//                    KO:"결승전",
//                    urlImage:"../books/101",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:100,
//                    ES: "Los colores de la playa",
//                    EN: "The Colors of the Beach",
//                    PT: "As cores da praia",
//                    ZH: "海滩的颜色",
//                    JA: "ビーチのいろ",
//                    KO: "해변의 여러가지 색깔",
//                    urlImage:"../books/100",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:98,
//                    ES: "Puedo ahorrar dinero",
//                    EN: "I Can Save Money",
//                    PT: "Eu posso juntar dinheiro",
//                    ZH: "我可以存钱",
//                    JA: "ちょきんができるよ",
//                    KO: "나는 돈을 저금할 줄 알아요",
//                    urlImage:"../books/98",
//                    new:false,
//                    lock:false
//                },
//                {
//                    numberBook:96,
//                    ES: "Oof y el banco",
//                    EN: "Oof Learns About Banks",
//                    PT: "Segredo de Oof",
//                    ZH: "奥夫存钱的秘密",
//                    JA: "ウーフの貯金の秘密",
//                    KO: "우프의 비밀",
//                    urlImage:"../books/96",
//                    new:false,
//                    lock:false
//                },//Need Fix ES
//                {
//                    numberBook:95,
//                    ES: "El secreto de Oof",
//                    EN: "Oof’s Saving Secret",
//                    PT: "Segredo de Oof",
//                    ZH: "奥夫存钱的秘密",
//                    JA: "ウーフの貯金の秘密",
//                    KO: "우프의 비밀",
//                    urlImage:"../books/95",
//                    new:false,
//                    lock:false
//                    
//                },
//                {
//                    numberBook:94,
//                    ES: "El experimento de Nao",
//                    EN: "Nao Works Hard",
//                    PT: "Nao trabalha duro",
//                    ZH: "奈绪努力工作",
//                    JA: "ナオのどりょく",
//                    KO: "나오는 열심히 일해요",
//                    urlImage:"../books/94",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:93,
//                    ES:"Tomiko es valiente",
//                    EN:"Tomiko is Brave",
//                    PT:"Tomiko é corajosa",
//                    ZH:"勇敢的富子",
//                    JA:"トミコのゆうき",
//                    KO:"용감한 토미코",
//                    urlImage:"../books/93",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:89,
//                    ES: "La historia de los instrumentos musicales",
//                    EN: "The History of Musical Instruments",
//                    PT: "História dos instrumentos musicais",
//                    ZH: "乐器的历史",
//                    JA: "楽器の歴史",
//                    KO: "악기의 역사",
//                    urlImage:"../books/89",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:88,
//                    ES:"Celebrando a Mamá",
//                    EN:"Celebrating Mom",
//                    PT:"O Dia das Mães",
//                    ZH:"庆祝母亲节",
//                    JA:"ははの日",
//                    KO:"어버이날",
//                    urlImage:"../books/88",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:87,
//                    ES: "Los colores de México",
//                    EN: "The Colors of Mexico",
//                    PT: "As cores do Mexico",
//                    ZH: "墨西哥的颜色",
//                    JA: "メキシコのいろ",
//                    KO: "멕시코의 색",
//                    urlImage:"../books/87",
//                    new:true,
//                    lock:false
//                },
//                { 
//                    numberBook:86,
//                    ES: "Oof crea su color favorito",
//                    EN: "Oof Makes His Favorite Color",
//                    PT: "Oof cria sua cor favorita",
//                    ZH: "奥夫调出他最喜欢的颜色",
//                    JA: "ウーフ、好きな色を作る",
//                    KO: "우프가 가장 좋아하는 색을 만들어요",
//                    urlImage:"../books/86",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:85,
//                    ES: "Estrella ama los deportes",
//                    EN: "Estrella Loves to Play Sports",
//                    PT: "Estrella adora os esportes",
//                    ZH: "埃斯特蕾拉热爱运动",
//                    JA: "エストレラはスポーツが大好き",
//                    KO: "에스트레야는 스포츠를 좋아해요",
//                    urlImage:"../books/85",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:83,
//                    ES: "Tomiko va a la feria",
//                    EN: "Tomiko Goes to the Fair",
//                    PT: "Tomiko vai à feira",
//                    ZH: "富子游集市",
//                    JA: "フェアに出かけたトミコ",
//                    KO: "토미코가 축제에 가요",
//                    urlImage:"../books/83",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:81,
//                    ES: "Nao aprende a escuchar",
//                    EN: "Nao Learns to Listen",
//                    PT: "Nao aprende a ouvir",
//                    ZH: "奈绪学着倾听",
//                    JA: "聞くことを覚えたナオ",
//                    KO: "나오가 말을 들어 주어요",
//                    urlImage:"../books/81",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:80,
//                    ES: "Aventura en Codus",
//                    EN: "An Adventure in Codus",
//                    PT: "Aventura em Codus",
//                    ZH: "宼德斯大冒险",
//                    JA: "コーダスの冒険",
//                    KO: "코두스 행성에서 한 모험",
//                    urlImage:"../books/80",
//                    new:false,
//                    lock:false
//                },
//                {
//                    numberBook:78,
//                    ES: "Arthurius y la Yogobanda",
//                    EN: "Arthurius and the Yogoband",
//                    PT: "Arthurius e a Yogobanda",
//                    ZH: "亚瑟鲁与Yogo乐队",
//                    JA: "アーサリウスとヨゴバンド",
//                    KO: "알투리우스와 요고밴드",
//                    urlImage:"../books/78",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:70,
//                    ES: "El héroe de Dinamita",
//                    EN: "Dinamita's Hero",
//                    PT: "O herói de Dinamita",
//                    ZH: "迪纳米塔的偶像",
//                    JA: "ディナミタのヒーロー",
//                    KO: "다이나미타의 영웅",
//                    urlImage:"../books/70",
//                    new:true,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:62,
//                    ES: "El camino de Nao",
//                    EN: "Nao's Journey",
//                    PT: "O caminho de Nao",
//                    ZH: "奈绪的旅程",
//                    JA: "ナオの たび",
//                    KO: "나오의 여행",
//                    urlImage:"../books/62",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:57,
//                    ES:"Pescando con Justice",
//                    EN:"Fishing with Justice",
//                    PT:"A pescaria com Justice",
//                    ZH:"和贾斯蒂斯一起钓鱼",
//                    JA:"ジャスティスとのさかなつり",
//                    KO:"저스티스와 낚시하기",
//                    urlImage:"../books/57",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:55,
//                    ES: "Oof camino al cine",
//                    EN: "Oof On His Way to the Movies",
//                    PT: "Oof a caminho do cinema",
//                    ZH: "奥夫在去看电影的路上",
//                    JA: "えいがを みにいく ウーフ",
//                    KO: "우프가 영화관에 가요",
//                    urlImage:"../books/55",
//                    new:false,
//                    lock:false 
//                },
//                { 
//                    numberBook:54,
//                    ES: "Paz y el concurso de ciencias",
//                    EN: "Paz and the Science Fair",
//                    PT: "Paz e a Feira de Ciências",
//                    ZH: "帕兹与科学竞赛",
//                    JA: "パスと かがく はっぴょうかい",
//                    KO: "파즈와 과학 경진대회",
//                    urlImage:"../books/54",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:53,
//                    ES: "Nao y el jarrón de cerezas",
//                    EN: "Nao and the Jar of Cherries",
//                    PT: "Nao e o pote de cerejas",
//                    ZH: "奈绪和樱桃罐头",
//                    JA: "ナオと さくらんぼの びん",
//                    KO: "나오와 체리 단지",
//                    urlImage:"../books/53",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:51,
//                    ES: "Eagle y el troll",
//                    EN: "Eagle and the Troll",
//                    PT: "Eagle e o troll",
//                    ZH: "伊戈和巨魔",
//                    JA: "イーグルとトロール",
//                    KO: "이글이와 트롤",
//                    urlImage:"../books/51",
//                    new:false,
//                    lock:false 
//                },
//                { 
//                    numberBook:49,
//                    ES: "Aventuras en el hielo",
//                    EN: "Adventures in the Land of Ice",
//                    PT: "Aventuras na Terra do Gelo",
//                    ZH: "冰原历险记",
//                    JA: "こおりのくにのぼうけん",
//                    KO: "얼음의 땅에서 한 모험",
//                    urlImage:"../books/49",
//                    new:false,
//                    lock:false
//                },
//                {
//                    numberBook:48,
//                    ES: "El monstruo en el armario",
//                    EN: "The Monster in the Closet",
//                    PT: "O monstro no guarda-roupa",
//                    ZH: "壁橱里的怪物",
//                    JA: "おしいれのモンスター",
//                    KO: "옷장 괴물",
//                    urlImage:"../books/48",
//                    new:false,
//                    lock:false
//                },
//                {
//                    numberBook:47,
//                    EN: "The Sword",
//					ES: "La espada",
//					PT: "A espada",
//					ZH: "剑",
//					JA: "まほうのけん",
//					KO: "검",
//                    urlImage:"../books/47",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:46,
//                    ES:"La cartera",
//                    EN:"The Wallet",
//                    PT:"A carteira",
//                    ZH:"钱包",
//                    JA:"おさいふ",
//                    KO:"지갑을 주웠어요",
//                    urlImage:"../books/46",
//                    new:false,
//                    lock:false
//                    
//                },
//                {
//                    numberBook:45,
//                    ES:"Eagle y Malitovich en el derrumbe",
//                    EN:"Eagle and Malitovich are Trapped",
//                    PT:"Eagle e Malitovich ficam presos",
//                    ZH:"伊戈和马利托维奇被困住了",
//                    JA:"とじこめられたイーグルとマリトビッチ",
//                    KO:"이글이와 말리토비치가 갇혔어요 ",
//                    urlImage:"../books/45",
//                    new:false,
//                    lock:false
//
//                },
//                {
//                    numberBook:44,
//                    ES:"La filosofía de Oof",
//                    EN:"Oof's Philosophy",
//                    PT:"A filosofia de Oof",
//                    ZH:"奥夫的人生观",
//                    JA:"ウーフのてつがく",
//                    KO:"우프의 철학",
//                    urlImage:"../books/44",
//                    new:false,
//                    lock:false
//
//                },
//                {
//                    numberBook:43,
//                    ES:"Dinamita no quiere ir a la escuela",
//                    EN:"Dinamita Doesn't Want to Go to School",
//                    PT:"Dinamita não quer ir para a escola",
//                    ZH:"迪纳米塔不想去上学",
//                    JA:"がっこうへ いきたくない ディナミタ",
//                    KO:"다이나미타는 학교에 가기 싫어요",
//                    urlImage:"../books/43",
//                    new:false,
//                    lock:false
//
//                },
//                { 
//                    numberBook:42,
//                    ES: "El diploma de Nao",
//                    EN: "Nao's Diploma",
//                    PT: "O diploma de Nao",
//                    ZH: "奈绪的奖状",
//                    JA: "ナオの しょうじょう",
//                    KO: "나오의 졸업장",
//                    urlImage:"../books/42",
//                    new:false,
//                    lock:false
//                },
//                {
//                    numberBook:41,
//                    ES:"Oona y el concurso de talentos",
//                    EN:"Oona and the Talent Show",
//                    PT:"Oona e o show de talentos",
//                    ZH:"奥娜和才艺秀",
//                    JA:"ウーナのはっぴょうかい",
//                    KO:"우나와장기자랑",
//                    urlImage:"../books/41",
//                    new:false,
//                    lock:false
//
//                },
//                { 
//                    numberBook:40,
//                    ES:"Eagle y el árbol de las cometas",
//                    EN:"Eagle Doesn't Give Up",
//                    PT:"Eagle não desiste",
//                    ZH:"伊戈不放弃",
//                    JA:"あきらめないイーグル",
//                    KO:"이글이는포기하지않아",
//                    urlImage:"../books/40",
//                    new:false,
//                    lock:false
//                    
//                },
//                {
//                    numberBook:39,
//                    ES: "Paz y el cepillo de Oona",
//                    EN: "Paz and Oona's Hairbrush",
//                    PT: "Escova de cabelos de Paz e Oona",
//                    ZH: "帕兹和奥娜的发梳",
//                    JA: "パスとウーナのヘアブラシ",
//                    KO: "파즈와 우나의 빗",
//                    urlImage:"../books/39",
//                    new:false,
//                    lock:false
//                },
//                {
//                    numberBook:38,
//                    ES:"Oof y la piñata",
//                    EN:"Oof and the Piñata",
//                    PT:"Oof e a pinhata",
//                    ZH:"奥夫和皮纳塔彩饰陶罐",
//                    JA:"ウーフ と ピニャータ",
//                    KO:"우프와피냐타",
//                    urlImage:"../books/38",
//                    new:false,
//                    lock:false
//
//                },
//                { 
//                    numberBook:37,
//                    ES:"La bondad de Theffanie",
//                    EN:"Theffanie is Kind",
//                    PT:"Theffanie mostra bondade",
//                    ZH:"善良的范妮",
//                    JA:"やさしいティファニー",
//                    KO:"친절한티파니 ",
//                    urlImage:"../books/37",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:36,
//                    ES:"La decisión de Eagle",
//                    EN:"Eagle Makes a Choice",
//                    PT:"Eagle faz uma escolha",
//                    ZH:"伊戈的抉择",
//                    JA:"イーグルのけつだん",
//                    KO:"이글이의선택",
//                    urlImage:"../books/36",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:35,
//                    ES:"¡Ahí viene Ignorantia!",
//                    EN:"Here Comes Ignorantia",
//                    PT:"Lá vem a Ignorantia",
//                    ZH:"无知蒂亚来了",
//                    JA:"イグノランティアがきた！",
//                    KO:"이그노란티아가나타났다! ",
//                    urlImage:"../books/35",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:33,
//                    ES:"Héroe",
//                    EN:"Hero",
//                    PT:"Herói",
//                    ZH:"英雄",
//                    JA:"ヒーロー",
//                    KO:"영웅",
//                    urlImage:"../books/33",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:32,
//                    ES:"La voz",
//                    EN:"The Voice",
//                    PT:"A voz",
//                    ZH:"说话的声音",
//                    JA:"こえ",
//                    KO:"목소리",
//                    urlImage:"../books/32",
//                    new:false,
//                    lock:false
//                    
//                },
//                {
//                    numberBook:27,
//                    ES:"El examen de Tomiko",
//                    EN:"Tomiko's Test",
//                    PT:"Prova da Tomiko",
//                    ZH:"富子的考试",
//                    JA:"トミコのテスト",
//                    KO:"토미코의 시험",
//                    urlImage:"../books/27",
//                    new:false,
//                    lock:false
//
//                },
//                { 
//                    numberBook:25,
//                    ES:"Cada cosa en su lugar",
//                    EN:"Everything in the Right Place",
//                    PT:"Cada coisa no seu lugar",
//                    ZH:"各得其所",
//                    JA:"すべてはきまったばしょに",
//                    KO:"물건을 제자리에 놓기",
//                    urlImage:"../books/25",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:24,
//                    ES:"Los objetos de Justice",
//                    EN:"Justice's Belongings",
//                    PT:"As coisas de Justice",
//                    ZH:"贾斯蒂斯的东西",
//                    JA:"ジャスティスのもちもの",
//                    KO:"저스티스의 물건",
//                    urlImage:"../books/24",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:23,
//                    ES:"Gracias",
//                    EN:"Thank You",
//                    PT:"Obrigado",
//                    ZH:"谢谢",
//                    JA:"ありがとう",
//                    KO:"고마워",
//                    urlImage:"../books/23",
//                    new:false,
//                    lock:false
//                },
//                { 
//                    numberBook:22,
//                    ES:"La Criatura",
//                    EN:"The creature",
//                    PT:"O monstro",
//                    ZH:"怪物",
//                    JA:"モンスター",
//                    KO:"특별한 친구",
//                    urlImage:"../books/22",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:21,
//                    ES:"El río",
//                    EN:"The River",
//                    PT:"O rio",
//                    ZH:"河流",
//                    JA:"川",
//                    KO:"강 건너기",
//                    urlImage:"../books/21",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:20,
//                    ES:"¡Por favor!",
//                    EN:"Eagle Doesn't Say Please",
//                    PT:"Eagle não diz “por favor",
//                    ZH:"老鹰不说请字",
//                    JA:"「おねがい」を言わないイーグル",
//                    KO:"부탁해!",
//                    urlImage:"../books/20",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:19,
//                    ES:"El regalo de navidad",
//                    EN:"The Christmas Present",
//                    PT:"O presente de Natal",
//                    ZH:"圣诞礼物",
//                    JA:"クリスマスプレゼント",
//                    KO:"크리스마스 선물",
//                    urlImage:"../books/19",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:16,
//                    ES:"Eagle entiende la navidad",
//                    EN:"Eagle learns about Christmas",
//                    PT:"Eagle entende o Natal",
//                    ZH:"伊戈领悟圣诞节的真谛",
//                    JA:"イーグルとクリスマス",
//                    KO:"이글이의 크리스마스 이해하기",
//                    urlImage:"../books/16",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:15,
//                    ES:"El hogar de Arthurius",
//                    EN:"Arthurius is Homesick",
//                    PT:"Arthurius está com saudade de casa",
//                    ZH:"亚瑟鲁想家了",
//                    JA:"いえにかえりたいアーサリウス",
//                    KO:"알투리우스는 집이 그리워요",
//                    urlImage:"../books/15",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:13,
//                    ES:"El espacio ideal",
//                    EN:"Quiet space",
//                    PT:"Lugar tranquilo",
//                    ZH:"静谧空间",
//                    JA:"静かな場所",
//                    KO:"조용한 공간",
//                    urlImage:"../books/13",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:12,
//                    ES:"El árbol de los dulces",
//                    EN:"The Candy Tree",
//                    PT:"A árvore de doces",
//                    ZH:"糖果树",
//                    JA:"キャンディの木",
//                    KO:"사탕 나무",
//                    urlImage:"../books/12",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:10,
//                    ES:"Camino a la escuela",
//                    EN:"Going to School",
//                    PT:"A ida para a escola",
//                    ZH:"上学",
//                    JA:"がっこうにいこう",
//                    KO:"학교 가는 길",
//                    urlImage:"../books/10",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:9,
//                    ES:"El anillo de las emociones",
//                    EN:"The Mood Ring",
//                    PT:"O anel das emoções",
//                    ZH:"心情戒指",
//                    JA:"きぶんのゆびわ",
//                    KO:"진실 반지",
//                    urlImage:"../books/9",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:8,
//                    ES:"Pelea en la region de hielo y fuego",
//                    EN:"The Fight Between Ice and Fire",
//                    PT:"A luta entre o gelo e o fogo",
//                    ZH:"冰与火之战",
//                    JA:"アイスとファイヤーのけんか",
//                    KO:"얼음과 불의 전투",
//                    urlImage:"../books/8",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:6,
//                    ES:"Estoy Enojada",
//                    EN:"I'm mad",
//                    PT:"Estou com raiva!",
//                    ZH:"我很生气！",
//                    JA:"おこっているときは",
//                    KO:"화가 났어요!",
//                    urlImage:"../books/6",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:4,
//                    ES:"Cosas hermosas",
//                    EN:"Many Beautiful Things",
//                    PT:"Muitas coisas bonitas",
//                    ZH:"许多美好的事物",
//                    JA:"うつくしいもの",
//                    KO:"아름다운 것들",
//                    urlImage:" ../books/4",
//                    new:false,
//                    lock:false
//                    
//                },
//                { 
//                    numberBook:3,
//                    ES:"No tengas miedo de...",
//                    EN:"Don't be Afraid...",
//                    PT:"Não tenha medo...",
//                    ZH:"别害怕...",
//                    JA:"こわくないさ",
//                    KO:"무서워 하지 마",
//                    urlImage:"../books/3",
//                    new:false,
//                    lock:false
//                    
//                }
//          ]
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loaded(){ 
    //window.history.pushState("https://books.yogome.com", "Title", "/");
	document.getElementById("bodys").style.backgroundImage="url('../landing/assets/images/books/sky.jpg')";
    document.getElementById("bodys").style.backgroundColor='#73b7c0';
    document.getElementById("bodys").style.backgroundImage="url('../landing/assets/images/books/Fondo.png')";
    document.getElementById("books").style.display='block';
    document.getElementById("loadder").style.display='none';
}
function callBackLogIn(){
	//console.log(credentials)
	email = credentials.email;
	if(email){
		$("#menuUserMovil").css("display","block");
		$("#menuUser").css("display","flex");
		$(".accesButtons").hide();
		$(".accesButtonsMovil").hide();
		$(".navbar").addClass("navbar-login");
		$("#id_user").text(email)    
		$("#id_userMovil").text(email)    
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

language=getParameterByName("language");
if(language!=null){
	language=language.toUpperCase();
	localStorage.language=language;
}else{
	if(localStorage.language){
		language=localStorage.language;
	}else{
		localStorage.language="EN";
	}
}
detectOrigins = getParameterByName("app");
nombre = getParameterByName("name");
console.log(language)
if(localStorage.book){
	place=localStorage.book;
	 for(var init=0;init<=booksArray.length-1;init++){
        booksRelation[booksArray[init].numberBook] = init
    }
}


if(detectOrigins){
    localStorage.app=detectOrigins;
}else if(detectOrigins==null){
	if(localStorage.app){
		detectOrigins=localStorage.app;
	}
}


//Here I get the language

//var lang = getCookie("language");
//
//if(localStorage.language && lang==null){
//    language=localStorage.language;
//}else{
//	language=lang;
//	localStorage.language=language;
//}

//Here I get the name
//if(localStorage.name){
//    nombre=localStorage.name;
//}else{
//    nombre="Yogome";
//}

if(nombre!=null || localStorage.name=="Yogome"){
	localStorage.name=nombre;
}
if(localStorage.name==null && nombre==null){
	nombre="Yogome";
	nombre=localStorage.name;
}
if(nombre==null){
	nombre="Yogome";
}
//Here I recognize if it is in app or in web


if(detectOrigins=="true"){
	localStorage.app="true";
	$(".navbar").hide();
	$(".col-xs-12").hide();
	$("footer").hide();
	//$(".bg-zip").addClass("newBg-zip");
}else if(detectOrigins=="false"){
	localStorage.app="false";
	$(".webPageSection2").show();
	$("nav").show();
    $("footer").show();
}
	
//epicModel.loadPlayer(false,callBackLogIn);

//$("#logInButton").click(function(){
//	//epicModel.loadPlayer(true, callBackLogIn)
//});

//$("#devicelogInButton").click(function(){
//	//epicModel.loadPlayer(true, callBackLogIn)
//});

//var booksNames ={
//    "lacartera":{id:1, lang:"ES"}
//}
//var bookName = "lacartera"
//var id = booksNames[bookName].id
//var language = booksNames[bookName].lang
//
//var titleText[0] = booksArray[0][language];
//$(libro0).text(titleText)
setTimeout(loaded, 3000);


function startBooks(){
         var id=0;
		 var w=0;
          for(i=0;i<=booksArray.length-1;i++){
			  
			  booksRelation[booksArray[i].numberBook] = i
			  
			  if(place==booksArray[i].numberBook && window.innerWidth<=1000 && window.innerWidth>=568){
			  	 	 booksRelation[booksArray[i].numberBook] = i+1;
			  }else if(place==booksArray[i].numberBook && window.innerWidth<568){
				   booksRelation[booksArray[i].numberBook] = i+2;
			  } 
			  
              $("#container-books").append('<li id="book'+ i +'"class="responsiveGallery-item"></li>');
              if(booksArray[i].new){
                  

				 if(language!="ZH" && language!="JA" && language!="KO" && language!="EN" && language!="PT"){
					  $("#container-books").find("#book" + i).append('<div class="new-ribbon "> <div class="new-text text52">NEW!</div></div>');
				  }else if(language=="ZH"){
					  $("#container-books").find("#book" + i).append('<div class="new-ribbon "> <div class="new-text-ZH text52">NEW!</div></div>');
				  }else if(language=="JA"){
					  $("#container-books").find("#book" + i).append('<div class="new-ribbon "> <div class="new-text-JA text52">NEW!</div></div>');
				  }else if(language=="KO"){
					  $("#container-books").find("#book" + i).append('<div class="new-ribbon "> <div class="new-text-KO text52">NEW!</div></div>');
				  }else if(language=="EN"){
					  $("#container-books").find("#book" + i).append('<div class="new-ribbon "> <div class="new-text-EN text52">NEW!</div></div>');
				  }else if(language=="PT"){
					  $("#container-books").find("#book" + i).append('<div class="new-ribbon "> <div class="new-text-PT text52">NEW!</div></div>');
				  }
				  
              }
              $("#book" + i).attr("number",booksArray[i].numberBook);
			  $("#book" + i).attr("index",i);

              if(language == "ES"){
                   $("#container-books").find("#book" + i).append('<img src="'+booksArray[i].urlImage + '/1ESV.png" height="320" width="320" class"beginSlide" alt="" class="responsivGallery-pic">');

                    console.log(i +  ": " + booksArray[i].lock);

                    if(booksArray[i].lock){
                        $("#container-books").find("#book" + i).find("img").addClass("locked");
                    }

                  $("#book" + i).click(function(){
                        magic.play();
                      id=$(this).attr("number");
					  w=$(this).attr("index");
					   //$("#placeBook").reno('<img src="'+booksArray[w].urlImage + '/1ESV.png" height="320" width="320" class"beginSlide" alt="" class="responsivGallery-pic">').append('<img src="'+booksArray[w].urlImage + '/1ESV.png" height="320" width="320" class"beginSlide" alt="" class="responsivGallery-pic">');
                      if(nombre && nombre!="Yogome" && nombre!=null){
                          //window.open(booksArray[$(this).attr("number")].url + "#" + language  + epicModel.getCredentials().name, "_self");
                         window.open("../" +id, "_self");
                      }else{
                         window.open("../" +id, "_self");
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
                          window.open("../" +id, "_self");
                      }else{
                         window.open("../" +id, "_self");
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
                          window.open("../" +id, "_self");
                      }else{
                          window.open("../" +id, "_self");
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
                          window.open("../" +id, "_self");
                      }else{
                         window.open("../" +id, "_self");
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
                          window.open("../" +id, "_self");
                      }else{
                          window.open("../" +id, "_self");
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
                         window.open("../" +id, "_self");
                      }else{
                          window.open("../" +id, "_self");
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
                         window.open("../" +id, "_self");
                      }else{
                         window.open("../" +id, "_self");
                      } 
                  });
              }
              
			  
			 
              // create stars (blocked)
//<div class="bookStar"><img src="assets/images/books/EstrellaEmpty.png"/>
              $("#container-books").find("#book" + i).append('</div><div id="textBook' + i +'" class="w-responsivGallery-info2"></div>');
          
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
startBooks();

  $(function () {
        $('.responsiveGallery-wrapper').responsiveGallery({
            animatDuration: 400, 
            $btn_prev: $('.responsiveGallery-btn_prev'),
            $btn_next: $('.responsiveGallery-btn_next'),
            currentIndex:booksRelation[place],
        });
    });