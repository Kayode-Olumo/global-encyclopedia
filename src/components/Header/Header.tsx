import { HeaderContainer, HeaderTitle } from "./styles/Header";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>Global Encyclopedia</HeaderTitle>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
