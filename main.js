let array = [1, 2, 3];
let y = (... args) => {
    return array.map((value, index) => value+args[index]);
};

y(2,4,5)