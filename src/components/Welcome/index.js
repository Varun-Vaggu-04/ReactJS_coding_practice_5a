// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  onButtonClicked = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState({text: 'Subscribed'})
    } else if (text === 'Subscribed') {
      this.setState({text: 'Subscribe'})
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.onButtonClicked}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
