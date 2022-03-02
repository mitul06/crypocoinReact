import { CRYPO_COINS, CRYPO_COINS_FAILED, CRYPO_COINS_SUCCESS } from "../actions/crypoTypes";
import { call, put, takeLatest } from "redux-saga/effects"
import getCryptoCoins from "../../api/getCrypo";

export default function* crypoSaga(){
    yield takeLatest(CRYPO_COINS, workerSaga)
}


function* workerSaga(action){
    try {
        const response = yield call(getCryptoCoins, action.payload)

        console.log(response.status, "response in saga")
        if (response.status === 200) {
            yield put({type: CRYPO_COINS_SUCCESS, payload: response.data.data})
        }else{
            yield put({type: CRYPO_COINS_FAILED, payload: response.data})
        }


    } catch (error) {
        console.log(error)
    }
}