import React from "react";

class ScrollButton extends React.Component {
  
    
    render () {
        return (
            <div ref={this.props.myDiv}>
                <button title='Back to top' className='scroll' 
                onClick={this.props.scrollToTop}>
                <span className='arrow-up'>^</span>
                </button>
            </div>
        )
    }
}

export default ScrollButton;