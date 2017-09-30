var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
//console.log(ipaddress);
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;
//console.log(port);
var express = require("express");
var http = require("http");

var app = express();

var server = http.createServer(app).listen(port, ipaddress);
//console.log("pocuvam");
var io = require("socket.io")(server);
var medzera=/\s*/g;



var fs=require('fs');








app.use(express.static("./public"));



io.on("connection", function(socket) {
socket.nepodvadza=0;
socket.meno="";
socket.priezvisko={x:socket.meno,y:socket.id,z:socket.nepodvadza};
socket.zmenaMena=0;
socket.idko="";
socket.pocetZiadosti=0;
socket.pocetOdpovedi=0;



	socket.on("kto", function(message) {
		if (socket.zmenaMena < 2){
		socket.meno=message;
		if (message.length>20)
			{socket.meno="Pán Dlháň"}
		socket.priezvisko={x:socket.meno,y:socket.id,z:socket.nepodvadza};
			//console.log(socket.priezvisko.y);
			//console.log(socket.priezvisko.x);
		socket.zmenaMena++;
		}
	});
			  

    socket.on("ko", function(message) {
		//console.log("prišlo ko: "+message);
	     socket.pocetOdpovedi++
        //male2=socket.odpoved.toLowerCase();
		if (message=="#"){
				socket.emit("ciel", message+" to dal");
        		socket.broadcast.emit("ciel", message+" to dal");
			socket.emit("kto",socket.meno+" to dal");
		socket.broadcast.emit("kto",socket.meno+" to dal");
			//socket.nepodvadza++;
			return;
			}
		if((socket.pocetZiadosti==socket.pocetOdpovedi)&&(socket.pocetZiadosti>0) && (socket.pocetOdpovedi>0))
		{
        male2=socket.s.toLowerCase();
        //console.log("prišlo ko: "+message);
        male2=male2.replace(medzera,"");
        if (male2==message){
        socket.emit("kol", 1);
		socket.nepodvadza++;	
        socket.priezvisko={x:socket.meno,y:socket.id,z:socket.nepodvadza};
    }
        else{
          socket.emit("kol", socket.s); 
         
        }
		//console.log("pocet: "+socket.nepodvadza)
   //socket.emit("kto",socket.meno+" "+socket.nepodvadza+"x OK");
		socket.emit("kto",socket.priezvisko);
		socket.broadcast.emit("kto",socket.priezvisko);
		//console.log(socket.nepodvadza+"x OK");
		}
		//else{
		//socket.emit("kol", "podvod!!!!!");
		//}
    });

   socket.on("zmena", function(message) {
         //console.log(poradie);
         //console.log(message.name);
        var a =poradie.indexOf(message.name);
        //console.log(poradie[0].name);
        

});   
        
      socket.on("cho", function(cOtazky) {
	  socket.pocetZiadosti++;
		  if(socket.pocetZiadosti==socket.pocetOdpovedi+1){
        //console.log("chcú otázku");
        //socket.emit("choX", randomTexts[cOtazky]);
		//console.log(randomTexts[cOtazky]);
        socket.o = randomTexts[cOtazky];
        //console.log('o:'+socket.o);
        socket.z = socket.o.search("value=");
        socket.k = socket.o.search("></form>");
        socket.s=socket.o.substring(socket.z+7,socket.k-1)
		
		
		socket.p = socket.o.substring(0,socket.z)+"></form>";
		socket.emit("choX", socket.p);
		//console.log	('o:'+socket.o);  
        //console.log('p:'+socket.p);
			  }
        
    });  

        
        
    

    
    
    socket.on("ciel", function(message) {
		if (message.length>20)
			{message="Pán Dlháň"}
		if(socket.nepodvadza== socket.pocetZiadosti==socket.pocetOdpovedi==20){
        socket.emit("ciel", message+" to dal.");
        socket.broadcast.emit("ciel", message+" to dal.");
			socket.nepodvadza=0;
		}
		if (message=="@"){
			socket.nepodvadza=0;
			socket.pocetZiadosti=0;
			socket.pocetOdpovedi=0;
		}
    });
     //console.log(pa);
    
   
    //socket.emit("ppri", "Počet pripojení: " +io.engine.clientsCount);
    //socket.broadcast.emit("ppri", "Počet pripojení: " +io.engine.clientsCount);

   
   
   });




cast1="<strong> <font color=red>";castR1=cast1+"Zapíš rímskymi číslicami ";cast2="</font> </strong><form name='bez'><input type='text' onpaste='return false;'  onKeyDown='return jd(event.which)'name='bez2' required id='bez2' size=1600><input type ='hidden' name='bez3'value='";cast3="'></form>";cast21o="'><br>";cast22o="</strong><form name='bez'><input type='text'  onKeyDown='return jd(event.which)'name='bez2' ><input type ='hidden' name='bez3'value='";cast2m="'><br>";cast3m="</strong><form name='bez'><input type='text' onKeyDown='return jd(event.which)'name='bez2' ><input type ='hidden' name='bez3'value='";cast1t="<strong>";cast2t="</strong><form name='bez'><input type='text'  onKeyDown='return jd(event.which)'  onKeyDown='return jd(event.which)'name='bez2'id='bez2' ><input type ='hidden' name='bez3'value='";cast1o="<strong> <img src='../../images/";cast2o="'id='img_orig'><br></strong><form name='bez'><input type='text'  onKeyDown='return jd(event.which)'  onKeyDown='return jd(event.which)'name='bez2'id='bez2' ><input type ='hidden' name='bez3'value='";cast2ot="'id='img_orig'><br>";cast3ot="</strong><form name='bez'><input type='text'  onKeyDown='return jd(event.which)' name='bez2'id='bez2' ><input type ='hidden' name='bez3'value='";cast3="'></form>";cislo12=Math.round(1+Math.random());cislo13=Math.round(1+(2*Math.random()));cislo14=Math.round(1+(3*Math.random()));cislo15=Math.round(1+(4*Math.random()));cislo16=Math.round(1+(5*Math.random()));cislo18=Math.round(1+(7*Math.random()));cislo19=Math.round(1+(8*Math.random()));cislo110=Math.round(1+(9*Math.random()));cislo111=Math.round(1+(10*Math.random()));cislo1100=Math.round(1+(99*Math.random()));en3="onKeyDown='return otazky3(event.which)'";en="onKeyDown='return jd(event.which)'";cast3z="<strong ><form name='bez'>";cast31="<input type='text'  "+en3+"name='odpoved1' size=4 >";cast32="<input type='text' "+en3+"name='odpoved2' size=4 >";cast33="<input type='text' "+en3+"name='odpoved3' size=4 >";cast3o="</strong> <input type ='hidden' name='bez3'value='";cast3k="'></form>";i=0;a=0;k=0;randomTexts=new Array();temy=new Array();pa=new Array();
temy[k++]=k+".rodina";
//1
randomTexts[i++]=cast1+"rodina :"+cast2+"die Familie"+cast3;randomTexts[i++]=cast1+"otec:"+cast2+"der Vater"+cast3;randomTexts[i++]=cast1+"mama:"+cast2+"die Mutter"+cast3;randomTexts[i++]=cast1+"brat:"+cast2+"der Bruder"+cast3;randomTexts[i++]=cast1+"To je moja rodina."+cast2+"Das ist meine Familie."+cast3;randomTexts[i++]=cast1+"To je môj otec."+cast2+"Das ist mein Vater."+cast3;randomTexts[i++]=cast1+"To je moja matka."+cast2+"Das ist meine Mutter."+cast3;randomTexts[i++]=cast1+"To je môj brat Štefan."+cast2+"Das ist mein Bruder Stefan."+cast3;randomTexts[i++]=cast1+"tvoj:"+cast2+"dein"+cast3;randomTexts[i++]=cast1+"tvoja rodina:"+cast2+"deine Familie"+cast3;randomTexts[i++]=cast1+"maľovať:"+cast2+"malen"+cast3;randomTexts[i++]=cast1+"rodokmeň:"+cast2+"der Stammbaum"+cast3;
pa[a++]=randomTexts.length;
temy[k++]=k+".rodina II";
//2
randomTexts[i++]=cast1+"Namaľuj rodokmeň."+cast2+"Mal einen Stammbaum."+cast3;randomTexts[i++]=cast1+"Utvor rozkaz od du malst:"+cast2+"mal"+cast3;randomTexts[i++]=cast1+"lepiť, nalepiť:"+cast2+"kleben"+cast3;randomTexts[i++]=cast1+"Utvor rozkaz od du klebst:"+cast2+"klebe"+cast3;randomTexts[i++]=cast1+"Akuzatív pre člen der:"+cast2+"den"+cast3;randomTexts[i++]=cast1+"Akuzatív pre člen die:"+cast2+"die"+cast3;randomTexts[i++]=cast1+"Akuzatív pre člen das:"+cast2+"das"+cast3;randomTexts[i++]=cast1+"Aký pád sa používa po otázke kam pre predložku in?"+cast2+"akuzatív"+cast3;randomTexts[i++]=cast1+"Aký pád sa používa po otázke kde pre predložku in?"+cast2+"datív"+cast3;randomTexts[i++]=cast1+"Nalep fotografie do rodokmeňu."+cast2+"Klebe Fotos in den Stammbaum."+cast3;randomTexts[i++]=cast1+"starý otec, dedko, starký:"+cast2+"der Opa"+cast3;randomTexts[i++]=cast1+"môj starý otec:"+cast2+"mein Opa"+cast3;randomTexts[i++]=cast1+"babička, stará mama, starká:"+cast2+"die Oma"+cast3;
randomTexts[i++]=cast1+"1"+cast2+"eins"+cast3;
randomTexts[i++]=cast1+"2"+cast2+"zwei"+cast3;
randomTexts[i++]=cast1+"3"+cast2+"drei"+cast3;
randomTexts[i++]=cast1+"4"+cast2+"vier"+cast3;
randomTexts[i++]=cast1+"5"+cast2+"fünf"+cast3;
randomTexts[i++]=cast1+"6"+cast2+"sechs"+cast3;
randomTexts[i++]=cast1+"7"+cast2+"sieben"+cast3;
randomTexts[i++]=cast1+"8"+cast2+"acht"+cast3;
randomTexts[i++]=cast1+"9"+cast2+"neun"+cast3;
randomTexts[i++]=cast1+"10"+cast2+"zehn"+cast3;
randomTexts[i++]=cast1+"11"+cast2+"elf"+cast3;
randomTexts[i++]=cast1+"12"+cast2+"zwölf"+cast3;
randomTexts[i++]=cast1+"13"+cast2+"dreizehn"+cast3;
randomTexts[i++]=cast1+"14"+cast2+"vierzehn"+cast3;
randomTexts[i++]=cast1+"15"+cast2+"fünfzehn"+cast3;
randomTexts[i++]=cast1+"16"+cast2+"sechzehn"+cast3;
randomTexts[i++]=cast1+"17"+cast2+"siebzehn"+cast3;
randomTexts[i++]=cast1+"18"+cast2+"achtzehn"+cast3;
randomTexts[i++]=cast1+"19"+cast2+"neunzehn"+cast3;
randomTexts[i++]=cast1+"20"+cast2+"zwanzig"+cast3;
randomTexts[i++]=cast1+"byť:"+cast2+"sein"+cast3;
randomTexts[i++]=cast1+"ja som:"+cast2+"ich bin"+cast3;
randomTexts[i++]=cast1+"ty si:"+cast2+"du bist"+cast3;
randomTexts[i++]=cast1+"on je:"+cast2+"er ist"+cast3;
randomTexts[i++]=cast1+"ona je:"+cast2+"sie ist"+cast3;
randomTexts[i++]=cast1+"ono je:"+cast2+"es ist"+cast3;
randomTexts[i++]=cast1+"my sme:"+cast2+"wir sind"+cast3;
randomTexts[i++]=cast1+"vy ste:"+cast2+"ihr seid"+cast3;
randomTexts[i++]=cast1+"oni sú:"+cast2+"sie sind"+cast3;
randomTexts[i++]=cast1+"Vy ste (vykanie):"+cast2+"Sie sind"+cast3;
randomTexts[i++]=cast1+"bývať"+cast2+"wohnen"+cast3;
randomTexts[i++]=cast1+"ja bývam:"+cast2+"ich wohne"+cast3;
randomTexts[i++]=cast1+"ty bývaš"+cast2+"du wohnst"+cast3;
randomTexts[i++]=cast1+"on býva"+cast2+"er wohnt"+cast3;
randomTexts[i++]=cast1+"ona býva:"+cast2+"sie wohnt"+cast3;
randomTexts[i++]=cast1+"ono býva:"+cast2+"es wohnt"+cast3;
randomTexts[i++]=cast1+"my bývame:"+cast2+"wir wohnen"+cast3;
randomTexts[i++]=cast1+"vy bývate:"+cast2+"ihr wohnt"+cast3;
randomTexts[i++]=cast1+"oni bývajú:"+cast2+"sie wohnen"+cast3;
randomTexts[i++]=cast1+"volať sa:"+cast2+"heißen"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".Čo robíš?";
//3
randomTexts[i++]=cast1+"Čo robíš?"+cast2+"Was machst du?"+cast3;
randomTexts[i++]=cast1+"jablkový džús:"+cast2+"der Apfelsaft"+cast3;
randomTexts[i++]=cast1+"<img src='http://www.pechac.sk/skola/rgv/images//plavat.jpg'><br>Idem plávať."+cast2+"Ich gehe schwimmen."+cast3;
randomTexts[i++]=cast1+"koláč:"+cast2+"der Kuchen"+cast3;
randomTexts[i++]=cast1+"Skratka pre in+das:"+cast2+"ins"+cast3;
randomTexts[i++]=cast1+"Idem do kina. Spýtame sa otázku kde alebo kam?"+cast2+"kam"+cast3;
randomTexts[i++]=cast1+"Čo má prednosť, ak môžeme použiť v slovenčine otázku kde aj kam?"+cast2+"kam"+cast3;
randomTexts[i++]=cast1+"pomarančový džús:"+cast2+"der Orangensaft"+cast3;
randomTexts[i++]=cast1+"<img src='http://www.pechac.sk/skola/rgv/images//disco.png'><br>Idem na diskotéku."+cast2+"Ich gehe in die Disco."+cast3;
randomTexts[i++]=cast1+"Idem na diskotéku. Spýtame sa otázku kde alebo kam?"+cast2+"kam"+cast3;
randomTexts[i++]=cast1+"Robím večierok."+cast2+"Ich gebe eine Party."+cast3;
randomTexts[i++]=cast1+"kola:"+cast2+"die Cola"+cast3;
randomTexts[i++]=cast1+"Pijem jablkový džús."+cast2+"Ich trinke Apfelsaft."+cast3;
randomTexts[i++]=cast1+"Jem koláč."+cast2+"Ich esse Kuchen."+cast3;
randomTexts[i++]=cast1+"volať sa:"+cast2+"heißen"+cast3;
randomTexts[i++]=cast1+"ja sa volám:"+cast2+"ich heiße"+cast3;
randomTexts[i++]=cast1+"ty sa voláš:"+cast2+"du heißt"+cast3;
randomTexts[i++]=cast1+"on sa volá:"+cast2+"er heißt"+cast3;
randomTexts[i++]=cast1+"ona sa volá:"+cast2+"sie heißt"+cast3;
randomTexts[i++]=cast1+"ono sa volá:"+cast2+"es heißt"+cast3;
randomTexts[i++]=cast1+"my sa voláme:"+cast2+"wir heißen"+cast3;
randomTexts[i++]=cast1+"vy sa voláte:"+cast2+"ihr heißt"+cast3;
randomTexts[i++]=cast1+"oni sa volajú:"+cast2+"sie heißen"+cast3;
randomTexts[i++]=cast1+"Vy sa voláte (vykanie):"+cast2+"Sie heißen"+cast3;
randomTexts[i++]=cast1+"Pani Weigelová, máte súrodencov?"+cast2+"Frau Weigel, haben Sie Geschwister?"+cast3;
randomTexts[i++]=cast1+"pracovať:"+cast2+"arbeiten"+cast3;
randomTexts[i++]=cast1+"ja pracujem:"+cast2+"ich arbeite"+cast3;
randomTexts[i++]=cast1+"ty pracuješ:"+cast2+"du arbeitest"+cast3;
randomTexts[i++]=cast1+"on pracuje:"+cast2+"er arbeitet"+cast3;
randomTexts[i++]=cast1+"my pracujeme:"+cast2+"wir arbeiten"+cast3;
randomTexts[i++]=cast1+"vy pracujete:"+cast2+"ihr arbeitet"+cast3;
randomTexts[i++]=cast1+"oni pracujú:"+cast2+"sie arbeiten"+cast3;
randomTexts[i++]=cast1+"vy pracujete (vykanie):"+cast2+"Sie arbeiten"+cast3;
randomTexts[i++]=cast1+"Sloveso haben je ... sloveso. "+cast2+"nepravidelné"+cast3;

