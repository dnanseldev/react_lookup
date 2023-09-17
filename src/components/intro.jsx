import { useEffect, useState } from "react";


export function Message(props) {
    return(
        <p>
            You have read <strong>{props.count}</strong> pieces of advices.
        </p>
    );
}

export function Advices() {
    const [adv, setAdv] = useState('');
    const [count, setCount] = useState(0);

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
    setCount(c => c + 1);
  }

  useEffect(() => {
    getAdvice();
  },[]);

   return(
    <>
      <h1>Listen to Advices!</h1>
      <h1>{adv}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </>
   );
}