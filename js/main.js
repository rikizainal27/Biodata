const pertama = document.querySelector('.pertama');
const kedua = document.querySelector('.kedua')
const icon = document.querySelectorAll('.material-symbols-rounded');
const ic = pertama.querySelector('.material-symbols-rounded');
const ico = kedua.querySelector('.material-symbols-rounded');
const dark1 = document.querySelector('.mode');
const dark = document.querySelector('.dark');
const link = document.querySelector('link');
dark1.addEventListener('click', function(){
   if(dark.classList.contains('dark')){
   link.setAttribute('href', 'css/dark.css');
   dark.innerHTML = 'light_mode';
   dark.classList.replace('dark','light');
   }
   else{
      link.setAttribute('href','css/style.css');
      dark.innerHTML = 'dark_mode';
      dark.classList.replace('light','dark');
   }
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
function kirim(){
   const nilai = document.querySelector('input').value;
   alert(nilai)
}
