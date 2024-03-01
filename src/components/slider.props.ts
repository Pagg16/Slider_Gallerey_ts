export interface IReview {
  id: number;
  text: string;
  image: string;
}

export interface SliderProps {
  reviews: IReview[];
}
