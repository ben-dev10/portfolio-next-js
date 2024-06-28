import { useEffect } from 'react';

const usePageVisibility = () => {
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = "Come back!";
            } else {
                document.title = "Welcome back!";
                setTimeout(() => {
                    document.title = "Original Title";
                }, 3000);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);
};

export default usePageVisibility;