let react=document.querySelectorAll('.react');
let button=document.querySelector('#btn');
let result=document.querySelector('.result');

react.forEach(function(r){
    let un=0;
    let ne=0;
    let st=0;
    let response='';
    r.addEventListener('click',function(e){

        response=e.target.dataset.val;
        

  
   
       
        if(response==='unhappy'){
            un++;
            document.querySelector('#un').innerHTML=un;
            
        }
        else if(response==='neutral'){
            ne++;
            document.querySelector('#ne').innerHTML=ne;

        }
        else if(response==='satisfied'){
            st++;
            document.querySelector('#st').innerHTML=st;
        }
        console.log(response);
    })
})

