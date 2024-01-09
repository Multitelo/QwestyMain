import logo from '../assets/images/logo.png'
import fbIcon from '../assets/images/fb.svg'
import igIcon from '../assets/images/ig.svg'
import linkedinIcon from '../assets/images/linkedin.svg'
function Footer() {
  return (
<>
    <div className="footer-container">
        <div className='flex-items-1'><img src={logo}
                  alt="Qwesty'logo"/></div>
        <div className='flex-items'>
            <img src={fbIcon}
                 alt="Facebook icon"/>
        </div>
        <div className='flex-items'>
            <img src={igIcon}
                 alt="Instagram icon"/>
        </div>
        <div className='flex-items'>
            <img src={linkedinIcon}
                 alt="Linkedin icon"/>
        </div>
        
        <div className='flex-items lists'>
            <div className='list-items'>Terms</div>
            <div className='list-items'>help</div>
            <div className='list-items'>about</div>
            <div className='list-items'>privacy</div>
            <div className='list-items'>features</div>


        </div>
        
        
        </div>
        <div id="last-item">©{new Date().getFullYear()} Qwesty. All rights reserved.</div>
        </>
  )
}
export default Footer