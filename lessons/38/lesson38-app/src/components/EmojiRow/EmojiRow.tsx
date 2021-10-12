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

class EmojiRow extends React.Component<Props> {
  handleCopyEmoji = () => {
    window.navigator.clipboard.writeText(this.props.emoji.symbol)
    .then(() => alert(`${this.props.emoji.symbol} is copied!`));
  }

  render() {
    return (
      <button className='emoji-button' onClick={this.handleCopyEmoji} title={`Keywords: ${this.props.emoji.keywords}`}>
        <div className='emoji-item'>{this.props.emoji.symbol}  {this.props.emoji.title}</div>
        <span className='emoji-button-text'>Click to copy emoji</span>
      </button>
    );
  }
}



export default EmojiRow;