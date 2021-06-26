function randomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  var imgArray = [];
    
  for (var i = 0; i < 20; i++) {
    var imgNumber = i + 1 >= 10 ? i + 1 : "0" + (i + 1);
    var imgPath = "tiles/tiles-" + imgNumber + ".jpg";
    imgArray.push(imgPath);
  }
  
  var filledCells_9 = [
    1037,
    1036,
    1035,
    1034,
    988,
    989,
    940,
    890,
    839,
    838,
    888,
    938,
    939,
    889,
    987,
    986,
    985,
    984,
    983,
    982,
    932,
    931,
    930,
    879,
    829,
    778,
    728,
    677,
    627,
    578,
    528,
    479,
    480,
    530,
    529,
    579,
    629,
    679,
    730,
    729,
    678,
    628,
    780,
    779,
    781,
    832,
    883,
    882,
    881,
    880,
    830,
    831,
    934,
    935,
    937,
    936,
    933
  ];
  
  var initialFilledCells_9_Count = filledCells_9.length;
  
  console.log (initialFilledCells_9_Count);
  
  var easterEggIndex_9 = 778;
  
  var  sprashivaiText = document.querySelector(".sprashivai");
  
  sprashivaiText.style.color = "#333366";
  
  var hints_9 = ["breach date: 11 May 2015", "compromised data: dates of birth", "compromised data: email addresses", "compromised data: geographic locations", "compromised data:  IP addresses", "compromised data: passwords", "compromised data: spoken languages"];
  
  var counter_9 =  62049;
  
  var box_9 = document.querySelector(".box_9");
  for (let index = 0; index < 1400; index++) {
    const element = document.createElement("div");
    element.classList.add("item_9");
  
    var hint_9 = randomArrayItem(hints_9);
    if (filledCells_9.includes(index)) {
      var elementText_9 = document.createElement("div");
      elementText_9.classList.add("item-text_9");
      console.log("preset innerHTML");
      elementText_9.innerHTML = "breached accounts: " + counter_9;
      element.appendChild(elementText_9);
    }
  
    element.addEventListener("click", function () {
      // если ячейка заполнена
      if (filledCells_9.includes(index)) {
        console.log(index);
        counter_9+= 62049;
        var hint_9 = randomArrayItem(hints_9);
        document.querySelectorAll(".item-text_9").forEach(function (itemText) {
          itemText.innerHTML = "breached accounts: " + counter_9 + " " + hint_9;
        });
        // то заменить картинку на фоне ячейки
        if (index === easterEggIndex_9) {
          // element.style.backgroundImage = "none";
          element.style.backgroundImage = "url(avatar_pawn_.svg)";
          document.querySelectorAll(".item-text_9").forEach(function (itemText) {
            itemText.innerHTML = "your data has been breached: date of birth, email address, geographic location, IP address,  password, spoken languages"
          });
        } else {
          element.style.backgroundImage = "url(darkblue_star.svg)";
        }
  
        // и удалить её индекс из массива индексов заполненных ячеек
        filledCells_9 = filledCells_9.filter(function (cellIndex) {
          return cellIndex !== index;
        });
        sprashivaiText.style.opacity = filledCells_9.length / initialFilledCells_9_Count;
      }
      console.log(filledCells_9);
    });
    box_9.appendChild(element);
  }
  
  var cells_9 = document.querySelectorAll(".item_9");
  cells_9.forEach(function (cell, cellIndex) {
    if (filledCells_9.includes(cellIndex)) {
      var imageUrl = "url(sprashivairu_tile.svg)";
      cell.style.backgroundImage = imageUrl;
    }
  });