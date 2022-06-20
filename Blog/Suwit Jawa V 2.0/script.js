function getPilihanComputer(){
  const comp = Math.random();
  if (comp < 0.34) return  'Gajah';
  if (comp >= 0.34 && comp <= 0.64) return  'Orang';
  return  'Semut';
  console.log(comp);
}
function getHasil(comp, player){
  if (player == comp) return 'SERI!!';
  if (player == 'Semut') return (comp == 'Gajah') ? 'Menang!' : 'Kalah!';
  if (player == 'Gajah') return (comp == 'Orang') ? 'Menang!' : 'Kalah!';
  if (player == 'Orang') return (comp == 'Semut') ? 'Menang!' : 'Kalah!';
}
function putar(){
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = ['Gajah','Orang','Semut'];;
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function(){
    if ( new Date().getTime() - waktuMulai > 1000){ clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0 ;
  },100)
}
function random(){
  const text = ['Gajah','Orang','Semut'];;
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function(){
    if ( new Date().getTime() - waktuMulai > 1000){ clearInterval;
      return;
    }
    const yangDipilih = document.querySelector('.area-komputer figcaption');
    yangDipilih.innerHTML = text[i++];
    if (i == text.length) i = 0 ;
  },100)
}
const pilihan = document.querySelectorAll('li img');
let skorP = 0;
let skorC = 0;
const skorPlayer = document.querySelector('.skor-p');
const skorComp = document.querySelector('.skor-c');
pilihan.forEach(function(pil){
  pil.addEventListener('click', function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();
    random();
    const pilP = document.querySelector('.pilihan-player');
    pilP.innerHTML = pil.className;
    setTimeout(function(){
      const imgComputer = document.querySelector('.img-komputer');
      imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
      const yangDipilih = document.querySelector('.area-komputer figcaption');
      yangDipilih.innerHTML = pilihanComputer;
      const info = document.querySelector('.info');
      info.innerHTML = 'VS';
      info.style.color = 'orange';
    },1000)
    setTimeout(function(){
    	const info = document.querySelector('.info');
    	info.innerHTML = hasil;
    	if (hasil == 'Menang!') {
    		info.style.color = '#0aa5a9';
    		skorP+=1
				skorPlayer.innerHTML=skorP;
    	}
    	if (hasil == 'Kalah!') {
    		info.style.color = 'crimson';
    		skorC+=1
				skorComp.innerHTML=skorC;
    	}
    	if (hasil == 'SERI!!') {
    		info.style.color = 'yellow';
    	}
    },1600)
    pil.style.transform = 'scale(0.9)';
    setTimeout(function(){
    	pil.style.transform = 'scale(1)';
    },100)
    	const halangi = document.querySelector('.halangi');
    	halangi.classList.add('tidak');
    	setTimeout(function(){
    		halangi.classList.remove('tidak')
    	},1200)
  })
})
