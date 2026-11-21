const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const SK=[["Pengolahan Data & Dokumen","Intermediate",2,"file-text"],["UI/UX & Desain Grafis","Intermediate",2,"pen-tool"],["Game Development 2D","Intermediate",2,"gamepad-2"],["HTML & CSS","Intermediate",2,"code-xml"],["PHP & Laravel","Basic",1,"server"]];
$('#sk').innerHTML=SK.map(s=>`<button class="sc" data-in aria-label="${s[0]}, ${s[1]}"><i data-lucide="${s[3]}"></i><h3>${s[0]}</h3><div class="bar">${[1,2,3].map(i=>`<i class="${i<=s[2]?'f':''}"></i>`).join('')}</div><small>${s[1]} <span style="font-weight:400">(Basic → Intermediate → Advanced)</span></small></button>`).join('');
const TL=[["Visual Studio Code","code-xml"],["Figma","figma"],["Microsoft Office","file-text"],["GitHub","github"],["Construct 3","gamepad-2"],["Docker","container"],["Canva","palette"],["Vercel","triangle"]];
$('#tools').innerHTML=TL.map(t=>`<span><i data-lucide="${t[1]}"></i>${t[0]}</span>`).join('');
$('#mq').innerHTML=Array(2).fill(["Web Development","UI/UX Design","Game Development","Creative Design"].map(t=>t+'<span>🫧</span>').join('')).join('');
const PR=[{t:"Aplikasi Peminjaman Alat",m:"Proyek Sekolah · Web Developer · Juli 2026 – Sekarang",tools:"PHP, Laravel",l:["Menyusun alur sistem dan fitur utama aplikasi peminjaman alat berbasis web menggunakan PHP dan Laravel.","Mengerjakan antarmuka pengguna serta modul pencatatan peminjaman dan pengembalian alat.","Melakukan pengujian fungsionalitas fitur agar sistem berjalan stabil dan mudah digunakan."]},{t:"Game 2D Construct 3",m:"Proyek Sekolah · Game Developer · Maret – April 2026",tools:"Construct 3",l:["Merancang konsep permainan dan menciptakan game 2D interaktif menggunakan Construct 3.","Menyusun logika event sheet, tata letak level, serta pengujian alur permainan."]}];
const CE=[{t:"AI Ready ASEAN",u:"https://drive.google.com/file/d/1n-TgF4oj6mbqUZV-PQd4tjUdy0yiAbrs/view?usp=drive_link"},{t:"Save The Children",u:"https://drive.google.com/file/d/1bXz39GbKao_zUDBkCPf2ju-Df-6SI1Xn/view?usp=drive_link"}];
const dlg=$('#dlg');
function open(h){dlg.innerHTML=h+'<form method="dialog" style="margin-top:1rem"><button class="btn alt">Tutup</button></form>';dlg.showModal()}
$$('[data-p]').forEach(b=>b.onclick=()=>{const p=PR[b.dataset.p];open(`<h3>${p.t}</h3><p class="meta">${p.m}</p><p><b>Tools:</b> ${p.tools}</p><ul>${p.l.map(x=>`<li>${x}</li>`).join('')}</ul>`)});
$$('[data-c]').forEach(b=>b.onclick=()=>{const c=CE[b.dataset.c];open(`<h3>${c.t}</h3><p>Sertifikat pelatihan Raisya Mardhika.</p><p style="margin-top:1rem"><a class="btn red" href="${c.u}" target="_blank" rel="noopener">Buka sertifikat</a></p>`)});
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
lucide.createIcons();
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('v');setTimeout(()=>t.classList.remove('v'),2200)};
$('#copy').onclick=async()=>{try{await navigator.clipboard.writeText('mardhika098@gmail.com');toast('Email disalin')}catch(e){toast('Salin manual: mardhika098@gmail.com')}};
$('#f').onsubmit=e=>{e.preventDefault();location.href=`mailto:mardhika098@gmail.com?subject=${encodeURIComponent('Pesan dari '+$('#n').value)}&body=${encodeURIComponent($('#m').value)}`};
const mn=$('#menu'),bg=$('#burger');bg.onclick=()=>{const o=mn.classList.toggle('o');bg.setAttribute('aria-expanded',o)};
let busy=false;
const go=id=>{const el=document.getElementById(id);mn.classList.remove('o');if(!el)return;
 if(busy||matchMedia('(prefers-reduced-motion:reduce)').matches){el.scrollIntoView();return}
 busy=true;const H=innerHeight+90,w=$('#wt');
 const a=w.animate([{transform:`translateY(${H}px)`},{transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.5,0,.9,.5)',fill:'forwards'});
 a.onfinish=()=>{el.scrollIntoView({behavior:'auto'});const b=w.animate([{transform:'translateY(0)'},{transform:`translateY(${-H}px)`}],{duration:750,delay:120,easing:'cubic-bezier(.2,.6,.3,1)',fill:'forwards'});b.onfinish=()=>{w.getAnimations().forEach(x=>x.cancel());busy=false}}};
$$('[data-go]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();go(a.getAttribute('href').slice(1))}));
$('#top').onclick=()=>scrollTo({top:0,behavior:'smooth'});
addEventListener('scroll',()=>$('#top').classList.toggle('v',scrollY>700),{passive:true});
const cur=$('#cur');addEventListener('mousemove',e=>{cur.style.transform=`translate(${e.clientX-9}px,${e.clientY-9}px)`;const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;if(window.gsap)$$('.st').forEach(s=>gsap.to(s,{x:x*s.dataset.depth*2,y:y*s.dataset.depth*2,duration:.6}))});
document.addEventListener('mouseover',e=>cur.classList.toggle('h',!!e.target.closest('a,button,.chip')));
function start(){
 gsap.registerPlugin(ScrollTrigger);hero();
 gsap.from('#hero [data-in]',{y:30,opacity:0,duration:.8,stagger:.1,delay:.4});
 gsap.utils.toArray('.st').forEach((s,i)=>gsap.to(s,{rotate:i%2?-12:12,yoyo:true,repeat:-1,duration:2+i,ease:'sine.inOut'}));
 $$('section h2 .ln>span').forEach(h=>gsap.fromTo(h,{yPercent:110},{yPercent:0,duration:1,ease:'power4.out',scrollTrigger:{trigger:h,start:'top 90%'}}));
 $$('section [data-in]').forEach(el=>gsap.from(el,{y:50,opacity:0,duration:.8,scrollTrigger:{trigger:el,start:'top 90%'}}));
 gsap.from('.tl',{clipPath:'inset(0 0 100% 0)',duration:1.2,scrollTrigger:{trigger:'.tl',start:'top 80%'}});
 gsap.to('.bar i',{scaleX:1,duration:.9,stagger:.06,ease:'power3.out',scrollTrigger:{trigger:'#sk',start:'top 80%'}});
 gsap.fromTo('.pol',{rotate:-8},{rotate:0,scrollTrigger:{trigger:'.pol',start:'top 90%',end:'top 40%',scrub:true}});
 $$('#about,#edu,#projects,#skills,#certs,#contact').forEach(s=>ScrollTrigger.create({trigger:s,start:'top 50%',end:'bottom 50%',onToggle:t=>{const a=$(`nav ul a[href="#${s.id}"]`);a&&a.classList.toggle('on',t.isActive)}}));
}
function bub(p,n){const e=$(p);for(let i=0;i<n;i++){const b=document.createElement('i');b.className='bb';const s=8+Math.random()*26;b.style.cssText=`left:${Math.random()*100}%;width:${s}px;height:${s}px;animation-duration:${8+Math.random()*10}s;animation-delay:-${Math.random()*14}s`;e.appendChild(b)}}
bub('#hero',14);bub('#contact',10);
addEventListener('scroll',()=>{const p=scrollY/((document.body.scrollHeight-innerHeight)||1);$('#depth').textContent=Math.round(p*200)+' m'},{passive:true});
let n=0;const iv=setInterval(()=>{n=Math.min(100,n+7);$('#pct').textContent=n;if(n>=100){clearInterval(iv);gsap.to('#load',{yPercent:-100,duration:.9,ease:'power4.inOut',onComplete:()=>$('#load').remove()});start()}},45);
function hero(){
 const H0=$('#hero'),fl=$('#fl'),Ls=[];
 $$('#ht .rw').forEach(rw=>{const t=rw.textContent;rw.textContent='';[...t].forEach(ch=>{const s=document.createElement('span');s.className='L';s.textContent=ch;s.setAttribute('aria-hidden','true');rw.appendChild(s);
  const o={el:s,x:0,y:140+Math.random()*80,vx:0,vy:0,r:(Math.random()-.5)*40,vr:0};
  s.onclick=()=>{o.vy=-20;o.vr=(Math.random()<.5?-1:1)*25;o.vx+=(Math.random()-.5)*10};Ls.push(o)})});
 gsap.from(Ls.map(o=>o.el),{opacity:0,duration:.6,stagger:.04});
 const E=['🐟','🐠','🐡'];
 const F=E.map(e=>{const el=document.createElement('div');el.className='fish';el.textContent=e;const sz=44+Math.random()*30;el.style.fontSize=sz+'px';fl.appendChild(el);
  const W=H0.clientWidth,H=H0.clientHeight;
  const f={el,sz,x:Math.random()*(W-sz),y:110+Math.random()*Math.max(60,H-260),vx:0,vy:0,dir:Math.random()<.5?-1:1,sp:.6+Math.random(),ph:Math.random()*6,mode:'swim',drag:false,lx:0,ly:0,lt:0,ox:0,oy:0};
  el.addEventListener('pointerdown',ev=>{ev.preventDefault();el.setPointerCapture(ev.pointerId);const r=H0.getBoundingClientRect();f.drag=true;f.mode='throw';f.ox=ev.clientX-r.left-f.x;f.oy=ev.clientY-r.top-f.y;f.lt=performance.now();f.vx=f.vy=0});
  el.addEventListener('pointermove',ev=>{if(!f.drag)return;const r=H0.getBoundingClientRect(),nx=ev.clientX-r.left-f.ox,ny=ev.clientY-r.top-f.oy,now=performance.now(),dt=Math.max(8,now-f.lt);f.vx=f.vx*.5+(nx-f.x)/dt*8.3;f.vy=f.vy*.5+(ny-f.y)/dt*8.3;f.x=nx;f.y=ny;f.lt=now});
  const up=()=>{f.drag=false;const m=Math.hypot(f.vx,f.vy);if(m>45){f.vx*=45/m;f.vy*=45/m}};
  el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);return f});
 let t=0;(function loop(){t++;const W=H0.clientWidth,H=H0.clientHeight,hr=H0.getBoundingClientRect();
  F.forEach(f=>{
   if(f.drag){f.vx*=.9;f.vy*=.9}
   else if(f.mode==='throw'){f.x+=f.vx;f.y+=f.vy;f.vx*=.985;f.vy*=.985;
    if(f.x<0){f.x=0;f.vx*=-.8}if(f.x>W-f.sz){f.x=W-f.sz;f.vx*=-.8}if(f.y<70){f.y=70;f.vy*=-.8}if(f.y>H-f.sz-40){f.y=H-f.sz-40;f.vy*=-.8}
    if(Math.hypot(f.vx,f.vy)<1.2){f.mode='swim';f.dir=f.vx<0?-1:1}}
   else{f.x+=f.dir*f.sp;f.y+=Math.sin(t/40+f.ph)*.5;if(f.x<0){f.x=0;f.dir=1}if(f.x>W-f.sz){f.x=W-f.sz;f.dir=-1}f.y=Math.min(Math.max(f.y,70),H-f.sz-40);f.vx=f.dir*f.sp;f.vy=0}
   if(Math.hypot(f.vx,f.vy)>4){const cx=hr.left+f.x+f.sz/2,cy=hr.top+f.y+f.sz/2;
    Ls.forEach(o=>{const r=o.el.getBoundingClientRect(),dx=r.left+r.width/2-cx,dy=r.top+r.height/2-cy,d=Math.hypot(dx,dy)||1,R=f.sz*.55+Math.min(r.width,r.height)*.4;
     if(d<R){o.vx+=f.vx*.6+dx/d*5+(Math.random()-.5)*6;o.vy+=f.vy*.6+dy/d*5+(Math.random()-.5)*6;o.vr+=(Math.random()-.5)*30;f.vx*=.985;f.vy*=.985}})}
   f.el.style.transform=`translate(${f.x}px,${f.y}px) scaleX(${f.vx>.1?-1:1})`});
  Ls.forEach(o=>{o.vx-=.015*o.x;o.vy-=.015*o.y;o.vr-=.02*o.r;o.vx*=.94;o.vy*=.94;o.vr*=.93;o.x+=o.vx;o.y+=o.vy;o.r+=o.vr;o.el.style.transform=`translate(${o.x}px,${o.y}px) rotate(${o.r}deg)`});
  requestAnimationFrame(loop)})();
}