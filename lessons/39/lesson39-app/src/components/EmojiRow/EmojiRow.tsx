import React from 'react';
import './EmojiRow.css';

type Props = {
 emoji: Emoji;
};

type Emoji = {
  title: string;
  symbol: string;
  keywords: string;
};

function EmojiRow (props: Props) {
  function handleCopyEmoji() {
    window.navigator.clipboard.writeText(props.emoji.symbol)
    .then(() => alert(`${props.emoji.symbol} is copied!`));
  }

  return (
    <button className='emoji-button' onClick={handleCopyEmoji} title={`Keywords: ${props.emoji.keywords}`}>
      <div className='emoji-item'>{props.emoji.symbol}  {props.emoji.title}</div>
      <span className='emoji-button-text'>Click to copy emoji</span>
    </button>
  );
}



export default EmojiRow;