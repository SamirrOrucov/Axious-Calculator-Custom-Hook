import React, { useState } from "react";
function useCounter(val = 0) {
  const [count, setCount] = useState(val);
//   const[local,setLocal]=us([])
  const pars=
  function localStrg() {
        
  }
  function increaseCounter() {
    setCount(count + 1);
    // setLocal(count)
    localStorage.setItem
  }
  function decreaseCounter() {
    setCount(count - 1);
    setLocal(count)

  }
  return [count,local, increaseCounter, decreaseCounter];
}
export default useCounter;
