import { FavoritesIcon } from "assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui/colors";

const StyledBurgerNav = styled(motion.form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 10%;
  width: 100%;
  height: 30%;
  z-index: 3;
  background-color: ${Color.Gray};
  opacity: 0.9;
`;

const BurgerNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-right: 30px;
`;

const BurgerNavItem = styled.li`
  list-style: none;
  align-items: center;
  margin-bottom: 40px;
  width: 271px;
  text-align: center;
  padding-bottom: 20px;
  color: ${Color.Secondary};

  :focus,
  :hover {
    border-bottom: 1px solid ${Color.Secondary};
  }
`;

const CustomLink = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
`;

const FavoriteIcon = styled(FavoritesIcon)`
  path {
    stroke: ${Color.Secondary};
  }
`;

export { StyledBurgerNav, BurgerNavList, BurgerNavItem, FavoriteIcon, CustomLink };
