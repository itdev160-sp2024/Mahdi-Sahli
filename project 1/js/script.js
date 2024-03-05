
const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', details: 'A classic novel set in the American South during the 1930s.' },
    { title: '1984', author: 'George Orwell', details: 'Dystopian novel depicting a totalitarian society and its impact on an individual.' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', details: 'A story of the Roaring Twenties, love, and the American Dream.' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', details: 'A romantic novel exploring themes of love, class, and societal expectations.' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', details: 'Fantasy adventure novel that follows the journey of Bilbo Baggins.' },
    { title: 'To the Lighthouse', author: 'Virginia Woolf', details: 'Modernist novel exploring the complexity of human relationships and perception of time.' },
    { title: 'Brave New World', author: 'Aldous Huxley', details: 'Dystopian novel envisioning a future society controlled by technology and conditioning.' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', details: 'A coming-of-age novel that explores the challenges of adolescence.' },
    { title: 'Frankenstein', author: 'Mary Shelley', details: 'Gothic novel telling the story of Victor Frankenstein and his monstrous creation.' },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', details: 'Magical realist novel tracing the Buendía family over seven generations.' },
];



const bookList = document.getElementById('book-list');
books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author}`;
    li.addEventListener('click', () => showBookDetails(book));
    bookList.appendChild(li);
});


function showBookDetails(book) {
    const detailsDiv = document.getElementById('book-details');
    detailsDiv.innerHTML = `<h2>${book.title}</h2><p>${book.details}</p>`;
    detailsDiv.style.display = 'block';
}
