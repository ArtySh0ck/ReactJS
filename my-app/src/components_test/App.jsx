import React, {Component} from 'react'
import Article from './Article'
import Checkbox from './Checkbox'
import articles from '../fixtures'


class App extends Component {
    state = {
        isOpen: false
    }

    render() {
        return( 
            <div>
                <h2>Test App</h2>
                <br></br>
                <Checkbox updateData={this.updateData} checked={this.state.isOpen}/>
                {this.state.isOpen ? 'Check to Hide' : 'Check to Show'}
                {this.state.isOpen && <Article article={articles[4]} updateData={this.updateData} />}
                
            </div>
        )
    }

    updateData = (isChecked) => {
        this.setState({isOpen: isChecked})
    }

}

export default App