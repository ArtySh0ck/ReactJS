import React, {Component} from 'react'

class Article extends Component {
    render() {
        return(
            <div>
                <p>{this.props.article.text}</p>
                <button ref="button" onClick={() => {
                    this.props.updateData(false)
                }}>Hide this</button>
            </div>
        )
    }
}

export default Article