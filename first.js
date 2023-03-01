const btn1=document.getElementById('btn');
const div1=document.getElementById('main');
const color=['pink','red','blue','yellow','orange'];
btn1.addEventListener('click',()=>{
    const pick=parseInt(Math.random()*color.length);
    div1.setAttribute.innerHTML=div1.style.backgroundColor=color[pick];
})