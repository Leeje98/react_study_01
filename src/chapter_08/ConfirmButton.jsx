// import React, { Component } from 'react'

// export default class ConfirmButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isConfirmed: false,
//     }

//   }

//   handleConfirm = () => {
//     this.setState((prevState) => ({
//         isConfirmed: !prevState.isConfirmed,
//     }))
//   }

//   render() {
//     return (
//       <button
//         onClick={this.handleConfirm}
//         disabled={this.state.isConfirmed}
//         >
//           {this.state.isConfirmed ? '확인됨' : '확인하기'}
//         </button>
//     )
//   }
// }   // class형


import React, { useState } from 'react'

export default function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed)
  }

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
        {isConfirmed ? '확인됨' : '확인하기'}
    </button>
  )
}

// hook 형

