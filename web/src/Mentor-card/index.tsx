import React from 'react';
import './styles.css';

interface MentorCardProps {
  name: string,
  description: string,
  bio: string,
  photo: string,
  price: string,
  contact: string
}

const MentorCard = (props: MentorCardProps) => {
  const { name, description, bio, photo, price, contact } = props;
  return (
    <div id="mentor-card" >
      <div className="mentor-info">
        <img src={photo} alt="mentors pic" />
        <div className="text-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <p className="bio">{bio}</p>
      <footer className="mentor-contact">
        <h4>CAD{price}/hour</h4>
        <h4>{contact}</h4>
      </footer>
    </div>
  );
}

export default MentorCard;