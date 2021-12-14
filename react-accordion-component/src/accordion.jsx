import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ openTab: null });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (event.target.matches('.subject')) {
      if (event.target.textContent === this.state.openTab) {
        this.setState({ openTab: null });
      } else {
        this.setState({ openTab: event.target.textContent });
      }
    }
  }

  render() {
    const content = this.props.content;
    const allContent = content.map(content =>
      <div key={content.subject}>
        <div onClick={this.handleClick}className='subject'>{content.subject}</div>
        <div className={this.state.openTab === content.subject ? 'description' : 'description hidden'}>
          {content.description}
        </div>
      </div>
    );
    return (
      <div>
        {allContent}
      </div>
    );
  }
}
export default Accordion;
