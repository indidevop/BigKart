import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Footer = () => {
  return (
    <>
      <div className='footer-body flex flex-col items-center md:flex-row  bg-gray-500 p-5 pb-8 gap-10 md:gap-20 text-gray-800'>

        <div className="brand flex flex-col w-full md:w-[30%] items-center justify-center">
          <h1 className='font-extrabold text-5xl text-gray-900' style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}>BigKart</h1>
          <div className="connect my-2">
            <InstagramIcon  className='mx-2'/>
            <FacebookIcon  className='mx-2'/>
            <TwitterIcon  className='mx-2'/>
            <MailOutlineIcon  className='mx-2'/>
          </div>
        </div>

        <div className="categories md:w-[23%] w-10/12">
          <h2 text-gray-900>Men</h2>
          <div className="items">
            <li>Tops</li>
            <li>Pants</li>
            <li>T-Shirts</li>
            <li>Jackets</li>
            <li>Activewear</li>
          </div>
        </div>
        <div className="categories w-10/12 md:w-[23%]">
          <h2 text-gray-900>Women</h2>
          <div className="items">
            <li>Tops</li>
            <li>Bottoms</li>
            <li>Westerns</li>
            <li>Jackets</li>
            <li>Etnic</li>
            <li>Sarees</li>
          </div>
        </div>
        <div className="categories w-10/12 md:w-[23%]">
          <h2 text-gray-900>Accessories</h2>
          <div className="items">
            <li>Watch</li>
            <li>Wallet</li>
            <li>Purses</li>
            <li>Sunglasses</li>
            <li>Bracelets</li>
            <li>Ties</li>
          </div>
        </div>


      </div>
      <div className="rights text-center bg-gray-500 text-sm border-t ">&copy; 2025, BigKart.com</div>
    </>
  )
}

export default Footer