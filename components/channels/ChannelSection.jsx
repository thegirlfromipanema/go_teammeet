import React, {Component} from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

class ChannelSection extends Component{
  render(){
    return (
      <div>
        <ChannelList {...this.props} />
        <ChannelForm {...this.props} />
      </div>
    )
  }
}


ChannelSection.propTypes = {
  channels: React.propTypes.array.isRequired,
  setChannel: React.propTypes.func.isRequired,
  addChannel: React.propTypes.func.isRequired
}

export default ChannelSection
