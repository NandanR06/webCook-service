import React from 'react'
import '../Style/Android.css'
import image1 from '../../asserts/img-3.jpg'
import image2 from '../../asserts/image-4.jpg'
import image3 from '../../asserts/img-2.webp'
import image4 from '../../asserts/image-5.webp'
import image5 from '../../asserts/image-7.jpg'
import image6 from '../../asserts/images-8.jpg'
import image7 from '../../asserts/images-1.jpg'
import image8 from '../../asserts/img-6.webp'
import image9 from '../../asserts/img-9.webp'
import image10 from '../../asserts/img-10.webp'


export default function Android() {

    const handleApply = (e) => {
        const link = 'https://forms.gle/gi6edzzVvEBhPVsV9';
        window.open(link, '_blank')

    }
    return (
        <div className='service'>
            <div className="services-section">
                <div className="our-services">
                    <h3>Andriod Development</h3>
                    <p>Building Mobile Experiences that Connect and Engage</p>
                </div>
                <div className="service-img">
                    <marquee direction="left" className="image-set" behavior="alternate" scrollamount="5" loop="infinite">
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />
                        <img src={image5} alt="" />
                        <img src={image6} alt="" />
                        <img src={image7} alt="" />
                        <img src={image8} alt="" />
                        <img src={image9} alt="" />
                        <img src={image10} alt="" />
                    </marquee>
                </div>
                <div className="service-info">
                    <div>WebCook Software Solutions offers top-tier Android development services to help your
                        business reach users on the go. Our team of experienced developers is skilled in creating
                        seamless, feature-rich Android applications designed to enhance user engagement and drive growth.

                    </div>
                    <div> From concept and design to development and deployment, we focus on building apps that are responsive,
                        intuitive, and optimized for performance. Whether you're looking to create a consumer app or an enterprise
                        solution, we bring expertise and creativity to every project, ensuring your app delivers a memorable mobile
                        experience that aligns with your goals.
                    </div>
                </div>
                <button onClick={handleApply}  className='btn'>Apply Now</button>
                .
            </div>
        </div>
    )
}
