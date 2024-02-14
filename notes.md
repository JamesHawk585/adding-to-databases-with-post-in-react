Nuggets of Wisdom: 
1. useEffect() can only return one value: a callback function that runs when the compnent dismounts. 
    - When the component that the useEffect is running in unmounts, the unmount can include a functiont that runs on dismount. 
    - Without dependency array, useEffect runs in an infinite loop. 