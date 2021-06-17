import client from "./config.ts";

interface Book {
    id? :number;
    make: string;
    model: string;
    year: number;
};

async function addBook(book: Book){
    // const newBook = de.queryBuilder().insert([book]).into("books").toString();
    return  await client.execute(`INSERT INTO users(name) values(`+[book]+`)`, [
        "manyuanrong",
      ]);
}

async function getAllBooksModel(){
    return await client.query(`select * from books`);
}

async function getBookModel(id:number) {
    return await client.query(`select * from books where id=`+id);
}
export {
    addBook, 
    getAllBooksModel,
    getBookModel
}