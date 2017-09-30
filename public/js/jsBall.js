var turek="<input type='button' value='&#223;' onclick='addCharacter(\"&#223;\")'><input type='button' value='&#214;' onclick='addCharacter(\"&#214;\")'><input type='button' value='&#252;' onclick='addCharacter(\"&#252;\")'><input type='button' value='&#246;' onclick='addCharacter(\"&#246;\")'><input type='button' value='&#163;' onclick='addCharacter(\"&#163;\")'><input type='button' value='&' onclick='addCharacter(\"&\")'><input type='button' value='`' onclick='addCharacter(\"`\")'><input type='button' value='[' onclick='addCharacter(\"[\")'><input type='button' value=']' onclick='addCharacter(\"]\")'>";

function addCharacter(c) {
document.bez.bez2.focus();
document.bez.bez2.value=document.bez.bez2.value+c;
	}
startday = new Date();
clockStart = startday.getTime();
var meno="@zsgorazda.sk";

var sSecs
var sMins
var rcislo=3;
function initStopwatch() {
var myTime = new Date();
return((myTime.getTime() - clockStart)/1000);
}
function getSecs() {
var tSecs = Math.round(initStopwatch());
var iSecs = tSecs % 60;
var iMins = Math.round((tSecs-30)/60);
sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
casOznam.innerHTML="<font color=red>"+sMins+" : "+sSecs+" </font>";
window.setTimeout('getSecs()',1000);
}

function setCookie(c_name,value,expiredays)
{var exdate=new Date();
exdate.setDate(exdate.getDate()+expiredays);
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}
var rcislo;
function checkCookie()
{
username=getCookie('username')
if (username!=null && username!="")
  {rcislo=parseInt(username)-1;
}
else 
  {
  username=prompt("Zadaj  lekciu !", "1")
rcislo=0;
   rcislo=parseInt(username)-1;
   
  if (username!=null && username!="")
    {
    setCookie('username',username,365)
    }
  }
kresba ();
}
function kolacik(){
username=prompt("Zadaj  lekciu !", "1")
rcislo=0;
rcislo=parseInt(username)-1;
   
if (username!=null && username!="")
    {
    setCookie('username',username,365)
    }
    repete();
}

function repete()
{setCookie('username',"",-1)

 pOtazky=0;
 pp=0;
 meterko=0;
 sucet=0;
 body=0;
 spolu="";
 dalsiaotazka=0;
 spravneOznam.innerText=meterko;
 kolkoOznam.innerText=dalsiaotazka;
 Bodiky.innerText=body;
 Cisielka.innerHTML="";
 kres.innerHTML="";
 $('#zn').attr('style','visibility:hidden');
  $('#spravka').attr('style','visibility:hidden');
 kresba();
 vOtazky(); 
}
  



function zmenMeno()
{
meno=prompt("Zadaj meno!", "@zsgorazda.sk");
localStorage.setItem("UlozeneMeno",meno);
$('#meno').html(meno);
$('#send').trigger('click');
if (pOtazky==19 && meterko==20) {
  if (meterko==20) {socket.emit("ciel",meno);} 
  
  dotaznik();
}

}

function dotaznik()
{
  if (meno=="@zsgorazda.sk") {
    zmenMeno();
  }
rebriktext="<FORM id='dotaz'  Name='dotaz' METHOD=post ACTION='http://www.pechac.webzdarma.cz/akuLekciuNJ.php' onSubmit=' return vzruso();'>MENO:<INPUT TYPE='text' Name='jmeno' value='"+meno+"'><INPUT id = 'odeslat' NAME='odeslat'TYPE='submit'Value='ANO'><INPUT TYPE='hidden' NAME='skore' value='"+lekcia+ "'></FORM>";
  
 Rebrik.innerHTML=rebriktext;


}
function vzruso()
{

dotaz.odeslat.visible=false;
return true;
}

