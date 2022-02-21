const escola = "Lunas";

console.log(escola.charAt(3));
console.log(escola.charAt(4));
console.log(escola.charCodeAt(3)); //valor na tabela AscII
console.log(escola.indexOf('L'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!");
console.log(escola.replace(3, 'e'));

console.log('Ana, Maria, Pedro'.split(','));