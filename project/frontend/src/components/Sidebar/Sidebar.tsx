import { useMemo } from 'react';
import { useAppDispatch } from '../../hooks/stateHooks';
import { useAuth } from '../../hooks/useAuth';
import { useGetChatsQuery } from '../../state/api/chatsAPI';
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

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const auth = useAuth();

  const { data: getChatsData, isLoading: getChatsIsLoading } =
    useGetChatsQuery();

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
      <ChatList
        isLoading={getChatsIsLoading}
        chats={
          getChatsData
            ? getChatsData.payload.map((chat) => ({
                chatId: chat.id,
                name: chat.participantDtoList[0].name,
                lastMessage: chat.lastMessage.text,
                sentByUser: chat.lastMessage.sentByUser,
                time: chat.lastMessage.date,
              }))
            : []
        }
      />
    </SidebarContainer>
  );
};

export default Sidebar;
