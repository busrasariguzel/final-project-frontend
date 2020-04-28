import React, {Component} from 'react'
import Typical from 'react-typical'

class Animation extends Component {

  render () {
    return (
      <div >
      <Typical style={{height:'50%'}}
        steps={['Be Safe!', 1000, 'Stay Home!', 1000, 'Thank you healthcare heroes!' , 3000]}
        loop={Infinity}
        wrapper="p"
      />
      </div>
    )
  }
}


export default Animation
