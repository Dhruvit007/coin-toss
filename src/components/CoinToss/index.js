import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {head: 0, tails: 0, total: 0, isHead: true}

  getTossResult = () => {
    const tossResult = Math.floor(Math.random() * 2)
    return tossResult
  }

  tossCoin = () => {
    const result = this.getTossResult()
    if (result === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        head: prevState.head + 1,
        isHead: true,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        isHead: false,
      }))
    }
  }

  render() {
    const {total, head, tails, isHead} = this.state
    const imgUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="container">
        <div className="contain-container">
          <div className="coin-game-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="head-tail">Heads (or) Tails</p>
            <img src={imgUrl} className="image" alt="toss result" />
            <div>
              <button onClick={this.tossCoin} className="btn" type="button">
                Toss Coin
              </button>
            </div>
            <div className="counter-container">
              <p>Total:{total}</p>
              <p>Heads:{head}</p>
              <p>Tails:{tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
