import { PacmanLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

const Loader = () => {
  const theme = useTheme();

  return <PacmanLoader color={theme.colors.highlight} />;
};

export default Loader;
