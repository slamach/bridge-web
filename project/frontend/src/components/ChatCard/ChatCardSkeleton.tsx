import ContentLoader from 'react-content-loader';
import { useTheme } from 'styled-components';

const ChatCardSkeleton = () => {
  const theme = useTheme();

  return (
    <ContentLoader
      speed={1.75}
      width={372}
      height={78}
      viewBox="0 0 372 78"
      backgroundColor={theme.colors.elementsBackground}
      foregroundColor={theme.colors.elementsBackgroundHovered}
    >
      <circle cx="48" cy="39" r="31" />
      <rect x="90" y="18" rx="4" ry="4" width="120" height="20" />
      <rect x="90" y="40" rx="4" ry="4" width="200" height="16" />
      <rect x="320" y="18" rx="4" ry="4" width="38" height="21" />
    </ContentLoader>
  );
};

export default ChatCardSkeleton;
