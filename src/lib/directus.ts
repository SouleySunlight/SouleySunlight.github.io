import { createDirectus, rest, } from '@directus/sdk';

export type Flower = {
  name: string;
  description: string;
  image: string;
  slug: string
}


const directus = createDirectus('http://localhost:8055/').with(rest());

export default directus;