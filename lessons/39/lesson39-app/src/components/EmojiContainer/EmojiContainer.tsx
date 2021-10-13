import React, { useEffect } from 'react';
import EmojiRow from '../EmojiRow';
import './EmojiContainer.css';

type Props = {
  searchBarValue: string;
  numberOfResults: number;
};

type Emoji = {
  title: string;
  symbol: string;
  keywords: string;
};

function EmojiContainer(props: Props) {
  const [emojiList, setFullEmojiList] = React.useState<Emoji[]>([]);

  function searchEmoji(searchBarValue: string, emojiList: Emoji[]): Emoji[] {
    return emojiList.filter(emoji => emoji.title.includes(searchBarValue) || emoji.keywords.includes(searchBarValue)).slice(0, props.numberOfResults);
  }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/asimonok/10-js-pro-course/lesson/38/lessons/38/emojiList.json')
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Error on emoji fetch!');
    })
    .then((fullEmojiList: Emoji[]) => setFullEmojiList(fullEmojiList))
    .catch(_error => {
      alert('Source is not reachable!');
    });
  }, []);

  const filteredEmojiList = searchEmoji(props.searchBarValue, emojiList);

  return (
    <>
      {props.searchBarValue === '' && <h2>Search your emoji!</h2>}
      {filteredEmojiList.length === 0 && <h2>No emoji found!</h2>}
      {props.searchBarValue !== '' && filteredEmojiList.length !== 0 && <ul className='emoji-list'>
        {filteredEmojiList.map(listElement => {
          return (
            <li className='emoji-list__item' key={listElement.title}>
              <EmojiRow emoji={listElement} />
            </li>
          );
        })}
      </ul>
      }
    </>
  );
}

export default EmojiContainer;