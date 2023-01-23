// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {currentBalance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({
      currentBalance: prevState.currentBalance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {currentBalance} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="user-container">
            <div className="user-profile">
              <p className="user-initial">S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>

          <div className="current-balance">
            <p className="balance-text">Your Balance</p>
            <p className="balance">
              {currentBalance} <br />
              <span className=" rupees">In Rupees</span>
            </p>
          </div>

          <p className="withdraw">WithDraw</p>
          <p className="in-rupees">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination">
            {denominationsList.map(eachDenom => (
              <DenominationItem
                denomDetails={eachDenom}
                key={eachDenom.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
