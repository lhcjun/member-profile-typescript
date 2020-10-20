import * as React from 'react';
import './Card.css';

interface ICardProps {
  name: string;
  email: string;
  id: number;
}

const Card: React.FC<ICardProps> = ({ name, email, id }) => (
  <div
    className="tc grow br3 pa3 ma2 dib bw2 shadow-5 mv3 relative bg-white"
    id="content"
  >
    <div id="card">
      <img
        alt="member"
        src={require(`../assets/img/${id}.png`)}
        className="br-100 h4 w4 dib ba b--black-10 pa2"
      />
      <React.Fragment>
        <h2>{name}</h2>
        <h3>{email}</h3>
      </React.Fragment>
    </div>
  </div>
);

export default Card;
