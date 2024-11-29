import React, { useRef } from 'react'
import './Review.css'
import next_icon from '../../asserts/next_icon.png'
import back_icon from '../../asserts/back_icon.webp'
import user_1 from "../../asserts/user_1.jpg"
import user_2 from "../../asserts/user_2.jpg"
import user_3 from "../../asserts/user_3.jpg"
import user_4 from "../../asserts/user_4.jpg"
import user_5 from "../../asserts/user_5.jpg"

const Review = () => {

    const slider = useRef();
    let tx = 0;

 const slideForward=()=>{
    if(tx>-50){
        tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
 }

    const slideBackward=() => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


return (
    <div className='reviews'>
        <h2>what interns says about web cook software solutions ?</h2>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Gollapaelly Sandhyarani</h3>
                            </div>
                        </div>
                        <p>I am grateful for the opportunity to intern at WebCook Software Solutions. The experience has been both enriching and educational. The team at WebCook is incredibly supportive, providing a collaborative and professional environment where I was encouraged to enhance my technical skills in web development.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>J Sandhyarani</h3>
                            </div>
                        </div>
                        <p>As I am virtual intern at webcook software solutions I found some basic real world projects. It provides hands-on experience in building responsive and real-world projects using HTML,CSS and JavaScript. It enchances remote works skills like time management and effective communication while flexible learning opportunities.Thank you
                            Webcook software solutions.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Padala Surya Nagendhra</h3>
                            </div>
                        </div>
                        <p>The graphic design internship at Webcook Software Solutions offers a creative and dynamic environment for budding designers to build their skills and portfolios. Interns are immersed in real projects from the start, working on branding, digital media, and UI/UX design under the guidance of experienced mentors. This role emphasizes both the artistic and strategic aspects of design, allowing interns to refine their visual storytelling, branding, and technical skills in tools like Adobe Creative Suite and Figma. Webcook’s supportive feedback culture ensures interns receive constructive critiques that foster growth, helping them not only improve technically but also develop a professional eye for design. This internship is ideal for aspiring graphic designers eager to gain hands-on experience and understand how design plays a crucial role in the tech industry.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Sreeja Vattem</h3>
                            </div>
                        </div>
                        <p>I recently completed a Java Developer virtual internship in Webcook solutions.I appreciate the team about the projects made to complete in java really helps me lot in my career growth,which helped me refine my coding skills and problem solving strategies.Overall ,this virtual internship developed me has a java developer and gain a proper career growth.I am really thankful to Webcook team for this opportunity.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_5} alt="" />
                            <div>
                                <h3>kalyanam Abhinav</h3>
                            </div>
                        </div>
                        <p>My virtual internship at WebCook Software Solutions was a valuable experience. It provided practical exposure to Python development and allowed me to work on real-world projects independently, enhancing my technical skills and confidence in problem-solving.</p>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
)
}
export default Review