pa[a++]=randomTexts.length;

temy[k++]=k+".hovoriť";
//4
randomTexts[i++]=cast1+"Akú koncovku majú nemecké slovesá v neurčitku?"+cast2+"en"+cast3;randomTexts[i++]=cast1+"hovoriť:"+cast2+"sprechen"+cast3;randomTexts[i++]=cast1+"ja hovorím:"+cast2+"ich spreche"+cast3;randomTexts[i++]=cast1+"ty hovoríš:"+cast2+"du sprichst"+cast3;randomTexts[i++]=cast1+"on hovorí:"+cast2+"er spricht"+cast3;randomTexts[i++]=cast1+"V ktorých osobách bývajú nepravidelné nemecké slovesá?<br>ja a ty<br>ty a on<br>my a vy<br>"+cast2+"ty a on"+cast3;randomTexts[i++]=cast1+"my hovoríme:"+cast2+"wir sprechen"+cast3;randomTexts[i++]=cast1+"vy hovoríte:"+cast2+"ihr sprecht"+cast3;randomTexts[i++]=cast1+"oni hovoria:"+cast2+"sie sprechen"+cast3;randomTexts[i++]=cast1+"Hovoríš po nemecky?"+cast2+"Sprichst du Deutsch?"+cast3;randomTexts[i++]=cast1+"Čo stojí sukňa?"+cast2+"Was kostet der Rock?"+cast3;randomTexts[i++]=cast1+"Chcel by som kilo čerešní."+cast2+"Ich möchte ein Kilo Kirschen."+cast3;randomTexts[i++]=cast1+"Nerobím nič."+cast2+"Ich mache nichts."+cast3;randomTexts[i++]=cast1+"Zostanem doma."+cast2+"Ich bleibe zu Hause."+cast3;randomTexts[i++]=cast1+"Skratka pre in+dem:"+cast2+"im"+cast3;
randomTexts[i++]=cast1+"Pán  a pani Bauerovci majú tri deti."+cast2+"Herr und Frau Bauer haben drei Kinder."+cast3;
randomTexts[i++]=cast1+"Tina, kde býváš?"+cast2+"Tina, wo wohnst du?"+cast3;
randomTexts[i++]=cast1+"Máš nejakú e-mailovú adresu?"+cast2+"Hast du eine E-Mail-Adresse?"+cast3;
randomTexts[i++]=cast1+"Kde bývate, pán Langer?"+cast2+"Wo wohnen Sie, Herr Langer?"+cast3;
randomTexts[i++]=cast1+"Ste ženatý? (vykanie)"+cast2+"Sind Sie verheiratet?"+cast3;
randomTexts[i++]=cast1+"Kto ste? (vykanie)"+cast2+"Wer sind Sie?"+cast3;
randomTexts[i++]=cast1+"Som Tinina matka."+cast2+"Ich bin die Mutter von Tina."+cast3;
randomTexts[i++]=cast1+"My sme rodičia Tiny."+cast2+"Wir sind die Eltern von Tina."+cast3;
randomTexts[i++]=cast1+"V oznamovacej vete stojí sloveso na ... mieste."+cast2+"druhom"+cast3;
randomTexts[i++]=cast1+"Volám sa Tobias."+cast2+"Ich heiße Tobias."+cast3;
randomTexts[i++]=cast1+"Štefan je Tinin brat."+cast2+"Stefan ist der Bruder von Tina."+cast3;
randomTexts[i++]=cast1+"Weigelovci bývajú v Augsburgu."+cast2+"Die Weigels wohnen in Augsburg."+cast3;
randomTexts[i++]=cast1+"hlúpy, sprostý:"+cast2+"doof"+cast3;
randomTexts[i++]=cast1+"Tvoj brat je hlúpy."+cast2+"Dein Bruder ist doof."+cast3;
randomTexts[i++]=cast1+"Odpovedz záporne celou vetou, v odpovedi použi osobné zámeno:<br>Ist der Garten groß?"+cast2+"Nein, er ist nicht groß."+cast3;
randomTexts[i++]=cast1+"Odpovedz záporne celou vetou, v odpovedi použi osobné zámeno:<br>Ist die Küche modern?"+cast2+"Nein, sie ist nicht modern."+cast3;
randomTexts[i++]=cast1+"Odpovedz záporne celou vetou, v odpovedi použi osobné zámeno:<br>Ist der Abstellraum gemütlich?"+cast2+"Nein, er ist nicht gemütlich."+cast3;
randomTexts[i++]=cast1+"Odpovedz záporne celou vetou:<br>Ist das ein Sofa?"+cast2+"Nein, das ist kein Sofa."+cast3;
randomTexts[i++]=cast1+"Odpovedz záporne celou vetou:<br>Hast du einen Hund?"+cast2+"Nein, ich habe keinen Hund."+cast3;
randomTexts[i++]=cast1+"Nie, ja nemám psa, ale mačku."+cast2+"Nein, ich habe keinen Hund, sondern eine Katze."+cast3;
randomTexts[i++]=cast1+"Doplň:<br>mužský rod<br>nominatív, neurčitý člen: ein<br>nominatív, zápor: kein<br>akuzatív, neurčitý člen: einen<br>akuzatív, zápor: ... "+cast2+"keinen"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>mužský rod<br>nominatív, neurčitý člen: ein<br>nominatív, zápor: kein<br>akuzatív, neurčitý člen: ...<br>akuzatív, zápor: keinen "+cast2+"einen"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>mužský rod<br>nominatív, neurčitý člen: ein<br>nominatív, zápor: ...<br>akuzatív, neurčitý člen: einen<br>akuzatív, zápor: keinen "+cast2+"kein"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>mužský rod<br>nominatív, neurčitý člen: ...<br>nominatív, zápor: kein<br>akuzatív, neurčitý člen: einen<br>akuzatív, zápor: keinen "+cast2+"ein"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>ženský rod<br>nominatív, neurčitý člen: ...<br>nominatív, zápor: keine<br>akuzatív, neurčitý člen: eine<br>akuzatív, zápor: keine"+cast2+"eine"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>ženský rod<br>nominatív, neurčitý člen: eine<br>nominatív, zápor: ...<br>akuzatív, neurčitý člen: eine<br>akuzatív, zápor: keine"+cast2+"keine"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>ženský rod<br>nominatív, neurčitý člen: eine<br>nominatív, zápor: keine<br>akuzatív, neurčitý člen: ...<br>akuzatív, zápor: keine"+cast2+"eine"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>ženský rod<br>nominatív, neurčitý člen: eine<br>nominatív, zápor: keine<br>akuzatív, neurčitý člen: eine<br>akuzatív, zápor: ..."+cast2+"keine"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>stredný rod<br>nominatív, neurčitý člen:...<br>nominatív, zápor: kein<br>akuzatív, neurčitý člen: ein<br>akuzatív, zápor: kein"+cast2+"ein"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>stredný rod<br>nominatív, neurčitý člen: ein<br>nominatív, zápor: ...<br>akuzatív, neurčitý člen: ein<br>akuzatív, zápor: kein"+cast2+"kein"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>stredný rod<br>nominatív, neurčitý člen: ein<br>nominatív, zápor: kein<br>akuzatív, neurčitý člen: ...<br>akuzatív, zápor: kein"+cast2+"ein"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>stredný rod<br>nominatív, neurčitý člen: ein<br>nominatív, zápor: kein<br>akuzatív, neurčitý člen: ein<br>akuzatív, zápor: ..."+cast2+"kein"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>množné číslo:<br>nominatív, neurčitý člen: -<br>nominatív, zápor: keine<br>akuzatív, neurčitý člen: -<br>akuzatív, zápor: ..."+cast2+"keine"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>množné číslo:<br>nominatív, neurčitý člen: -<br>nominatív, zápor: ...<br>akuzatív, neurčitý člen: -<br>akuzatív, zápor: keine"+cast2+"keine"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>množné číslo:<br>nominatív, neurčitý člen: ...<br>nominatív, zápor: keine<br>akuzatív, neurčitý člen: -<br>akuzatív, zápor: keine"+cast2+"-"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>množné číslo:<br>nominatív, neurčitý člen: - <br>nominatív, zápor: keine<br>akuzatív, neurčitý člen: ...<br>akuzatív, zápor: keine"+cast2+"-"+cast3;

