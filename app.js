// app.js - dashboard interactions
document.addEventListener('DOMContentLoaded', ()=>{
  const hero = document.getElementById('hero');
  const heroImgs = ['assets/hero_1.jpg','assets/hero_2.jpg','assets/hero_3.jpg'];
  let idx = 0;
  function show(){
    hero.style.backgroundImage = `url(${heroImgs[idx]})`;
    idx = (idx+1) % heroImgs.length;
  }
  show();
  setInterval(show, 4000);

  // load districts and popular places
  fetch('data/data.json').then(r=>r.json()).then(data=>{
    const dgrid = document.getElementById('districtsGrid');
    const pgrid = document.getElementById('popularGrid');
    Object.keys(data).slice(0,6).forEach(d=>{
      const thumb = 'assets/' + d.toLowerCase().replace(/\s+/g,'_') + '_thumb.jpg';
      dgrid.innerHTML += `<a class="card" href="places.html?district=${encodeURIComponent(d)}"><img src="${thumb}"><h3>${d}</h3></a>`;
      const p = data[d][0];
      pgrid.innerHTML += `<div class="card"><img src="${p.img}"><h3>${p.name}</h3><p>${p.description}</p></div>`;
    });
  });

  // search box behavior
  const search = document.getElementById('search');
  search.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
      const q = search.value.trim().toLowerCase();
      if(!q) return;
      // simple redirect to places page with search query (handled client-side)
      window.location.href = 'places.html?query=' + encodeURIComponent(q);
    }
  });
});