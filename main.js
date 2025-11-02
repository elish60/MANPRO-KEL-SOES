document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("response").innerText = "Terima kasih! Pesan Anda telah terkirim.";
  this.reset();
});
