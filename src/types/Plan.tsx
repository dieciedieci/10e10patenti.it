export type PlanProps = {
  className?: string;
  planInfo?: {
    title: string;
    description: string;
    price: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
    isMostPopular?: boolean;
  }
};
