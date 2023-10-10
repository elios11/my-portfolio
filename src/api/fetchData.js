export default async function fetchData(endpath) {
    const SERVER_URI = import.meta.env.VITE_SERVER_URI;

    try {
        const response = await fetch(SERVER_URI + endpath);

        if (!response.ok) {
            throw new Error("Could not fetch the portfolio data");
        }
        const data = await response.json();

        return data;
    } catch (e) {
        return { error: e };
    }
}
