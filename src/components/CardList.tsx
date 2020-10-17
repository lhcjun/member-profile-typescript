import * as React from 'react';
import Card from './Card';

const CardList = ({ members }) => (
    <div>
      {members.map((user, i) => {
        return (
          <Card
            key = { members[i].id }
            id = { members[i].id } 
            name = { members[i].name } 
            email = { members[i].email }
          />
        );
      })}
    </div>
);

export default CardList;