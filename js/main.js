const pertama = document.querySelector('.pertama');
const kedua = document.querySelector('.kedua')
const icon = document.querySelectorAll('.material-symbols-rounded');
const ic = pertama.querySelector('.material-symbols-rounded');
const ico = kedua.querySelector('.material-symbols-rounded');
const dark1 = document.querySelector('.mode');
const dark = document.querySelector('.dark');
const link = document.querySelector('link');
const text1 = document.querySelector('.satu');
const text2 = document.querySelector('.nama');
const text3 = document.querySelector('.kartu:nth-child(1) a');
const text4 = document.querySelector('.kartu:nth-child(2) a');
const text5 = document.querySelector('.kartu:nth-child(3) a');
const judul1 = document.querySelector('.paragraf-1 .sub-judul');
const judul2 = document.querySelector('.paragraf-2 h1');
const judul3 = document.querySelector('.portofolio .sub-judul');
const judul4 = document.querySelector('.project:nth-child(1) .judul');
const judul5 = document.querySelector('.project:nth-child(2) .judul');
const judul6 = document.querySelector('.project:nth-child(3) .judul');
const judul7 = document.querySelector('.skil .sub-judul');
const judul8 = document.querySelector('.web .sub-judul');
const judul9 = document.querySelector('.kartu:nth-child(1) .judul');
const judul10 = document.querySelector('.kartu:nth-child(2) .judul');
const judul11 = document.querySelector('.kartu:nth-child(3) .judul');
const judul12 = document.querySelector('.pesan .sub-judul');
const navbar = document.querySelector('nav');
const bg_1 = document.querySelector('section.portofolio');
const img = document.querySelector('.sosial-media a:nth-child(4) img')
const bg_2 = document.querySelector('section.skil');
const bg_3 = document.querySelector('section.web');
const bg_8 = document.querySelector('.kartu:nth-child(1)');
const bg_9 = document.querySelector('.kartu:nth-child(2)');
const bg_10 = document.querySelector('.kartu:nth-child(3)');
const bg_4 = document.querySelector('.nama-lengkap input');
const bg_5 = document.querySelector('.email input');
const bg_6 = document.querySelector('.kolom-pesan textarea');
const bg_7 = document.querySelector('footer');
dark1.addEventListener('click',function(){
   if(dark.classList.contains('dark')){dark.innerHTML = 'light_mode';dark.classList.replace('dark','light');text1.style.color = '#A4B5C5';text2.style.color = '#C9D5E1';text3.style.color = '#AFBBC7';text4.style.color = '#AFBBC7';text5.style.color = '#AFBBC7';judul1.style.color = '#C9D5E1';judul2.style.color = '#C9D5E1';judul3.style.color = '#C9D5E1';judul4.style.color = '#C9D5E1';judul5.style.color = '#C9D5E1';judul6.style.color = '#C9D5E1';judul7.style.color = '#C9D5E1';judul8.style.color = '#C9D5E1';judul9.style.color = '#C9D5E1';judul10.style.color = '#C9D5E1';judul11.style.color = '#C9D5E1';judul12.style.color = '#C9D5E1';navbar.style.backgroundColor = '#191F2C';bg_1.style.backgroundColor = '#1D222C';bg_2.style.backgroundColor = '#0D1524';bg_3.style.backgroundColor = '#1D222C';bg_4.style.backgroundColor = '#343B48';bg_5.style.backgroundColor = '#343B48';bg_6.style.backgroundColor = '#343B48';bg_7.style.backgroundColor = '#0D1524';bg_8.style.backgroundColor = '#212A33';bg_9.style.backgroundColor = '#212A33';bg_10.style.backgroundColor = '#212A33';document.body.style.backgroundColor = '#1A1E27';img.setAttribute('src','img/sosmed/git_dark.png')
   } else{dark.innerHTML = 'dark_mode';dark.classList.replace('light','dark');text1.style.color = '#000';text2.style.color = '#000';text3.style.color = '#000';text4.style.color = '#000';text5.style.color = '#000';judul1.style.color = '#000';judul2.style.color = '#000';judul3.style.color = '#000';judul4.style.color = '#000';judul5.style.color = '#000';judul6.style.color = '#000';judul7.style.color = '#f1f5f9';judul8.style.color = '#000';judul9.style.color = '#000';judul10.style.color = '#000';judul11.style.color = '#000';judul12.style.color = '#000';navbar.style.backgroundColor = '#fff';bg_1.style.backgroundColor = '#f1f5f9';bg_2.style.backgroundColor = '#0F172A';bg_3.style.backgroundColor = '#f1f5f9';bg_4.style.backgroundColor = '#E1E8F0';bg_5.style.backgroundColor = '#E1E8F0';bg_6.style.backgroundColor = '#E1E8F0';bg_7.style.backgroundColor = '#0D1524';bg_8.style.backgroundColor = '#f9f9f9';bg_9.style.backgroundColor = '#f9f9f9';bg_10.style.backgroundColor = '#f9f9f9';document.body.style.backgroundColor = '#fff';img.setAttribute('src','img/sosmed/github.png')
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