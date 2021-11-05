
class Uber {
    
     constructor (rpk,td) {              //rpk = rate per km ; //td = total distance

this.rpk=rpk;
this.td=td;
    }

get Cost() {
        return this.rpk*this.td;
    }
}
    const uber1 = new Uber(8,30)


console.log(`Total cost for this ride is : ${uber1.Cost}`);


