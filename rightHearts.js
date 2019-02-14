var counterRight;
var indexRight;
var key = 1;
var imagesRight = ['img/like.png','img/likeBlack.png','img/likeBlue.png'];

function createHeartRight (){
  if(key == 1){
  counterRight =  Math.floor(Math.random() * 5);
  indexRight =  Math.floor(Math.random() * 3);
  var heartContainer = document.getElementById('heartContainerRight'+counterRight);
  var heart = document.createElement('img');
  heart.src=imagesRight[indexRight];
  heart.className = 'heart';
  heart.style.position = 'fixed';
  heart.style.top = 'inherit';
  heart.style.right = 'inherit';
  heart.style.transition = 'all 10s';
  var heartContainerLength = heartContainer.children.length;
  heartContainer.appendChild(heart);
  setTimeout(flyHeartRight.bind(null, counterRight, heartContainerLength), 100);
}
}

function flyHeartRight(counter , hCL){
  document.getElementById('heartContainerRight'+counter).children[hCL].style.top = '-200px';
  setTimeout(destroyHeartRight.bind(null, counter, hCL), 6100);
}

function destroyHeartRight (counter, hCL) {
  document.getElementById('heartContainerRight'+counter).children[0].outerHTML= '';
}

function setIntervalForHeartRight(){
  setInterval(createHeartRight, 6200);
}

createHeartRight();
setTimeout(createHeartRight, 100)
setTimeout(createHeartRight, 300)
setTimeout(createHeartRight, 500)
setTimeout(createHeartRight, 700)
setTimeout(createHeartRight, 1000)
setTimeout(createHeartRight, 1200)
setTimeout(createHeartRight, 1400)
setTimeout(createHeartRight, 1600)
setTimeout(createHeartRight, 1800)
setTimeout(createHeartRight, 2000)
setTimeout(createHeartRight, 2200)
setTimeout(createHeartRight, 2400)
setTimeout(createHeartRight, 2600)
setTimeout(createHeartRight, 2800)
setTimeout(createHeartRight, 3000)
setTimeout(createHeartRight, 3200)
setTimeout(createHeartRight, 3400)
setTimeout(createHeartRight, 3600)
setTimeout(createHeartRight, 3800)
setTimeout(createHeartRight, 4000)
setTimeout(createHeartRight, 4200)
setTimeout(createHeartRight, 4400)
setTimeout(createHeartRight, 4600)
setTimeout(createHeartRight, 4800)
setTimeout(createHeartRight, 5000)
setTimeout(createHeartRight, 5200)
setTimeout(createHeartRight, 5400)
setTimeout(createHeartRight, 5600)
setTimeout(createHeartRight, 5800)
setTimeout(createHeartRight, 6000)
setIntervalForHeartRight()
setTimeout(setIntervalForHeartRight, 100)
setTimeout(setIntervalForHeartRight, 300)
setTimeout(setIntervalForHeartRight, 500)
setTimeout(setIntervalForHeartRight, 700)
setTimeout(setIntervalForHeartRight, 900)
setTimeout(setIntervalForHeartRight, 1100)
setTimeout(setIntervalForHeartRight, 1300)
setTimeout(setIntervalForHeartRight, 1500)
setTimeout(setIntervalForHeartRight, 1700)
setTimeout(setIntervalForHeartRight, 1900)
setTimeout(setIntervalForHeartRight, 2100)
setTimeout(setIntervalForHeartRight, 2300)
setTimeout(setIntervalForHeartRight, 2500)
setTimeout(setIntervalForHeartRight, 2700)
setTimeout(setIntervalForHeartRight, 2900)
setTimeout(setIntervalForHeartRight, 3100)
setTimeout(setIntervalForHeartRight, 3300)
setTimeout(setIntervalForHeartRight, 3500)
setTimeout(setIntervalForHeartRight, 3700)
setTimeout(setIntervalForHeartRight, 3900)
setTimeout(setIntervalForHeartRight, 4100)
setTimeout(setIntervalForHeartRight, 4300)
setTimeout(setIntervalForHeartRight, 4500)
setTimeout(setIntervalForHeartRight, 4700)
setTimeout(setIntervalForHeartRight, 4900)
setTimeout(setIntervalForHeartRight, 5100)
setTimeout(setIntervalForHeartRight, 5300)
setTimeout(setIntervalForHeartRight, 5500)
setTimeout(setIntervalForHeartRight, 5700)
setTimeout(setIntervalForHeartRight, 5900)
setTimeout(setIntervalForHeartRight, 6100)
