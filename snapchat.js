function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  var imgArray = [];
    
  for (var i = 0; i < 20; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : "0" + (i + 1);
    var imgPath = "tiles/tiles-" + imgNumber + ".jpg";
    imgArray.push(imgPath);
  }
  
  var filledCells_8 = [
    83,
    82,
    81,
    80,
    79,
    128,
    129,
    130,
    131,
    132,
    133,
    134,
    185,
    236,
    286,
    336,
    385,
    435,
    484,
    534,
    535,
    536,
    537,
    585,
    584,
    634,
    684,
    734,
    784,
    785,
    835,
    885,
    886,
    834,
    883,
    882,
    881,
    831,
    830,
    829,
    879,
    877,
    878,
    827,
    828,
    826,
    825,
    774,
    723,
    672,
    621,
    570,
    177,
    227,
    520,
    521,
    522,
    523,
    524,
    277,
    375,
    326,
    327,
    325,
    275,
    274,
    324,
    425,
    474,
    475,
    525,
    574,
    573,
    572,
    571,
    622,
    624,
    673,
    623,
    674,
    724,
    725,
    775,
    776,
    780,
    779,
    778,
    777,
    781,
    782,
    832,
    833,
    783,
    733,
    683,
    633,
    583,
    533,
    483,
    433,
    434,
    384,
    334,
    335,
    285,
    235,
    234,
    182,
    183,
    184,
    180,
    181,
    179,
    178,
    228,
    278,
    328,
    378,
    376,
    377,
    427,
    426,
    575,
    576,
    526,
    476,
    477,
    428,
    478,
    527,
    626,
    625,
    675,
    676,
    726,
    728,
    729,
    730,
    731,
    732,
    727,
    677,
    627,
    577,
    479,
    329,
    279,
    230,
    229,
    231,
    232,
    233,
    283,
    284,
    333,
    383,
    382,
    280,
    281,
    282,
    332,
    331,
    330,
    380,
    379,
    429,
    430,
    431,
    381,
    432,
    482,
    532,
    582,
    681,
    682,
    632,
    631,
    581,
    531,
    481,
    480,
    530,
    529,
    528,
    579,
    578,
    628,
    679,
    678,
    629,
    680,
    630,
    580
  ];
  
  var initialFilledCells_8_Count = filledCells_8.length;
  
  console.log (initialFilledCells_8_Count);
  
  var easterEggIndex_8 = 681;
  
  var  snapchatText = document.querySelector(".snapchat");
  
  snapchatText.style.color = "#FFFF00";
  
  var hints_8 = ["breach date: 1 January 2014", "compromised data: geographic locations", "compromised data: phone numbers", "compromised data: usernames"];
  
  var counter_8 = 24009;
  
  var box_8 = document.querySelector(".box_8");
  for (let index = 0; index < 1400; index++) {
    const element = document.createElement("div");
    element.classList.add("item_8");
  
    var hint_8 = randomArrayItem(hints_8);
    if (filledCells_8.includes(index)) {
      var elementText_8 = document.createElement("div");
      elementText_8.classList.add("item-text_8");
      console.log("preset innerHTML");
      elementText_8.innerHTML = "breached accounts: " + counter_8;
      element.appendChild(elementText_8);
    }
  
    element.addEventListener("click", function () {
      // если ячейка заполнена
      if (filledCells_8.includes(index)) {
        console.log(index);
        counter_8+= 24009;
        var hint_8 = randomArrayItem(hints_8);
        document.querySelectorAll(".item-text_8").forEach(function (itemText) {
          itemText.innerHTML = "breached accounts: " + counter_8 + " " + hint_8;
        });
        // то заменить картинку на фоне ячейки
        if (index === easterEggIndex_8) {
          // element.style.backgroundImage = "none";
          element.style.backgroundImage = "url(avatar_pawn_.svg)";
          document.querySelectorAll(".item-text_8").forEach(function (itemText) {
            itemText.innerHTML = "your data has been breached: geographic location, phone number, username"
          });
        } else {
          element.style.backgroundImage = "url(yellow_star.svg)";
        }
  
        // и удалить её индекс из массива индексов заполненных ячеек
        filledCells_8 = filledCells_8.filter(function (cellIndex) {
          return cellIndex !== index;
        });
        snapchatText.style.opacity = filledCells_8.length / initialFilledCells_8_Count;
      }
      console.log(filledCells_8);
    });
    box_8.appendChild(element);
  }
  
  var cells_8 = document.querySelectorAll(".item_8");
  cells_8.forEach(function (cell, cellIndex) {
    if (filledCells_8.includes(cellIndex)) {
      var imageUrl = "url(snapchat_tile.svg)";
      cell.style.backgroundImage = imageUrl;
    }
  });