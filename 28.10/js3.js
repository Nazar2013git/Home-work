function Book(title, author, pages, isRead) {
  this.title = title;  
  this.author = author;  
  this.pages = pages;  
  this.isRead = isRead;  


  this.readBook = function() {
    console.log(`Сіз ${this.title} кітабын ${this.author} жазған оқып жатырсыз.`);
  };


  this.toggleReadStatus = function() {
    this.isRead = !this.isRead;
    console.log(`Оқу күйі жаңартылды: ${this.isRead}.`);
  };
}

let book1 = new Book("Жас түлек", "Мұхтар Әуезов", 320, false);


book1.readBook();  
book1.toggleReadStatus();  
book1.toggleReadStatus();