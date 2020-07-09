import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles'
import ChannelButton from '../ChannelButton'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Free-chat" />
      <ChannelButton channelName="Music studies" />
      <ChannelButton channelName="Band affairs" />
      <ChannelButton channelName="Scales" />
      <ChannelButton channelName="classic-music" />

    </Container>
  );
};

export default ChannelList;