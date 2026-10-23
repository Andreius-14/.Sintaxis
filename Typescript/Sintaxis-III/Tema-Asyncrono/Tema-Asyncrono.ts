//          ╭─────────────────────────────────────────────────────────╮
//          │                        Promesas                         │
//          ╰─────────────────────────────────────────────────────────╯


(async () => {

  function delay(time: number) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }
  console.log('---'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);

})();


(async () => {

  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('string');
      }, time);
    });
    return promise;
  }
  console.log('---'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);

})();
