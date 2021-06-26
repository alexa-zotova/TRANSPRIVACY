function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  var imgArray = [];
    
  for (var i = 0; i < 20; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : "0" + (i + 1);
    var imgPath = "tiles/tiles-" + imgNumber + ".jpg";
    imgArray.push(imgPath);
  }
  
  var filledCells_6 = [
    1150,
    1100,
    1050,
    1000,
    950,
    900,
    850,
    801,
    752,
    753,
    704,
    706,
    705,
    657,
    658,
    659,
    660,
    661,
    611,
    561,
    511,
    512,
    513,
    514,
    565,
    616,
    617,
    618,
    670,
    671,
    721,
    771,
    770,
    768,
    819,
    818,
    769,
    817,
    866,
    916,
    966,
    1016,
    1017,
    1067,
    1066,
    1116,
    1115,
    1114,
    1064,
    1013,
    963,
    863,
    913,
    862,
    861,
    911,
    910,
    959,
    958,
    957,
    956,
    1005,
    1004,
    1054,
    1104,
    1154,
    1155,
    1205,
    1204,
    1253,
    1201,
    1251,
    1252,
    1202,
    1203,
    1153,
    1101,
    1151,
    1102,
    1152,
    1103,
    1053,
    1052,
    1051,
    1001,
    1002,
    1003,
    953,
    952,
    951,
    901,
    851,
    852,
    902,
    903,
    853,
    803,
    802,
    954,
    905,
    855,
    904,
    955,
    854,
    804,
    754,
    756,
    755,
    805,
    806,
    856,
    906,
    907,
    857,
    807,
    757,
    707,
    708,
    758,
    808,
    858,
    908,
    809,
    909,
    859,
    759,
    709,
    710,
    760,
    810,
    860,
    811,
    761,
    711,
    562,
    563,
    564,
    614,
    615,
    667,
    668,
    669,
    719,
    720,
    718,
    717,
    767,
    816,
    766,
    716,
    666,
    664,
    665,
    663,
    613,
    612,
    662,
    712,
    713,
    714,
    715,
    765,
    764,
    763,
    762,
    812,
    813,
    815,
    814,
    864,
    865,
    915,
    914,
    965,
    964,
    1014,
    1015,
    1065
  ];
  
  var initialFilledCells_6_Count = filledCells_6.length;
  
  console.log (initialFilledCells_6_Count);
  
  var easterEggIndex_6 = 1052;
  
  var  tumblrText = document.querySelector(".tumblr");
  
  tumblrText.style.color = "#333366";
  
  var hints_6 = ["breach date: 28 February 2013", "compromised data: email addresses", "compromised data: passwords",];
  
  var counter_6 = 369883;
  
  var box_6 = document.querySelector(".box_6");
  for (let index = 0; index < 1400; index++) {
    const element = document.createElement("div");
    element.classList.add("item_6");
  
    var hint_6 = randomArrayItem(hints_6);
    if (filledCells_6.includes(index)) {
      var elementText_6 = document.createElement("div");
      elementText_6.classList.add("item-text_6");
      console.log("preset innerHTML");
      elementText_6.innerHTML = "breached accounts: " + counter_6;
      element.appendChild(elementText_6);
    }
  
    element.addEventListener("click", function () {
      // если ячейка заполнена
      if (filledCells_6.includes(index)) {
        console.log(index);
        counter_6+= 369883;
        var hint_6 = randomArrayItem(hints_6);
        document.querySelectorAll(".item-text_6").forEach(function (itemText) {
          itemText.innerHTML = "breached accounts: " + counter_6 + " " + hint_6;
        });
        // то заменить картинку на фоне ячейки
        if (index === easterEggIndex_6) {
          // element.style.backgroundImage = "none";
          element.style.backgroundImage = "url(avatar_pawn_.svg)";
          document.querySelectorAll(".item-text_6").forEach(function (itemText) {
            itemText.innerHTML = "your data has been breached: email address, password"
          });
        } else {
          element.style.backgroundImage = "url(darkblue_star.svg)";
        }
  
        // и удалить её индекс из массива индексов заполненных ячеек
        filledCells_6 = filledCells_6.filter(function (cellIndex) {
          return cellIndex !== index;
        });
        tumblrText.style.opacity = filledCells_6.length / initialFilledCells_6_Count;
      }
      console.log(filledCells_6);
    });
    box_6.appendChild(element);
  }
  
  var cells_6 = document.querySelectorAll(".item_6");
  cells_6.forEach(function (cell, cellIndex) {
    if (filledCells_6.includes(cellIndex)) {
      var imageUrl = "url(tumblr_tile.svg)";
      cell.style.backgroundImage = imageUrl;
    }
  });