import { AvatarContainer } from './Avatar.styled';

interface AvatarProps {
  size: 's' | 'm';
  name?: string | null;
}

const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer size={props.size}>
      <p>{props.name ? props.name.toUpperCase()[0] : '?'}</p>
    </AvatarContainer>
  );
};

export default Avatar;
