function palin(str) {
var word = str.split(' ');
console.log(word);
word = str.split(' ').join();
console.log(word);
//var strRe = word.split('').reverse().join('');
console.log(strRe);
 if(word === strRe) {
   console.log(true);
 }else {
   console.log(false);
 }
}
palin("a but tuba");
