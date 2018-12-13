'use strict';
class doubleLinkedList{

  constructor(){
    this.head = null;
    this.tail = null;
  }

  //insertFirst, insertLast, insertBefore, insertAfter
  //insertAt, remove, and find
  

  add(item){
    let node = new _DLL_Node(item);
    if(!this.head){
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertFirst(item){
    let node = new _DLL_Node(item);
    if(this.head){
      node.next = this.head;
      this.head.prev = node;
    }
    if(!this.tail){
      this.tail = node;
    }
    this.head = node;
  }

  insertLast(item){
    let node = new _DLL_Node(item);
    if(this.tail){
      node.prev = this.tail;
      this.tail.next = node;
    }
    if(!this.head){
      this.head = node;
    }
    this.tail = node;
  }

  insertBefore(item, key){
    //if empty
    if(this.head === null){
      this.insertFirst(item);
      return;
    }
    //if head
    if(this.head.value === key){
      this.insertFirst(item);
      return;
    }
    //if middle
    let currNode = this.head;
    let previousNode = this.head;
    while(currNode.next!==null&&(currNode.value!==key)){
      previousNode = currNode;
      currNode = currNode.next;
    }

    let newNode = new _DLL_Node(item);
    newNode.prev = previousNode;
    newNode.next = currNode;
    previousNode.next = newNode;
    currNode.prev = newNode;
  }

  insertAfter(item, key){
    let currNode = this.head;
    let nextNode;
    let nextnextNode;
    while((currNode.next!==null)&&(currNode.value!==key)){
      currNode = currNode.next;
    }
    let node = new _DLL_Node(item);
    if(currNode.next){
      nextNode = currNode.next;
      currNode.next = node;
      nextNode.prev = node;
      node.prev = currNode;
      node.next = nextNode;
    } else {
      this.insertLast(item);
    }
  }

  insertAt(item,index){
    if(index === 0){
      this.insertFirst(item);
    }
    let currNode = this.head;
    let prevNode;
    let nodeAtIndex;
    let count=0;
    while((currNode.next!==null)&&(count<index)){
      prevNode = currNode;
      currNode = currNode.next;
      count++;
    }
    this.insertBefore(item,currNode.value);
  }

  remove(item){
    if(!this.head){
      return;
    }
    //if head
    if(this.head.value === item){
      this.head = this.head.next;
      this.head.prev = null;
      return;
    }
    //if tail
    if(this.tail.value === item){
      this.tail = this.tail.prev;
      this.tail.next = null;
      return;
    }
    let currNode = this.head;
    let prevNode;
    while((currNode!==null)&&(currNode.value!==item)){
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found!');
      return;
    }
    prevNode.next=currNode.next;
    currNode.next.prev=prevNode;
  }

  find(item){
    let currNode = this.head;
    if(!this.head){
      return null;
    }
    while(currNode.value !== item){
      if(currNode.next === null){
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  display(){
    if(!this.head){
      return null;
    }
    let output = [];
    let currNode = this.head;
    output.push(currNode.value);
    while(currNode.next!==null){
      currNode = currNode.next;
      output.push(currNode.value);
    }
    return output;
  }


  reverse(){
    if(this.head === null){
      return null;
    }

    let currNode = this.head;
    this.tail = currNode;

    while(currNode!==null){
      let prev = currNode.prev;
      currNode.prev = currNode.next;
      currNode.next = prev;
      if(currNode.prev){
        currNode = currNode.prev;
      } else {
        this.head = currNode;
        break;
      }
    }
  }

}

class _DLL_Node{
  constructor(value){
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

module.exports = doubleLinkedList;