// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomDetails, updateBalance} = props
  const {value} = denomDetails

  const onChangeValue = () => {
    updateBalance(value)
  }

  return (
    <li className="denom-item">
      <button
        type="button"
        alt="button"
        className="value"
        onClick={onChangeValue}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
