
const text="horimiya • fashion • music • photography";
let i=0;
function type(){document.getElementById('typing').textContent=text.slice(0,i++);
if(i<=text.length)setTimeout(type,70);}
type();
for(let n=0;n<80;n++){
 let d=document.createElement('div');
 d.style.position='fixed';d.style.width='2px';d.style.height='2px';
 d.style.background='white';d.style.borderRadius='50%';
 d.style.left=Math.random()*100+'vw';d.style.top=Math.random()*100+'vh';
 d.style.opacity=Math.random();
 d.animate([{transform:'translateY(0px)'},{transform:'translateY(-40px)'}],
 {duration:3000+Math.random()*4000,iterations:Infinity,direction:'alternate'});
 document.body.appendChild(d);
}
