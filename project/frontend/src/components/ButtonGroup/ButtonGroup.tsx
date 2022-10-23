import { ButtonGroupList } from './ButtonGroup.styled';

interface ButtonGroupProps {
  children: JSX.Element[];
}

const ButtonGroup = (props: ButtonGroupProps) => {
  return (
    <ButtonGroupList>
      {props.children.map((child, index) => (
        <li key={child.key || child.props.id || index}>{child}</li>
      ))}
    </ButtonGroupList>
  );
};

export default ButtonGroup;
