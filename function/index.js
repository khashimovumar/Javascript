

//  Function call - apply - bind => 'this' context ga qiymat biriktiradi
//  1- Call => asosiy malumotdan tashqari yana bir nechta parametr qabul qiladi




let student = [
  { id: 1, name: 'webb', last: 'academy', title: 'It Cenetr' },
  { id: 2, name: 'NT', last: 'academy', title: 'It Cenetr' },
  { id: 3, name: 'PDP', last: 'academy', title: 'It Cenetr' },
]


function getName(id) {
  if (this.name === id) return this.name + this.last
}

student.forEach(val => {
  let res = getName.bind(val, 1)
  console.log(res());
})
// function fullName(id) {
//   if (this.id === id) return this.name + this.last

// }


// student.forEach((val) => {
//   console.log(fullName.call(val, 1));
// })



// 2- Apply => 'call' dan farqi parametr yozilishida
// Apllyda asosiy parametrdan keyin qolgan paramlar '[]' ichida beriladi

// student.forEach((val) => {
//   console.log(fullName.apply(val, [1,2,3]));
// })


// 3 - Bind => bind function o'zgaruvchiga biriktiriladi => let res = fullName.bind(user,1,2,3)

// function fullName(id) {
//   if (this.id === id) return this.name + this.last

// }

// student.forEach((val) => {
//   let res = fullName.bind(val, 1)
//   console.log(res());
// })
