import { Slide, StyledSlider } from "./styles";
import { ArticleItem } from "components";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import { IArticles } from "types";

interface IProps {
  similar: IArticles[];
}

export const Slider = ({ similar }: IProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 30,
    },
  });

  return (
    <StyledSlider ref={ref} className="keen-slider">
      {similar.map((article) => {
        return (
          <Slide className="keen-slide__slide number-slide1\" key={article.title}>
            <Link to={`/article/${article.id}`} key={article.id}>
              <ArticleItem article={article} />
            </Link>
          </Slide>
        );
      })}
    </StyledSlider>
  );
};
