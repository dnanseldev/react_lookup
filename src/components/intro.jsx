import { useState } from "react";

export function Advices() {
    const [adv, setAdv] = useState('');

  const getAdvice = async () => {
    
    const res = await fetch('https:api.adviceslip.com/advice');
    const data = await res.json();
    console.log(data);

    const {
      slip: {id, advice}
    } = data;
    
    console.log(`ID: ${id}, Advice: ${advice}`);
    //or
    console.log(`${data.slip.advice}`);

    setAdv(advice);
  }

   return(
    <>
      <h1>Listen to Advices!</h1>
      <h1>{adv}</h1>
      <button onClick={getAdvice}>Get advice</button>
    </>
   );
}