// ====== CHỈNH THÔNG TIN TẠI ĐÂY ======
const ten = "Nguyễn Quỳnh Hoa";
const ngaySinh = "06/04/2012";
const loiChuc =
"🎉 Chúc bạn có một ngày sinh nhật thật vui vẻ, luôn mạnh khỏe, hạnh phúc, gặp nhiều may mắn và mọi điều tốt đẹp sẽ đến với bạn. Happy Birthday! ❤️";

// ================================

document.getElementById("name").innerText = ten;
document.getElementById("date").innerText = ngaySinh;
document.getElementById("wish").innerText = loiChuc;

// Tim bay
const hearts = document.getElementById("hearts");

function taoTim() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = ["❤️","💖","💗","💝","💕"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random()*100 + "%";
    heart.style.fontSize = (20 + Math.random()*30) + "px";
    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);
}

setInterval(taoTim,300);

// ===== PHÁO HOA =====

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

let particles=[];

function firework(){

    let x=Math.random()*canvas.width;
    let y=Math.random()*canvas.height/2;

    for(let i=0;i<60;i++){

        particles.push({

            x:x,
            y:y,

            dx:(Math.random()-0.5)*8,
            dy:(Math.random()-0.5)*8,

            life:100,

            color:`hsl(${Math.random()*360},100%,60%)`

        });

    }

}

setInterval(firework,900);

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

ctx.beginPath();

ctx.arc(p.x,p.y,3,0,Math.PI*2);

ctx.fillStyle=p.color;

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

p.dy+=0.03;

p.life--;

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(draw);

}

draw
.earth{
    font-size:80px;
    margin:20px auto;
    width:100px;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    animation:spin 6s linear infinite,
              floatEarth 2.5s ease-in-out infinite;
}

@keyframes spin{
    from{
        transform:rotateY(0deg);
    }
    to{
        transform:rotateY(360deg);
    }
}

@keyframes floatEarth{
    0%{
        translate:0 0;
    }
    50%{
        translate:0 -12px;
    }
    100%{
        translate:0 0;
    }
}
/* ===== DẤU CHÂN ===== */

for(let i=0;i<12;i++){

let p=document.createElement("div");

p.className="paw";

p.innerHTML="🐾";

p.style.left=(40+i*28)+"px";

p.style.bottom=(20+i*10)+"px";

p.style.animationDelay=(i*.4)+"s";

document.body.appendChild(p);

}

/* ===== HẠT SÁNG ===== */

for(let i=0;i<60;i++){

let s=document.createElement("div");

s.className="spark";

s.style.left=Math.random()*window.innerWidth+"px";

s.style.top=Math.random()*window.innerHeight+"px";

s.style.animationDelay=(Math.random()*3)+"s";

document.body.appendChild(s);

}