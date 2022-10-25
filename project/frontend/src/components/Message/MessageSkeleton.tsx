import ContentLoader from 'react-content-loader';
import { useTheme } from 'styled-components';

interface MessageSkeletonProps {
  reversed?: boolean;
}

const MessageSkeleton = (props: MessageSkeletonProps) => {
  const theme = useTheme();

  return (
    <ContentLoader
      speed={1.75}
      width={580}
      height={86}
      viewBox="0 0 580 86"
      backgroundColor={theme.colors.elementsBackground}
      foregroundColor={theme.colors.elementsBackgroundHovered}
      data-direction={props.reversed ? 'reversed' : 'normal'}
    >
      <rect
        x={props.reversed ? 0 : 36}
        y="0"
        rx="18"
        ry="18"
        width="544"
        height="86"
      />
      <rect
        x={props.reversed ? 549 : 0}
        y="36"
        rx="4"
        ry="4"
        width="30"
        height="14"
      />
    </ContentLoader>
  );
};

export default MessageSkeleton;
