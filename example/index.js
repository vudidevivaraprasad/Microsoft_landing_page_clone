function opp(name,number) {
    this.fullname = name;
    let predefined_name = 'mani';
    this.no = number;
    this.sum = function() {
        console.log('oop sum')
    }
}

class prasad {
    constructor(name,number) {
        this.name = name;
        this.number = number;
    }
    sum() {
        console.log('prasad sum')
    }
    get getname() {
        return this.name;
    }
    set name_in(new_name) {
        this.name = new_name;
    }
    static print(fname = 'prasad') {
        console.log(fname);
    }
}

opp.prototype= Object.create(prasad.prototype);
let o = new opp('prasad',564); 