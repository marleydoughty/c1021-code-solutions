import React from 'react';

class Stopwatch extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state({});
  // }

  render() {
    return (
      <div>
        <div className='outer'>
          <div className='inner'>5</div>
        </div>
        <div>pause or play</div>
      </div>
    );
  }
}
export default Stopwatch;
