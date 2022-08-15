
// Switch ifadesi;
// . Bir değişkenin değerini birden çok değerle karşılaştırmak ve eşleşmeye dayalı olarak bazı ifadeleri yürütmek için kullanılır
// 🎗️ İpuçları: 
// 
// break ifadesi isteğe bağlıdır. Break deyimiyle karşılaşılırsa, switch deyimi sona erer.
// Break ifadesi kullanılmazsa, eşleşen vakadan sonraki vakalar da yürütülür.
// Varsayılan yan tümce de isteğe bağlıdır

// 🎗️ İpuçları: 

// 
// 🎗️//
// let day = 2;
// let dayName;
// switch (day) {
//   case 1:
    // dayName = 'Monday';
    // break;
//   case 2:
    // dayName = 'Tuesday';
    // break;
//   case 3:
    // dayName = 'Wednesday';
    // break;
//   case 4:
    // dayName = 'Thursday';
    // break;
//   case 5:
    // dayName = 'Friday';
    // break;
//   case 6:
    // dayName = 'Saturday';
    // break;
//   case 7:
    // dayName = 'Sunday';
    // break;
//   default:
    // dayName = 'Invalid day';
// }
// console.log(dayName); // Tuesday


// bu örnekde day i 2 olarak deger verilmiş bu iki aşağıdaki hangi blockdaysa onu bulup  onun altındaki yazıyı yazdırır.
// yani burada let day =2 let dayName ile aşağıdaki blocklardan 2 değerine sahip olanını bul değeri neyse dayName e ona ata sonucu yazdır diyoruz


// 🎗️//
// (===) Bu ifade kullanıldıgımda yapılan iki karışılantırma türüde kendiside aynı olması gerekiyor.
// let a = 3;
// switch (a) {
//   case "3":
    // a = 33;
    // break;
//   case 2:
    // a = 'two';
    // break;
//   case 3:
    // a = 'three';
    // break;
//   default:
    // a = 'not found';
    // break;
// }
// console.log(`The value is ${a}`);


