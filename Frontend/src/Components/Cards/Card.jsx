import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Our Vision</div>
        <div className="card-body text-primary">
          <p className="card-text">To become a global leader in providing innovative web and software solutions, empowering businesses and individuals to thrive in the digital world.</p>
        </div>
      </div>
      <div className="card border-secondary mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Our Mission</div>
        <div className="card-body text-secondary">
          <p className="card-text">To deliver high-quality, affordable digital solutions while fostering talent and innovation through hands-on training and mentorship for the next generation of tech professionals.</p>
        </div>
      </div>
      <div className="card border-success mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Our Story</div>
        <div className="card-body text-success">
          <p className="card-text">Founded with a passion for technology and education, Web Cook Software Solutions was built to bridge the gap between skill development and business growth, helping individuals and organizations succeed in an ever-evolving digital landscape.</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
