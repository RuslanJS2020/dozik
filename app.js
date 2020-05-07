function plus() {
  let num1, num2, sel2, h, m;
  num1 = document.getElementById("selec").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseFloat(num2);
  sel2 = document.getElementById("select2").value;
  sel2 = parseFloat(sel2);
  if (num1 == "1" && sel2 == "1" ) {
    h = (100 / num2) * sel2;
    m = h - Math.floor(h);
    m = 60 * m;
  } else if (num1 == "10" && sel2 == "1" && num2 ==!NaN) {
    h = (1000 / num2) * sel2;
    m = h - Math.floor(h);
    m = 60 * m;
  } else if (num1 == "1" && sel2 == "0.1" && num2 ==!NaN) {
    h = (100 / num2) * sel2;
    m = h - Math.floor(h);
    m = 60 * m;
  } else if (num1 == "10" && sel2 == "0.1" && num2 ==!NaN) {
    h = (1000 / num2) * sel2;
    m = h - Math.floor(h);
    m = 60 * m;
  } else if (num1 == "1" && sel2 == "0.027" && num2 ==!NaN) {
    h = (100 / num2) * sel2;
    m = h - Math.floor(h);
    m = 60 * m;
  } else if (num1 == "10" && sel2 == "0.027" && num2 ==!NaN) {
    h = (1000 / num2) * sel2;
    m = h - Math.floor(h);
    m = 60 * m;
  } else {
    h = 0;
    m = 0;
    m = 0;
  }

  document.getElementById("out").innerHTML ="Время работы: " +
    Math.floor(h) + " ч. " + Math.floor(m) + " м.";
}
