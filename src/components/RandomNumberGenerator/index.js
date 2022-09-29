import {Component} from 'react'
import './index.css'

class Random extends Component {
  state = {number: 0}

  getRandomNumber = () =>
    this.setState({
      number: Math.ceil(Math.random() * 101),
    })

  render() {
    const {number} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.getRandomNumber}
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default Random
