import Loader from '../Loader/Loader';
import { LoaderContainer } from './ContainedLoader.styled';

const ContainedLoader = () => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};

export default ContainedLoader;
