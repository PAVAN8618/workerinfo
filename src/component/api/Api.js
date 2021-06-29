/// const API_KEY = "0I6j64MXGiOPJBKWa5rZB4eO8RR2";

export const getMatches = async () => {
    const url= 'https://cricapi.com/api/matches/?apikey=0I6j64MXGiOPJBKWa5rZB4eO8RR2';
    let resData

    await fetch(url)
    .then((response) => response.json())
    .then((data)=>{resData=data}).catch((error) => console.log("ERROR :", error));

    return resData

};
