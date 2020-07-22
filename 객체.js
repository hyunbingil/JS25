const dog = {
    name:'멍뭉이',
    age:'두쨜'
};

console.log(dog.name);

//객체 선언할떄 {키:원하는값}

const cat = {
    name:'야옹이',
    sound:'미야옹',
    age:'4'
};

function print(animal){
    const text = '${animal.name}(${animal.name})크크루삥뽕인${animal.age}'
 console.log(text);   
}
print(dog);

function print(animal){
    const {sound, name, age} = animal;
    const text = '${sound}(${name})ㅋㅋ${age}';
    console.log(text);
}

print(cat);