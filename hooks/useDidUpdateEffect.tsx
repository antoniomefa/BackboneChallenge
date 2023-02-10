import { useEffect, useRef } from 'react';

// Custom hook que permite evitar se ejecute un efecto en el primer render del componente
const useDidUpdateEffect = (effect: Function, dependencies: any) => {
    const didMountRef = useRef(false);
  
    useEffect(() => {
      if (didMountRef.current) { 
        return effect();
      }
      didMountRef.current = true;
    }, dependencies);
  }

  export default useDidUpdateEffect