import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])
  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Van Morrison"
          date="21/10/2020"
          content="Hello!!"
        />
        <ChannelMessage
          author="Paul MaCartney"
          date="21/10/2020"
          content="Let's study today ?"
        />
        <ChannelMessage
          author="Van Morisson"
          date="21/10/2020"
          content="Yes !"
        />
        <ChannelMessage
          author="Brian Jones"
          date="21/10/2020"
          content="I want to study too"
        />
        <ChannelMessage
          author="Steven Tayler"
          date="21/10/2020"
          content="
          I'll be able to study only later"
        />
        <ChannelMessage
          author="Paul MaCartney"
          date="21/10/2020"
          content="
          Always make an excuse right Steven"
        />
        <ChannelMessage
          author="Steven Tayler"
          date="21/10/2020"
          content="
          Sorry I am busy"
        />
        <ChannelMessage
          author="Paul MaCartney"
          date="21/10/2020"
          content="Okay, see you later then"
        />
        <ChannelMessage
          author="Raul Franck"
          date="21/10/2020"
          content="Good Morning!!"
        />
        <ChannelMessage
          author="Raul Franck"
          date="21/10/2020"
          content="Good Morning!!"
        />
        <ChannelMessage
          author="Raul Franck"
          date="21/10/2020"
          content="Good Morning!!"
        />
        <ChannelMessage
          author="Raul Franck"
          date="21/10/2020"
          content="Good Morning!!"
        />
        <ChannelMessage
          author="Raul Franck"
          date="21/10/2020"
          content="Good Morning!!"
        />
        <ChannelMessage
          author="Raul Franck"
          date="21/10/2020"
          content="Good Morning!!"
        />
        <ChannelMessage
          author="Raul Franck"
          date="21/10/2020"
          content="Good Morning!!"
        />
        <ChannelMessage
          author="Raul Franck"
          date="21/10/2020"
          content="Good Morning!!"
        />
        <ChannelMessage
          author="Raul Franck"
          date="21/10/2020"
          content="Good Morning!!"
        />
        <ChannelMessage
          author="Raul Franck"
          date="21/10/2020"
          content="Good Morning!!"
        />
        <ChannelMessage
          author="Raul Franck"
          date="21/10/2020"
          content="Good Morning!!"
        />
        <ChannelMessage
          author="Raul Franck"
          date="21/10/2020"
          content="Good Morning!!"
        />

        <ChannelMessage
          author="Bob Dylan"
          date="21/10/2020"
          content={
            <>
              <Mention>@Raul Franck</Mention>, Hello ! Go to play guitar today?
            </>
          }
          hasMention
          isBot
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #Chat-livre" />
        <InputIcon />

      </InputWrapper>

    </Container>

  )
}

export default ChannelData;