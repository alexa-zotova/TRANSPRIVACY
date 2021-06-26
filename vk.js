function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  var imgArray = [];
    
  for (var i = 0; i < 20; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : "0" + (i + 1);
    var imgPath = "tiles/tiles-" + imgNumber + ".jpg";
    imgArray.push(imgPath);
  }
  
  var filledCells_5 = [
    1368,
    1369,
    1370,
    1371,
    1372,
    1373,
    1374,
    1375,
    1376,
    1327,
    1328,
    1278,
    1227,
    1177,
    1126,
    1076,
    1026,
    1027,
    1028,
    1078,
    1079,
    1080,
    1131,
    1133,
    1132,
    1134,
    1135,
    1086,
    1037,
    986,
    935,
    934,
    933,
    932,
    882,
    881,
    880,
    879,
    829,
    779,
    729,
    679,
    680,
    630,
    580,
    530,
    480,
    430,
    429,
    428,
    477,
    526,
    576,
    626,
    676,
    726,
    677,
    577,
    627,
    527,
    478,
    479,
    529,
    528,
    578,
    579,
    629,
    628,
    728,
    727,
    678,
    1084,
    1083,
    1081,
    1082,
    1032,
    1033,
    1034,
    1035,
    1085,
    1036,
    985,
    984,
    982,
    983,
    1031,
    981,
    931,
    930,
    980,
    1030,
    1029,
    979,
    929,
    928,
    978,
    977,
    877,
    878,
    828,
    778,
    777,
    776,
    827,
    826,
    876,
    926,
    927,
    976,
    1075,
    1025,
    975,
    924,
    873,
    823,
    772,
    722,
    671,
    669,
    670,
    718,
    717,
    766,
    816,
    817,
    868,
    919,
    969,
    1020,
    1070,
    1121,
    1171,
    1170,
    1169,
    1118,
    1116,
    1066,
    1067,
    1015,
    964,
    963,
    912,
    911,
    910,
    959,
    958,
    1008,
    1009,
    1010,
    960,
    961,
    962,
    1012,
    1011,
    1059,
    1109,
    1110,
    1060,
    1061,
    1111,
    1161,
    1162,
    1163,
    1213,
    1214,
    1264,
    1265,
    1266,
    1316,
    1317,
    1318,
    1267,
    1217,
    1167,
    1165,
    1166,
    1215,
    1216,
    1164,
    1113,
    1112,
    1062,
    1063,
    1013,
    1014,
    1064,
    1114,
    1115,
    1065,
    1117,
    1218,
    1168,
    1268,
    1269,
    1319,
    1320,
    1321,
    1322,
    1323,
    1324,
    1325,
    1326,
    1276,
    1277,
    1226,
    1176,
    1175,
    1225,
    1275,
    1274,
    1174,
    1124,
    1125,
    1024,
    1074,
    1220,
    1219,
    1270,
    1271,
    1221,
    1222,
    1272,
    1273,
    1223,
    1224,
    1173,
    1172,
    1122,
    1123,
    1073,
    1072,
    1071,
    1021,
    973,
    1022,
    1023,
    974,
    923,
    972,
    971,
    970,
    920,
    921,
    922,
    822,
    821,
    771,
    721,
    719,
    720,
    770,
    769,
    768,
    767,
    818,
    820,
    819,
    869,
    870,
    872,
    871
  ];
  
  var initialFilledCells_5_Count = filledCells_5.length;
  
  console.log (initialFilledCells_5_Count);
  
  var easterEggIndex_5 = 1025;
  
  var vkText = document.querySelector(".vk");
  
  vkText.style.color = "#3366ff";
  
  var hints_5 = ["breach date: 1 January 2012", "compromised data: phone numbers", "compromised data: email addresses", "compromised data: passwords", "compromised data: names"];
  
  var counter_5 = 358995;
  
  var box_5 = document.querySelector(".box_5");
  for (let index = 0; index < 1400; index++) {
    const element = document.createElement("div");
    element.classList.add("item_5");
  
    var hint_5 = randomArrayItem(hints_5);
    if (filledCells_5.includes(index)) {
      var elementText_5 = document.createElement("div");
      elementText_5.classList.add("item-text_5");
      console.log("preset innerHTML");
      elementText_5.innerHTML = "breached accounts: " + counter_5;
      element.appendChild(elementText_5);
    }
  
    element.addEventListener("click", function () {
      // если ячейка заполнена
      if (filledCells_5.includes(index)) {
        console.log(index);
        counter_5+= 358995;
        var hint_5 = randomArrayItem(hints_5);
        document.querySelectorAll(".item-text_5").forEach(function (itemText) {
          itemText.innerHTML = "breached accounts: " + counter_5 + " " + hint_5;
        });
        // то заменить картинку на фоне ячейки
        if (index === easterEggIndex_5) {
          // element.style.backgroundImage = "none";
          element.style.backgroundImage = "url(avatar_pawn_.svg)";
          document.querySelectorAll(".item-text_5").forEach(function (itemText) {
            itemText.innerHTML = "your data has been breached: email address, password, name, phone number"
          });
        } else {
          element.style.backgroundImage = "url(blue_star.svg)";
        }
  
        // и удалить её индекс из массива индексов заполненных ячеек
        filledCells_5 = filledCells_5.filter(function (cellIndex) {
          return cellIndex !== index;
        });
        vkText.style.opacity = filledCells_5.length / initialFilledCells_5_Count;
      }
      console.log(filledCells_5);
    });
    box_5.appendChild(element);
  }
  
  var cells_5 = document.querySelectorAll(".item_5");
  cells_5.forEach(function (cell, cellIndex) {
    if (filledCells_5.includes(cellIndex)) {
      var imageUrl = "url(vk_tile.svg)";
      cell.style.backgroundImage = imageUrl;
    }
  });