const puan = Number(prompt("Lütfen Notunuzu Giriniz : "))
if(0 <= puan <= 26) {
    console.log("FF")
}else if(26 <= puan <= 42) {
    console.log("DD")
}else if(46 <= puan <= 65) {
    console.log("CC")
}else if(66 <= puan <= 75) {
    console.log("BB")
}else if(76 <= puan <= 90) {
    console.log("BA")
}else if(91 <= puan <= 100) {
    console.log("AA")
}else {
    console.log("Yanlış Değer Girdiniz")
}

const puan = Number(prompt("Lütfen Notunuzu Giriniz : "))
if(puan <= 25) {
    console.log("FF")
}else if(puan <= 42) {
    console.log("DD")
}else if(puan <= 65) {
    console.log("CC")
}else if(puan <= 75) {
    console.log("BB")
}else if(puan <= 90) {
    console.log("BA")
}else if(puan <= 100) {
    console.log("AA")
}else {
    console.log("Yanlış Değer Girdiniz")
}

const myFunc = (value1, value2) => {
    return value1 - value2
}