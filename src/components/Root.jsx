import { useEffect, useState } from 'react'
import Child from './Child'
const Root = ({money,start}) => {
    const [rootMoney, setRootMoney] = useState(money);
    let now = Date.now();

    const reduceMoney = () => {
        setRootMoney(rootMoney - 1);
      };
    
      useEffect(() => {
        const interval = setInterval(() => reduceMoney(), 1000);
        return () => clearInterval(interval);
      }, [now-start]);




  return (
    <div>
        Root Money:{rootMoney}$
        <Child inheritedMoney={rootMoney/2}/>
        <Child inheritedMoney={rootMoney/2}/>
    </div>
  )
}

export default Root