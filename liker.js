function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  var imgArray = [];
    
  for (var i = 0; i < 20; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : "0" + (i + 1);
    var imgPath = "tiles/tiles-" + imgNumber + ".jpg";
    imgArray.push(imgPath);
  }
  
  var filledCells_10 = [
    960,
    910,
    861,
    811,
    761,
    711,
    661,
    612,
    613,
    564,
    565,
    566,
    567,
    617,
    618,
    619,
    616,
    615,
    614,
    664,
    663,
    662,
    665,
    666,
    667,
    668,
    669,
    670,
    720,
    820,
    770,
    769,
    719,
    718,
    716,
    717,
    715,
    714,
    713,
    712,
    762,
    763,
    764,
    765,
    766,
    767,
    768,
    818,
    819,
    817,
    816,
    815,
    814,
    813,
    812,
    911,
    912,
    862,
    863,
    865,
    864,
    866,
    867,
    868,
    869,
    870,
    921,
    971,
    970,
    920,
    918,
    919,
    969,
    968,
    967,
    917,
    916,
    966,
    965,
    915,
    914,
    964,
    963,
    913,
    962,
    961,
    1011,
    1062,
    1112,
    1163,
    1214,
    1215,
    1216,
    1217,
    1168,
    1119,
    1020,
    1069,
    1019,
    1012,
    1014,
    1013,
    1063,
    1113,
    1114,
    1164,
    1165,
    1166,
    1167,
    1118,
    1117,
    1116,
    1115,
    1065,
    1064,
    1015,
    1016,
    1066,
    1067,
    1017,
    1068,
    1018
  ];
  
  var initialFilledCells_10_Count = filledCells_10.length;
  
  console.log (initialFilledCells_10_Count);
  
  var easterEggIndex_10 = 1166;
  
  var  likerText = document.querySelector(".liker");
  
  likerText.style.color = "#3366ff";
  
  var hints_10 = ["breach date: 8 March 2021", "compromised data: auth tokens", "compromised data: dates of birth", "compromised data: Education levels", "compromised data: email addresses", "compromised data: geographic locations", "compromised data:  IP addresses", "compromised data:  names", "compromised data: passwords", "compromised data: phone numbers", "compromised data: private messages", "compromised data: security questions and answers", "compromised data: social media profiles", "compromised data: usernames"];
  
  var counter_10 =  62049;
  
  var box_10 = document.querySelector(".box_10");
  for (let index = 0; index < 1400; index++) {
    const element = document.createElement("div");
    element.classList.add("item_10");
  
    var hint_10 = randomArrayItem(hints_10);
    if (filledCells_10.includes(index)) {
      var elementText_10 = document.createElement("div");
      elementText_10.classList.add("item-text_10");
      console.log("preset innerHTML");
      elementText_10.innerHTML = "breached accounts: " + counter_10;
      element.appendChild(elementText_10);
    }
  
    element.addEventListener("click", function () {
      // если ячейка заполнена
      if (filledCells_10.includes(index)) {
        console.log(index);
        counter_10+= 3844;
        var hint_10 = randomArrayItem(hints_10);
        document.querySelectorAll(".item-text_10").forEach(function (itemText) {
          itemText.innerHTML = "breached accounts: " + counter_10 + " " + hint_10;
        });
        // то заменить картинку на фоне ячейки
        if (index === easterEggIndex_10) {
          // element.style.backgroundImage = "none";
          element.style.backgroundImage = "url(avatar_pawn_.svg)";
          document.querySelectorAll(".item-text_10").forEach(function (itemText) {
            itemText.innerHTML = "your data has been breached: auth tokens, date of birth, education level, email address, geographic location, IP address, name, password, phone number, private messages, sequrity questions and answers, social media profiles, username"
          });
        } else {
          element.style.backgroundImage = "url(blue_star.svg)";
        }
  
        // и удалить её индекс из массива индексов заполненных ячеек
        filledCells_10 = filledCells_10.filter(function (cellIndex) {
          return cellIndex !== index;
        });
        likerText.style.opacity = filledCells_10.length / initialFilledCells_10_Count;
      }
      console.log(filledCells_10);
    });
    box_10.appendChild(element);
  }
  
  var cells_10 = document.querySelectorAll(".item_10");
  cells_10.forEach(function (cell, cellIndex) {
    if (filledCells_10.includes(cellIndex)) {
      var imageUrl = "url(liker_tile.svg)";
      cell.style.backgroundImage = imageUrl;
    }
  });