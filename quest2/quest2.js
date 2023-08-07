let colorIndex=0;
function randomFunction(){
    let randomIndex=Math.floor(Math.random()*3)
    switch (randomIndex){
        case 0: document.getElementById("body").style.backgroundColor="#f7797d";
            document.getElementById("content").innerHTML=`#f7797d <br> `;
            colorIndex="#f7797d"
            break;
        case 1: document.getElementById("body").style.backgroundColor="#e52e71";
        document.getElementById("content").innerHTML= `#e52e71 <br> `;
        colorIndex="#e52e71";
        break;
        case 2:  document.getElementById("body").style.backgroundColor=" #c31432";
        document.getElementById("content").innerHTML=`#c31432 <br> `;
        colorIndex="#c31432"
        break;

    }
}
function copyFunction(){

    navigator.clipboard.writeText(colorIndex);
}