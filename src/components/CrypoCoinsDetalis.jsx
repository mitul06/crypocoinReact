import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cryptoAction from '../redux/actions/cryptoAction'
import './crypto.css'

const CrypoCoinsDetalis = () => {
  const dispatch = useDispatch()

  const cryptoState = useSelector(state => state)
  console.log(cryptoState.data)

  useEffect(async () => {
    dispatch(cryptoAction.fetchCrypoCoins())
  }, [])

  return (
    <>
      <div className='coin-container'>
          <hr />
        <table className='table'>
          <thead>
            <tr>
                <th></th>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Price</th>
              <th scope='col'>24h%</th>
              <th scope='col'>7d%</th>
              <th scope='col'>Market Cap</th>
              <th scope='col'>Valume(24h)</th>
              <th scope='col'>Circulating Supply</th>
            </tr>
          </thead>
          <tbody>
          {cryptoState.data?.map((coin, index) => {
            return (
              
                <tr>
                    <td>&#9734;</td>
                  <td scope='row'>{index + 1}</td>
                  <td>{coin.name}</td>
                  <td>${coin.quote.USD.price}</td>
                  <td>{coin.quote.USD.percent_change_24h.toFixed(2)}%</td>
                  <td>{coin.quote.USD.percent_change_7d.toFixed(2)}%</td>
                  <td>${coin.quote.USD.market_cap}</td>
                  <td>${coin.quote.USD.volume_24h}</td>
                  <td>{coin.circulating_supply}&nbsp;{coin.symbol}</td>
                </tr>
            )
        })}
        </tbody>
        </table>
      </div>
    </>
  )
}

export default CrypoCoinsDetalis
