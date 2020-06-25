function show(data) {
    console.log(data);
}

let array = [];
array.push({
    name: 'Andrew',
    sex: 'male',
    age: 21
});
array.push({
    name: 'Jane',
    sex: 'female',
    age: 26
});
array.push({
    name: 'Jenny',
    sex: 'female',
    age: 18
});
array.push({
    name: 'John',
    sex: 'male',
    age: 20
});
array.push({
    name: 'Marchmello',
    sex: 'male',
    age: 28
});
array.push({
    name: 'Marchmekllo',
    sex: 'male',
    age: 18
});

//console.log(array);

let result = array.filter(function (x) {
    return x.age <= 21 && x.sex == 'male'
});
show('result');
result.forEach(show);


let result2 = result.map(function (x) {
    x.yearsUnderAge = 21 - x.age;
    return x
});
show(result2);
result2.forEach(show);


function sortByAge(obj1, obj2) {
    let obj1Age = obj1.name.toLowerCase();
    let obj2Age = obj2.name.toLowerCase();

    if (obj1.age > obj2.age){
        return 1;
    } else if (obj1.age < obj2.age){
        return -1
    } else{
        if(obj1Name > obj2Name){
            return 1;
        } else if (obj1Name < obj2Name) {
            return -1;
        }
        return 0;
    }
}
result2.sort(sortByAge);
