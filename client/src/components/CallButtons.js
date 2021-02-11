import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {showLendForm, showAddForm} from '../actions/ui';

 const CallButtons = ({showAddForm, showLendForm, ui:{formAction}}) =>  {
    return (
        // Add toggle event to buttons so they might hide/show forms onClick
        <div className="call-buttons-container content-card-out pos-flex">
            <div className="line">
            <button onClick={showAddForm}  className="pos-flex-split"><span>&#43;</span></button>
            </div>
            <div>
            <button onClick={showLendForm} className="pos-flex-split"><span>&minus;</span></button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    ui: state.ui
})

export default connect(mapStateToProps, {showAddForm, showLendForm})(CallButtons);