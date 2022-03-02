import { CRYPO_COINS, CRYPO_COINS_FAILED, CRYPO_COINS_SUCCESS } from "./crypoTypes"

const fetchCrypoCoins = (payload) => {
    return {
        type: CRYPO_COINS,
        payload: payload
    }
}

const fetchCrypoCoinsSuccesss = () => {
    return {
        type: CRYPO_COINS_SUCCESS,
    }
}

const fetchCrypoCoinsFailed = () => {
    return {
        type: CRYPO_COINS_FAILED,
    }
}


export default {
    fetchCrypoCoins,
    fetchCrypoCoinsSuccesss,
    fetchCrypoCoinsFailed
}

