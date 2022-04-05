import axios from 'axios'
import CryptoJS from "crypto-js"

export default async function fetchAPIData(searchQuery) {
    let uri = ""
    searchQuery? uri = `https://gateway.marvel.com//v1/public/characters?nameStartsWith=${searchQuery}&limit=20` : uri = `https://gateway.marvel.com//v1/public/characters?limit=20`
    const PRIV_KEY = process.env.REACT_APP_MARVEL_PRIV_KEY;
    const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY; 
    let ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

    return await axios.get(uri, { params: { apikey: PUBLIC_KEY, ts: ts, hash: hash } }).then(response => response.data).catch((err) => console.error(err)) 
}