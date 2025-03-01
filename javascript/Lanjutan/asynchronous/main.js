/* Concurrency */

/* Interval and Timeout */
/* 
let currentSecond = 0;
setInterval(() => {
  currentSecond++;
  console.log('Hello World', currentSecond);
  if (currentSecond === 5) {
    clearInterval();
  }
  clearInterval();
}, 1000);

setTimeout(() => {
  console.log('Hello World');
}, 1000);
*/

/* Promise */
/* 
  promise.then((value) => {
    
  }).catch((error) => {
    
  }).finally(() => {
    
  });

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World');
    })
  });
*/

/* Fetch */
/* 
  fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.log(error);
    });


    const getData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
        });
        const json = await response.json(); // if we don't use await, it will return promise. that term is race condition
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };

    getData();

    -> the promise.all() is used to run multiple promises at the same time
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
      }),
      fetch('https://jsonplaceholder.typicode.com/todos/2', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
      }),
    ])
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((jsons) => {
        console.log(jsons);
      })
    })


    -> the old way is using XHR or XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    xhr.onload = () => {
      console.log(xhr.response);
    };
    xhr.send();
*/
