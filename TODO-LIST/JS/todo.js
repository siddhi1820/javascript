let input=document.querySelector('.input');
let button=document.querySelector('.btn');
let result=document.querySelector('.result');
let note=document.createElement('p');
        note.classList.add('note');
        note.innerHTML='If you have delete note just click a particular note Thank You! ';
        result.appendChild(note);
button.addEventListener('click',function(e){
    if(input.value!=''){
        let div1=document.createElement('div');
        div1.classList.add('div');
        let item=document.createElement('ul');
        let list=document.createElement('li');
        
     
        list.className='value';
        list.innerHTML=input.value;
        item.appendChild(list);
      
        div1.appendChild(item);
        
        result.appendChild(div1);
        input.value='';
        let dataitem=document.querySelectorAll('ul');
        
      dataitem.forEach(function(data){
        data.addEventListener('click',function(e){
        data.innerHTML='';
        
        })
      })
    }
})
