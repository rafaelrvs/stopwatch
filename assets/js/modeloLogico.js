var sec = 0;
var min = 0;
var hr = 0;
var intervalo = 0;
var digito = 0;

function doisdigitos(digito){
 if(digito<10){
    return '0'+ digito;
 }
 else{
    return digito;
 }

}
function play(){
    watch();
    intervalo = setInterval(watch,1000);

}
function stopAction(){
    clearInterval(intervalo);

}
  
function resetAction(){
    clearInterval(intervalo);
    hr=0;
    min =0;
    sec=0;
    document.getElementById('watch').innerHTML='00:00:00';
}


function watch(){
    sec++
    if(sec == 60){
        min++;
        sec=0;
        
    }
    if(min == 60){
        hr++;
        min=0;
    }
    document.getElementById('watch').innerHTML=doisdigitos(hr)  + ':' +doisdigitos(min) + ':' + doisdigitos(sec);
 
   if(min == true)
    {
    
        var clock = document.getElementById('watch')
        clock.style.boxShadow = '5px 5px 10px rgb(90, 40, 40)'
    
    }
        if(hr == true)
    {
    
        var clock = document.getElementById('watch')
        clock.style.boxShadow = '5px 5px 10px rgb(10, 50, 300)'
    
    }

}
