import React from 'react'
import ReactDOM from 'react-dom'
// class MainIndex extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <h1>这是首页</h1>
//         )
//     }
// }
const MainIndex = () => {
    return(
        <h1>Hello World</h1>
    )
}
ReactDOM.render(<MainIndex/>, document.getElementById('app'))