let range = {
    from: 1,
    to: 10,
    
    //Below the symbol iterator is an inbuilt method that allolwa us to use the next inbuilt function to iterate through ranges using for loop
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    
    next() {
        if(this.current <= this.to)
            {return {done: false, value: this.current ++};}
        else{ return {done: true};}
    }
}

for(let num of range){
    console.log(num);
}