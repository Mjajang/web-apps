/* 
  Example:
  console.log('Hello World!');
  console.error('This is an error message');
  console.warn('This is a warning message');
  console.info('This is an info message');
  console.table(['Apple', 'Banana', 'Cherry']);
  console.table([{name: 'Apple', count: 10}, {name: 'Banana', count: 20}, {name: 'Cherry', count: 30}]);
  console.group('Fruits');
  console.log('Apple');
  console.log('Banana');
  console.log('Cherry');
  console.groupEnd();
  console.group('Fruits');
  console.log('Apple');
  console.log('Banana');
  console.group('Cherry');
  console.log('Black Cherry');
  console.log('Red Cherry');
  console.groupEnd();
  console.groupEnd();

  // Formatting
  console.log('%cHello World!', 'color: blue; font-size: 20px;');
  console.log('ini adalah %d', 10, 'angka');
  console.log('ini adalah %s', 'sepuluh', 'angka');
  
  // Time and Count
  function test() {
    console.count('test() has been called');
  }
  test();
  test();
  test();
  console.countReset('test() has been called');
  test();
  function test2() {
    console.time('test2() took');
    Array(1000).fill().forEach(() => {});
    console.timeEnd('test2() took');
  }
  test2();


  // Clear console
  console.clear();
*/
