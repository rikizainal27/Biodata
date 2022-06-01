const nb = document.querySelector('.navigation');
const icon = nb.querySelectorAll('.material-symbols-rounded');
const ic = nb.querySelector('.material-symbols-rounded');
const dark = document.querySelector('.dark');
const style = document.querySelector('link');
// dark mode
dark.addEventListener('click', function(){
  style.setAttribute('href','css/dark.css')
})
// navigation
ic.classList.replace('material-symbols-rounded','material-icons')
nb.addEventListener('click', function(e) {
  icon.forEach(function(icon) {
    if ( icon.classList.contains('active') ){
      icon.classList.remove('active');
    }
    if ( icon.classList.contains('material-icons') ){
    icon.classList.replace('material-icons', 'material-symbols-rounded')
    }
  });
  e.target.classList.add('active');
  e.target.classList.replace('material-symbols-rounded', 'material-icons')
})
function submitData() {
  const nilai = document.getElementById('name').value;
  alert(nilai);
}
