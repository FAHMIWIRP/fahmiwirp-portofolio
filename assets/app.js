const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const root=document.documentElement;
try{if(localStorage.getItem('theme')==='dark')root.classList.add('dark')}catch(e){}
window.addEventListener('load',()=>setTimeout(()=>$('#loader')?.classList.add('off'),350));
const toast=(t,i='success')=>window.Swal?Swal.mixin({toast:true,position:'bottom-end',showConfirmButton:false,timer:2200,background:getComputedStyle(root).getPropertyValue('--card'),color:'#444e64'}).fire({icon:i,title:t}):0;
$('#theme')?.addEventListener('click',()=>{const d=root.classList.toggle('dark');try{localStorage.setItem('theme',d?'dark':'light')}catch(e){}toast(d?'Mode gelap aktif':'Mode terang aktif','info')});
$('#menu')?.addEventListener('click',()=>$('.links').classList.toggle('open'));
$$('.links a').forEach(a=>a.addEventListener('click',()=>$('.links').classList.remove('open')));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});$$('.rv').forEach(el=>io.observe(el));
$$('a[data-t]').forEach(a=>a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey)return;e.preventDefault();document.body.classList.add('leaving');setTimeout(()=>location.href=a.href,230)}));
window.addEventListener('pageshow',()=>document.body.classList.remove('leaving'));
const ty=$('#typing');if(ty){const w=['Web Developer','Pawn / SA-MP Developer','Project Coordinator'];let i=0,j=0,del=0;(function t(){const s=w[i];ty.textContent=s.slice(0,j);if(!del&&j++===s.length){del=1;return setTimeout(t,1400)}if(del&&j--===0){del=0;i=(i+1)%w.length}setTimeout(t,del?40:80)})()}
$('#cv')?.addEventListener('click',()=>toast('CV sedang diunduh'));
$('#wa')?.addEventListener('submit',async e=>{e.preventDefault();const n=$('#nm').value.trim(),m=$('#ms').value.trim();if(!n||!m)return Swal.fire({icon:'warning',title:'Lengkapi form',text:'Nama dan pesan wajib diisi.',confirmButtonColor:'#444e64'});
const r=await Swal.fire({title:'Kirim via WhatsApp?',text:'Kamu akan diarahkan ke WhatsApp.',icon:'question',showCancelButton:true,confirmButtonText:'Kirim',cancelButtonText:'Batal',confirmButtonColor:'#444e64'});
if(r.isConfirmed){window.open('https://wa.me/6283803770518?text='+encodeURIComponent('Halo Fahmi, saya '+n+'.\n'+m),'_blank','noopener');toast('Membuka WhatsApp')}});
const gh=$('#gh-data');if(gh){const U='FAHMIWIRP',C='#444e64,#7a8aa8,#c9a66b,#a3b0c8,#8a7a5c,#5d6f94'.split(',');
fetch(`https://api.github.com/users/${U}/repos?per_page=100&sort=pushed`).then(r=>{if(!r.ok)throw 0;return r.json()}).then(rs=>{rs=rs.filter(r=>!r.fork);const L={};rs.forEach(r=>r.language&&(L[r.language]=(L[r.language]||0)+1));const tot=Object.values(L).reduce((a,b)=>a+b,0)||1;
gh.innerHTML=`<div class="rp">${rs.slice(0,6).map(r=>`<a href="${r.html_url}" target="_blank" rel="noopener"><b>${r.name}</b>${(r.description||'').replace(/</g,'&lt;')||'—'}<br><small>${r.language||''} · ${r.stargazers_count} bintang</small></a>`).join('')}</div>
<div class="lang">${Object.entries(L).map(([k,v],i)=>`<i style="width:${v/tot*100}%;background:${C[i%C.length]}" title="${k}"></i>`).join('')}</div><div class="chips">${Object.keys(L).map(k=>`<span class="chip">${k}</span>`).join('')}</div>
<p style="margin-top:16px"><img alt="Grafik kontribusi GitHub" loading="lazy" style="max-width:100%" src="https://ghchart.rshah.org/444e64/${U}"></p>`}).catch(()=>{gh.innerHTML='<p>Data GitHub tidak dapat dimuat saat ini. <a href="https://github.com/FAHMIWIRP">Buka profil GitHub</a>.</p>'})}
window.lucide&&lucide.createIcons();
