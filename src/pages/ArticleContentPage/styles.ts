import styled from "styled-components";
import { Color } from "ui/colors";
import { Media } from "ui/intex";

const StyledArticleContent = styled.div`
  margin-top: 152px;
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

const ImageDescription = styled.div`
  position: relative;
  text-align: center;
`;

const ContentDate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${Color.LightGray};
  opacity: 0.9;
  position: absolute;
  top: 90.8%;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  ${Media.MD} {
    top: 83%;
  }
`;

const AboutContent = styled.h3`
  font-size: 18px;
  font-weight: 100;
  line-height: 26px;
  padding: 10px 30px;
  color: ${Color.ExtraLight};

  ${Media.MD} {
    font-size: 14px;
    line-height: 24px;
    padding: 5px 10px;
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

const LinkLearnMore = styled.a`
  display: block;
  width: 130px;
  margin: 0 auto;
  padding: 10px 20px;
  margin-bottom: 40px;
  border: 1px solid ${Color.Secondary};
  color: ${Color.Secondary};

  :hover {
    color: ${Color.PrimaryLight};
    border: 1px solid ${Color.PrimaryLight};
  }
`;

export {
  StyledArticleContent,
  Button,
  Post,
  Title,
  ContentImage,
  Description,
  ImageDescription,
  ContentDate,
  AboutContent,
  LinkLearnMore,
};
