"use strict";
// повернення типу
// const x = (str:string): number|string =>{
//     return 17
// }
// Повернення пустоти
// const x = (str:string): void =>{
// }
//
// interface IUser <T>{
//     name:string,
//     age:number,
//     status:boolean,
//     data: T
// }
// interface IDog {
//     name: string,
//     age: number
//
// }
//
// // const user: Partial<IUser> = {status:true}
// //
// // console.log(user.name)
// const user:IUser<IDog> = {age:18, name:'max', status: false, data:[{name:'rex', age:2}]}
exports.__esModule = true;
// class User{
//     constructor(public id: number, protected name: string, private age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }
// //
// // const user = new User(id:15, name:'Max', age:15);
// // console.log(user.id);
//
// interface IShapeAction{
//     area:()=>number,
//     perimeter:()=> number
// }
//
// interface IGreaeting{
//     hello:()=>void
// }
// class Rectangle implements IShapeAction, IGreaeting{
//     constructor(private a: number, private b: number) {
//     }
//     area(): number {
//         return this.a*this.b;
//     }
//
//     hello(): void {
//         console.log("Hello")
//     }
//
//     perimeter(): number {
//         return this.a*2+this.b*2
//     }
//
// }
//
// const rectangle = new Rectangle(5,10);
// console.log(rectangle.area());
//
// class Triangle implements IShapeAction{
//     constructor(private a: number, private b:number, private c:number) {
//     }
//     area(): number {
//         return this.a*this.b*this.c;
//     }
//
//     perimeter(): number {
//         return this.c*2/this.b;
//     }
//
// }
// const shapes:IShapeAction[] = [new Rectangle(2,5), new Triangle(1,2,3)]
//
// for(let shape of shapes){
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }
// const asd=()=>{
//     return 18
// }
//
// type MyFuncType= ReturnType<typeof asd>
// const a:MyFuncType = 15
// import {userService} from "./services";
//
// userService.getAll().then(value =>console.log(value.data[0].username))
var services_1 = require("./services");
services_1.userService.getById(2).then(function (_a) {
    var data = _a.data;
    return console.log(data.address.city);
});
