for(var i=1;i<=5;i++){
    for(var j=1;j<=5;j++){
    console.log("i,j",i,j)
}
}
// loopp mai hoga ye ki phele i mai jayega fir j main jake pura j khtm karega i =1 hi rehega uske bad fir se i=-2 pr ayega fir j=1,2,3,4,5 print jhoga then the cycle goes on fir i =3 hoga then j mai sari values print hogi till both becomes 5,5//

for(var i=1;i<=5;i++){
    for(var j=1;j<=i;j++){
    console.log("i,j",i,j)
}
}

// jab tak i =1 hai fir j mai jayega to vo i ke equal hai to 1 tak hi jayega fir i=2 hoga to jai mai j=1 aur 2 dono print honge like 11,21,22 aise 
//  agaar j mai condition na de to infinite loop chalega 

for(var i=1;i<=5;i++){   // hume patterns print karne hai { # } aise kuch pattern print karne hai 
                             // to kya code hona chiye//   ##//                       

    for(var j=1;j<=i;j++){
    console.log()
}
}
// upar vala for loop coloum mai pritn karne ke liye hota hai 
// neeche vala for lopp row mai print karne ke liye hota hai 

for(var i=1;i<=5;i++){
    let string = ''
    for(var j=1;j<=i;j++){
  string=string+'#';
} console.log(string)
}
// ismai pattern banegi row mai jitna i hoga uthne hash ayenge
for(var i=1;i<=5;i++){
    let string = ''
    for(var j=1;j<=i;j++){
  string=string+j;
} console.log(string)
}
// ismai string+j  kiya hai to 
//1
//12
//123
//1234
// aise print hoga
// kyuki j vala jo loop hai vo cheeze row mai print karta hai.


for(var i=1;i<=5;i++){
  let string = ''
  for(var j=1;j<=i;j++){
string=string+i;
} console.log(string)
}

// ismai string+i hai to 
//1
//22
//333
//4444 
//aise print hoga 
//kyuki i vala jo loop hai vo chezze coloum mai print karta hai.
//
let numRows = 4;
    let pattern_5 = '';
    for (let i = 1; i <= numRows; i++) {
        for(space=1;space<=numRows;space++){
            pattern_5+=' '
        }
        for (let j = 1; j <= i; j++) {
            pattern_5+= "#";
        }
        pattern_5+="\n";
        
    }
    console.log(pattern_5);
//

//
    for(var i=1;i<=5;i++){
      let string = ''
      for(var j=1;j<=i-1;j++){
    string=string+j;
  } console.log(string)
  }
//

  // to print the numbers reverse //
  for (var i = 1; i <= n; i++) {
    var line = '';  // Initialize an empty string to build each line
    
    // Build the line by appending numbers in reverse
    for (var j = i; j >= 1; j--) {
        line += j;  // Append the current number to the line
    }
    
    // Print the constructed line
    console.log(line);
}
//


//
for (let i = 5; i >= 1; i--) {
  let line = '';

  
  for (let j = 1; j <= i; j++) {
      line += '#';
  }


  console.log(line);
}
//
 
// triangle//

for (let i=1; i<=5;i++) {
  let line = '';
}
for (let j=1;j<=i;i++){

  line+='';
}
for (let j = 1; j <= 2 * i - 1; j++) {
  line += '#';
}
console.log(line)


// to print A BB CCC DDDD //
  for (var i=0; i<4;i++ ){
    const letter= String.fromCharCode(65 + i);
let pattern='';
for (j=0;j<=i;j++){
pattern +=letter;
}
console.log(pattern);
}

//

//
for(var i=0;i<=5;i++){
  let string = ''
  for(var j=0;j<=i;j++){
  const letter= String.fromCharCode(65+j);
string=string+letter;
} console.log(string)
}
// to print A AB ABC ABCD//

//
for(var i=1;i<=5;i++){
  let string = ''
  for(var j=1;j<=i-1;j++){
    const letter= String.fromCharCode(65+j);
string=string+letter;
} console.log(string)
}


//
// Number of lines to print
var n = 4;

// ASCII code for 'A'
var startCode = 'A'.charCodeAt(0);

for (var i = 0; i < n; i++) {
    var line = '';  // Initialize an empty string to build each line
    var currentCode = startCode + i;  // Determine the starting character for this line

    // Build the line by appending characters in reverse order
    for (var j = 0; j <= i; j++) {
        line += String.fromCharCode(currentCode - j);  // Append the current character to the line
    }

    // Print the constructed line
    console.log(line);
}
//
for( var i=0; i<=5;i++){
  let string='';
  for(var j=0;)
}
