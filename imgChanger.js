var imgTable = ['mojeslonce2.jpg', 'mojeslonce3.jpg', 'mojeslonce4.jpg', 'mojeslonce5.jpg', 'mojeslonce6.jpg', 'mojeslonce7.jpg', 'mojeslonce8.jpg', 'mojeslonce9.jpg', 'mojeslonce10.jpg', 'mojeslonce11.jpg', 'mojeslonce.jpg']
var indexImgTable = 0;

function changeImg() {
  document.getElementById('img').src = 'img/' + imgTable[indexImgTable] + '';
  if (indexImgTable != 10) {
    indexImgTable++;
  } else {
    indexImgTable = 0;
  }
}

var itvImg = setInterval(changeImg, 3000);