pa[a++]=randomTexts.length;
temy[k++]=k+".Školské predmety ( strana 29 )";
//5
randomTexts[i++]=cast1+"<img src='http://www.pechac.sk/skola/rgv/images//nj1.gif'><br>Matika :"+cast2+"die Mathe"+cast3;
randomTexts[i++]=cast1+"<img src='http://www.pechac.sk/skola/rgv/images//nj2.jpg'><br>Nemčina :"+cast2+"das Deutsch"+cast3;
randomTexts[i++]=cast1+"<img src='http://www.pechac.sk/skola/rgv/images//nj3.jpg'><br>Angličtina :"+cast2+"das Englisch"+cast3;
randomTexts[i++]=cast1+"<img src='http://www.pechac.sk/skola/rgv/images//nj4.jpg'><br>das Französisch :"+cast2+"francúzština"+cast3;
randomTexts[i++]=cast1+"Pracovné vyučovanie :"+cast2+"das Werken"+cast3;
randomTexts[i++]=cast1+"Umenie :"+cast2+"die Kunst"+cast3;
randomTexts[i++]=cast1+"Informatika :"+cast2+"die Informatik"+cast3;
randomTexts[i++]=cast1+"Náboženstvo :"+cast2+"die Religion"+cast3;
randomTexts[i++]=cast1+"Dejepis:"+cast2+"die Geschichte"+cast3;
randomTexts[i++]=cast1+"Zemepis:"+cast2+"die Erdkunde"+cast3;
randomTexts[i++]=cast1+"Hudba:"+cast2+"die Musik"+cast3;
randomTexts[i++]=cast1+"Šport:"+cast2+"der Sport"+cast3;
randomTexts[i++]=cast1+"Prírodné vedy:"+cast2+"die Naturwissenschaften"+cast3;
randomTexts[i++]=cast1+"Obľúbený predmet:"+cast2+"das Lieblingsfach"+cast3;
randomTexts[i++]=cast1+"Môj obľúbený predmet je nemčina."+cast2+"Mein Lieblingsfach ist Deutsch."+cast3;
randomTexts[i++]=cast1+"V zisťovacích  otázkach stojí sloveso na ... mieste."+cast2+"prvom"+cast3;
randomTexts[i++]=cast1+"V zisťovacích  otázkach stojí podmet na ... mieste."+cast2+"druhom"+cast3;
randomTexts[i++]=cast1+"Voláš sa Sylvia?"+cast2+"Heißt du Sylvia?"+cast3;
randomTexts[i++]=cast1+"Nie, ja sa volám Monika."+cast2+"Nein, ich heiße Monika."+cast3;
randomTexts[i++]=cast1+"Je Tina Štefanova sestra?"+cast2+"Ist Tina die Schwester von Stefan?"+cast3;
randomTexts[i++]=cast1+"Máš súrodencov?"+cast2+"Hast du Geschwister?"+cast3;
randomTexts[i++]=cast1+"Nie, som jedináčik."+cast2+"Nein, ich bin ein Einzelkind."+cast3;
randomTexts[i++]=cast1+"V pondelok idem do hudobnej školy."+cast2+"Am Montag gehe ich in die Musikschule."+cast3;
randomTexts[i++]=cast1+"V utorok idem na plaváreň."+cast2+"Am Dienstag gehe ich ins Schwimmbad."+cast3;
pa[a++]=randomTexts.length;
temy[k++]=k+".Adresa";
//6
randomTexts[i++]=cast1+"prízemie:"+cast2+"das Erdgeschoss"+cast3;
randomTexts[i++]=cast1+"bungalov:"+cast2+"der Bungalow"+cast3;
randomTexts[i++]=cast1+"Doplň neurčitý člen : Ich wohne in ... Dorf. "+cast2+"einem"+cast3;
randomTexts[i++]=cast1+"Doplň neurčitý člen : Ich wohne in ... Bungalow."+cast2+"einem"+cast3;
randomTexts[i++]=cast1+"stred mesta:"+cast2+"die Stadtmitte"+cast3;
randomTexts[i++]=cast1+"in einem Dorf:"+cast2+"na dedine"+cast3;
randomTexts[i++]=cast1+"na okraji mesta:"+cast2+"am Stadtrand"+cast3;
randomTexts[i++]=cast1+"na vidieku:"+cast2+"auf dem Land"+cast3;
randomTexts[i++]=cast1+"vidiek, pole, zem:"+cast2+"das Land"+cast3;
randomTexts[i++]=cast1+"byt:"+cast2+"die Wohnung"+cast3;
randomTexts[i++]=cast1+"zimný štadión:"+cast2+"das Eisstadion"+cast3;
randomTexts[i++]=cast1+"železničná stanica:"+cast2+"der Bahnhof"+cast3;
randomTexts[i++]=cast1+"úrad:"+cast2+"das Amt"+cast3;
randomTexts[i++]=cast1+"poznávacia značka:"+cast2+"das Kennzeichen"+cast3;
randomTexts[i++]=cast1+"cesta:"+cast2+"die Reise"+cast3;
randomTexts[i++]=cast1+"cestovný lístok:"+cast2+"die Fahrkarte"+cast3;
randomTexts[i++]=cast1+"Aká je tvoja adresa ?"+cast2+"Wie ist deine Adresse ?"+cast3;
randomTexts[i++]=cast1+"Moja adresa je Schillerova ulica 7b."+cast2+"Meine Adresse ist Schillerstraße 7b."+cast3;
randomTexts[i++]=cast1+"príjemný, milý, priateľský:"+cast2+"freundlich"+cast3;
randomTexts[i++]=cast1+"Ona je veľmi priateľská."+cast2+"Sie ist sehr freundlich."+cast3;
randomTexts[i++]=cast1+"veselý:"+cast2+"lustig"+cast3;
randomTexts[i++]=cast1+"Moja babička je veselá."+cast2+"Meine Oma ist lustig."+cast3;
randomTexts[i++]=cast1+"milý:"+cast2+"nett"+cast3;
randomTexts[i++]=cast1+"Ona je milá."+cast2+"Sie ist nett."+cast3;
randomTexts[i++]=cast1+"Ja nie som lenivý."+cast2+"Ich bin nicht faul."+cast3;
randomTexts[i++]=cast1+"To je strýko Jano."+cast2+"Das ist Onkel Hans."+cast3;
randomTexts[i++]=cast1+"Môj priateľ sa volá Klaus."+cast2+"Mein Freund heißt Klaus."+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".hobbys";
//7
randomTexts[i++]=cast1+"Čo robíš?"+cast2+"Was machst du?"+cast3;
randomTexts[i++]=cast1+"ja sedím:"+cast2+"ich sitze"+cast3;
randomTexts[i++]=cast1+"ja zbieram:"+cast2+"ich sammle"+cast3;
randomTexts[i++]=cast1+"ja cestujem:"+cast2+"ich fahre"+cast3;
randomTexts[i++]=cast1+"ja vidím:"+cast2+"ich sehe"+cast3;
randomTexts[i++]=cast1+"Aký koníček má ten chlapec?"+cast2+"Was für ein Hobby hat der Junge?"+cast3;
randomTexts[i++]=cast1+"Jeho koníčkom je jazda na skateboarde."+cast2+"Sein Hobby ist Skateboardfahren."+cast3;
randomTexts[i++]=cast1+"ona sa hrá:"+cast2+"sie spielt"+cast3;
randomTexts[i++]=cast1+"on sedí:"+cast2+"er sitzt"+cast3;
randomTexts[i++]=cast1+"ona zbiera:"+cast2+"sie sammelt"+cast3;
randomTexts[i++]=cast1+"ona cestuje:"+cast2+"sie fährt"+cast3;
randomTexts[i++]=cast1+"on vidí:"+cast2+"er sieht"+cast3;
randomTexts[i++]=cast1+"On rád jazdí na skateboarde."+cast2+"Er fährt gern Skateboard."+cast3;
randomTexts[i++]=cast1+"Aký koníček má to dievča?"+cast2+"Was für ein Hobby hat das Mädchen?"+cast3;
randomTexts[i++]=cast1+"Jej (dievčatin) koníček je tancovanie."+cast2+"Sein Hobby ist Tanzen."+cast3;
randomTexts[i++]=cast1+"Ona (dievča) tancuje rada."+cast2+"Es tanzt gern."+cast3;
randomTexts[i++]=cast1+"Plagát je na dverách."+cast2+"Das Poster ist an der Tür."+cast3;
randomTexts[i++]=cast1+"Tancuje ten chlapec rád?"+cast2+"Tanzt der Junge gern?"+cast3;
randomTexts[i++]=cast1+"Nie, on netancuje rád."+cast2+"Nein, er tanzt nicht gern."+cast3;

pa[a++]=randomTexts.length;
temy[k++]=k+".DA";
//8
randomTexts[i++]=cast1+"plavecká hala:"+cast2+"die Schwimmhalle"+cast3;
randomTexts[i++]=cast1+"veža:"+cast2+"der Turm"+cast3;
randomTexts[i++]=cast1+"chcieť:"+cast2+"wollen"+cast3;
randomTexts[i++]=cast1+"ja chcem:"+cast2+"ich will"+cast3;
randomTexts[i++]=cast1+"ty chceš:"+cast2+"du willst"+cast3;
randomTexts[i++]=cast1+"on chce"+cast2+"er will"+cast3;
randomTexts[i++]=cast1+"my chceme:"+cast2+"wir wollen"+cast3;
randomTexts[i++]=cast1+"Čo to stojí?"+cast2+"Was kostet es?"+cast3;
randomTexts[i++]=cast1+"vy chcete:"+cast2+"ihr wollt"+cast3;
randomTexts[i++]=cast1+"oni chcú:"+cast2+"sie wollen"+cast3;
randomTexts[i++]=cast1+"šatník:"+cast2+"der Kleiderschrank"+cast3;
randomTexts[i++]=cast1+"Šatník stojí vedľa okna."+cast2+"Der Kleiderschrank steht neben dem Fenster."+cast3;
randomTexts[i++]=cast1+"plagát:"+cast2+"das Poster"+cast3;
randomTexts[i++]=cast1+"S akým pádom (pádmi) sa používa predložka neben?"+cast2+"datív a akuzatív"+cast3;
randomTexts[i++]=cast1+"Doplň tabuľku:<br><table><tr><th></th><th>MR</th><th>ŽR</th><th>SR</th></tr><tr><td>N</td><td>...</td><td>die</td><td>das</td></tr><td>D</td><td>dem</td><td>der</td><td>dem</td></tr><td>A</td><td>den</td><td>die</td><td>das</td></tr></table>"+cast2+"der"+cast3;
randomTexts[i++]=cast1+"Doplň tabuľku:<br><table><tr><th></th><th>MR</th><th>ŽR</th><th>SR</th></tr><tr><td>N</td><td>der</td><td>die</td><td>das</td></tr><td>D</td><td>dem</td><td>der</td><td>dem</td></tr><td>A</td><td>...</td><td>die</td><td>das</td></tr></table>"+cast2+"den"+cast3;
randomTexts[i++]=cast1+"Plagát je na dverách."+cast2+"Das Poster ist an der Tür."+cast3;
randomTexts[i++]=cast1+"S akým pádom (pádmi) sa používa predložka an?"+cast2+"datív a akuzatív"+cast3;
randomTexts[i++]=cast1+"okno:"+cast2+"das Fenster"+cast3;
randomTexts[i++]=cast1+"Rádio stojí pod oknom."+cast2+"Das Radio steht unter dem Fenster."+cast3;
randomTexts[i++]=cast1+"S akým pádom (pádmi) sa používa predložka unter?"+cast2+"datív a akuzatív"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".jedlo,režim";

randomTexts[i++]=cast1+"Chceš chlieb so syrom?"+cast2+"Möchtest du ein Käsebrot?"+cast3;
randomTexts[i++]=cast1+"Čo chceš jesť? Jablko?"+cast2+"Was möchtest du essen? Einen Apfel?"+cast3;
randomTexts[i++]=cast1+"Kam cestuješ?"+cast2+"Wohin fährst du?"+cast3;
randomTexts[i++]=cast1+"Cestujem do Mníchova."+cast2+"Ich fahre nach München."+cast3;
randomTexts[i++]=cast1+"Máme hlad."+cast2+"Wir haben Hunger."+cast3;
randomTexts[i++]=cast1+"Škola začína o ôsmej hodine."+cast2+"Die Schule fängt um acht Uhr an."+cast3;
randomTexts[i++]=cast1+"Komu telefonuješ?"+cast2+"Wen rufst du an?"+cast3;
randomTexts[i++]=cast1+"Kedy sa v pondelok vrátiš?"+cast2+"Wann kommst du am Montag zurück?"+cast3;
randomTexts[i++]=cast1+"utorok:"+cast2+"der Dienstag"+cast3;
randomTexts[i++]=cast1+"streda:"+cast2+"der Mittwoch"+cast3;
randomTexts[i++]=cast1+"štvrtok:"+cast2+"der Donnerstag"+cast3;
randomTexts[i++]=cast1+"piatok:"+cast2+"der Freitag"+cast3;
randomTexts[i++]=cast1+"sobota (nie der Samstag):"+cast2+"der Sonnabend"+cast3;
randomTexts[i++]=cast1+"nedeľa:"+cast2+"der Sonntag"+cast3;
randomTexts[i++]=cast1+"Vstávam o šiestej hodine."+cast2+"Ich stehe um sechs Uhr auf."+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".choroba, jedlo";

