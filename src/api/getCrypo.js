import axios from "axios";

const getCryptoCoins = async () => {
  try {
    let qs = `?start=1&limit=100&convert=USD`;
    let header = {
      "X-CMC_PRO_API_KEY": "fe5c13f8-5168-48a3-9479-447df7149b24",
    };

    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest" +
        qs,
      { headers: header }
    );

    return response

  } catch (error) {
    console.log(error);
    return error
  }
};

export default getCryptoCoins;
