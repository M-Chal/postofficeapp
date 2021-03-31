import {useState} from 'react';

function useToggle(initialVal = false){
    const [value, setValue] = useState(initialVal);

    const toggleVal = () => {
        setValue(!value);
    }
    return [value, toggleVal]
}

export default useToggle;