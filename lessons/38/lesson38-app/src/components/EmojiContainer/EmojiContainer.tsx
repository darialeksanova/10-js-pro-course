import React from 'react';
import EmojiRow from '../EmojiRow';
import './EmojiContainer.css';

type Props = {
  searchBarValue: string;
  numberOfResults: number;
};

type State = {
  fullEmojiList: Emoji[];
};

type Emoji = {
  title: string;
  symbol: string;
  keywords: string;
};

class EmojiContainer extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      fullEmojiList: [],
    };
  }

  searchEmoji(searchBarValue: string, fullEmojiList: Emoji[]): Emoji[] {
    return fullEmojiList.filter(emoji => emoji.title.includes(searchBarValue) || emoji.keywords.includes(searchBarValue)).slice(0, this.props.numberOfResults);
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Error on emoji fetch!');
      })
      .then((fullEmojiList: Emoji[]) => this.setState({fullEmojiList}))
      .catch(_error => {
        alert('Source is not reachable!');
      });
  }
 
  render() {
    if (this.props.searchBarValue === '') {
      return <h2>Search your emoji!</h2>
    }

    const filteredEmojiList = this.searchEmoji(this.props.searchBarValue, this.state.fullEmojiList);

    if (filteredEmojiList.length === 0) {
      return <h2>No emoji found!</h2>
    }

    return (
      <ul className='emoji-list'>
        {filteredEmojiList.map(listElement => {
          return (
            <li className='emoji-list__item' key={listElement.title}>
              <EmojiRow emoji={listElement} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default EmojiContainer;