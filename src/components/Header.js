import React from 'react';


function Header() {
    const divStyle = {
        color: 'white',
        textAlign: 'center',
        fontSize: '30px'
    }

    return (
        <div className="header" style={divStyle}>
            Garrett Kegel
            <div>Portfolio Page</div>
        </div>
    );
}

export default Header;
