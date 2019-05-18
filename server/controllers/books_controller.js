var books = []
var id = 0



module.exports = {
    read: (request, response) =>{
        response.status(200).send(books)
    },
    create: (request, response) => {
        const {title, author} = request.body;
        let book = {
            id: id, 
            title: title,
            author: author
        }
        books.push(book);
        id++
// show this in response          
        response.status(200).send(books);
    },
    update: (request, response) => { 
 //find book by it's ID         
        let index = null;
        books.forEach((book, i) => {
            if (book.id === Number(request.params.id)) index = i;
        });
 //then do this:         
        books[index] = {
            id: books[index].id,
            title: request.body.title || books[index].title,
            author: request.body.author || books[index].author
        };
  // show this in response      
        response.status(200).send(books)
    },
    delete: (request,response) => {
//find book by it's ID        
        let index = null
        books.forEach((book, i) => {
            if (book.id === Number(request.params.id)) index = i;
        });   
//then do this:              
        books.splice(index, 1);
// show this in response          
        res.status(200).send(books);
    }
}

