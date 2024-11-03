class person{
  name:string;
  age:number;
  address:string;

  constructor(name:string,age:number,address:string){
    this.name=name;
    this.age=age;
    this.address=address;
  }
getsleep(hour:number){
  console.log(`This ${this.name} is sleep ${hour} `);
}
 

}

class Student extends person{
  

  constructor(name:string,age:number,address:string){
    super(name,age,address)
  }
  
 
 

}
class Teacher extends person{
  
  designation :string;

  constructor(name:string,age:number,address:string,designation:string){
    
    
    super(name,age,address)
    this.designation=designation;
  }
  

  hoursClass(hour:string)
  {
    console.log(`This techer${this.name} is sleep ${hour} `);
  }

 
 

}


const student=new Student('shami',20,'dhaka')
const a=student.getsleep(20)
console.log(a);