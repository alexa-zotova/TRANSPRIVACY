function randomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var imgArray = [];
  
for (var i = 0; i < 20; i++) {
  var imgNumber = i + 1 >= 10 ? i + 1 : "0" + (i + 1);
  var imgPath = "tiles/tiles-" + imgNumber + ".jpg";
  imgArray.push(imgPath);
}

var filledCells = [
   22,23,24,

   69,70,71,72,73,74,

   116,117,118,119,120,121,122,123,124,125,

   166,167,168,169,170,171,172,173,174,175,

   216,217,218,219,220,221,222,223,224,225,

   267,268,269,270,271,272,273,274,275,276,           283,284,285,286,287,288,

   317,318,319,320,321,322,323,324,325,326,       332,333,334,335,336,337,338,339,340,341,

       368,369,370,371,372,373,374,375,376,   380,381,382,383,384,385,386,387,388,389,390,391,392,393,

       418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,441,440,442,443,444,

       469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,491,490,492,493,494,495,

       519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,541,540,542,543,544,545,546,

       566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,591,590,592,593,594,595,596,

       614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,641,640,642,643,644,645,646,647,

       661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,691,690,692,693,694,695,696,697,

       709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,

       757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,782,783,784,785,786,790,791,792,793,794,795,796,797,798,799,

       804,805,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,,841,842,843,844,845,846,847,848,849,

       852,853,854,855,856,857,858,859,860,861,862,863,864,865,866,867,868,869,870,871,872,873,874,875,876,877,878,879,880,891,892,893,894,895,896,897,898,899,

       900,901,902,903,904,905,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,930,,942,943,944,945,946,947,948,949,

       950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,978,979,980,981,992,993,994,995,996,997,998,999,

       1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1030,1031,1042,1043,1044,1045,1046,1047,1048,1049,

       1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1073,1074,1075,1076,1077,1078,1079,1080,1081,1093,1094,1095,1096,1097,

       1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,      1123,1124,1125,1126,1127,1128,1129,1130,1131,1132, 1143,1144,

       
       1152,1153,1154,1155,1156,1157,1158,1159,1160,1161,1162,1163,           1174,1175,1176,1177,1178,1179,1180,1181,1182,

       1202,1203,1204,1205,1206,1207,1208,1209,1210,         1224,1225,1226,1227,1228,1229,1230,1231,1232,

      1253,1254,1255,1256,1257,       1275,1276,1277,1278,1279,1280,1281,1282,1283,

      1303,1304,1305,      1325,1326,1327,1328,1329,1330,1331,1332,1333,
                           1375,1376,1377,1378,1379,
];

var initialFilledCellsCount = filledCells.length;

console.log (initialFilledCellsCount);

var easterEggIndex = 624;

var fbText = document.querySelector(".fb");

fbText.style.color = "#3366ff";

var hints = ["breach date: 1 August 2019", "compromised data: dates of birth", "compromised data: email addresses", "compromised data: employers", "compromised data: genders", "compromised data: geographic locations", "compromised data: names", "compromised data: phone numbers", "compromised data: relationship statuses"];

var counter = 741570;

var box = document.querySelector(".box");
for (let index = 0; index < 1400; index++) {
  const element = document.createElement("div");
  element.classList.add("item");

  var hint = randomArrayItem(hints);
  if (filledCells.includes(index)) {
    var elementText = document.createElement("div");
    elementText.classList.add("item-text");
    console.log("preset innerHTML");
    elementText.innerHTML = "breached accounts: " + counter + " " + hint;
    element.appendChild(elementText);
  }

  element.addEventListener("click", function () {
    // если ячейка заполнена
    if (filledCells.includes(index)) {
      console.log(index);
      counter += 741570;
      var hint = randomArrayItem(hints);
      document.querySelectorAll(".item-text").forEach(function (itemText) {
        itemText.innerHTML = "breached accounts: " + counter + " " + hint;
      });
      // то заменить картинку на фоне ячейки
      if (index === easterEggIndex) {
        element.style.backgroundImage = "url(avatar_pawn_.svg)";
        document.querySelectorAll(".item-text").forEach(function (itemText) {
          itemText.innerHTML = "your data has been breached: date of birth, email address, employers, gender, geographic location, name, phone numbers, relationship status"
        });
      } else {
        element.style.backgroundImage = "url(blue_star.svg)";
      }

      // и удалить её индекс из массива индексов заполненных ячеек
      filledCells = filledCells.filter(function (cellIndex) {
        return cellIndex !== index;
      });
      fbText.style.opacity = filledCells.length / initialFilledCellsCount;
    }
    console.log(filledCells);
  });
  box.appendChild(element);
}

var cells = document.querySelectorAll(".item");
cells.forEach(function (cell, cellIndex) {
  if (filledCells.includes(cellIndex)) {
    var imageUrl = "url(facebook_tile.svg)";
    cell.style.backgroundImage = imageUrl;
  }
});