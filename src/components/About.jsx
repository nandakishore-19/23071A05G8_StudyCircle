import React from 'react';

function About() {
  return (
    <div className="page">
      <h1>About Study Circle</h1>
      
      <div className="about-intro">
        <p>
          Study Circle is an educational platform dedicated to creating a collaborative learning environment 
          where students can access quality study materials, share their knowledge, and grow together academically.
        </p>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to democratize education by providing a platform where knowledge can be shared freely
            and affordably. We believe that quality education should be accessible to everyone, regardless of 
            their geographical location or economic background.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, Study Circle began as a small group of students who wanted to share study materials.
            What started as a simple file-sharing system among friends has grown into a comprehensive platform
            serving thousands of learners worldwide.
          </p>
          <p>
            Our journey has been driven by a passion for learning and a commitment to help others achieve their
            academic goals.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <h3>Mahesh Kumar</h3>
              <p>Founder & CEO</p>
              <p>Former educator with a passion for accessible learning</p>
            </div>
          </div>
        </div>
        
        <div className="about-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Accessibility</strong> - Making education available to everyone</li>
            <li><strong>Quality</strong> - Ensuring high standards in all our materials</li>
            <li><strong>Community</strong> - Fostering a supportive learning environment</li>
            <li><strong>Innovation</strong> - Continuously improving our platform and methods</li>
            <li><strong>Integrity</strong> - Operating with transparency and honesty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
