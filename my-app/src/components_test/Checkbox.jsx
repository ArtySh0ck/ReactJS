import React, {Component} from 'react'

class Checkbox extends Component {
    
  
    checkboxChange = (event) => {
        this.props.updateData(event.target.checked)
    }

    render() {
        return(
            <input type="checkbox" checked={this.props.checked} onChange={this.checkboxChange}/>
        )
        
    }

}

export default Checkbox