(function(){
  var root=document.documentElement,btn=document.getElementById("theme");
  function current(){return root.getAttribute("data-theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}
  function label(){btn.textContent=current()==="dark"?"Mode terang":"Mode gelap"}
  try{var s=localStorage.getItem("theme");if(s==="light"||s==="dark")root.setAttribute("data-theme",s)}catch(e){}
  label();
  btn.addEventListener("click",function(){
    var next=current()==="dark"?"light":"dark";
    root.setAttribute("data-theme",next);
    try{localStorage.setItem("theme",next)}catch(e){}
    label();
  });
})();

/* Foto: jika file belum ada, bingkai kosong tetap tampil. Klik foto galeri untuk memperbesar. */
(function(){
  var lb=document.getElementById("lb"),big=lb.querySelector("img");
  document.querySelectorAll(".hero-photo img, .shot img").forEach(function(img){
    function drop(){img.remove()}
    img.addEventListener("error",drop);
    if(img.complete&&img.naturalWidth===0)drop();
  });
  document.querySelectorAll(".shot").forEach(function(fig){
    var img=fig.querySelector("img");
    if(!img)return;
    function arm(){fig.tabIndex=0;fig.setAttribute("role","button");fig.setAttribute("aria-label","Perbesar foto: "+img.alt)}
    function open(){if(!fig.querySelector("img"))return;big.src=img.src;big.alt=img.alt;lb.showModal()}
    img.addEventListener("load",arm);
    if(img.complete&&img.naturalWidth>0)arm();
    fig.addEventListener("click",open);
    fig.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}});
  });
  lb.addEventListener("click",function(){lb.close()});
})();

/* Animasi: muncul saat digulir, bar progres, parallax foto, sorotan kursor */
(function(){
  var hero=document.getElementById("hero"),bar=document.getElementById("progress"),photo=document.querySelector(".hero-photo");
  var rm=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els=[].slice.call(document.querySelectorAll(".rv")),cnt=new Map();
  els.forEach(function(el){var p=el.parentElement,n=cnt.get(p)||0;cnt.set(p,n+1);el.style.setProperty("--d",Math.min(n,6)*.09+"s")});
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15,rootMargin:"0px 0px -6% 0px"});
    els.forEach(function(el){io.observe(el)});
  }else els.forEach(function(el){el.classList.add("in")});
  var tick=false;
  function frame(){
    tick=false;
    var y=window.scrollY||0,max=document.documentElement.scrollHeight-window.innerHeight;
    bar.style.transform="scaleX("+(max>0?y/max:0)+")";
    if(!rm&&photo&&y<hero.offsetHeight)photo.style.setProperty("--py",Math.round(y*.14)+"px");
  }
  window.addEventListener("scroll",function(){if(!tick){tick=true;requestAnimationFrame(frame)}},{passive:true});
  frame();
  if(!rm)hero.addEventListener("pointermove",function(e){var r=hero.getBoundingClientRect();hero.style.setProperty("--mx",(e.clientX-r.left)+"px");hero.style.setProperty("--my",(e.clientY-r.top)+"px")});
})();
