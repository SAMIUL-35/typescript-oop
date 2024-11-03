class animal{
  constructor( public name:string,public species:string,public sound:string)
  {

  }
  makesound()
  {
    console.log(`the ${this.sound}`);
  }
}

const dog=new animal('dog','sa','moe');
dog.makesound()