var male2;  
var podvody = new Array();
var von;
var itmp = new Image();
var itmpok = new Image();
var itmpfail = new Image();
itmp.src = "http://www.pechac.sk/skola/rgv/images/que2.jpg";
itmpok.src = "http://www.pechac.sk/skola/rgv/images/ok.jpg";
itmpfail.src = "http://www.pechac.sk/skola/rgv/images/fail.jpg";

    
var sucet=0;
var spolu="";
var body=0;
var zn=0;   
var pp=0;
var dalko;
var medzera=/\s*/g;
var meterko=0;
function jd (e)
{ 

var k = (navigator.appName=="Netscape") ? e : event.keyCode; 

  if(k == 13 ){ 

   
                             
      
document.bez.bez2.blur();       
male1=document.bez.bez2.value.toLowerCase();

male1=male1.replace(medzera,"");
socket.emit("ko",male1);
socket.on("kol",function(dal){
if (k==0){
  return;
}
dalko=dal;



if (dalko==1 ){meterko++;


 $('#Vitaz').attr('style','visibility:hidden'); 
boloZle  = "n"
body+=cOtazky;Cisielka.innerHTML+=cOtazky+"-"; document.images["que"+pOtazky].src=itmpok.src;spravneOznam.innerText=meterko;kolkoOznam.innerText=(pOtazky+1);

 }
else {pp+=1;body-=cOtazky;Cisielka.innerHTML+="<font color=red>"+cOtazky+"-</font>";Ukz();document.images["que"+pOtazky].src=itmpfail.src;kolkoOznam.innerText=(pOtazky+1);
}
Bodiky.innerText=body;
if (pOtazky==19){
  if (pp>=10){
    zn=5
  }
  else{zn=Math.round((20+3*pp)/(20-pp));
  }
  $('#zn').html(zn); $('#zn').attr('style','visibility:visible');
  
}

if (pOtazky<19)vOtazky(pOtazky++);

if (pOtazky==19 && meterko==20) {
  socket.emit("ciel",meno);
  //dotaznik();
}

k=0;
return false;
 

});
}
}


function Ukz()
    { $('#spravka').attr('style','visibility:visible');
      spravka.innerHTML="Nie : "+document.bez.bez2.value+"<br>ale :"+dalko+" <br>";

  
      boloZle = "a";
     
      
      
    }

function znova ()
{
sucet=0;
spolu="";
dalsiaotazka=0;
}




function Test(){
if (document.forms.bez.bez2!= null)
  {
  
  document.forms.bez.bez2.focus();

  } 
}

var dalsiaotazka=0 
var pocitadloChange=0;

function ChangeIt(co, nOtazka ,aka) { 

       
          document.images["que"+aka].src=itmp.src;
          

document.all[co].innerHTML =nOtazka+turek;


male2Velke=document.bez.bez3.value;
male2=document.bez.bez3.value.toLowerCase();
maleMedzerove=document.bez.bez3.value.toLowerCase();
male2=male2.replace(medzera,"");


$('input[name="bez3"]').val('x');
male2="xx";
maleMedzerove="XXX";
male2Velke="ooo";

otazka=nOtazka;

var n = otazka.search("value");
if (n!=-1)
{
otazka = otazka.substring(0, n);
otazka+="></form>";
}









if (nOtazka.indexOf("bez2")!=-1)
 { 

casik=setTimeout("Test()",200); 
                                  
 } 

              
                    
   
       }

window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

window.onmousedown = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};



$(document).keydown(function(e) {
        if ((e.keyCode == 85 || e.keyCode == 74  ||e.keyCode == 67) && e.ctrlKey) {
        event.preventDefault();
    event.stopPropagation();
   return false;
           
        }
    });

$(document).keydown(function(e) {
        if (e.keyCode == 123) {
        event.preventDefault();
    event.stopPropagation();
    return false;
           
        }
    });


 

















































































































































































































































































































































































