randomTexts[i++]=cast1+"Pani Fischerová, bolí Vás hlava?"+cast2+"Frau Fischer, haben Sie Kopfschmerzen?"+cast3;
randomTexts[i++]=cast1+"Chcel by si (nejakú) čokoládovú tyčinku?"+cast2+"Möchtest du einen Schokoriegel?"+cast3;
randomTexts[i++]=cast1+"Doplň neurčitý člen v akuzatíve:<br>MR: einen <br>ŽR: eine <br>SR: ..."+cast2+"ein"+cast3;
randomTexts[i++]=cast1+"Doplň neurčitý člen v akuzatíve:<br>MR: ... <br>ŽR: eine <br>SR:ein"+cast2+"einen"+cast3;
randomTexts[i++]=cast1+"Doplň neurčitý člen v akuzatíve:<br>MR: einen <br>ŽR: ... <br>SR:ein"+cast2+"eine"+cast3;
randomTexts[i++]=cast1+"Chcel by si (nejaké) jablko?"+cast2+"Möchtest du einen Apfel?"+cast3;
randomTexts[i++]=cast1+"Áno, (nejaké) jablko jem vždy rád."+cast2+"Ja, einen Apfel esse ich immer gern."+cast3;
randomTexts[i++]=cast1+"Chcel by si (nejaký) chlieb so salámou?"+cast2+"Möchtest du ein Wurstbrot?"+cast3;
randomTexts[i++]=cast1+"Nie, nechcem chlieb so salámou?"+cast2+"Nein, ich möchte kein Wurstbrot."+cast3;
randomTexts[i++]=cast1+"Chcel by si (nejakú) tabuľku čokolády?"+cast2+"Möchtest du eine Tafel Schokolade?"+cast3;
randomTexts[i++]=cast1+"Ješ (nejaký) jogurt?"+cast2+"Isst du einen Joghurt?"+cast3;
randomTexts[i++]=cast1+"Nie, nejem jogurt."+cast2+"Nein, ich esse keinen Joghurt."+cast3;
randomTexts[i++]=cast1+"Čo ješ cez prestávku?"+cast2+"Was isst du in der Pause?"+cast3;
randomTexts[i++]=cast1+"Dám si gulášovú polievku."+cast2+"Ich nehme eine Gulaschsuppe."+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".Koníčky";
//9
randomTexts[i++]=cast1+"Hrám na klavír."+cast2+"Ich spiele Klavier."+cast3;
randomTexts[i++]=cast1+"1.osoba j.č., prítomný čas pravidelných slovies, má koncovku slovesa:"+cast2+"e"+cast3;
randomTexts[i++]=cast1+"2.osoba j.č., prítomný čas pravidelných slovies, má koncovku slovesa:"+cast2+"st"+cast3;
randomTexts[i++]=cast1+"3.osoba j.č., prítomný čas pravidelných slovies, má koncovku slovesa:"+cast2+"t"+cast3;
randomTexts[i++]=cast1+"1.osoba mn.č., prítomný čas pravidelných slovies, má koncovku slovesa:"+cast2+"en"+cast3;
randomTexts[i++]=cast1+"2.osoba mn.č., prítomný čas pravidelných slovies, má koncovku slovesa:"+cast2+"t"+cast3;
randomTexts[i++]=cast1+"3.osoba mn.č., prítomný čas pravidelných slovies, má koncovku slovesa:"+cast2+"en"+cast3;
randomTexts[i++]=cast1+"Nehrám na nástroj."+cast2+"Ich spiele kein Instrument."+cast3;
randomTexts[i++]=cast1+"Žiadny, nominatív MR:"+cast2+"kein"+cast3;
randomTexts[i++]=cast1+"Žiadne, nominatív SR:"+cast2+"kein"+cast3;
randomTexts[i++]=cast1+"Žiadna, nominatív ŽR:"+cast2+"keine"+cast3;
randomTexts[i++]=cast1+"Žiadna, akuzatív ŽR:"+cast2+"keine"+cast3;
randomTexts[i++]=cast1+"Žiadne, akuzatív SR:"+cast2+"kein"+cast3;
randomTexts[i++]=cast1+"Žiadneho, akuzatív MR:"+cast2+"keinen"+cast3;
randomTexts[i++]=cast1+"Žiadnemu, datív MR:"+cast2+"keinem"+cast3;
randomTexts[i++]=cast1+"Žiadnemu, datív SR:"+cast2+"keinem"+cast3;
randomTexts[i++]=cast1+"Žiadnej, datív ŽR:"+cast2+"keiner"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".režim";

randomTexts[i++]=cast1+"Ja rozprávam:<br>7.10 (aufstehen)<br>"+cast2+"Um zehn nach sieben stehe ich auf."+cast3;
randomTexts[i++]=cast1+"Kedy sú raňajky?"+cast2+"Wann ist Frühstück?"+cast3;
randomTexts[i++]=cast1+"O štvrť na osem."+cast2+"Um Viertel nach sieben."+cast3;
randomTexts[i++]=cast1+"Kedy je obed?"+cast2+"Wann ist Mittagessen?"+cast3;
randomTexts[i++]=cast1+"Kedy je večera?"+cast2+"Wann ist Abendessen?"+cast3;
randomTexts[i++]=cast1+"Kedy začína škola? (použi sloveso s odlučiteľnou predponou)"+cast2+"Wann fängt die Schule an?"+cast3;
randomTexts[i++]=cast1+"Kedy je prestávka?"+cast2+"Wann ist Pause?"+cast3;
randomTexts[i++]=cast1+"Kedy končí škola?"+cast2+"Wann ist die Schule aus?"+cast3;
randomTexts[i++]=cast1+"Kedy ide autobus?"+cast2+"Wann fährt der Bus?"+cast3;
randomTexts[i++]=cast1+"Popoludní sa učím do školy."+cast2+"Am Nachmittag lerne ich für die Schule."+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".byt+TV";
//10
randomTexts[i++]=cast1+"Wie ist das Wohnzimmer?<br> Je útulná."+cast2+"Es ist gemütlich."+cast3;
randomTexts[i++]=cast1+"Wie ist der Garten?<br> Je veľmi veľká."+cast2+"Er ist sehr groß."+cast3;
randomTexts[i++]=cast1+"Wie ist die Küche?<br> Je malá."+cast2+"Sie ist klein."+cast3;
randomTexts[i++]=cast1+"Wie ist das Bad?<br> Nie je veľmi veľká."+cast2+"Es ist nicht sehr groß."+cast3;
randomTexts[i++]=cast1+"komora:"+cast2+"der Abstellraum"+cast3;
randomTexts[i++]=cast1+"Wie ist der Abstellraum?<br> Je užitočná."+cast2+"Er ist nützlich."+cast3;
randomTexts[i++]=cast1+"pracovňa:"+cast2+"das Arbeitszimmer"+cast3;
randomTexts[i++]=cast1+"Wie ist das Arbeitszimmer?<br> Je praktická."+cast2+"Es ist praktisch."+cast3;
randomTexts[i++]=cast1+"Doplň:<br> der-er-ein<br>die-sie-...<br>das-es-ein"+cast2+"eine"+cast3;
randomTexts[i++]=cast1+"Doplň:<br> der-er-<br>die-sie-eine<br>das-es-ein"+cast2+"ein"+cast3;
randomTexts[i++]=cast1+"pohovka:"+cast2+"das Sofa"+cast3;
randomTexts[i++]=cast1+"Nie, žiadna pohovka."+cast2+"Nein,kein Sofa."+cast3;
randomTexts[i++]=cast1+"Nie, žiadna stolička."+cast2+"Nein,kein Stuhl."+cast3;
randomTexts[i++]=cast1+"Čo pozeráš najradšej v televízii?"+cast2+"Was siehst du am liebsten im Fernsehen?"+cast3;
randomTexts[i++]=cast1+"Najradšej pozerám animované filmy."+cast2+"Am liebsten sehe ich Trickfilme."+cast3;
randomTexts[i++]=cast1+"vysielanie:"+cast2+"die Sendung"+cast3;
randomTexts[i++]=cast1+"Aké je tvoje obľúbené vysielanie?"+cast2+"Was ist deine Lieblingssendung?"+cast3;
randomTexts[i++]=cast1+"Čo si o tom myslíš?"+cast2+"Wie findest du das?"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".V meste";
//11
randomTexts[i++]=cast1+"železničná stanica:"+cast2+"der Bahnhof"+cast3;randomTexts[i++]=cast1+"dóm:"+cast2+"der Dom"+cast3;randomTexts[i++]=cast1+"trh: "+cast2+"der Markt"+cast3;randomTexts[i++]=cast1+"park:"+cast2+"der Park"+cast3;randomTexts[i++]=cast1+"banka:"+cast2+"die Bank"+cast3;randomTexts[i++]=cast1+"diskotéka:"+cast2+"die Disco"+cast3;randomTexts[i++]=cast1+"kostol:"+cast2+"die Kirche"+cast3;randomTexts[i++]=cast1+"pošta:"+cast2+"die Post"+cast3;randomTexts[i++]=cast1+"nákupné centrum:"+cast2+"das Einkaufszentrum"+cast3;randomTexts[i++]=cast1+"hotel:"+cast2+"das Hotel"+cast3;randomTexts[i++]=cast1+"kino:"+cast2+"das Kino"+cast3;randomTexts[i++]=cast1+"múzeum:"+cast2+"das Museum"+cast3;randomTexts[i++]=cast1+"Bývam v byte."+cast2+"Ich wohne in der Wohnung. "+cast3;randomTexts[i++]=cast1+"Aký pád je po predložke in, ak je otázka kde ?"+cast2+"datív"+cast3;randomTexts[i++]=cast1+"Aký pád je po predložke in, ak je otázka kam ?"+cast2+"akuzatív"+cast3;randomTexts[i++]=cast1+"radnica:"+cast2+"das Rathaus"+cast3;randomTexts[i++]=cast1+"zámok:"+cast2+"das Schloss"+cast3;randomTexts[i++]=cast1+"Televízor stojí na skrini."+cast2+"Der Fernseher steht auf dem Schrank ."+cast3;randomTexts[i++]=cast1+"Aký pád je po predložke auf, ak je otázka kde ?"+cast2+"datív"+cast3;pa[a++]=randomTexts.length;temy[k++]=k+".byt";
//12
randomTexts[i++]=cast1+"Moja spálňa je celkom veľká."+cast2+"Mein Schlafzimmer ist ziemlich groß."+cast3;randomTexts[i++]=cast1+"na prvom poschodí"+cast2+"im ersten Stock"+cast3;randomTexts[i++]=cast1+"jedáleň: "+cast2+"das Esszimmer"+cast3;randomTexts[i++]=cast1+"On má desať rokov."+cast2+"Er ist zehn Jahre alt."+cast3;randomTexts[i++]=cast1+"Mám moju vlastnú spálňu."+cast2+"Ich habe mein eigenes Schlafzimmer."+cast3;randomTexts[i++]=cast1+"Je ( izba) veľmi malá."+cast2+"Es ist sehr klein."+cast3;pa[a++]=randomTexts.length;
temy[k++]=k+".čas";
//13
randomTexts[i++]=cast1+"Kedy raňajkuješ ? <br> ü sa píše ALT+0252"+cast2+"Wann isst du Frühstück ?"+cast3;randomTexts[i++]=cast1+"Koľko je hodín ?"+cast2+"Wie spät ist es ?"+cast3;randomTexts[i++]=cast1+"Je sedem hodín. "+cast2+"Es ist sieben Uhr."+cast3;randomTexts[i++]=cast1+"Je pol ôsmej."+cast2+"Es ist halb acht."+cast3;randomTexts[i++]=cast1+"Je sedem pätdesiatpäť minút."+cast2+"Es ist fünf Minuten vor acht."+cast3;randomTexts[i++]=cast1+"Je sedem pätdesiat minút."+cast2+"Es ist zehn Minuten vor acht."+cast3;randomTexts[i++]=cast1+"Je štvrť na osem."+cast2+"Es ist Viertel nach sieben."+cast3;randomTexts[i++]=cast1+"Je trištvrte na osem."+cast2+"Es ist Viertel vor acht."+cast3;randomTexts[i++]=cast1+"Je sedem dvadsať minút."+cast2+"Es ist zwanzig Minuten nach sieben."+cast3;
randomTexts[i++]=cast1+"Doplň určitý člen:<br> Monika zeichnet ... Baum."+cast2+"den"+cast3;
randomTexts[i++]=cast1+"strom:"+cast2+"der Baum"+cast3;
randomTexts[i++]=cast1+"Doplň neurčitý člen:<br> Ich male ... Ball."+cast2+"einen"+cast3;
randomTexts[i++]=cast1+"lopta:"+cast2+"der Ball"+cast3;
randomTexts[i++]=cast1+"kresliť:"+cast2+"zeichnen"+cast3;
randomTexts[i++]=cast1+"Doplň určitý člen:<br> Ich zeichne ... Hund."+cast2+"den"+cast3;
randomTexts[i++]=cast1+"ja chcem:"+cast2+"ich will"+cast3;
randomTexts[i++]=cast1+"ty chceš:"+cast2+"du willst"+cast3;
randomTexts[i++]=cast1+"on chce:"+cast2+"er will"+cast3;
randomTexts[i++]=cast1+"my chceme:"+cast2+"wir wollen"+cast3;
randomTexts[i++]=cast1+"vy chcete:"+cast2+"ihe wollt"+cast3;
randomTexts[i++]=cast1+"oni chcú:"+cast2+"sie wollen"+cast3;
randomTexts[i++]=cast1+"cez víkend:"+cast2+"am Wochenende"+cast3;
randomTexts[i++]=cast1+"Baltické more:"+cast2+"die Ostsee"+cast3;
randomTexts[i++]=cast1+"Chceme ísť (cestovať) cez víkend ku Baltickému moru."+cast2+"Wir wollen am Wochenende an die Ostsee fahren."+cast3;
randomTexts[i++]=cast1+"vydať sa, oženiť sa:"+cast2+"heiraten"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".mesto";
//14
randomTexts[i++]=cast1+"V lete sme boli na vidieku. "+cast2+"Im Sommer waren wir auf dem Land."+cast3;randomTexts[i++]=cast1+"Aký pád ( pády) sú po predložke auf ? "+cast2+"datív a akuzatív"+cast3;randomTexts[i++]=cast1+"Náš strýko býva na dedine v bungalove."+cast2+"Unser Onkel wohnt  in einem Dorf im Bungalow."+cast3;randomTexts[i++]=cast1+"pre, za <br> ü sa píše ALT+0252"+cast2+"für"+cast3;randomTexts[i++]=cast1+"Aký pád (pády) sú po predložke  für? "+cast2+"akuzatív"+cast3;randomTexts[i++]=cast1+"U, pri:"+cast2+"bei"+cast3;randomTexts[i++]=cast1+"Aký pád (pády) sú po predložke  bei? "+cast2+"datív"+cast3;randomTexts[i++]=cast1+"Prezident býva v hlavnom meste."+cast2+"Der Präsident wohnt in der Hauptstadt."+cast3;randomTexts[i++]=cast1+"Rovno, priamo:"+cast2+"geradeaus"+cast3;randomTexts[i++]=cast1+"oproti:<br> ü sa píše ALT+0252"+cast2+"gegenüber"+cast3;randomTexts[i++]=cast1+"Stôl stojí oproti posteli."+cast2+"Der Tisch steht gegenüber dem Bett."+cast3;pa[a++]=randomTexts.length;

