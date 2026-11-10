class MediaItem{
    constructor(title, year, genre){
        this.title = title;
        this.year = year;
        this.genre = genre;
    }
    getSummary(){
        return `${this.title} (${this.year}) - ${this.genre}`;
    }
}

class Book extends MediaItem{
    constructor(title, author, year, genre, pageCount){
        super(title, year, genre);
        this.author = author;
        this.pageCount = pageCount;
    }

    getSummary(){
        return `Book: '${this.title}' by ${this.author}, ${this.pageCount} pages`;
    }
}

class Movie extends MediaItem{
    constructor(title, director, year, genre, durationMinutes){
        super(title, year, genre);
        this.director = director;
        this.durationMinutes = durationMinutes;
    }
    getSummary(){
         return `Movie: '${this.title}' directed by ${this.director}, ${this.durationMinutes} min`;
    }
}

class Library{
    constructor(){
        this.items = [];
    }
    addItem(item){
        this.items.push(item);
    }
    search(term){
        return this.items.filter(item=>{
           return item.title.toLowerCase().includes(term.toLowerCase());
        });
    }
    listByGenre(genre){
        return this.items.filter(item=>{
            return item.genre.toLowerCase() === genre.toLowerCase();
      });
    }
}


class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        this.balance+= amount;
    }

    withdraw(amount){
        if(this.balance - amount <0)
            throw (bad);
         this.balance-= amount;
    }
}

class Bank{
    constructor(){
        this.accounts = [];
    }
    addAccount(account){
        this.accounts.push(account);
    }

    transfer(fromName, toName, amount){
        
    }

    showBalances(){

    }
}
