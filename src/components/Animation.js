import React, {Component} from 'react'
import Typical from 'react-typical'

class Animation extends Component {



  render () {
    return (
      <div >
      <Typical style={{height:'50%'}}
        steps={['Be Safe', 1000, 'Stay Home!', 500]}
        loop={Infinity}
        wrapper="p"
      />
      </div>
    )
  }
}
//   render () {
//     return (
//       <Typical
//       style={{fontSize:'800px'}}
//         steps={["Welcome to Busra's Dashboard ", 1000, 'Enjoy my app!', 500]}
//         loop={Infinity}
//         wrapper="p"
        
//       />
//     )
//   }
// }

export default Animation
