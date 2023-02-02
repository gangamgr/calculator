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
        show.value+=a;
    }
    console.log(first,last,opertors)
}

function Opt(a){
    opertors+=a;
    show.value+=a;
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

function Partial(){
    if(opertors.length===0){
        let lgt=first.length;
        let data=first.slice(0,lgt-1);
        console.log(first,data);
        first=data;
        show.value=data;
    }else if(opertors.length>=1 && last.length===0){
        let lgt=opertors.length;
        console.log(lgt)
        let data=opertors.slice(0,lgt-1);
        console.log(opertors,data);
        opertors=data;
        show.value=first+opertors
    } else{
        let lgt=last.length;
        let data=last.slice(0,lgt-1);
        console.log(last,data,opertors);
        last=data;
        show.value=first+opertors+last;
    }
}