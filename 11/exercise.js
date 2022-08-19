// // What is the number after F in hexadecimal?

// function hex(num) {
//   if (num < 0){
//     num = 0*FFFFFFFF + num + 1;
//   }
//   return num.toString(16).toUppercase();
// }

// console.log(hex(27))





// function decimalToHexString(number)
// {
//   if (number < 0)
//   {
//     number = 0xFFFFFFFF + number + 1;
//   }

//   return number.toString(16).toUpperCase();
// }

// console.log(decimalToHexString(15));
// console.log(decimalToHexString(48.6));


function ascii_to_hex(str)
  {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }

console.log(ascii_to_hex('D'))


// function hexa(letter) {
//   let array = [];
//   for (let x = 0, y = letter.length; x < y; x++)
// }