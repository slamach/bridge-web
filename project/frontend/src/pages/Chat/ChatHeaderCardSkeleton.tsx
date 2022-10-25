import ContentLoader from 'react-content-loader';
import { useTheme } from 'styled-components';

const ChatHeaderCardSkeleton = () => {
  const theme = useTheme();

  return (
    <ContentLoader
      speed={1.75}
      width={204}
      height={62}
      viewBox="0 0 204 62"
      backgroundColor={theme.colors.elementsBackground}
      foregroundColor={theme.colors.elementsBackgroundHovered}
    >
      <circle cx="31" cy="31" r="31" />
      <rect x="72" y="10" rx="4" ry="4" width="120" height="20" />
      <rect x="72" y="32" rx="4" ry="4" width="80" height="16" />
    </ContentLoader>
  );
};

export default ChatHeaderCardSkeleton;
