
function primeFunction(){

    let a= document.getElementById("a").valueAsNumber;
let b= document.getElementById("b").valueAsNumber;
    let result =0;
    document.getElementById("set").innerHTML =`các số chính phương từ ${a} tới ${b}: <br>`;
    for(let i=1;i< b/2 ;i++){
            if (i*i<b && i*i >=a ){
                result=i*i;
                document.getElementById("set").innerHTML += " "+result;
            }
        }
        
        
    }
   
