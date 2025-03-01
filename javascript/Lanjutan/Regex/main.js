/* Regex */
/* 
  trivia:
  - Regex adalah singkatan dari Regular Expression
  - Regex adalah sebuah pola yang digunakan untuk mencocokan kombinasi karakter dalam sebuah string
  Example:
  const polaTest = /test/; -> polaTest adalah regex yang akan mencocokan kata 'test' dalam sebuah string
  typeof polaTest; // object
*/

/* Function */
/* 
  - test() -> untuk mencocokan pola regex pada sebuah string
  - exec() -> untuk mencocokan pola regex pada sebuah string dan mengembalikan informasi terkait hasil pencocokan
  Example:
  const polaTest = /test/;
  polaTest.test('ini adalah test'); // true
  polaTest.exec('ini adalah test'); // ["test", index: 8, input: "ini adalah test", groups: undefined]
  'ini adalah test'.match(polaTest); // ["test", index: 8, input: "ini adalah test", groups: undefined]
  'ini adalah test'.search(polaTest); // 8
  'ini adalah test'.replace(polaTest, 'tes'); // 'ini adalah tes'
*/

/* Pola Regex */
/* 
  let arrayTelephone = ['6286368698390', '+6289538493480', '98797090879', '+87986986969'];
  let arrayFilm = ['Avenger End Game (2018)', 'Lilo & Stitch (2002)', 'The Lion King (1994)', 'The Lion King (2019)'];
  let polaTelephoneIndonesia = /^(\+62|62)/;
  let polaFilmByTahun = /\(\d{4}\)$/;
  arrayTelephone.map(telephone => {
    console.log(polaTelephoneIndonesia.test(telephone));
  });
  arrayTelephone.filter(number => {
    return polaTelephoneIndonesia.test(number);
  });
  arrayFilm.map(film => {
    console.log(polaFilmByTahun.test(film));
  });
  arrayFilm.filter(film => {
    return polaFilmByTahun.test(film);
  });
*/

/* Flag Regex */
/* 
  - i -> case-insensitive
  - g -> global
  - m -> multiline
  Example:
  const polaTest = /test/g;
  const polaTest1 = /test/gi;
  const polaTest2 = /test/gm;
  'ini adalah test dan ini juga merupakan test'.match(polaTest); // ["test"]
  'ini adalah test dan ini juga merupakan test'.replace(polaTest, 'tes'); // 'ini adalah tes dan ini juga merupakan tes'
  'ini adalah Test dan ini juga merupakan test'.match(polaTest1); // ["Test", "test"]
  'ini adalah Test dan ini juga merupakan test'.replace(polaTest1, 'tes'); // 'ini adalah tes dan ini juga merupakan tes'
*/

/* Cheat Sheet REGEX */
/* 
  - \d -> digit
  - \D -> non-digit
  - \w -> word character
  - \W -> non-word character
  - \s -> whitespace
  - \S -> non-whitespace
  - . -> any character
  - ^ -> start of string
  - $ -> end of string
  - [] -> range of characters
  - | -> or
  - () -> group
  - ? -> zero or one
  - * -> zero or more
  - + -> one or more
  - {n} -> exactly n
  - {n,} -> n or more
  - {n,m} -> n to m
  - [^] -> not
  - \b -> word boundary
  - \B -> non-word boundary
  - (?=) -> positive lookahead
  - (?!) -> negative lookahead
  - (?<=) -> positive lookbehind
  - (?<!) -> negative lookbehind
  - \1 -> backreference
*/
