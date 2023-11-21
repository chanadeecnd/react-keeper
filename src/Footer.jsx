import './Footer.css';

const current_year = new Date().getFullYear();

function Footer(){
    return(
        <div className='Footer-container'>
            <h3>Copyright © {current_year}</h3>
        </div>
    )
}

export default Footer;