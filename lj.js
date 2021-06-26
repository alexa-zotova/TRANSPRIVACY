function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  var imgArray = [];
    
  for (var i = 0; i < 20; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : "0" + (i + 1);
    var imgPath = "tiles/tiles-" + imgNumber + ".jpg";
    imgArray.push(imgPath);
  }
  
  var filledCells_7 = [
    1399,
    1349,
    1299,
    1249,
    1398,
    1397,
    1396,
    1395,
    1344,
    1343,
    1292,
    1241,
    1190,
    1139,
    1088,
    1037,
    986,
    935,
    884,
    833,
    782,
    732,
    1198,
    1148,
    1098,
    1047,
    945,
    894,
    843,
    792,
    741,
    690,
    639,
    588,
    537,
    536,
    585,
    634,
    683,
    736,
    734,
    733,
    783,
    834,
    784,
    785,
    735,
    684,
    685,
    635,
    586,
    587,
    636,
    637,
    638,
    688,
    687,
    686,
    737,
    738,
    689,
    739,
    740,
    790,
    789,
    788,
    787,
    786,
    836,
    835,
    885,
    886,
    887,
    939,
    940,
    991,
    1042,
    1144,
    1195,
    1196,
    1298,
    1348,
    1347,
    1346,
    1345,
    1295,
    1297,
    1296,
    1248,
    1247,
    1197,
    1147,
    1095,
    1096,
    1097,
    1145,
    1146,
    1246,
    1245,
    1294,
    1244,
    1194,
    1193,
    1243,
    1293,
    1242,
    1191,
    1141,
    1140,
    1090,
    1089,
    1039,
    1038,
    988,
    987,
    937,
    936,
    938,
    837,
    839,
    838,
    888,
    889,
    890,
    840,
    841,
    791,
    842,
    892,
    893,
    943,
    944,
    994,
    1045,
    996,
    1046,
    995,
    1044,
    1043,
    993,
    992,
    941,
    891,
    942,
    990,
    989,
    1040,
    1041,
    1091,
    1143,
    1142,
    1192,
    1092,
    1093,
    1094
  ];
  
  var initialFilledCells_7_Count = filledCells_7.length;
  
  console.log (initialFilledCells_7_Count);
  
  var easterEggIndex_7 = 1094;
  
  var  ljText = document.querySelector(".lj");
  
  ljText.style.color = "#333366";
  
  var hints_7 = ["breach date: 1 January 2017", "compromised data: email addresses", "compromised data: passwords", "compromised data: usernames"];
  
  var counter_7 = 171252;
  
  var box_7 = document.querySelector(".box_7");
  for (let index = 0; index < 1400; index++) {
    const element = document.createElement("div");
    element.classList.add("item_7");
  
    var hint_7 = randomArrayItem(hints_7);
    if (filledCells_7.includes(index)) {
      var elementText_7 = document.createElement("div");
      elementText_7.classList.add("item-text_7");
      console.log("preset innerHTML");
      elementText_7.innerHTML = "breached accounts: " + counter_7;
      element.appendChild(elementText_7);
    }
  
    element.addEventListener("click", function () {
      // если ячейка заполнена
      if (filledCells_7.includes(index)) {
        console.log(index);
        counter_7+= 171252;
        var hint_7 = randomArrayItem(hints_7);
        document.querySelectorAll(".item-text_7").forEach(function (itemText) {
          itemText.innerHTML = "breached accounts: " + counter_7 + " " + hint_7;
        });
        // то заменить картинку на фоне ячейки
        if (index === easterEggIndex_7) {
          // element.style.backgroundImage = "none";
          element.style.backgroundImage = "url(avatar_pawn_.svg)";
          document.querySelectorAll(".item-text_7").forEach(function (itemText) {
            itemText.innerHTML = "your data has been breached: email address, password, username"
          });
        } else {
          element.style.backgroundImage = "url(darkblue_star.svg)";
        }
  
        // и удалить её индекс из массива индексов заполненных ячеек
        filledCells_7 = filledCells_7.filter(function (cellIndex) {
          return cellIndex !== index;
        });
        ljText.style.opacity = filledCells_7.length / initialFilledCells_7_Count;
      }
      console.log(filledCells_7);
    });
    box_7.appendChild(element);
  }
  
  var cells_7 = document.querySelectorAll(".item_7");
  cells_7.forEach(function (cell, cellIndex) {
    if (filledCells_7.includes(cellIndex)) {
      var imageUrl = "url(livejournal_tile.svg)";
      cell.style.backgroundImage = imageUrl;
    }
  });