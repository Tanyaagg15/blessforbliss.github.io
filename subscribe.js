function clickme() {
    document.getElementById("myForm").style.display = "block";
  }
  
  const button=document.getElementById("button1");
  button.addEventListener("click", function(){
    alert("Submitted Successfully.");
  })