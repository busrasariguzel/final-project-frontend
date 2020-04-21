import React, {Component} from 'react'
import Typical from 'react-typical'

class Animation extends Component {
  render () {
    return (
      <Typical
        steps={["Welcome to Busra's Dashboard ", 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}

export default Animation
