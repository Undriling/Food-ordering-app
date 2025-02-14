import { useState, useEffect } from 'react';
import {fetchMenu_API} from './constants';

const useRestroMenu = (resId) => {
    const [restroInfo, setRestroInfo] = useState(null);

    useEffect (() => {
        fetchMenu()
    });

    const fetchMenu = async () => {
        const data = await fetch(fetchMenu_API+resId)
        const json = await data.json();
        
        setRestroInfo(json.data)
    }

    return restroInfo;
}

export default useRestroMenu;