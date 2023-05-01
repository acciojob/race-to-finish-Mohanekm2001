

 const promises = [
      new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), Math.floor(Math.random() * 5000) + 1000)),
      new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), Math.floor(Math.random() * 5000) + 1000)),
      new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), Math.floor(Math.random() * 5000) + 1000)),
      new Promise((resolve) => setTimeout(() => resolve('Promise 4 resolved'), Math.floor(Math.random() * 5000) + 1000)),
      new Promise((resolve) => setTimeout(() => resolve('Promise 5 resolved'), Math.floor(Math.random() * 5000) + 1000)),
    ];

    Promise.any(promises)
      .then((result) => {
        document.getElementById('output').textContent = result;
      })
      .catch((error) => {
        console.error(error);
      });
