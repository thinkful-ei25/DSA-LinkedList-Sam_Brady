'use strict';
const linkedList = require('./linked-list');



function main(){

  const SLL = new linkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');
  //SLL.remove('squirrel');

  SLL.insertBefore('Athena','Boomer');
  SLL.insertAfter('Hotdog','Helo');
  SLL.insertAt('Kat',2);
  SLL.remove('Tauhida');
  let answer = SLL.display();
  console.log(answer);

}

main();