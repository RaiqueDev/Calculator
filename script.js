function insert(num){
    let number = document.querySelector("#sendValue").innerHTML;
    document.querySelector("#sendValue").innerHTML = number + num;
}

function clean(){
    document.querySelector("#sendValue").innerHTML = '';
    document.querySelector("#returnValue").innerHTML = '';
}

function Btncalculate(){
    let Btncalculate = document.querySelector("#sendValue").innerHTML;
    if(Btncalculate){
        document.querySelector("#returnValue").innerHTML = eval(Btncalculate);
    }else{
        document.querySelector("#sendValue").innerHTML = 'Type something';
        document.querySelector("#returnValue").innerHTML = 'Type something';
    }
}

function titleH1(){
    document.querySelector("#title").style.display = 'none';
}
