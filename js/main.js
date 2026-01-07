
document.addEventListener('DOMContentLoaded', function(){
  const hamb = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  if(hamb){
    hamb.addEventListener('click', function(){
      const isOpen = nav.style.display === 'flex';
      nav.style.display = isOpen ? 'none' : 'flex';
      hamb.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  
  document.querySelectorAll('.gallery-grid img, .mini-gallery img').forEach(img=>{
    img.style.cursor='pointer';
    img.addEventListener('click', ()=> window.open(img.src, '_blank'));
  });
});
