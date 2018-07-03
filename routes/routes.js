var appRouter = function (app) {

  app.get("/", function (req, res) {
    res.status(200).send({ message: 'Welcome to our restful API' });
  });

  app.post("/books", function (req, res) {
    var column1 = req.body.column1;
    var column2 = req.body.column2;
    var column3 = req.body.column3;
    if (column3 != null){
      books = books.sort(sortMultiple(column1, column2, column3));
    } else if (column2 != null){
      books = books.sort(sortMultiple(column1, column2));
    } else if (column1) {
      books = books.sort(sortMultiple(column1));
    } 
    res.status(200).send(books);
  });
}

function Book(order, title, author, editionYear){
   this.order = order;
   this.title = title;
   this.author = author;
   this.editionYear = editionYear;
}

var book1 = new Book(1, "Java How to Program","Deitel & Deitel","2007");
var book2 = new Book(2, "Patterns of Enterprise Application Architecture","Martin Fowler","2002");
var book3 = new Book(3, "Head First Design Patterns","Elisabeth Freeman","2004");
var book4 = new Book(4, "Internet & World Wide Web: How to Program","Deitel & Deitel","2007");
var books = [book1, book2, book3, book4];

function sortMultiple() {
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0, res = 0, numOfProps = props.length;
        while(res === 0 && i < numOfProps) {
            res = uniqueSort(props[i])(obj1, obj2);
            i++;
        }
        return res;
    }
}
function uniqueSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

module.exports = appRouter;
