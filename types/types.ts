export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  cookTimeMinutes: number;
  caloriesPerServing: number;
  rating: number;
  reviewCount: number;
}

export interface Recipes {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number
}