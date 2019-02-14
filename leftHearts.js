console.log('aa');
var counter;
var index;
var key = 1;
var images = ['img/like.png','img/likeBlack.png','img/likeBlue.png'];

function toggleKey(){
  if(key == 1){
    key = 0;
  }else{
    key = 1;
  }
}

function createHeartLeft (){
  if(key == 1){
  counter =  Math.floor(Math.random() * 5);
  index =  Math.floor(Math.random() * 3);
  var heartContainer = document.getElementById('heartContainerLeft'+counter);
  var heart = document.createElement('img');
  heart.src=images[index];
  heart.className = 'heart';
  heart.style.position = 'fixed';
  heart.style.top = 'inherit';
  heart.style.left = 'inherit';
  heart.style.transition = 'all 10s';
  var heartContainerLength = heartContainer.children.length;
  heartContainer.appendChild(heart);
  setTimeout(flyHeart.bind(null, counter, heartContainerLength), 100);
}
}

function flyHeart(counter , hCL){
  document.getElementById('heartContainerLeft'+counter).children[hCL].style.top = '-200px';
  setTimeout(destroyHeart.bind(null, counter, hCL), 6100);
}

function destroyHeart (counter, hCL) {
  document.getElementById('heartContainerLeft'+counter).children[0].outerHTML= '';
}

function setIntervalForHeartLeft(){
  setInterval(createHeartLeft, 6200);
}

createHeartLeft();
setTimeout(createHeartLeft, 100)
setTimeout(createHeartLeft, 300)
setTimeout(createHeartLeft, 500)
setTimeout(createHeartLeft, 700)
setTimeout(createHeartLeft, 1000)
setTimeout(createHeartLeft, 1200)
setTimeout(createHeartLeft, 1400)
setTimeout(createHeartLeft, 1600)
setTimeout(createHeartLeft, 1800)
setTimeout(createHeartLeft, 2000)
setTimeout(createHeartLeft, 2200)
setTimeout(createHeartLeft, 2400)
setTimeout(createHeartLeft, 2600)
setTimeout(createHeartLeft, 2800)
setTimeout(createHeartLeft, 3000)
setTimeout(createHeartLeft, 3200)
setTimeout(createHeartLeft, 3400)
setTimeout(createHeartLeft, 3600)
setTimeout(createHeartLeft, 3800)
setTimeout(createHeartLeft, 4000)
setTimeout(createHeartLeft, 4200)
setTimeout(createHeartLeft, 4400)
setTimeout(createHeartLeft, 4600)
setTimeout(createHeartLeft, 4800)
setTimeout(createHeartLeft, 5000)
setTimeout(createHeartLeft, 5200)
setTimeout(createHeartLeft, 5400)
setTimeout(createHeartLeft, 5600)
setTimeout(createHeartLeft, 5800)
setTimeout(createHeartLeft, 6000)
setIntervalForHeartLeft()
setTimeout(setIntervalForHeartLeft, 100)
setTimeout(setIntervalForHeartLeft, 300)
setTimeout(setIntervalForHeartLeft, 500)
setTimeout(setIntervalForHeartLeft, 700)
setTimeout(setIntervalForHeartLeft, 900)
setTimeout(setIntervalForHeartLeft, 1100)
setTimeout(setIntervalForHeartLeft, 1300)
setTimeout(setIntervalForHeartLeft, 1500)
setTimeout(setIntervalForHeartLeft, 1700)
setTimeout(setIntervalForHeartLeft, 1900)
setTimeout(setIntervalForHeartLeft, 2100)
setTimeout(setIntervalForHeartLeft, 2300)
setTimeout(setIntervalForHeartLeft, 2500)
setTimeout(setIntervalForHeartLeft, 2700)
setTimeout(setIntervalForHeartLeft, 2900)
setTimeout(setIntervalForHeartLeft, 3100)
setTimeout(setIntervalForHeartLeft, 3300)
setTimeout(setIntervalForHeartLeft, 3500)
setTimeout(setIntervalForHeartLeft, 3700)
setTimeout(setIntervalForHeartLeft, 3900)
setTimeout(setIntervalForHeartLeft, 4100)
setTimeout(setIntervalForHeartLeft, 4300)
setTimeout(setIntervalForHeartLeft, 4500)
setTimeout(setIntervalForHeartLeft, 4700)
setTimeout(setIntervalForHeartLeft, 4900)
setTimeout(setIntervalForHeartLeft, 5100)
setTimeout(setIntervalForHeartLeft, 5300)
setTimeout(setIntervalForHeartLeft, 5500)
setTimeout(setIntervalForHeartLeft, 5700)
setTimeout(setIntervalForHeartLeft, 5900)
setTimeout(setIntervalForHeartLeft, 6100)
