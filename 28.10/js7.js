// 1-tapsirma
let people = [];

for (let i = 0; i < 3; i++) {
    let name = prompt("Адамның атын енгізіңіз:  " + i+1 + "-ші адам:  ");
    let age = parseInt(prompt(`Адамның жасын енгізіңіз (${i+1}-ші адам):`));
    

    people.push({ name: name, age: age });
}

people.forEach(person => {
    alert("Аты:  " + person.name, "Жасы:  " + person.age)});

// 2-tapsirma
let books = [
    { title: 'Кітап 1', author: 'Автор 1', year: 2000 },
    { title: 'Кітап 2', author: 'Автор 2', year: 2010 },
    { title: 'Кітап 3', author: 'Автор 3', year: 2015 }
];

let bookTitle = prompt('Кітап атауын енгізіңіз:');

let book = books.find(b => b.title === bookTitle);

if (book) {

    let newYear = prompt('Жылды жаңартыңыз:');
    book.year = parseInt(newYear);
}

books.forEach(b => {
    alert("Атауы:  " + b.title, "Автор:  " + b.author, "Жылы:  " + b.year);
}); 
// 3-tapsirma
let students = [
    { name: "Айдар", age: 20, grade: "A" },
    { name: "Айша", age: 22, grade: "B" },
    { name: "Нұрлан", age: 18, grade: "A" },
    { name: "Гүлназ", age: 21, grade: "C" },
    { name: "Рахат", age: 19, grade: "B" }
];

students.sort((a, b) => a.age - b.age);

alert("Ең жас студент: " + students[0].name + ", Жасы: " + students[0].age + ", Бағасы: " + students[0].grade);
alert("Ең үлкен студент: " + students[students.length - 1].name + ", Жасы: " + students[students.length - 1].age + ", Бағасы: " + students[students.length - 1].grade);