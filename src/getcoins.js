import axios from "axios"
import displayCoins from "./displayCoins.js"

// export const getCoins = (query) => {
//     const url = `https://api.coinranking.com/v2/coins?search=${query}`;

//     const options = {
//         headers: {
//             "x-access-token": "coinrankingc9d0ec30fa56a7a1accde6e01132ac697809ee3f67251c18",
//         },
//     };

//     fetch(url, options)
//         .then((response) => response.json())
//         .then((result) => console.log(result));
// };\


//! Async-Await

// export const getCoins = async (query) => {
//     const url = `https://api.coinranking.com/v2/coins?search=${query}`;

//     const options = {
//         headers: {
//             "x-access-token": "coinrankingc9d0ec30fa56a7a1accde6e01132ac697809ee3f67251c18",
//         },
//     };

//     try {
//         const res = await fetch(url, options)
//         const coinData = await res.json()
//         console.log(coinData);
//     } catch (error) {
//         console.log(error);
//     }

// };


//! Axios

export const getCoins = async (query) => {
    const url = `https://api.coinranking.com/v2/coins?search=${query}`;

    const options = {
        headers: {
            "x-access-token": "coinrankingc9d0ec30fa56a7a1accde6e01132ac697809ee3f67251c18",
        },
    };

    try {
        const res = await axios(url, options)
        console.log(res.data);
        if (!res.data.data.coins.length) {
            alert("Coin not found!")
        } else {
            displayCoins(res.data.data.coins[0]);
        }
    } catch (error) {
        console.error(error);
    }

};