temy[k++]=k+".musieť";
//15
randomTexts[i++]=cast1+"ja musím:"+cast2+"ich muss"+cast3;
randomTexts[i++]=cast1+"ty musíš:"+cast2+"du musst"+cast3;
randomTexts[i++]=cast1+"on musí:"+cast2+"er muss"+cast3;
randomTexts[i++]=cast1+"my musíme:"+cast2+"wir müssen"+cast3;
randomTexts[i++]=cast1+"vy musíte:"+cast2+"ihr müsst"+cast3;
randomTexts[i++]=cast1+"oni musia:"+cast2+"sie müssen"+cast3;
randomTexts[i++]=cast1+"S akým pádom (pádmi) sa používa predložka gegen?"+cast2+"akuzatív"+cast3;
randomTexts[i++]=cast1+"Musíme ísť proti vetru."+cast2+"Wir müssen gegen den Wind gehen."+cast3;
randomTexts[i++]=cast1+"Chladnička patrí do kuchyne."+cast2+"Der Kühlschrank gehört in die Küche."+cast3;
randomTexts[i++]=cast1+"mojej:"+cast2+"meiner"+cast3;
randomTexts[i++]=cast1+"môjmu:"+cast2+"meinem"+cast3;
randomTexts[i++]=cast1+"Otec daruje mojej sestre nejaké CD."+cast2+"Der Vater schenkt meiner Schwester eine CD."+cast3;
randomTexts[i++]=cast1+"Uli tú fotografiu roztrhá."+cast2+"Uli zerreißt das Foto."+cast3;
randomTexts[i++]=cast1+"Mám nejaký darček pre teba."+cast2+"Ich habe ein Geschenk für dich."+cast3;
randomTexts[i++]=cast1+"pre mňa:"+cast2+"für mich"+cast3;
randomTexts[i++]=cast1+"pre ňu:"+cast2+"für sie"+cast3;
randomTexts[i++]=cast1+"pre neho (muža):"+cast2+"für ihn"+cast3;
randomTexts[i++]=cast1+"pre neho (dieťa):"+cast2+"für es"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".cestovanie";
//16
randomTexts[i++]=cast1+"Ako prichádzaš do školy?"+cast2+"Wie kommst du zur Schule?"+cast3;
randomTexts[i++]=cast1+"Po predložke zu sa používa:"+cast2+"datív"+cast3;
randomTexts[i++]=cast1+"Skratka pre zu+der:"+cast2+"zur"+cast3;
randomTexts[i++]=cast1+"k,ku :"+cast2+"zu"+cast3;
randomTexts[i++]=cast1+"Skratka pre zu+dem:"+cast2+"zum"+cast3;
randomTexts[i++]=cast1+"Ako ide (cestuje) tvoj priateľ Kolibrík na hokejový štadión?"+cast2+"Wie fährt dein Freund Kolibrík zum Hockeystadion?"+cast3;
randomTexts[i++]=cast1+"Ako prichádzajú tvoji rodičia do práce?"+cast2+"Wie kommen deine Eltern zur Arbeit?"+cast3;
randomTexts[i++]=cast1+"Práca:"+cast2+"die Arbeit"+cast3;
randomTexts[i++]=cast1+"Ako príde môj brat Pajtáš do Anglicka?"+cast2+"Wie kommt mein Bruder Pajtáš nach England?"+cast3;
randomTexts[i++]=cast1+"Po predložke nach sa používa:"+cast2+"datív"+cast3;
randomTexts[i++]=cast1+"do (predložka s datívom):"+cast2+"nach"+cast3;
randomTexts[i++]=cast1+"do Anglicka:"+cast2+"nach England"+cast3;
randomTexts[i++]=cast1+"Ako príde moja babka na návštevu?"+cast2+"Wie kommt meine Oma zu Besuch?"+cast3;
randomTexts[i++]=cast1+"Ako príde moja spolužiačka do školy?"+cast2+"Wie kommt meine Mitschülerin zur Schule?"+cast3;
randomTexts[i++]=cast1+"do školy (použi skratku predložky, ktorá sa používa iba v datíve):"+cast2+"zur Schule"+cast3;
randomTexts[i++]=cast1+"mráz:"+cast2+"der Frost"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".dom";
//17
randomTexts[i++]=cast1+"Kde je tvoj dom?"+cast2+"Wo ist dein Haus?"+cast3;
randomTexts[i++]=cast1+"ulička:"+cast2+"die Gasse"+cast3;
randomTexts[i++]=cast1+"Je (dom) v uličke."+cast2+"Es ist in der Gasse."+cast3;
randomTexts[i++]=cast1+"Prepáčte."+cast2+"Entschuldigung."+cast3;
randomTexts[i++]=cast1+"Kde je autobusová zastávka?"+cast2+"Wo ist die Bushaltestelle?"+cast3;
randomTexts[i++]=cast1+"Autobusová zastávka je v Parížskej ulici."+cast2+"Die Bushaltestelle ist in der ParisStraße."+cast3;
randomTexts[i++]=cast1+"na ulici:"+cast2+"in der Straße"+cast3;
randomTexts[i++]=cast1+"na ulicu:"+cast2+"in die Straße"+cast3;
randomTexts[i++]=cast1+"Kde je dopravný úrad, prosím?"+cast2+"Wo ist das Verkehrsamt,bitte?"+cast3;
randomTexts[i++]=cast1+"námestie"+cast2+"der Platz"+cast3;
randomTexts[i++]=cast1+"Dopravný úrad je na Mozartovom námestí."+cast2+"Das Verkehrsamt ist am Mozartplatz."+cast3;
randomTexts[i++]=cast1+"Kde je najbližšia banka, prosím?"+cast2+"Wo ist die nächste Bank,bitte?"+cast3;
randomTexts[i++]=cast1+"Pôjdete (vykanie) rovno."+cast2+"Sie gehen geradeaus."+cast3;
randomTexts[i++]=cast1+"Pôjdete (vykanie) vľavo a potom vpravo."+cast2+"Sie gehen links und dann rechts."+cast3;
randomTexts[i++]=cast1+"V lete sme boli na vidieku."+cast2+"Im Sommer waren wir auf dem Land."+cast3;
randomTexts[i++]=cast1+"Náš strýko býva na (nejakej) dedine."+cast2+"Unser Onkel wohnt in einem Dorf."+cast3;
pa[a++]=randomTexts.length;


temy[k++]=k+".jedlo";
//18
randomTexts[i++]=cast1+"Med:"+cast2+"der Honig"+cast3;randomTexts[i++]=cast1+"Káva: "+cast2+"der Kaffee"+cast3;randomTexts[i++]=cast1+"Kakao:"+cast2+"der Kakao"+cast3;randomTexts[i++]=cast1+"Syr:"+cast2+"der Käse"+cast3;randomTexts[i++]=cast1+"Čaj:"+cast2+"der Tee"+cast3;randomTexts[i++]=cast1+"Hrianka:"+cast2+"der Toast"+cast3;randomTexts[i++]=cast1+"Jem müsli."+cast2+"Ich esse Müsli."+cast3;randomTexts[i++]=cast1+"Maslo:"+cast2+"die Butter"+cast3;randomTexts[i++]=cast1+"Mlieko:"+cast2+"die Milch"+cast3;randomTexts[i++]=cast1+"Saláma:"+cast2+"die Wurst"+cast3;randomTexts[i++]=cast1+"Na raňajky jem žemľu s medom."+cast2+"Zum Frühstück esse ich ein Brötchen mit Honig."+cast3;randomTexts[i++]=cast1+"Chlieb:"+cast2+"das Brot"+cast3;randomTexts[i++]=cast1+"Žemľa:"+cast2+"das Brötchen"+cast3;randomTexts[i++]=cast1+"Vajce:"+cast2+"das Ei"+cast3;randomTexts[i++]=cast1+"Müsli:"+cast2+"das Müsli"+cast3;randomTexts[i++]=cast1+"Pijem mlieko."+cast2+"Ich trinke Milch."+cast3;pa[a++]=randomTexts.length;

temy[k++]=k+".rodina";
//19
randomTexts[i++]=cast1+"Máš nejakú e-mailovú adresu?"+cast2+"Hast du eine E-Mail-Adresse?"+cast3;
randomTexts[i++]=cast1+"Mám nejakú emailovú adresu."+cast2+"Ich habe eine E-Mail-Adresse."+cast3;
randomTexts[i++]=cast1+"Peter je jedináčik."+cast2+"Peter ist ein Einzelkind."+cast3;
randomTexts[i++]=cast1+"On nemá deti."+cast2+"Er hat keine Kinder."+cast3;
randomTexts[i++]=cast1+"On nemá súrodencov."+cast2+"Er hat keine Geschwister."+cast3;
randomTexts[i++]=cast1+"On má jedného brata."+cast2+"Er hat einen Bruder."+cast3;
randomTexts[i++]=cast1+"Koľkí ste doma?"+cast2+"Wie viele seid ihr zu Hause?"+cast3;
randomTexts[i++]=cast1+"Aké je tvoje rodné meno?"+cast2+"Wie ist dein Vorname?"+cast3;
randomTexts[i++]=cast1+"Kde leží Hamburg?"+cast2+"Wo liegt Hamburg?"+cast3;
randomTexts[i++]=cast1+"V severnom Nemecku:"+cast2+"in Norddeutschland"+cast3;
randomTexts[i++]=cast1+"Máte dcéru? (vykanie)"+cast2+"Haben Sie eine Tochter?"+cast3;
randomTexts[i++]=cast1+"Koľko máš súrodencov?"+cast2+"Wie viele Geschwister hast du?"+cast3;
randomTexts[i++]=cast1+"On nie je ženatý."+cast2+"Er ist nicht verheiratet."+cast3 ;
randomTexts[i++]=cast1+"On je synom pani Müllerovej."+cast2+"Er ist der Sohn von Frau Müller."+cast3 ;
randomTexts[i++]=cast1+"Aká je vaša adresa? (vykanie)"+cast2+"Wie ist Ihre Adresse?"+cast3 ;
randomTexts[i++]=cast1+"Syn pani Kováčovej je milý."+cast2+"Der Sohn von Frau Kováč ist nett."+cast3 ;
randomTexts[i++]=cast1+"Mariina sestra je extravagantná."+cast2+"Die Schwester von Maria ist extravagant."+cast3 ;
randomTexts[i++]=cast1+"To je Markovo telefonne číslo."+cast2+"Das ist die Telefonnummer von Mark."+cast3 ;
randomTexts[i++]=cast1+"Viedeň leží v Rakúsku."+cast2+"Wien liegt in Österreich."+cast3 ;
randomTexts[i++]=cast1+"Peter nemá bratov."+cast2+"Peter hat keine Brüder."+cast3 ;
randomTexts[i++]=cast1+"ťahať:"+cast2+"ziehen"+cast3 ;

pa[a++]=randomTexts.length;


temy[k++]=k+".perfekt";
//20
randomTexts[i++]=cast1+"ja som sa hral (perfekt):"+cast2+"ich habe gespielt"+cast3;
randomTexts[i++]=cast1+"ty si sa hral (perfekt):"+cast2+"du hast gespielt"+cast3;
randomTexts[i++]=cast1+"on sa hral (perfekt):"+cast2+"er hat gespielt"+cast3;
randomTexts[i++]=cast1+"my sme sa hrali (perfekt):"+cast2+"wir haben gespielt"+cast3;
randomTexts[i++]=cast1+"vy ste sa hrali (perfekt):"+cast2+"ihr habt gespielt"+cast3;
randomTexts[i++]=cast1+"oni sa hrali (perfekt):"+cast2+"sie haben gespielt"+cast3;
randomTexts[i++]=cast1+"vy ste sa hrali (perfekt):"+cast2+"ihr habt gespielt"+cast3;
randomTexts[i++]=cast1+"Adam hral včera futbal."+cast2+"Adam hat gestern Fußball gespielt."+cast3;
randomTexts[i++]=cast1+"ja som išiel (perfekt):"+cast2+"ich bin gegangen"+cast3;
randomTexts[i++]=cast1+"ty si išiel (perfekt):"+cast2+"du bist gegangen"+cast3;
randomTexts[i++]=cast1+"ona išla (perfekt):"+cast2+"sie ist gegangen"+cast3;
randomTexts[i++]=cast1+"my sme išli (perfekt):"+cast2+"wir sind gegangen"+cast3;
randomTexts[i++]=cast1+"oni išli (perfekt):"+cast2+"sie sind gegangen"+cast3;
randomTexts[i++]=cast1+"Vy ste išli (perfekt, vykanie):"+cast2+"Sie sind gegangen"+cast3;
randomTexts[i++]=cast1+"Išiel si do školy. (perfekt)"+cast2+"Du bist in die Schule gegangen."+cast3;
randomTexts[i++]=cast1+"Čarodejnica varila polievku. (perfekt)"+cast2+"Die Hexe hat eine Suppe gekocht."+cast3;
randomTexts[i++]=cast1+"ja som jedol(perfekt):"+cast2+"ich habe gegessen"+cast3;
randomTexts[i++]=cast1+"ty si jedol(perfekt):"+cast2+"du hast gegessen"+cast3;
randomTexts[i++]=cast1+"ono jedlo (perfekt):"+cast2+"es hat gegessen"+cast3;
randomTexts[i++]=cast1+"ja som cestoval (perfekt):"+cast2+"ich bin gefahren"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".jedlo+režim";
//21
randomTexts[i++]=cast1+"Kedy zvoní tvoj budík ?"+cast2+"Wann klingelt dein Wecker ?"+cast3;randomTexts[i++]=cast1+"Večera: "+cast2+"das Abendessen"+cast3;randomTexts[i++]=cast1+"Ležím ešte chviľu v posteli."+cast2+"Ich liege noch eine Weile im Bett."+cast3;
randomTexts[i++]=cast1+"Smäd:"+cast2+"der Durst"+cast3;
randomTexts[i++]=cast1+"Vstávam."+cast2+"Ich stehe auf."+cast3;randomTexts[i++]=cast1+"Zdravie:"+cast2+"die Gesundheit"+cast3;randomTexts[i++]=cast1+"Sprchujem sa."+cast2+"Ich dusche mich."+cast3;randomTexts[i++]=cast1+"Obed:"+cast2+"das Mittagessen"+cast3;randomTexts[i++]=cast1+"Obliekam sa."+cast2+"Ich ziehe mich an."+cast3;randomTexts[i++]=cast1+"Šálka:"+cast2+"die Tasse"+cast3;randomTexts[i++]=cast1+"Raňajkujem.<br> ü sa píše ALT+0252"+cast2+"Ich esse mein Frühstück."+cast3;randomTexts[i++]=cast1+"Vrecúško, kornút, nákupná taška:"+cast2+"die Tüte"+cast3;randomTexts[i++]=cast1+"Prísada:"+cast2+"die Zutat"+cast3;randomTexts[i++]=cast1+"Som v triede."+cast2+"Ich bin in der Klasse."+cast3;randomTexts[i++]=cast1+"Nápoj:"+cast2+"das Getränk"+cast3;randomTexts[i++]=cast1+"Malinovka:"+cast2+"die Brause"+cast3;randomTexts[i++]=cast1+"Máme vyučovanie."+cast2+"Wir haben den Unterricht."+cast3;pa[a++]=randomTexts.length;

