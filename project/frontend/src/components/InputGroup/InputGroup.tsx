import { InputGroupList } from './InputGroup.styled';

interface InputGroupProps {
  children: JSX.Element[];
}

const InputGroup = (props: InputGroupProps) => {
  return (
    <InputGroupList>
      {props.children.map((child, index) => (
        <li key={child.key || child.props.id || index}>{child}</li>
      ))}
    </InputGroupList>
  );
};

export default InputGroup;
