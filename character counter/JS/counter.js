let textdata=document.querySelector('.input');
let btn=document.querySelector('#btn');
let rem=document.querySelector('.rem');
let tc=document.querySelector('.tc');
textdata.addEventListener('keyup',function(e){
        let count=0;
    if(textdata.value.length<=50){
       for(let i=0;i<textdata.value.length;i++){
        count++;
        tc.innerHTML=count;
        rem.innerHTML=50-count;
        
       }
    }
})
