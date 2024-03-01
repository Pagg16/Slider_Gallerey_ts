import React from "react";
import { Slider } from "./components/slider";
import { IReview } from "./components/slider.props";

const reviews: IReview[] = [
  {
    id: 1,
    text: "sdedededeeefef efefefef",
    image:
      "https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1709251200&semt=ais",
  },
  {
    id: 2,
    text: "sdedededdcdcdc dc eeefef efefefef",
    image:
      "https://img.gazeta.ru/files3/305/10458305/ptichka-pic905-895x505-49881.jpg",
  },
  {
    id: 3,
    text: "sdedededdcdcdc dc eeefef efefefef",
    image:
      "https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg",
  },
  {
    id: 4,
    text: "sdedededdcdcdc dc eeefef efefefef",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGs2cPoUc1kCB9JsRpK3O2arAS7ftXLuxjqA&usqp=CAU",
  },
];

const App: React.FC = (): JSX.Element => {
  return <Slider reviews={reviews} />;
};

export default App;