temy[k++]=k+".jedlo";
//22

randomTexts[i++]=cast1+"šálka kávy:"+cast2+"eine Tasse Kaffee"+cast3;randomTexts[i++]=cast1+"pohár šťavy: "+cast2+"ein Glas Saft"+cast3;randomTexts[i++]=cast1+"pohár piva:"+cast2+"ein Krügel Bier"+cast3;randomTexts[i++]=cast1+"hrnček mlieka:"+cast2+"ein Becher Milch"+cast3;randomTexts[i++]=cast1+"fľaša koly:"+cast2+"eine Flasche Cola"+cast3;randomTexts[i++]=cast1+"čajová lyžička citrónovej šťavy:"+cast2+"ein Teelöffel Zitronensaft"+cast3;randomTexts[i++]=cast1+"lyžica medu:"+cast2+"ein Löffel Honig"+cast3;randomTexts[i++]=cast1+"štipka soli:"+cast2+"eine Prise Salz"+cast3;randomTexts[i++]=cast1+"balenie cestovín:"+cast2+"eine Packung Teigwaren"+cast3;randomTexts[i++]=cast1+"kus koláča:"+cast2+"ein Stück Kuchen"+cast3;randomTexts[i++]=cast1+"bochník chleba:"+cast2+"ein Brotlaib"+cast3;randomTexts[i++]=cast1+"tanier polievky:"+cast2+"ein Teller Suppe"+cast3;pa[a++]=randomTexts.length;

temy[k++]=k+".dovolenka";
//23
randomTexts[i++]=cast1+"lietadlo:"+cast2+"das  Flugzeug"+cast3;
randomTexts[i++]=cast1+"nočná košela:"+cast2+"das Nachthemd"+cast3;
randomTexts[i++]=cast1+"slnečné okuliare:"+cast2+"die Sonnenbrille"+cast3;
randomTexts[i++]=cast1+"loď:"+cast2+"das Schiff"+cast3;
randomTexts[i++]=cast1+"plavky:"+cast2+"der Badeanzug"+cast3;
randomTexts[i++]=cast1+"uterák:"+cast2+"das Handtuch"+cast3;
randomTexts[i++]=cast1+"obytný príves:"+cast2+"der Wohnwagen"+cast3;
randomTexts[i++]=cast1+"vlak:"+cast2+"der Zug"+cast3;
randomTexts[i++]=cast1+"víkendový dom:"+cast2+"das Wochenendhaus"+cast3;
randomTexts[i++]=cast1+"šortky:"+cast2+"die Shorts"+cast3;
randomTexts[i++]=cast1+"Kam cestuješ na prázdniny?"+cast2+"Wohin fährst du in den Ferien?"+cast3;
randomTexts[i++]=cast1+"datív od die (množné číslo):"+cast2+"den"+cast3;
randomTexts[i++]=cast1+"Aké je tam počasie?"+cast2+"Wie ist das Wetter dort?"+cast3;
randomTexts[i++]=cast1+"Ako ďaleko je to?"+cast2+"Wie weit ist das?"+cast3;
randomTexts[i++]=cast1+"Kde bývaš cez prázdniny?"+cast2+"Wo wohnst du in den Ferien?"+cast3;
randomTexts[i++]=cast1+"do Španielska:"+cast2+"nach Spanien"+cast3;
randomTexts[i++]=cast1+"Čo si vezmeš so sebou?"+cast2+"Was nimmst du mit?"+cast3;
randomTexts[i++]=cast1+"ja si vezmem so sebou:"+cast2+"ich nehme mit"+cast3;
randomTexts[i++]=cast1+"ty si vezmeš so sebou:"+cast2+"du nimmst mit"+cast3;
randomTexts[i++]=cast1+"Druhá svetová vojna:"+cast2+"der zweite Weltkrieg"+cast3;
randomTexts[i++]=cast1+"dejiny: die Geschichte<br> v dejinách:"+cast2+"in der Geschichte"+cast3;
randomTexts[i++]=cast1+"blesková vojna:"+cast2+"der Blitzkrieg"+cast3;
randomTexts[i++]=cast1+"Sovietsky zväz:"+cast2+"die Sowjetunion"+cast3;
randomTexts[i++]=cast1+"Nemecká ríša:"+cast2+"das Deutsche Reich"+cast3;
randomTexts[i++]=cast1+"Mníchovská dohoda:"+cast2+"das Münchner Abkommen"+cast3;
pa[a++]=randomTexts.length;


temy[k++]=k+".jedlo";
//24
randomTexts[i++]=cast1+"Ako ti chutí táto polievka ?"+cast2+"Wie schmeckt dir diese Suppe ?"+cast3;randomTexts[i++]=cast1+"čerešňa: "+cast2+"eine Kirsche"+cast3;randomTexts[i++]=cast1+"Mám rád jedlá s korením."+cast2+"Ich mag Speisen mit Pfeffer."+cast3;randomTexts[i++]=cast1+"hustá polievka (nemecké národné jedlo):"+cast2+"ein Eintopf"+cast3;randomTexts[i++]=cast1+"Čo máte dnes na obed ?"+cast2+"Was habt ihr heute zum Mittagessen ?"+cast3;randomTexts[i++]=cast1+"Predložka zu je s :"+cast2+"datívom"+cast3;randomTexts[i++]=cast1+"Predložka zu v spojení s členom v mužskom rode:"+cast2+"zum"+cast3;pa[a++]=randomTexts.length;
randomTexts[i++]=cast1+"Patrí tá športová obuv tebe?"+cast2+"Gehören die Sportschuhe dir?"+cast3;
randomTexts[i++]=cast1+"Áno, to je moja športová obuv."+cast2+"Ja, das sind meine Sportschuhe."+cast3;
randomTexts[i++]=cast1+"Musíš navštevovať jazykový kurz."+cast2+"Du musst einen Sprachkurz besuchen."+cast3;
randomTexts[i++]=cast1+"ja musím:"+cast2+"ich muss"+cast3;
randomTexts[i++]=cast1+"ty musíš:"+cast2+"du musst"+cast3;
randomTexts[i++]=cast1+"on musí:"+cast2+"er muss"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".test";
//25
randomTexts[i++]=cast1+"Pán a pani Müllerová žijú vo veľkom meste."+cast2+"Herr und Frau Müller leben in einer grossen Stadt. "+cast3;randomTexts[i++]=cast1+"Aká je koncovka prídavných mien v datíve po určitom a neurčitom člene ? "+cast2+"en"+cast3;randomTexts[i++]=cast1+"Bývajú v dvojizbovom byte."+cast2+"Sie wohnen in einer Zweizimmerwohnung ."+cast3;randomTexts[i++]=cast1+"Byt nie je veľký, ale je útulný."+cast2+"Die Wohnung ist nicht gross, aber sie ist gemütlich."+cast3;randomTexts[i++]=cast1+"Má (byt) malú kuchyňu, obývačku, spálňu a kúpeľňu s WC."+cast2+"Sie hat eine kleine Küche, ein Wohnzimmer, ein Schlafzimmer und ein Bad mit Toilette ."+cast3;randomTexts[i++]=cast1+"Aká je koncovka prídavných mien v akuzatíve po určitom a neurčitom člene v ženskom rode ?"+cast2+"e"+cast3;randomTexts[i++]=cast1+"Bývajú tu rodičia s ich dvomi deťmi."+cast2+"Die Eltern wohnen hier mit ihren zwei Kindern."+cast3;randomTexts[i++]=cast1+"Aká je koncovka podstatných mien v datíve v množnom čísle ? "+cast2+"n"+cast3;pa[a++]=randomTexts.length;

temy[k++]=k+".test II";
//26
randomTexts[i++]=cast1+"Sloveso v zátvorke dajte do správneho tvaru prítomného času: <br> Leo (lesen) ein Buch."+cast2+"liest"+cast3;randomTexts[i++]=cast1+"Sloveso v zátvorke dajte do správneho tvaru prítomného času: <br> Jürgen  (nehmen) noch einen Kaffee."+cast2+"nimmt"+cast3;randomTexts[i++]=cast1+"Sloveso v zátvorke dajte do správneho tvaru prítomného času: <br> Wann  (laufen) du in die Schule ?"+cast2+"läufst"+cast3;randomTexts[i++]=cast1+"Sloveso v zátvorke dajte do správneho tvaru prítomného času: <br> Warum  (geben) er ihm kein Geschenk ?"+cast2+"gibt"+cast3;randomTexts[i++]=cast1+"Leo číta knihu."+cast2+"Leo liest ein Buch."+cast3;randomTexts[i++]=cast1+"brať,vziať :"+cast2+"nehmen"+cast3;randomTexts[i++]=cast1+"Kedy bežíš do školy ?"+cast2+"Wann läufst du in die Schule ?"+cast3;randomTexts[i++]=cast1+"Utvorte rozkazovací spôsob slovesa .<br>(Sein du) still ! "+cast2+"Sei"+cast3;randomTexts[i++]=cast1+"Utvorte rozkazovací spôsob slovesa .<br>(Schreiben du) mir dann einen Brief ! "+cast2+"Schreib"+cast3;pa[a++]=randomTexts.length;
temy[k++]=k+".test III";
//27

randomTexts[i++]=cast1+"Vyberte správnu možnosť: Jana hat <br> der Freund<br>ein Freund<br>einen Freund"+cast2+"einen Freund"+cast3;randomTexts[i++]=cast1+"Vyberte správnu možnosť: Ich wasche ... die Hände. <br> mich<br>mir<br>sich"+cast2+"mir"+cast3;randomTexts[i++]=cast1+"Vyberte správnu možnosť: Heute abend ... ich in die Arbeit fahren. <br> musse<br>muss<br>müss"+cast2+"muss"+cast3;pa[a++]=randomTexts.length;

temy[k++]=k+".Essen";
//28

randomTexts[i++]=cast1+"O jedenástej hodine jem svoju desiatu."+cast2+"Um elf Uhr esse ich mein Pausenbrot."+cast3;randomTexts[i++]=cast1+"Prajem ti dobrú chuť k obedu."+cast2+"Ich wünsche dir guten Appetit zum Mittagessen."+cast3;randomTexts[i++]=cast1+"Ako ti chutí táto polievka ?"+cast2+"Wie schmeckt dir diese Suppe ?"+cast3;randomTexts[i++]=cast1+"Wie schmeckt dir diese Suppe ?<br>Ďakujem, chutí veľmi dobre."+cast2+"Danke, sie schmeckt sehr gut."+cast3;randomTexts[i++]=cast1+"Pečie tvoja mama často koláče ?"+cast2+"Bäckt deine Mutter oft Kuchen?"+cast3;randomTexts[i++]=cast1+"Cibuľa:"+cast2+"die Zwiebel"+cast3;randomTexts[i++]=cast1+"Rezeň:"+cast2+"das Schnitzel"+cast3;randomTexts[i++]=cast1+"Hrozno:"+cast2+"die Traube"+cast3;randomTexts[i++]=cast1+"Hovädzie mäso:"+cast2+"das Rindfleisch"+cast3;pa[a++]=randomTexts.length;

temy[k++]=k+".Einkaufen";
//29

