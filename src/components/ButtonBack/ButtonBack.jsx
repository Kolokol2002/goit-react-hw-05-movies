import { BsArrowLeft } from 'react-icons/bs';
import { ButtonBackLink } from './ButtonBack.styled';

const ButtonBack = ({ linkTo }) => {
  return (
    <ButtonBackLink to={linkTo}>
      <BsArrowLeft />
      <span>Back</span>
    </ButtonBackLink>
  );
};

export default ButtonBack;
