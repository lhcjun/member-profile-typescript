import * as React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

export interface IMember {
  name: string;
  id: number;
  email: string;
}

interface IAppProps {}

interface IAppState {
  members: Array<IMember>;
  searchField: string;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ members: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.currentTarget.value });
  };

  render() {
    const { members, searchField } = this.state;
    const filteredMembers = members.filter((member) => {
      return member.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !members.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1" id="title">
          Our Team
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList members={filteredMembers} />
        </Scroll>
      </div>
    );
  }
}

export default App;
