const p = document.getElementById("p");
let count = 0;

function increment() {
  count++;
  p.textContent = count;
}

function decrement() {
  
  if (count >= 0) {
    count--;
    p.textContent = count;
  } else {
    alert("manfiy qiymat bolishi mumkin emas");
  }
}
