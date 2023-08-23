setImmediate(() => {
  console.log('Был диван,');
});

setTimeout(() => {
  console.log('Выйди вон!');
}, 100);

setImmediate(() => {
  console.log('На диване');
});

setTimeout(() => {
  console.log('Чемодан,');
});

setTimeout(() => {
  console.log('Кто не верит –');
}, 10);

setImmediate(() => {
  console.log('Ехал слон.');
});

setTimeout(() => {
  console.log('В чемодане');
}, 0);

console.log('Плыл по морю');