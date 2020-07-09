import React from 'react';

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>BOT</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Raul Franck" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Bob Dylan" isBot />
      <UserRow nickname="Roger Waters" />
      <UserRow nickname="Robert Plant" />
      <UserRow nickname="Mick Jagger" />
      <UserRow nickname="Mark knopfler" />
      <UserRow nickname="Zack de la Rocha" />
      <UserRow nickname="Paul MaCartney" />
      <UserRow nickname="Jimmy Page" />
      <UserRow nickname="Van Morrisom" />
      <UserRow nickname="Keith Richards" />
      <UserRow nickname="Brian Jones" />
      <UserRow nickname="Brian May" />
      <UserRow nickname="John Deacon" />
      <UserRow nickname="David Gilmour" />
      <UserRow nickname="Steven Tyler" />
      <UserRow nickname="Eddie Vedder" />
      <UserRow nickname="Lou Reed" />
      <UserRow nickname="Brandon Flowers" />
      <UserRow nickname="Morrissey" />
      <UserRow nickname="James Hetfield" />
      <UserRow nickname="Chris Martin" />
      <UserRow nickname="Bono Vox" />
      <UserRow nickname="chris cornell" />
    </Container>
  )
}

export default UserList;