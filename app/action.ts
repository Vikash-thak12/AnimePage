'use server'

export const fetchAnime = async () => {
    const response = await fetch(`https://shikimori.one/api/animes?page=1&limit=8&order=popularity`);
    const data = await response.json();
    console.log("Data are:", data)
    return data;

}