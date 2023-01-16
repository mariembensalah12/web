function result(){
    var score= 0;
    if(document.getElementsByName("correct1").checked==true){
        score++;
    }
    if(document.getElementsByName("correct2").checked){
        score++;
    }
    if(document.getElementsByName("correct3").checked){
        score++;
    }
    if(document.getElementsByName("correct5").checked){
        score++;
    }
    if(document.getElementsByName("correct5").checked){
        score++;
    }
    if(document.getElementsByName("correct6").checked){
        score++;
    }
    if(document.getElementsByName("correct7").checked){
        score++;
    }
    if(document.getElementsByName("correct8").checked){
        score++;
    }
    if(document.getElementsByName("correct9").checked==true){
        score++;
    }
    if(document.getElementsByName("correct10").checked){
        score=score+1;
    }
   alert("votre score est:"+ score);


}