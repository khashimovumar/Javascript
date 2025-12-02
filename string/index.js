//  ============== String ==========

// Stringni ifodalash 3 xil bo'ladi '',"" `${name}`

// 1 - String yasalsih => let title = 'webbrain
// 2 - Cunstructor string => newString()

// Oddit str bilan constructor str tenglikga tekshirilaganda ikki xil malumot qaytaradi

// Taqqoslash

// let str = 'webbrain'
// console.log(str === "webbrain");

// let str1 = new String()

// console.log(str1 === 'webbrain');
// console.log(typeof new String());


// Constructor Strinni  str malumot bilan taqqoslaganda /false qyatardi
// sababi Constructor str => obj

// localCompare() => 0,1,-1 qytaradi => 0 - mos, 1-qisman mos, -1 - mosemas

// String => Innyuteble => str malumtni index bo'yicha o'zgartira olamaymiz
// Srtnig malumotlariga eccess qi;sih ussulari
// 1 - [] index bo'yicaha


// Strings and Methods;
// Mernstack
// Mernstack

// ·
// Follow

// 3 min read
// ·
// Nov 20, 2022



// Javascriptda matnli malumot turlari string deyiladi.

// let name = “Asadbek”;

// stringlarni shu ko’rinishda yozamiz ;

// let name = Asadbek

// bu tartibda yozish hato hisoblanadi yani bunda brauzer Asadbek nomli o’zgaruvchini qidiradi .

// Demak stringlarni chaqirish uchun “ ” yoki ‘ ’ foydalanar ekanmiz.

// let name = “Asadbek”

// consloe.log(name); // Asadbek

// let name = ‘Asadbek’

// console.log(name); // Asadbek;

// javascript dasturlash tilida 2talik tirnoqlar va 1talik tirnoqlarda ummuman farq yo’q .

// Va yana bir usul bu `` backticklar orqali

// let name =` Asadbek

// orqa tirnoqlar asosan bir xil. Biroq, backticklar har qanday ifodani satrga o’rash orqali kiritishimizga imkon beradi ${…}:

// function sum(a, b) {
//   return a + b;
// }
// alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
// Backticklardan foydalanishning yana bir afzalligi shundaki, ular qatorni bir nechta satrlarni qamrab olish imkonini beradi:

// let guestList = `Guests:
//  * Men
//  * va Yana men
//  * bunisi ham Men
// `;
// alert(guestList);//
// Natija bunday//
// Men
// va Yana men
// bunisi ham Men
// String methodlari;


// string methods
// String ning uzunligini length yoradmida topiladi.

// let str = “Lesson”

// console.log(str.length); // 6

// Stringning bir qismini ajaratib olish uchun :
// slice(start, end)
// substring(start, end)
// substr(start, length)
// shu methodlardan foydalanamiz.


let str = 'Jhon'

str.split("")
console.log(str);
const num = 2

const strToNum =
  console.log(number);



// let name = “Asadbek”

// console.log(name.slice(1, 3) ;// sa natija chiqadi.

// Substring methodi;
// let name = “Asadbek”

// console.log(name.substring(2, 4)); // ad //natija chiqadi

// qizig’i shundaki substringda 1 -parametr 2-parametrdan katta bo’lsa u ortga hisoblaydi.

// let name = “Asadbek”

// console.log(name.substring(5, 4)); // b //natija chiqadi

// bu yerda 5 — indexda e harfi turibdi

// 5-dan 4 -indexgacha

// 4-indexda esa b turibdi natija b chiqadi.

// substr() methodi esa 1 -param uzunligi 2-param uzunligdan ortib ketsa kesib tashlaydi.

// let name = “Asadbek”

// console.log(name.substring(5, 4)); // ek //natija chiqadi

// bunda 5-indexda e turibdi

// 5-indexdan buyog’ini olib beradi yani ek ni

// String tarkibini almashtirish;
// let fruits = “apple orange limon”

// console.log(fruits.replace(“orange”, “banana”)); /// natija/// apple banana limon

// replace() methodi orqali biz stringlarni almasthirishimz mumkin.

// toUpperCase() methodi hamma stringlarni katta bilan yozadi .

// toLowerCase() methodi hammasini bosh harf bilan yozadi.

// alert( ‘Interface’.toUpperCase() ); // INTERFACE

// alert( ‘Interface’.toLowerCase() ); // interface

// concat() methodi bu bir nechta stringlarni birlashtirib beradi.

// let text1 = “Hello”;
// let text2 = “World!”;
// let text3 = text1.concat(“ “,text2);

// console.log(text3) // Hello World // natija chiqadi

// JavaScript String trim()
// Usul trim()satrning ikkala tomonidagi bo'shliqni olib tashlaydi:

// let text1 = “ Hello World! “;

// let text2 = text1.trim();

// console.log(text2); // HelloWorld

// trimstart() methodi bu boshidan bo’sh joyni olib tashlaydi

// trimend() methodi bu oxiridan bo’sh joyni olib tashlaydi.

// JavaScript String padStart()
// Usul padStart()satrni boshqa satr bilan to'ldiradi:

// let satr = “5”

// console.log(satr.padStart(5 , “7”)); // 77775 natija chiqadi.

// bu yerda 5 -idexgacha 7 sonini qoyib beradi,

// String belgilarini ajratib olish
// Satr belgilarini ajratib olishning 3 ta usuli mavjud:

// charAt(position)
// charCodeAt(position)
// let str = “hello”

// console.log(str.charAt(0)); // h qaytadi

// charAt()satrdagi belgilangan indeks (pozitsiya)dagi belgini qaytaradi:

// Usul charCodeAt()satrda belgilangan indeksdagi belgining unikodini qaytaradi:

// Usul UTF-16 kodini qaytaradi (0 dan 65535 gacha bo’lgan butun son).

// Stringni massivga aylantirish

// split()Satrni quyidagi usul bilan massivga aylantirish mumkin :

// let str = “hello”

// console.log(str.split()) ; // [‘hello’] natija chqadi
