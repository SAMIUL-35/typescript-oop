
type s=string |number
 

const add=(param1:s,param2:s):s=>{

  if(typeof param1==='number' && typeof param2==='number')
  {
    return param1 + param2;
  }
  else return param1.toString()+param2.toString()

}

// const result=add(2,3)
const result=add('2','s')
console.log(result);

type normaluser={
  name:string;
}
type Adminuser={
  name:string;
  role:'Admin';
}

const checkuser=(user:normaluser|Adminuser)=>{

  if('role' in user){
    console.log(`${user.role}`);
  }
  else console.log('normal');

}
const NormalUser:normaluser={
  name:'admin',
  

}
checkuser(NormalUser)