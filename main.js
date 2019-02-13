console.log('aa');
var counter;

function createHeart (){
  counter =  Math.floor(Math.random() * 5);
  console.log(counter);
  var heartContainer = document.getElementById('heartContainer'+counter);
  var heart = document.createElement('img');
  heart.src='img/like.png';
  heart.className = 'heart';
  heart.style.position = 'fixed';
  heart.style.top = 'inherit';
  heart.style.left = 'inherit';
  heart.style.transition = 'all 6s';
  var heartContainerLength = heartContainer.children.length;
  heartContainer.appendChild(heart);
  setTimeout(flyHeart.bind(null, counter, heartContainerLength), 100);
}

function flyHeart(counter , hCL){
  document.getElementById('heartContainer'+counter).children[hCL].style.top = '-200px';
  setTimeout(destroyHeart.bind(null, counter, hCL), 6100);
}

function destroyHeart (counter, hCL) {
  document.getElementById('heartContainer'+counter).children[hCL].outerHTML= '';
}

function setIntervalForHeart(){
  setInterval(createHeart, 6200);
}

createHeart();
setTimeout(createHeart, 100)
setTimeout(createHeart, 200)
setTimeout(createHeart, 300)
setTimeout(createHeart, 400)
setTimeout(createHeart, 500)
setTimeout(createHeart, 600)
setTimeout(createHeart, 700)
setTimeout(createHeart, 800)
setTimeout(createHeart, 900)
setTimeout(createHeart, 1000)
setTimeout(createHeart, 1100)
setTimeout(createHeart, 1200)
setTimeout(createHeart, 1300)
setTimeout(createHeart, 1400)
setTimeout(createHeart, 1500)
setTimeout(createHeart, 1600)
setTimeout(createHeart, 1700)
setTimeout(createHeart, 1800)
setTimeout(createHeart, 1900)
setTimeout(createHeart, 2000)
setTimeout(createHeart, 2100)
setTimeout(createHeart, 2200)
setTimeout(createHeart, 2300)
setTimeout(createHeart, 2400)
setTimeout(createHeart, 2500)
setTimeout(createHeart, 2600)
setTimeout(createHeart, 2700)
setTimeout(createHeart, 2800)
setTimeout(createHeart, 2900)
setTimeout(createHeart, 3000)
setTimeout(createHeart, 3100)
setTimeout(createHeart, 3200)
setTimeout(createHeart, 3300)
setTimeout(createHeart, 3400)
setTimeout(createHeart, 3500)
setTimeout(createHeart, 3600)
setTimeout(createHeart, 3700)
setTimeout(createHeart, 3800)
setTimeout(createHeart, 3900)
setTimeout(createHeart, 4000)
setTimeout(createHeart, 4100)
setTimeout(createHeart, 4200)
setTimeout(createHeart, 4300)
setTimeout(createHeart, 4400)
setTimeout(createHeart, 4500)
setTimeout(createHeart, 4600)
setTimeout(createHeart, 4700)
setTimeout(createHeart, 4800)
setTimeout(createHeart, 4900)
setTimeout(createHeart, 5000)
setTimeout(createHeart, 5100)
setTimeout(createHeart, 5200)
setTimeout(createHeart, 5300)
setTimeout(createHeart, 5400)
setTimeout(createHeart, 5500)
setTimeout(createHeart, 5600)
setTimeout(createHeart, 5700)
setTimeout(createHeart, 5800)
setTimeout(createHeart, 5900)
setTimeout(createHeart, 6000)
setIntervalForHeart()
setTimeout(setIntervalForHeart, 100)
setTimeout(setIntervalForHeart, 200)
setTimeout(setIntervalForHeart, 300)
setTimeout(setIntervalForHeart, 400)
setTimeout(setIntervalForHeart, 500)
setTimeout(setIntervalForHeart, 600)
setTimeout(setIntervalForHeart, 700)
setTimeout(setIntervalForHeart, 800)
setTimeout(setIntervalForHeart, 900)
setTimeout(setIntervalForHeart, 1000)
setTimeout(setIntervalForHeart, 1100)
setTimeout(setIntervalForHeart, 1200)
setTimeout(setIntervalForHeart, 1300)
setTimeout(setIntervalForHeart, 1400)
setTimeout(setIntervalForHeart, 1500)
setTimeout(setIntervalForHeart, 1600)
setTimeout(setIntervalForHeart, 1700)
setTimeout(setIntervalForHeart, 1800)
setTimeout(setIntervalForHeart, 1900)
setTimeout(setIntervalForHeart, 2000)
setTimeout(setIntervalForHeart, 2100)
setTimeout(setIntervalForHeart, 2200)
setTimeout(setIntervalForHeart, 2300)
setTimeout(setIntervalForHeart, 2400)
setTimeout(setIntervalForHeart, 2500)
setTimeout(setIntervalForHeart, 2600)
setTimeout(setIntervalForHeart, 2700)
setTimeout(setIntervalForHeart, 2800)
setTimeout(setIntervalForHeart, 2900)
setTimeout(setIntervalForHeart, 3000)
setTimeout(setIntervalForHeart, 3100)
setTimeout(setIntervalForHeart, 3200)
setTimeout(setIntervalForHeart, 3300)
setTimeout(setIntervalForHeart, 3400)
setTimeout(setIntervalForHeart, 3500)
setTimeout(setIntervalForHeart, 3600)
setTimeout(setIntervalForHeart, 3700)
setTimeout(setIntervalForHeart, 3800)
setTimeout(setIntervalForHeart, 3900)
setTimeout(setIntervalForHeart, 4000)
setTimeout(setIntervalForHeart, 4100)
setTimeout(setIntervalForHeart, 4200)
setTimeout(setIntervalForHeart, 4300)
setTimeout(setIntervalForHeart, 4400)
setTimeout(setIntervalForHeart, 4500)
setTimeout(setIntervalForHeart, 4600)
setTimeout(setIntervalForHeart, 4700)
setTimeout(setIntervalForHeart, 4800)
setTimeout(setIntervalForHeart, 4900)
setTimeout(setIntervalForHeart, 5000)
setTimeout(setIntervalForHeart, 5100)
setTimeout(setIntervalForHeart, 5200)
setTimeout(setIntervalForHeart, 5300)
setTimeout(setIntervalForHeart, 5400)
setTimeout(setIntervalForHeart, 5500)
setTimeout(setIntervalForHeart, 5600)
setTimeout(setIntervalForHeart, 5700)
setTimeout(setIntervalForHeart, 5800)
setTimeout(setIntervalForHeart, 5900)
setTimeout(setIntervalForHeart, 6000)
