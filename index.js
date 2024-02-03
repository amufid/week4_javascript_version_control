/*
Buatlah 100 nilai random (1 sampai 50) pada 1 array
- Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan
nilai baru pada array
- Gunakan 2 array yang telah dibuat untuk mendapatkan
- Min
- Max
- Total
- Rata rata
- Bandingkan kedua buah array, contoh
- Min lebih besar array genap
- Max lebih besar array ganjil
- Total memiliki nilai sama antara array genap dan ganjil
- Rata rata lebih besar array ganjil
Output dari aplikasi:
- Array dengan jumlah index 100
- Array genap dengan jumlah index 50
- Array ganjil dengan jumlah index 50
- Min, Max, Total, Rata rata pada setiap array (genap dan ganjil)
- Perbandingan nilai min, max, total dan rata rata
*/

// nilai random
function random() {
       let array = []
       let lengthArray = 200
       for (let i = 0; i < lengthArray; i++) {
              let nilaiAcak = Math.floor(Math.random() * 50) + 1
              if (nilaiAcak <= 50) {
                     array.push(nilaiAcak)
              }
       }
       return array
}
let randomArray = random()

function array() {
       let array = []
       let count = 0
       for (let s of randomArray) {
              if (randomArray[s] < 100 && count < 100) {
                     array.push(randomArray[s])
                     count++
              }
              if (count === 100) {
                     break
              }
       }
       return array
}
let nilaiArray = array(randomArray)
console.log('Array random :', nilaiArray)
console.log('Panjang array :', nilaiArray.length)

// memilah genap
function getGenap(randomArray) {
       let genap = []
       let count = 0
       for (let x of randomArray) {
              if (x % 2 == 0 && count < 50) {
                     genap.push(x)
                     count++
              }
              if (count === 50) {
                     break
              }
       }
       return genap
}
//ubah nama function
let genap = getGenap(randomArray); // randomArray dari function nilai random
console.log("Bilangan genap : ", genap);
console.log("Bilangan genap panjang : ", genap.length);

// array ganjil
function getGanjil(randomArray) {
       let ganjil = []
       let count = 0
       for (let x of randomArray) {
              if (x % 2 == 1 && count < 50) {
                     ganjil.push(x)
                     count++
              }
              if (count === 50) {
                     break
              }
       }
       return ganjil
}
let ganjil = getGanjil(randomArray)
console.log("Bilangan ganjil : ", ganjil)
console.log("Bilangan ganjil panjang : ", ganjil.length)

// min array genap
function minGenap(genap) {
       let min = genap[0]
       for (let x = 0; x < genap.length; x++) {
              if (genap[x] < min) {
                     min = genap[x]
              }
       }
       return min
}
let minimGenap = minGenap(genap)
console.log(`Min genap : ${minimGenap}`)

// min array ganjil
function minGanjil(ganjil) {
       let min = ganjil[0]
       for (let x = 0; x < ganjil.length; x++) {
              if (ganjil[x] < min) {
                     min = ganjil[x]
              }
       }
       return min
}
let minimGanjil = minGanjil(ganjil)
console.log(`Min ganjil : ${minimGanjil}`)

// max genap 
function maxGenap(genap) {
       let max = genap[0]
       for (let i = 0; i < genap.length; i++) {
              if (genap[i] > max) {
                     max = genap[i]
              }
       }
       return max
}
let maxiGenap = maxGenap(genap)
console.log(`Max genap : ${maxiGenap}`)

// max ganjil
function maxGanjil(ganjil) {
       let max = ganjil[0]
       for (let k = 0; k < ganjil.length; k++) {
              if (ganjil[i] > max) {
                     max = ganjil[i]
              }
       }
       return max
}
let maxiGanjil = maxGenap(ganjil)
console.log(`Max ganjil : ${maxiGanjil}`)

// total genap
function totalGenap(genap) {
       let totalGen = 0;
       for (let i = 0; i < genap.length; i++) {
              totalGen += genap[i];
       }
       return totalGen;
}
let totGenap = totalGenap(genap);
console.log(`Total genap : ${totGenap}`);

// total ganjil
function totalGanjil(ganjil) {
       let jumlah = 0;
       for (let m = 0; m < ganjil.length; m++) {
              jumlah += ganjil[m];
       }
       return jumlah;
}
let totGanjil = totalGanjil(ganjil);
console.log(`Total ganjil : ${totGanjil}`);

// rata-rata genap 
function averageGenap(genap) {
       let rataGen = 0
       rataGen = totGenap / genap.length
       return rataGen
}
let rataGenap = averageGenap(genap)
console.log(`Rata-rata genap : ${rataGenap}`)

// rata-rata ganjil 
function averageGanjil(ganjil) {
       let rataGan = 0
       rataGan = totGanjil / ganjil.length
       return rataGan
}
let rataGanjil = averageGanjil(ganjil)
console.log(`Rata-rata ganjil : ${rataGanjil}`)

// bandingkan nilai min 
let compareMin =
       minimGanjil == minimGenap
              ? "Min memiliki nilai yang sama"
              : minimGanjil > minimGenap
                     ? "Min terbesar adalah array ganjil"
                     : "Min terbesar adalah array genap";
console.log('Perbandingan nilai :')
console.log(compareMin)

// bandingkan nilai max 
let compareMax =
       maxiGanjil == maxiGenap
              ? "Max memiliki nilai yang sama"
              : maxiGanjil > maxiGenap
                     ? "Max terbesar adalah array ganjil"
                     : "Max terbesar adalah array genap";
console.log(compareMax)

// bandingkan nilai total 
const compareTotal = function () {
       if (totGanjil === totGenap) {
              return ("Total memiliki nilai yang sama")
       } else if (totGanjil > totGenap) {
              return ("Total terbesar adalah array ganjil")
       } else {
              return ("Total terbesar adalah array genap")
       }
}
console.log(compareTotal())

// bandingkan nilai rata-rata
const compareAverage = function () {
       if (rataGanjil === rataGenap) {
              return ("Rata-rata memiliki nilai yang sama")
       } else if (rataGanjil > rataGenap) {
              return ("Rata-rata terbesar adalah array ganjil")
       } else {
              return ("Rata-rata terbesar adalah array genap")
       }
}
console.log(compareAverage())
