import { useState, useEffect } from "react"
import pic1 from '../assets/images/pic1.jpg'
import pic2 from '../assets/images/pic2.jpg'
import pic3 from '../assets/images/pic3.jpg'
import pic4 from '../assets/images/picc4.png'
import pic5 from '../assets/images/pic5.png'
function Main() {
    const [images, setImages] = useState([pic1, pic2, pic3, pic4, pic5])
    const [captions, setCaptions] = useState([{
        name:"onyebuchi",
        story:"A Prop firm founder who's frustrated that his business status isn't upgrading because he doesn't know his users, what they want and why.",

    }, {
        name:"CryptoNebula",
        story: "A Web 3 enthusiast who's passionate about investing in Web 3 projects by helping them with useful data that they need."
    }, {
        name: "A'isha",
        story:"A Marketing executive looking for how to access a large pool of Nigerian research respondents so that he can get the most representative sample possible."
    },{
        name:"Daniel",
        story: "A celebrity bored and looking for a fun way to kill time while waiting for his flight to board."
    },{
        name:"Alice",
        story:"A girl that's angry with traditional market research platforms and feels unappreciated for the data shared."
    }
        
    ])

    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment index, reset to 0 if reached the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5000 milliseconds (5 seconds)

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

    return (
    <div className="third-container">
      <h3>Who we're seeking to help and More</h3>
      <div className="image-slider-container ">
      <div className="image-slider" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <div className="caption">
        <h3>{captions[currentIndex].name}</h3>
        <p>{captions[currentIndex].story}</p>
      </div>
      </div>
    </div>
    </div>
  )
}
export default Main