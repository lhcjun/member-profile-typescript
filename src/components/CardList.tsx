import * as React from 'react';
import Card from './Card';
import { IMember } from '../containers/App';

const CardList = ({ members }: { members: Array<IMember> }) => (
  <div>
    {members.map((user, i) => {
      return (
        <Card
          key={members[i].id}
          id={members[i].id}
          name={members[i].name}
          email={members[i].email}
        />
      );
    })}
  </div>
);

export default CardList;

/*
  members → type array
  elements in array → type IMember
*/