import { useEffect,useState } from 'react'
import Child from './Child'

const Brother = ({money,start}) => {
    const [brotherMoney, setBrotherMoney] = useState(money)
    let now = Date.now()
    const increaseMoney = () => {
        setBrotherMoney(brotherMoney + 1);
      };
    
      useEffect(() => {
        const interval = setInterval(() => increaseMoney(), 1000);
        return () => clearInterval(interval);
      }, [now-start]);
  return (
    <>
        Brother's Money: {brotherMoney}
        <Child inheritedMoney={brotherMoney/2}/>
        <Child inheritedMoney={brotherMoney/2}/>
    </>
  )
}

export default Brother