randomTexts[i++]=cast1+"Mám hlad."+cast2+"Ich habe Hunger."+cast3;randomTexts[i++]=cast1+"Čo stojí klobása, prosím ?"+cast2+"Was kostet eine Wurst, bitte ?"+cast3;randomTexts[i++]=cast1+"jedno euro osemdesiat"+cast2+"ein Euro achtzig"+cast3;randomTexts[i++]=cast1+"Obchod:"+cast2+"das Geschäft"+cast3;randomTexts[i++]=cast1+"Pekárstvo:"+cast2+"die Bäckerei"+cast3;randomTexts[i++]=cast1+"Mäsiarstvo"+cast2+"die Fleischerei"+cast3;randomTexts[i++]=cast1+"Potraviny:"+cast2+"die Lebensmittel"+cast3;randomTexts[i++]=cast1+"Ovocie a zelenina:"+cast2+"Obst und Gemüse"+cast3;randomTexts[i++]=cast1+"Kde nájdem knihy?"+cast2+"Wo finde ich Bücher ?"+cast3;randomTexts[i++]=cast1+"na prízemí:"+cast2+"im Erdgeschoss"+cast3;
randomTexts[i++]=cast1+"Máte radi kone?"+cast2+"Mögen Sie Pferde?"+cast3;
randomTexts[i++]=cast1+"Mám králika."+cast2+"Ich habe ein Kaninchen."+cast3;
randomTexts[i++]=cast1+"Bohužiaľ nemám žiadne domáce zvieratá."+cast2+"Ich habe leider keine Haustiere."+cast3;
randomTexts[i++]=cast1+"Kedy cestujete ku Baltickému moru?"+cast2+"Wann fahrt ihr an die Ostsee?"+cast3;
randomTexts[i++]=cast1+"Prečo sa učíš po nemecky?"+cast2+"Warum lernst du Deutsch?"+cast3;
randomTexts[i++]=cast1+"Lebo sa chcem stať učiteľom nemčiny."+cast2+"Weil ich Deutschlehrer werden will."+cast3;
randomTexts[i++]=cast1+"Spojka ... (preto, pretože) označuje príčinu."+cast2+"weil"+cast3;
randomTexts[i++]=cast1+"Po spojke weil nasleduje vedľajšia veta (podmet + ostatné vetné členy + na konci ...)"+cast2+"prísudok"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".prídavné mená";
//30

randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- alt.. Mann<br>genitív - alten Mannes <br>datív - altem Mann<br>akuzatív - alten Mann "+cast2+"er"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- alter Mann<br>genitív - alt.. Mannes <br>datív - altem Mann<br>akuzatív - alten Mann "+cast2+"en"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- alter Mann<br>genitív - alten Mann.. <br>datív - altem Mann<br>akuzatív - alten Mann "+cast2+"es"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- alter Mann<br>genitív - alten Mannes <br>datív - alt.. Mann<br>akuzatív - alten Mann "+cast2+"em"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- alter Mann<br>genitív - alten Mannes <br>datív - altem Mann<br>akuzatív - alt.. Mann "+cast2+"en"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- schön ...  Blume<br>genitív - schöner  Blume <br>datív - schöner  Blume<br>akuzatív - schöne  Blume "+cast2+"e"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- schöne  Blume<br>genitív - schön...  Blume <br>datív - schöner  Blume<br>akuzatív - schöne  Blume "+cast2+"er"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- schöne  Blume<br>genitív - schöner  Blume <br>datív - schön...  Blume<br>akuzatív - schöne  Blume "+cast2+"er"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- schöne  Blume<br>genitív - schöner  Blume <br>datív - schöner  Blume<br>akuzatív - schön...  Blume "+cast2+"e"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- klein... Haus<br>genitív - kleinen Hauses <br>datív - kleinem Haus<br>akuzatív - kleines Haus "+cast2+"es"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- kleines Haus<br>genitív - klein... Hauses <br>datív - kleinem Haus<br>akuzatív - kleines Haus "+cast2+"en"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s neurčitým členom:<br>nominatív- ein alt... Mann<br>genitív - eines alten Mannes <br>datív - einem alten Mann<br>akuzatív - einen alten Mann "+cast2+"er"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s neurčitým členom:<br>nominatív- ein alter Mann<br>genitív - eines alt.. Mannes <br>datív - einem alten Mann<br>akuzatív - einen alten Mann "+cast2+"en"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s neurčitým členom:<br>nominatív- ein alter Mann<br>genitív - eines alten Mannes <br>datív - einem alt... Mann<br>akuzatív - einen alten Mann "+cast2+"en"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s neurčitým členom:<br>nominatív- ein alter Mann<br>genitív - eines alten Mannes <br>datív - einem alten Mann<br>akuzatív - einen alt... Mann "+cast2+"en"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s neurčitým členom:<br>nominatív- ... alter Mann<br>genitív - eines alten Mannes <br>datív - einem alten Mann<br>akuzatív - einen alten Mann "+cast2+"ein"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s neurčitým členom:<br>nominatív- ein alter Mann<br>genitív - ... alten Mannes <br>datív - einem alten Mann<br>akuzatív - einen alten Mann "+cast2+"eines"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s neurčitým členom:<br>nominatív- ein alter Mann<br>genitív - eines alten Mannes <br>datív - ... alten Mann<br>akuzatív - einen alten Mann "+cast2+"einem"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s neurčitým členom:<br>nominatív- ein alter Mann<br>genitív - eines alten Mannes <br>datív - einem alten Mann<br>akuzatív - ... alten Mann "+cast2+"einen"+cast3;

randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s neurčitým členom:<br>nominatív- eine schön... Blume <br>genitív - einer schönen Blume <br>datív - einer schönen Blume<br>akuzatív - eine schöne Blume"+cast2+"e"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s neurčitým členom:<br>nominatív- eine schöne Blume <br>genitív - einer schön... Blume <br>datív - einer schönen Blume<br>akuzatív - eine schöne Blume"+cast2+"en"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s neurčitým členom:<br>nominatív- eine schöne Blume <br>genitív - einer schönen Blume <br>datív - einer schön... Blume<br>akuzatív - eine schöne Blume"+cast2+"en"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s neurčitým členom:<br>nominatív- eine schöne Blume <br>genitív - einer schönen Blume <br>datív - einer schönen Blume<br>akuzatív - eine schön... Blume"+cast2+"e"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- gut... Leute<br>genitív - guter Leute <br>datív - guten Leuten<br>akuzatív - gute Leute "+cast2+"e"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- gute Leute<br>genitív - gut... Leute <br>datív - guten Leuten<br>akuzatív - gute Leute "+cast2+"er"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- gute Leute<br>genitív - guter Leute <br>datív - gut... Leuten<br>akuzatív - gute Leute "+cast2+"en"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien bez člena:<br>nominatív- gute Leute<br>genitív - guter Leute <br>datív - guten Leuten<br>akuzatív - gut... Leute "+cast2+"e"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s určitým členom:<br>nominatív- der alt... Mann<br>genitív - des alten Mannes <br>datív - dem alten Mann<br>akuzatív -den alten Mann "+cast2+"e"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s určitým členom:<br>nominatív- der alte Mann<br>genitív - des alt... Mannes <br>datív - dem alten Mann<br>akuzatív -den alten Mann "+cast2+"en"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s určitým členom:<br>nominatív- der alte Mann<br>genitív - des alten Mann... <br>datív - dem alten Mann<br>akuzatív -den alten Mann "+cast2+"es"+cast3;
randomTexts[i++]=cast1+"Doplň skloňovanie prídavných mien s určitým členom:<br>nominatív- der alte Mann<br>genitív - des alten Mannes <br>datív - dem alten Mann<br>akuzatív -den alt... Mann "+cast2+"en"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".perfekt";
//31

randomTexts[i++]=cast1+"ja som robil (perfekt) "+cast2+"ich habe gemacht"+cast3;
randomTexts[i++]=cast1+"ty si robil (perfekt) "+cast2+"du hast gemacht"+cast3;
randomTexts[i++]=cast1+"on robil (perfekt) "+cast2+"er hat gemacht"+cast3;
randomTexts[i++]=cast1+"my sme robili (perfekt) "+cast2+"wir haben gemacht"+cast3;
randomTexts[i++]=cast1+"vy ste robili (perfekt) "+cast2+"ihr habt gemacht"+cast3;
randomTexts[i++]=cast1+"oni robili (perfekt) "+cast2+"sie haben gemacht"+cast3;
randomTexts[i++]=cast1+"Vy ste robili (perfekt - vykanie) "+cast2+"Sie haben gemacht"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>Was hast du mit d... gross... Schrank gemacht?"+cast2+"em en"+cast3;
randomTexts[i++]=cast1+"ja som cestoval (perfekt)"+cast2+"ich bin gefahren"+cast3;
randomTexts[i++]=cast1+"ty si cestoval (perfekt)"+cast2+"du bist gefahren"+cast3;
randomTexts[i++]=cast1+"ona cestovala (perfekt)"+cast2+"sie ist gefahren"+cast3;
randomTexts[i++]=cast1+"my sme cestovali (perfekt)"+cast2+"wir sind gefahren"+cast3;
randomTexts[i++]=cast1+"vy ste cestovali (perfekt) "+cast2+"ihr seid gefahren"+cast3;

randomTexts[i++]=cast1+"Doplň:<br>Sie bekommt zu d... alt... Wohnung auch ein... klein... Garten."+cast2+"er en en en"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>Was macht er am heutig... Abend?"+cast2+"en"+cast3;
randomTexts[i++]=cast1+"Doplň:<br>Wir machen ein... lang... Spaziergang."+cast2+"en en"+cast3;
randomTexts[i++]=cast1+"môj múdry syn:"+cast2+"mein kluger Sohn"+cast3;
randomTexts[i++]=cast1+"táto hlboká rieka"+cast2+"dieser tiefe Fluss"+cast3;
randomTexts[i++]=cast1+"nejaké lacné auto"+cast2+"ein billiges Auto"+cast3;
randomTexts[i++]=cast1+"ten rýchly vlak z Drážďan:"+cast2+"der schnelle Zug aus Dresden"+cast3;
randomTexts[i++]=cast1+"tá krátka sukňa:"+cast2+"der kurze Rock"+cast3;
randomTexts[i++]=cast1+"tí milí ľudia:"+cast2+"die netten Leute"+cast3;
randomTexts[i++]=cast1+"ten hnedý kabát:"+cast2+"der braune Mantel"+cast3;
randomTexts[i++]=cast1+"nejaký starý pán:"+cast2+"ein alter Herr"+cast3;
randomTexts[i++]=cast1+"nejaká pekná kniha:"+cast2+"ein schönes Buch"+cast3;
randomTexts[i++]=cast1+"tá mladá pani:"+cast2+"die junge Frau"+cast3;
randomTexts[i++]=cast1+"Der Tisch ist alt.<br>ten starý stôl:"+cast2+"der alte Tisch"+cast3;

pa[a++]=randomTexts.length;

temy[k++]=k+".Mode a zdravie";
//32
randomTexts[i++]=cast1+"klobúk:"+cast2+"der Hut"+cast3;randomTexts[i++]=cast1+"pulóver:"+cast2+"der Pulli"+cast3;randomTexts[i++]=cast1+"sukňa:"+cast2+"der Rock"+cast3;randomTexts[i++]=cast1+"Čo stojí sukňa ?"+cast2+"Was kostet der Rock?"+cast3;randomTexts[i++]=cast1+"Čo stoja nohavice ?"+cast2+"Was kostet die Hose?"+cast3;randomTexts[i++]=cast1+"Čo stojí košeľa? "+cast2+"Was kostet das Hemd?"+cast3;randomTexts[i++]=cast1+"Was kostet der Rock?<br>Stojí..."+cast2+"Er kostet..."+cast3;randomTexts[i++]=cast1+"Was kostet die Hose?<br>Stoja..."+cast2+"Sie kostet..."+cast3;randomTexts[i++]=cast1+"Was kostet das Hemd?<br>Stojí ... "+cast2+"Es kostet..."+cast3;randomTexts[i++]=cast1+"Čo stoja ponožky?"+cast2+"Was kosten die Socken?"+cast3;randomTexts[i++]=cast1+"Was kosten die Socken?<br>Stoja..."+cast2+"Sie kosten..."+cast3;
randomTexts[i++]=cast1+"Bolí ma hlava."+cast2+"Mir tut der Kopf weh."+cast3;
randomTexts[i++]=cast1+"bolieť:"+cast2+"wehtun"+cast3;
randomTexts[i++]=cast1+"hlava:"+cast2+"der Kopf"+cast3;
randomTexts[i++]=cast1+"oko:"+cast2+"das Auge"+cast3;
randomTexts[i++]=cast1+"krk:"+cast2+"der Hals"+cast3;
randomTexts[i++]=cast1+"Bolí ma krk."+cast2+"Mir tut der Hals weh."+cast3;
randomTexts[i++]=cast1+"rameno:"+cast2+"der Arm"+cast3;
randomTexts[i++]=cast1+"ruka:"+cast2+"die Hand"+cast3;
randomTexts[i++]=cast1+"prst:"+cast2+"der Finger"+cast3;
randomTexts[i++]=cast1+"zub:"+cast2+"der Zahn"+cast3;
randomTexts[i++]=cast1+"Bolí ma zub."+cast2+"Mir tut ein Zahn weh."+cast3;
randomTexts[i++]=cast1+"ucho:"+cast2+"das Ohr"+cast3;
randomTexts[i++]=cast1+"Bolia ma uši."+cast2+"Mir tun die Ohren weh."+cast3;
randomTexts[i++]=cast1+"nos:"+cast2+"die Nase"+cast3;
randomTexts[i++]=cast1+"ústa:"+cast2+"der Mund"+cast3;
randomTexts[i++]=cast1+"brucho:"+cast2+"der Bauch"+cast3;
randomTexts[i++]=cast1+"Bolí ma brucho."+cast2+"Mir tut der Bauch weh."+cast3;
randomTexts[i++]=cast1+"noha:"+cast2+"das Bein"+cast3;
randomTexts[i++]=cast1+"chodidlo, noha:"+cast2+"der Fuß"+cast3;
randomTexts[i++]=cast1+"Bolia ma nohy."+cast2+"Mir tun die Füße weh."+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".povod";

