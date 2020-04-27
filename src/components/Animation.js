import React, {Component} from 'react'
import Typical from 'react-typical'

class Animation extends Component {
  render () {
    return (
      <Typical
      style={{fontSize:'50px'}}
        steps={["Welcome to Busra's Dashboard ", 1000, 'Enjoy my app!', 500]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}

export default Animation
