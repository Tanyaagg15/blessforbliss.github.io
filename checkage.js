document.getElementById("maritalStatus").addEventListener("change", function() {
    var selectedOption = this.value;
    if (selectedOption === "married") {
      document.getElementById("compositeAgeContainer").style.display = "none";
      document.getElementById("ageContainer").style.display = "none";
    } else if (selectedOption === "single") {
      document.getElementById("compositeAgeContainer").style.display = "none";
      document.getElementById("ageContainer").style.display = "none";
    }
  });
  function handleSubmit() {
    var maritalStatus = document.getElementById("maritalStatus").value;

    if (maritalStatus === "married") {
      document.getElementById("compositeAgeContainer").style.display = "block";
      document.getElementById("ageContainer").style.display = "none";
    } else if (maritalStatus === "single") {
      document.getElementById("compositeAgeContainer").style.display = "none";
      document.getElementById("ageContainer").style.display = "block";
    }
  }

  function handleAgeSubmit() {
    var maritalStatus = document.getElementById("maritalStatus").value;

    if (maritalStatus === "single") {
      var age = parseInt(document.getElementById("age").value);
      if (age <= 40) {
        document.getElementById("result").innerHTML = "You can adopt a child of age upto 2 years.";
      } 
      else if ((age > 40) && (age<=45)) {
        document.getElementById("result").innerHTML = "You can adopt a child of age above 2 years and upto 4 years.";
      } 
      else if((age >45)&&(age<=50)) {
        document.getElementById("result").innerHTML = "You can adopt a child of age above 4 years and upto 8 years.";
      }
      else if((age >50)&&(age<=55)) {
        document.getElementById("result").innerHTML = "You can adopt a child of age above 8 years and upto 18 years.";
      }
    } else if (maritalStatus === "married") {
      var compositeAge = parseInt(document.getElementById("compositeAge").value);
      if (compositeAge <=85) {
        document.getElementById("result").innerHTML = " You can adopt a child of age upto 2 years.";
      }  
      else if ((age > 85) && (age<=90)) {
        document.getElementById("result").innerHTML = "You can adopt a child of age above 2 years and upto 4 years.";
      } 
      else if((age >90)&&(age<=100)) {
        document.getElementById("result").innerHTML = "You can adopt a child of age above 4 years and upto 8 years.";
      }
      else if((age >100)&&(age<=110)) {
        document.getElementById("result").innerHTML = "You can adopt a child of age above 8 years and upto 18 years.";
      }
    }
  }