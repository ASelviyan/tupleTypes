//if you have a scenario where you need you need exactly X amount of values in an array 
//and you need know the type of each value use TUPLES instead of an array to give you more strictness in the code  

const person: {
    name: string;
    age: number;
    hobbies: string[];
    //the code below is a tuple; a tuple is a spacial construct
    // this code tells typescript that i want a special array with exactly two elements -->
    //in which the first element is a number and the second element is string 
    //role: (string | number)[]
    role: [number, string]
} = {
    name: "Angelika",
    age: 22,
    hobbies: ['Video games', 'Reading'],
    //ROLE is a key which is an array with exactly two elements
    role: [2, 'author']
}

//ERROR
//so doing something like this will break the code because the second element needs to be a string according to the tuple property
person.role[1] = 10 

//ERROR
//Usually the length of the tuple is enforced in situation like this 
person.role = []
 //and this 
 person.role = [0, 'admin', 'user']
 //however the push method is an exception
//so unfortunately typescript cant catch this error 
person.role.push('admin')


