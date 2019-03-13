import React from 'react'
class Buton extends React.Component{
    render()
    {
        return(
            <button onClick={this.props.click}>{this.props.disp}</button>
        );
    }
}

export default  Buton;