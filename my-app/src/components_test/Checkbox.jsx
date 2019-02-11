import React, {Component} from 'react'

class Checkbox extends Component {
    render() {
        return(
            <input type="checkbox" checked={this.props.checked} ref="checkbox" onChange={() => {
                this.props.updateData(this.refs.checkbox.checked)
            }}/>
        )
    }
}

export default Checkbox