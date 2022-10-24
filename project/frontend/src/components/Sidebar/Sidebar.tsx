import { useMemo } from 'react';
import { useAppDispatch } from '../../hooks/stateHooks';
import { useAuth } from '../../hooks/useAuth';
import { clearPersistedCredentials } from '../../state/slices/authSlice';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import ChatList from '../ChatList/ChatList';
import Divider from '../Divider/Divider';
import {
  SidebarContainer,
  SidebarHeader,
  SidebarUserInfo,
} from './Siderbar.styled';

const MAX_NAME_CHARACTERS = 20;

const chatsMock = [
  {
    chatId: '1',
    name: 'Dmitry Sviridov',
    lastMessage: 'send nudes',
    time: '2022-10-23T23:55:00.000',
    sentByUser: false,
  },
  {
    chatId: '2',
    name: 'Dmitry Sviridov',
    lastMessage: 'send nudes',
    time: '2022-10-23T23:55:00.000',
    sentByUser: false,
  },
  {
    chatId: '3',
    name: 'Dmitry Sviridov',
    lastMessage: 'send nudes',
    time: '2022-10-23T23:55:00.000',
    sentByUser: false,
  },
  {
    chatId: '4',
    name: 'Dmitry Sviridov',
    lastMessage: 'send nudes',
    time: '2022-10-23T23:55:00.000',
    sentByUser: false,
  },
  {
    chatId: '5',
    name: 'Dmitry Sviridov',
    lastMessage: 'send nudes',
    time: '2022-10-23T23:55:00.000',
    sentByUser: false,
  },
  {
    chatId: '6',
    name: 'Dmitry Sviridov',
    lastMessage: 'send nudes',
    time: '2022-10-23T23:55:00.000',
    sentByUser: false,
  },
  {
    chatId: '7',
    name: 'Dmitry Sviridov',
    lastMessage: 'send nudes',
    time: '2022-10-23T23:55:00.000',
    sentByUser: false,
  },
  {
    chatId: '8',
    name: 'Dmitry Sviridov',
    lastMessage: 'send nudes',
    time: '2022-10-23T23:55:00.000',
    sentByUser: false,
  },
  {
    chatId: '9',
    name: 'Dmitry Sviridov',
    lastMessage: 'send nudes',
    time: '2022-10-23T23:55:00.000',
    sentByUser: false,
  },
  {
    chatId: '10',
    name: 'Dmitry Sviridov',
    lastMessage: 'send nudes',
    time: '2022-10-23T23:55:00.000',
    sentByUser: false,
  },
];

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const auth = useAuth();

  const formattedName = useMemo(() => {
    if (!auth.user) {
      return '?????? ????????';
    }
    if (auth.user.name.length > MAX_NAME_CHARACTERS) {
      return auth.user.name.slice(0, MAX_NAME_CHARACTERS - 3) + '...';
    }
    return auth.user.name;
  }, [auth.user]);

  const handleLogout = () => {
    dispatch(clearPersistedCredentials());
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarUserInfo>
          <Avatar size="s" name={auth.user?.name} />
          <div>
            <p>Logged as</p>
            <p>{formattedName}</p>
          </div>
        </SidebarUserInfo>
        <Button size="s" onClick={handleLogout}>
          Logout
        </Button>
      </SidebarHeader>
      <Divider />
      <ChatList chats={chatsMock} />
    </SidebarContainer>
  );
};

export default Sidebar;