randomTexts[i++]=cast1+"Hovoríš tiež po španielsky?"+cast2+"Sprichst du auch Spanisch?"+cast3;
randomTexts[i++]=cast1+"Áno, hovorím tiež po španielsky."+cast2+"Ja, ich spreche auch Spanisch."+cast3;
randomTexts[i++]=cast1+"Pochádzajú tvoji priatelia z Nemecka?"+cast2+"Kommen deine Freunde aus Deutschland?"+cast3;
randomTexts[i++]=cast1+"Nie, nepochádzajú z Nemecka."+cast2+"Nein, sie kommen nicht aus Deutschland."+cast3;
randomTexts[i++]=cast1+"Peter pochádza z Talianska."+cast2+"Peter kommt aus Italien."+cast3;
randomTexts[i++]=cast1+"On býva a pracuje v Mníchove."+cast2+"Er wohnt und arbeitet in München."+cast3;

pa[a++]=randomTexts.length;


temy[k++]=k+".prídavné mená";
//33
randomTexts[i++]=cast1+"starý:"+cast2+"alt"+cast3;
randomTexts[i++]=cast1+"múdry:"+cast2+"klug"+cast3;
randomTexts[i++]=cast1+"nový:"+cast2+"neu"+cast3;
randomTexts[i++]=cast1+"mladý:"+cast2+"jung"+cast3;
randomTexts[i++]=cast1+"hlúpy:"+cast2+"dumm"+cast3;
randomTexts[i++]=cast1+"lacný:"+cast2+"billig"+cast3;
randomTexts[i++]=cast1+"tučný:"+cast2+"dick"+cast3;
randomTexts[i++]=cast1+"priateľský:"+cast2+"freundlich"+cast3;
randomTexts[i++]=cast1+"drahý:"+cast2+"teuer"+cast3;
randomTexts[i++]=cast1+"štíhly:"+cast2+"schlank"+cast3;
randomTexts[i++]=cast1+"vysoký:"+cast2+"hoch"+cast3;
randomTexts[i++]=cast1+"slobodný:"+cast2+"ledig"+cast3;
randomTexts[i++]=cast1+"ťažký:"+cast2+"schwer"+cast3;
randomTexts[i++]=cast1+"veľký (nepouži ß):"+cast2+"gross"+cast3;
randomTexts[i++]=cast1+"milý: (začína na n)"+cast2+"nett"+cast3;
randomTexts[i++]=cast1+"pohodlný:"+cast2+"bequem"+cast3;
randomTexts[i++]=cast1+"škaredý (nepouži ß):"+cast2+"hässlich"+cast3;
randomTexts[i++]=cast1+"ženatý:"+cast2+"verheiratet"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".prídavné mená";
//34
randomTexts[i++]=cast1+"Der Roller ist neu.<br>tá nová kolobežka:"+cast2+"der neue Roller"+cast3;
randomTexts[i++]=cast1+"Das Hobby ist interessant.<br>ten zaujímavý koníček:"+cast2+"das interessante Hobby"+cast3;
randomTexts[i++]=cast1+"Der Pulli ist rot.<br>ten červený pulóver:"+cast2+"der rote Pulli"+cast3;
randomTexts[i++]=cast1+"Das Auto ist schnell.<br>to rýchle auto :"+cast2+"das schnelle Auto"+cast3;
randomTexts[i++]=cast1+"Wähl die richtige Reaktion aus.<br>Wir haben Hunger.<br><br>Wir gehen in die Kirche.<br>Wir gehen auf den Sportplatz.<br>Wir gehen ins Restaurant.<br>Wir gehen ins Schwimmbad."+cast2+"Wir gehen ins Restaurant."+cast3;
randomTexts[i++]=cast1+"vybrať, zvoliť:"+cast2+"auswählen"+cast3;
randomTexts[i++]=cast1+"Zvoľ si správnu odpoveď (reakciu)."+cast2+"Wähl die richtige Reaktion aus."+cast3;
randomTexts[i++]=cast1+"Ideme do kostola."+cast2+"Wir gehen in die Kirche."+cast3;
randomTexts[i++]=cast1+"Ideme na športové ihrisko."+cast2+"Wir gehen auf den Sportplatz."+cast3;
randomTexts[i++]=cast1+"Ideme na plaváreň."+cast2+"Wir gehen ins Schwimmbad."+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".režim dňa";
//35
randomTexts[i++]=cast1+"Wähl die richtige Antwort aus.<br>Wann stehst du auf?<br>Ich um sechs Uhr aufstehe.<br>Ich stehe um sechs Uhr auf.<br>Stehe ich um sechs Uhr auf.<br>Um sechs Uhr aufstehe ich."+cast2+"Ich stehe um sechs Uhr auf."+cast3;
randomTexts[i++]=cast1+"Stávam o šiestej hodine."+cast2+"Ich stehe um sechs Uhr auf."+cast3;
randomTexts[i++]=cast1+"Wie ist die richtige Übersetzung?<br>Škola začína o ôsmej hodine.<br>Die Schule fängst um acht Uhr an.<br>Die Schule fangen um acht Uhr an.<br>Die Schule fängt um acht Uhr an.<br>Die Schule fange um acht Uhr an."+cast2+"Die Schule fängt um acht Uhr an."+cast3;
randomTexts[i++]=cast1+"Škola začína o ôsmej hodine."+cast2+"Die Schule fängt um acht Uhr an."+cast3;
randomTexts[i++]=cast1+"Perfektum sa tvorí nasledovne :pomocné sloveso ... alebo haben + príčastie minulé"+cast2+"sein"+cast3;
randomTexts[i++]=cast1+"Perfektum sa tvorí nasledovne :pomocné sloveso sein alebo haben + ... ..."+cast2+"príčastie minulé"+cast3;
randomTexts[i++]=cast1+"povolanie:"+cast2+"der Beruf"+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".WIR2";
//36
randomTexts[i++]=cast1+"Gehören die Sportschuhe dir?<br>Áno, to je moja špotová obuv."+cast2+"Ja, das sind meine Sportschuhe."+cast3;
randomTexts[i++]=cast1+"Peter, kann ich deinen Roller haben?<br>Nie, potrebujem svoju kolobežku."+cast2+"Nein, ich brauche meinen Roller."+cast3;
randomTexts[i++]=cast1+"vzhľad:"+cast2+"das Aussehen"+cast3;
randomTexts[i++]=cast1+"staromódny:"+cast2+"altmodisch"+cast3;
randomTexts[i++]=cast1+"modré oči:"+cast2+"blaue Augen"+cast3;
randomTexts[i++]=cast1+"brada:"+cast2+"der Bart"+cast3;
randomTexts[i++]=cast1+"fúzy:"+cast2+"der Schnurrbart"+cast3;
randomTexts[i++]=cast1+"dobre oblečený:"+cast2+"gut angezogen"+cast3;
randomTexts[i++]=cast1+"páčiť sa:"+cast2+"gefallen"+cast3;
randomTexts[i++]=cast1+"podlý:"+cast2+"gemein"+cast3;

pa[a++]=randomTexts.length;

temy[k++]=k+".oslava";
//37
randomTexts[i++]=cast1+"Pozývam ťa na oslavu svojich narodenín."+cast2+"Ich lade dich zu meiner Geburtstagfeier ein."+cast3;
randomTexts[i++]=cast1+"Oslava sa koná v sobotu o 15 (číslo) hodine."+cast2+"Die Feier findet am Samstag um 15 Uhr statt."+cast3;
randomTexts[i++]=cast1+"Mám priniesť niečo so sebou?"+cast2+"Soll ich etwas mitbringen?"+cast3;
randomTexts[i++]=cast1+"prívesok:"+cast2+"der Anhänger"+cast3;
randomTexts[i++]=cast1+"prosba:"+cast2+"die Bitte"+cast3;
randomTexts[i++]=cast1+"Viem dobre plávať."+cast2+"Ich kann gut schwimmen."+cast3;
randomTexts[i++]=cast1+"Auto je pokazené."+cast2+"Das Auto ist kaputt."+cast3;
randomTexts[i++]=cast1+"Kde je tu lekáreň?"+cast2+"Wo ist hier eine Apotheke?"+cast3;
randomTexts[i++]=cast1+"Potrebujem liek na recept."+cast2+"Ich brauche ein Medikament laut Rezept."+cast3;
randomTexts[i++]=cast1+"liek:"+cast2+"das Medikament"+cast3;
randomTexts[i++]=cast1+"Dostanem u Vás liek bez receptu?"+cast2+"Bekomme ich bei Ihnen ein Medikament ohne Rezept?"+cast3;

pa[a++]=randomTexts.length;

temy[k++]=k+".oslava";

randomTexts[i++]=cast1+"11.novembra sa zhromaždia malé deti vonku v meste."+cast2+"Am 11. November versammeln sich die kleinen Kinder draußen in der Stadt."+cast3;
randomTexts[i++]=cast1+"zhromaždiť sa:"+cast2+"sich versammeln"+cast3;
randomTexts[i++]=cast1+"Staré mesto:"+cast2+"die Altstadt"+cast3;
randomTexts[i++]=cast1+"privítanie:"+cast2+"die Begrüßung"+cast3;
randomTexts[i++]=cast1+"ples:"+cast2+"der Ball"+cast3;
randomTexts[i++]=cast1+"plesová noc:"+cast2+"die Ballnacht"+cast3;
randomTexts[i++]=cast1+"domček, stánok:"+cast2+"die Bude"+cast3;
randomTexts[i++]=cast1+"prechádzka:"+cast2+"die Bummel"+cast3;
randomTexts[i++]=cast1+"okres:"+cast2+"der Bezirk"+cast3;
randomTexts[i++]=cast1+"vôňa:"+cast2+"der Duft"+cast3;
randomTexts[i++]=cast1+"radosť:"+cast2+"die Freude"+cast3;
randomTexts[i++]=cast1+"hosť:"+cast2+"der Gast"+cast3;
randomTexts[i++]=cast1+"lesk, čaro:"+cast2+"der Glanz"+cast3;
randomTexts[i++]=cast1+"zvonica:"+cast2+"der Glockenturm"+cast3;
randomTexts[i++]=cast1+"stádo:"+cast2+"die Herde"+cast3;
randomTexts[i++]=cast1+"pastier:"+cast2+"der Hirt"+cast3;
randomTexts[i++]=cast1+"herňa pre deti:"+cast2+"die Kinderspielstube"+cast3;
randomTexts[i++]=cast1+"Kúpim mojeje mame darček."+cast2+"Ich kaufe meiner Mutter ein Geschenk."+cast3;
randomTexts[i++]=cast1+"V ktorej triede si teraz?"+cast2+"In welcher Klasse bist du jetzt?"+cast3;

pa[a++]=randomTexts.length;

temy[k++]=k+".prídavné mená";

randomTexts[i++]=cast1+"Tento červený kabát sa mi páči."+cast2+"Dieser rote Mantel gefällt mir."+cast3;
randomTexts[i++]=cast1+"stráviť:"+cast2+"verbringen"+cast3;
randomTexts[i++]=cast1+"ten pekný dom:"+cast2+"das schöne Haus"+cast3;
randomTexts[i++]=cast1+"to nové auto:"+cast2+"das neue Auto"+cast3;
randomTexts[i++]=cast1+"tá múdra žena:"+cast2+"die kluge Frau"+cast3;
randomTexts[i++]=cast1+"ten rýchly pes:"+cast2+"der schnelle Hund"+cast3;
randomTexts[i++]=cast1+"Pomáham tomu múdremu študentovi."+cast2+"Ich helfe dem klugen Studenten."+cast3;
randomTexts[i++]=cast1+"Poznám nejakého múdreho lekára."+cast2+"Ich kenne einen klugen Arzt."+cast3;
randomTexts[i++]=cast1+"ten starý muž:"+cast2+"der alte Mann"+cast3;

pa[a++]=randomTexts.length;

temy[k++]=k+".mačka";

randomTexts[i++]=cast1+"patriť:"+cast2+"gehören"+cast3;
randomTexts[i++]=cast1+"ku rodine (nepouži skratku):"+cast2+"zu der Familie"+cast3;
randomTexts[i++]=cast1+"lev:"+cast2+"der Löwe"+cast3;
randomTexts[i++]=cast1+"mačky:"+cast2+"die Katzen"+cast3;
randomTexts[i++]=cast1+"mačky (genitív):"+cast2+"der Katzen"+cast3;
randomTexts[i++]=cast1+"Mačka domáca patrí do rodiny mačiek ako lev."+cast2+"Die Hauskatze gehört zu der Familie der Katzen wie der Löwe."+cast3;
randomTexts[i++]=cast1+"Marc nepríde dnes do kina."+cast2+"Marc kommt heute nicht ins Kino."+cast3;
randomTexts[i++]=cast1+"do kina:(skratka):"+cast2+"ins Kino"+cast3;
randomTexts[i++]=cast1+"Myslím, že je chorý."+cast2+"Ich denke, dass er krank ist."+cast3;
pa[a++]=randomTexts.length;

temy[k++]=k+".potraviny";

randomTexts[i++]=cast1+"práškový cukor:"+cast2+"der Puderzucker"+cast3;
randomTexts[i++]=cast1+"celozrnná múka:"+cast2+"das Vollkornmehl"+cast3;
randomTexts[i++]=cast1+"hladká múka:"+cast2+"glattes Mehl"+cast3;
randomTexts[i++]=cast1+"hrubá múka:"+cast2+"griffiges Mehl"+cast3;
randomTexts[i++]=cast1+"droždie:"+cast2+"die Hefe"+cast3;

pa[a++]=randomTexts.length;
spolok=i;