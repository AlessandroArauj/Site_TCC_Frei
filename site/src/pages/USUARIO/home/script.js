


export function carrossel (){


let count = 1;
document.getElementById('radio1').checked = true;

let x = setInterval(function () {
  nextImage();
}, 5000)

function nextImage() {
  count++;
  if (count > 4) {
    count = 1
  }

  if (document.getElementById('radio'+ count) == null)
    clearInterval(x);
  else
    document.getElementById('radio' + count).checked = true;
}

}








