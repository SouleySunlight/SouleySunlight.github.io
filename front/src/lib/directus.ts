import { createDirectus, rest, } from '@directus/sdk';

export type Flower = {
  name: string;
  description: string;
  image: string;
  slug: string
}

const directusApi = import.meta.env.PUBLIC_DIRECTUS_API


const directus = createDirectus(directusApi).with(rest());

export default directus;