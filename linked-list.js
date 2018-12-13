'use strict';
class linkedList {
  
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      } 
      tempNode.next = new _Node(item,null);
    }
  }

  insertBefore(item,key){
    //if empty
    if(this.head===null){
      this.insertFirst(item);
    }
    //if head
    if(this.head.value === key){
      this.insertFirst(item);
    }
    //if middle
    let currNode = this.head;
    let previousNode = this.head;
    while((currNode.next!==null)&&(currNode.value!==key)){
      previousNode = currNode;
      currNode = currNode.next;
    }
    previousNode.next = new _Node(item,currNode);
  }

  insertCycle(value){
    if(this.head === null){
      this.insertFirst(value);
    } else {
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      } 
      tempNode.next = new _Node(value,this.head);
    }
  }

  insertAfter(item,key){
    let currNode = this.head;
    let nextNode;
    while((currNode.next!==null)&&(currNode.value!==key)){
      currNode = currNode.next;
    }
    if(currNode.next){
      nextNode = currNode.next;
      currNode.next = new _Node(item,nextNode);
    } else {
      console.log('Key not found');
    }
    
  }

  insertAt(item,index){
    let currNode = this.head;
    let previousNode = this.head;
    let nodeAtIndex;
    let count = 0;
    while((currNode.next!==null)&&(count<index)){
      previousNode = currNode;
      currNode = currNode.next;
      count++;
    }
    previousNode.next = new _Node(item,currNode);
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

  remove(item){
    if(!this.head){
      return null;
    }
    //if head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while((currNode!==null)&&(currNode.value !==item)){
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found!');
      return;
    }
    previousNode.next = currNode.next;
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

  size(){
    if(!this.head){
      return 0;
    }
    let count = 1;
    let currNode = this.head;
    while(currNode.next!==null){
      count++;
      currNode = currNode.next;
    }
    return count;
  }

  isEmpty(){
    if(this.head){
      return false;
    } else {
      return true;
    }
  }

  findPrevious(item){
    if(this.head.value === item){
      return 'No previous item';
    }
    let currNode = this.head;
    let previousNode = this.head;
    while((currNode.next!==null)&&(currNode.value!==item)){
      previousNode = currNode;
      currNode = currNode.next;
    }
    return previousNode.value;
  }

  findLast(){
    if(!this.head){
      return 'Linked List has no values';
    }
    let currNode = this.head;
    while(currNode.next!==null){
      currNode = currNode.next;
    }
    return currNode.value;
  }

  // reverse() {
  //   if (this.head === null || this.head.next === null) {
  //     return 'cannot reverse list';
  //   }
  //   let first = this.head;
  //   let rest = new linkedList(this.head.next);
  //   rest.reverse();
  //   first.next.next = first;
  //   first.next = null;
  // }
  

}

class _Node{
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}



module.exports = linkedList;