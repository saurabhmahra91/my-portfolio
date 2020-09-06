
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 150;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid blue }";
  document.body.appendChild(css);
};


let widths = [5, 90, 10, 90, 70, 60, 50, 25, 40, 75, 70, 50, 50, 90, 20, 100];
let progressBars = document.querySelectorAll(".progress-bar");
let barCounter = 0;
[...progressBars].forEach(bar => {
  bar.style.width = widths[barCounter] + '%';
  barCounter++;

})

function switch_contact_menu() {

  var f1 = document.getElementById('field1');
  var f2 = document.getElementById('field2');


  if (f1.disabled==true){

    f1.disabled = false;
    f2.disabled = false;
    f1.style.width = '25%' ;
    f2.style.width = '40%' ;
    f1.setAttribute('placeholder','Name');
    f2.setAttribute('placeholder','Message');

    f1.style.fontWeight = '100';
    f2.style.fontWeight = '100';
  }
  else{

    
    f1.disabled = true;
    f2.disabled = true;

    f1.style.fontWeight = '500';
    f2.style.fontWeight = '500';

   
    f1.style.width = '50%' ;
    f2.style.width = '80%' ;
    f1.setAttribute('placeholder','Whatsapp: 9644086265');
    f2.setAttribute('placeholder','Email: sourabhmahra91@gmail');
  }
    
    


}





