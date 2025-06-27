import React, { useEffect, useState } from 'react';

export default function useMenu() {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch('http://localhost:3000/menu');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMenu(data);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();

        // Cleanup function (optional, for future use)
        return () => {
            setMenu([]);
            setLoading(true);
            setError(null);
        };
    }, []);

    return [menu, loading, error];
}
