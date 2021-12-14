import React from 'react';
import picture1 from '../images/eigenvalueLogo2.jpg';
import picture2 from '../images/markowitzPic.png';
import picture3 from '../images/stockcallerPic.png';
import picture4 from '../images/mellifluous.png';
import picture5 from '../images/passwordGenPic.png';
import Contact from '../components/Contact';

export default function Page0() {
    const pageStyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'

    };

    const divStyle1 = {
        color: 'blue',
        backgroundColor: 'black',
        display: 'flex',
        width: '70%',
        height: '100%',
        fontSize: '70px',
        border: '10px green solid',
        margin: '20px',
        borderRadius: '50px'
    };
    const divStyle2 = {
        color: 'white',
        backgroundColor: 'black',
        display: 'flex',
        width: '65%',
        borderRadius: '40px',
        fontSize: '20px',
        border: '10px black solid',
        margin: '30px'
    };
    const divStyle3 = {
        color: 'white',
        backgroundColor: 'green',
        display: 'flex',
        width: '65%',
        borderRadius: '40px',
        fontSize: '20px',
        border: '10px green solid',
        margin: '20px'
    };
    const profileStyle = {
       width: '65%',
       border: '10px black solid'

    }


    return (<div className="home-page" style={pageStyle}>

        <img src={picture1} alt="" style={profileStyle} />

        <div className="info" style={pageStyle}>
            <div className="block-1" style={divStyle3}>
               
                I graduated from the University of California, Davis with a Bachelor of Science degree in Mathematical
                Analytics and Operations Research with a minor in Economics. I really like math. Math is my favorite
                subject. I am currently studying software development to be a full-stack developer and I am also studying
                accounting to earn my CPA license.
              
            </div>
            <div style={divStyle2}>
                <img src={picture2} alt="" style={divStyle1} />
            </div>
            <div style={divStyle2}>
            <img src={picture3} alt="" style={divStyle1} />
            </div>
            <div style={divStyle2}>
            <img src={picture4} alt="" style={divStyle1} />
            </div>
            <div style={divStyle2}>
            <img src={picture5} alt="" style={divStyle1} />
            </div>
        </div>

        <Contact />
    </div>
    );
}