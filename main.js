// local Storage
// setItem
// const age = 22;
// localStorage.setItem('name', 'Saidafzal')
// localStorage.setItem('age', age)

//getItem

// const age1= localStorage.getItem('age')
// console.log(age1)

//clear

// localStorage.clear()


// const cars = ["bmw", "audi", "bentley", "bugatti"];

// localStorage.setItem('cars',JSON.stringify(cars));


// const getName = JSON.parse(localStorage.getItem('cars'));

// console.log(getName);

// localStorage.clear()

// const names = ["vali", "ali", "gani", "begi"];
// const setNames = localStorage.setItem('names',JSON.stringify(names))

// const getNames = JSON.parse(localStorage.getItem('names'));
// console.log(typeof getNames);


// const names = JSON.parse(localStorage.getItem('names'))
// ? JSON.parse(localStorage.getItem('names'))
// : [];

// if(names.length > 0){
//     names.forEach((name)=>{
//         console.log(name)
//     })
// }
// else{
//     console.log("hech qanday ism yo'q")
// }


// const setName = localStorage.setItem("names", JSON.stringify(names));
// console.log(typeof setName)
// const getName = JSON.parse(localStorage.getItem('names'))
// setName ? getName  : [];

// if(names.length > 0){
//     names.forEach((name)=>{
//         console.log(name)
//     })
// }else{
//     console.log('hech qanday ism yoq')
// }


//setTimeout & setInteval

// console.log("hello world!")

//setTimeout

// setTimeout(function, time)

// setTimeout(()=>{console.log("Hello Saidafzal")},3000);


// setInterval(()=>{console.log('bye bye')},2000)

// let a = 0;
// const timerInt = setInterval(()=>{
//     a++ 
//     console.log(a)
// },10)
// setTimeout(()=>{clearInterval(timerInt)},1000)

//Destructuring

// const [olma, gilos , ...restFruits] = ['olma🍎', 'cherry', 'banana🍌', 'kiwi🥝', 'ananas🍇'];
// console.log(restFruits)

// const {name, age:yosh, job, from= 'USA'} = {
//     name:'said',
//     age:22,
//     job:'engineer'
// }

// console.log(name, yosh, job, from)


// const now =  (new Date());
// const today = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
// const month = now.getMonth() <  10 ? '0' + now.getMonth(): now.getMonth();
// const year  = now.getFullYear();
// const hour = now.getHours()< 10 ? '0' + now.getHours() : now.getHours();;
// const minute = now.getMinutes()< 10 ? '0' + now.getMinutes() : now.getMinutes();;
// const second = now.getSeconds()< 10 ? '0' + now.getSeconds() : now.getSeconds();;
// console.log(today, month, year, `${hour} : ${minute} : ${second}`);