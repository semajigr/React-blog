import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledBlogContent = styled.div`
  max-width: 1120px;
  margin-top: 72px;
`;

const Button = styled.button`
  font-size: 16px;
  line-height: 24px;
`;

const Post = styled.span`
  color: ${Color.Medium};
`;

const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 48px;
  font-weight: bold;
  font-size: 56px;
  line-height: 80px;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 518px;
  border-radius: 16px;
`;

const Description = styled.p`
  margin-block: 20px;
  padding-inline: 100px;
  font-size: 18px;
  line-height: 32px;
`;

export { StyledBlogContent, Button, Post, Title, ContentImage, Description };
