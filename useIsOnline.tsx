import { useEffect, useState } from 'react';

/**
 * @description Функция для определения подключения к сети
 * @returns {boolean} isOnline
 */
const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        if (
            typeof window !== 'undefined' &&
            'ononline' in window &&
            'onoffline' in window
        ) {
            setIsOnline(window.navigator.onLine);
            if (!window.ononline) {
                window.addEventListener('online', () => {
                    setIsOnline(true);
                });
            }
            if (!window.onoffline) {
                window.addEventListener('offline', () => {
                    setIsOnline(false);
                });
            }
        }
    }, []);
    return isOnline;
};

export default useIsOnline;
