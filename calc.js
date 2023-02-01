let first="";
let last="";
let opertors="";
let show=document.getElementById('show')

function Value(a){
    if(opertors.length===0){
        first+=a;
        show.value=first;
    }else{
        last+=a;
        show.value+=last;
    }
    console.log(first,last,opertors)
}

function Opt(a){
    opertors=a;
    // console.log(opertors)
    show.value+=opertors;
}

function Result(a){
    let output='';
    if(opertors==="+"){
        // console.log(Number(first)+Number(last))
        output=(Number(first)+Number(last))
    }else if(opertors==="-"){
        output=(Number(first)-Number(last))   
    }else if(opertors==="*"){
        output=(Number(first)*Number(last))
    }else if(opertors==="/"){
        output=(Number(first)/Number(last))
    }
    first=output;
    last="";
    opertors="";
    show.value=output;
}
function Clear(){
first="";
last="";
opertors="";
show.value="0";
}


