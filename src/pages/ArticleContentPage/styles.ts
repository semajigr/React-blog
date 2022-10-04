import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/intex";

const StyledArticleContent = styled.div`
  min-height: 100vh;
  margin-top: 72px;
`;

const Button = styled.button`
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  background: none;
  color: ${Color.Secondary};

  :hover {
    color: ${Color.PrimaryLight};
  }
`;

const Post = styled.span`
  color: ${Color.Medium};
`;

const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 48px;
  font-weight: bold;
  font-size: 56px;
  line-height: 84px;
  color: ${Color.Secondary};

  ${Media.MD} {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 36px;
  }
`;

const ContentImage = styled.img`
  width: 100%;
  height: 518px;
  border-radius: 16px;

  ${Media.MD} {
    width: 272px;
    height: 224px;
  }
`;

const Description = styled.p`
  margin-block: 48px;
  padding-inline: 100px;
  font-size: 18px;
  line-height: 32px;
  color: ${Color.Secondary};

  ${Media.LG} {
    padding: 0;
  }

  ${Media.MD} {
    padding: 0;
    margin-block: 36px;
  }
`;

export { StyledArticleContent, Button, Post, Title, ContentImage, Description };
