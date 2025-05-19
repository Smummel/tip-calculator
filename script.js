function calculateTip(){
  let bill=parseFloat(document.querySelector('#price').value);
  let iftip=parseFloat(document.querySelector('#tip').value);
  let food=parseFloat(document.querySelector('#food').value);
  let service=parseFloat(document.querySelector('#service').value);
  let accuracy=parseFloat(document.querySelector('#accuracy').value);
  let speed=parseFloat(document.querySelector('#speed').value);
  let cleanliness=parseFloat(document.querySelector('#cleanliness').value);
  let makeathome=1-parseFloat(document.querySelector('#makeathome').value);
  let attractiveness=parseFloat(document.querySelector('#attractiveness').value);
  let instagrammability=parseFloat(document.querySelector('#instagrammability').value);
  let rich=parseFloat(document.querySelector('#rich').value);
  let impress=parseFloat(document.querySelector('#impress').value);
  let alignment=parseFloat(document.querySelector('#alignment').value);
  let prime=parseFloat(document.querySelector('#prime').value);
  let cool=parseFloat(document.querySelector('#cool').value);
  let generousity=parseFloat(document.querySelector('#generousity').value)
  ;

  return bill*iftip*food*service*accuracy*speed*cleanliness*makeathome*attractiveness*instagrammability*rich*impress*alignment*prime*cool*generousity
}

const total = document.querySelector('#total');

total.innerHTML = calculateTip();