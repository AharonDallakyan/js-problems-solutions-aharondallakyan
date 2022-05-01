class Author{
    set setName(name){
        this.name = name;
    }
    get getName(){
        return this.name = name;
    }
    set setEmail(email){
        this.email = email;
    }
    get getEmail(){
        return this.getEmail = getEmail;
    }
    set setGender(gender){
        this.gender = gender;
    }
    get getGender(){
        return this.getGender = getGender;
    }



    myToString(val){
        let a = val.toString()
        console.log(a + ' type:' + typeof a)
    }
}
let author = new Author()
author.name = 'pushkin'
console.log(author.name)
let author1 = new Author()
author1.name = 'sevak'
console.log(author1.name)
author.myToString(5)
let author2 = new Author()
author2.name = 'raffi'
author2.emial = 'maili'
console.log(author2)

class Book{
    set setTitle(title){
        this.title = title;
    }
    get getTitle(){
        return this.title = title;
    }
    set setPrice(price){
        this.price = price;
    }
    get getPrice(){
        return this.price = price;
    }
    set setQuantity(quantity){
        this.quantity = quantity;
    }
    get getQuantity(){
        return this.quantity = quantity;
    }
    set setAuthor(author){
        this.author = author;
    }
    get getAuthor(){
        return this.author = new Author();
    }
    myToString(val){
        let a = val.toString()
        console.log(a + ' type:' + typeof a)
    }
    getProfit(price,quantity){
        return this.price * this.quantity
    }

}
let book1 = new Book();
book1.price = 1000;
book1.quantity=5;
console.log(book1);
let myProfit = book1.getProfit(book1.price,book1.quantity)
console.log(myProfit)




let book2 = new Book();
book2.price = 100;
book2.quantity=3;
console.log(book1);
let myProfit2 = book2.getProfit(book2.price,book2.quantity)
console.log(myProfit2)
