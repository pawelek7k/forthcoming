import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const updateMatches = () => setMatches(media.matches);

        updateMatches();
        media.addEventListener("change", updateMatches);

        return () => media.removeEventListener("change", updateMatches);
    }, [query]);

    return matches;
};

export default useMediaQuery;
