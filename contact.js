var stores = [
    {
      name: "RAICHUR GOVERNMENT SPECIALIZED ADOPTION AGENCY",
      state: "Karnataka",
      Email:"adoptionrcr[at]gmail[dot]com",
      Mobile_No:"9902599469",
      address: "No. 1-9-137 near Maremma Temple Goal Market Rd Azad Nagar Raichur 584101"
    },
    {
      name: "GOVT SPECIAL ADOPTION AGENCY",
      state: "Karnataka",
      Email:"saamysuru[at]gmail[dot]com",
      Mobile_No:"8317484243",
      address: "Lilith Mahai Road Siddartha Nagar Mysore 570011"
    },
    {
        name: "CHILD CARE INSTITUTION",
        state: "Kerala",
        Email:"childwelfareadoptionklm[at]gmail[dot]com",
        Mobile_No:"7736841162",
        address: "Child Care Institution kerala state council for child welfare,Vydyasala nagar 156, Uliyakovil PO, kollam 691019"
      },
      {
        name: "KERALA STATE COUNCIL FOR CHILD WELFARE",
        state: "Kerala",
        Email:"childwelfareadoption[at]gmail[dot]com",
        Mobile_No:"9809651000",
        address: "Thycaud Thiruvananthapuram Kerala 695014 695014"   
      },
      {
        name: "SISHUGRUHA VIJIANAGARAM",
        state: "Andhra Pradesh",
        Email:"saavzm[at]gmail[dot]com",
        Mobile_No:"7901597241",
        address: "Plot No-110 , 111, Door no 1-371, Revenue Colony, K.L Puvam, Vizianagaram. 535003"   
      }
  ];

  function getStoresByState() {
    var state = document.getElementById("stateSelect").value;
    var filteredStores = stores.filter(function(store) {
      return store.state === state;
    });

    var storeList = document.getElementById("storeList");
           // Clear previous results
    storeList.innerHTML = ""; 

    if (filteredStores.length === 0) {
      storeList.innerHTML = "No stores found in the selected state.";
    } else {
      filteredStores.forEach(function(store) {
        var storeInfo = document.createElement("li");
        storeInfo.innerHTML = "<b>Name:</b> " + store.name + "<br>" +
                              "<b>Address:</b> " + store.address + "<br>" +
                              "<b>Email:</b> " + store.Email + "<br>" +
                              "<b>Mobile_No:</b> " + store.Mobile_No + "<br><br>";
        storeList.appendChild(storeInfo);
      });
    }
  }