'use strict';
const linkedList = require('./linked-list');
const doubleLinkedList = require('./dll');

// function reverseList(list){
//   //base case
//   if(list.head === null || list.next === null) {
//     console.log(list.head);
//     return list.head;
//   }
//   //recursive case
//   let current = list.head;
//   current.next.next = current;
//   current.next = null;
//   return current.head;
// }

function reverseList(list){
  let currNode = list.head;
  let next = null;
  let prev = null;
  while(currNode){
    next = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = next;
  }
  list.head = prev;
  return list.display();
}



function thirdFromEnd(list){
  if((list.head === null)||(list.head.next  === null)){
    return 'Not enough items in list';
  }
  let currNode = list.head;
  while(currNode.next.next.next !==null){
    currNode = currNode.next;
  }
  return currNode.value;
}

function middleOfList(list){
  let slowNode = list.head;
  let fastNode = list.head;
  while(fastNode!==null&&fastNode.next!==null)
  {
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;
  }
  return slowNode.value;
}

function cycleList(list){
  let slowNode = list.head;
  let fastNode = list.head;
  while(slowNode && fastNode && fastNode.next){
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    if(slowNode === fastNode){
      return true;
    }
  }
  return false;
}

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

  
  // let answer = SLL.display();
  // console.log(answer);
  // let count = SLL.size();
  // console.log(count);

  //const answer3 = SLL.findPrevious('Apollo');
  //console.log(answer3);
  
  //const answer4 = SLL.findLast();
  //console.log(answer4);
  
  //Mystery Program
  //Loops thru each item in a linked list to check that item
  //against every other item to make sure there aren't any duplicates
  //TL;DR: gets rid of duplicates

  const SLL2 = new linkedList();
  SLL2.insertFirst('1');
  SLL2.insertLast('2');
  SLL2.insertLast('3');
  SLL2.insertLast('4');
  SLL2.insertLast('5');
  SLL2.insertLast('6');
  console.log(SLL2.display());
  const answer5 = reverseList(SLL2);
  console.log(answer5);
  const answer6 = thirdFromEnd(SLL2);
  console.log(answer6);
  const answer7 = middleOfList(SLL2);
  console.log(answer7);

  const SLL3 = new linkedList();
  SLL3.insertFirst('3');
  SLL3.insertLast('4');
  SLL3.insertLast('5');
  SLL3.insertLast('6');
  SLL3.insertCycle('Test');
  SLL3.insertFirst('1');
  SLL3.insertFirst('2');
  //console.log(SLL3.display());
  //const answer8 = cycleList(SLL3);
  //console.log(answer8);


}

function mainDLL(){
  const DLL = new doubleLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  DLL.insertLast('Tauron');
  DLL.remove('Picon');
  DLL.reverse();
  console.log(DLL.display());
}

mainDLL();

//main();