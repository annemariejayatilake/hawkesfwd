import React from 'react' ;

export default class Header extends React.Component {
render(){
    return (
        <div className="container">
            <div className="row">
                 <div className="col">
                        {this.props.dynamicTitle}
                </div>
                <div className="col">
                         Column
                </div>
            </div>
        </div>
    )
}
}


