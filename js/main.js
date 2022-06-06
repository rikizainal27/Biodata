const pertama = document.querySelector('.pertama');
const kedua = document.querySelector('.kedua')
const icon = document.querySelectorAll('.material-symbols-rounded');
const ic = pertama.querySelector('.material-symbols-rounded');
const ico = kedua.querySelector('.material-symbols-rounded');
const dark = document.querySelector('.nav-2');
const link = document.querySelector('link');
const light = document.querySelector('.light');
const tombol = document.querySelector('.dark');
const t = dark.querySelector('.t')
dark.addEventListener('click', function(){
   link.setAttribute('href', 'css/dark.css');
   const light = document.createElement('i');
   const text = document.createTextNode('light_mode');
   light.classList.add('material-icons');
   light.appendChild(text);
   dark.appendChild(light);
   tombol.remove(dark);
   dark.insertBefore(light,t);
})
ic.classList.replace('material-symbols-rounded', 'material-icons');
ico.classList.replace('material-symbols-rounded', 'material-icons');
icon.forEach(function(pil){
pil.addEventListener('click', function(e) {
   icon.forEach(function(icon) {
      if (icon.classList.contains('active')) {
         icon.classList.remove('active');
      }
      if (icon.classList.contains('material-icons')) {
         icon.classList.replace('material-icons', 'material-symbols-rounded')
      }
   });
   e.target.classList.add('active');
   e.target.classList.replace('material-symbols-rounded', 'material-icons')
})})
