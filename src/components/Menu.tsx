import React from 'react';
import { ArrowLeft, Phone } from 'lucide-react';
import { images } from '../data/images';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface FeaturedCocktail extends MenuItem {
  image: string;
}

const featuredCocktails: FeaturedCocktail[] = [
  {
    name: 'Piña Colada',
    description: 'Combinación tropical de ron, crema de coco y jugo de piña con un toque caribeño',
    price: '8,50€',
    image: images.cocktails[0],
  },
  {
    name: 'Margarita',
    description: 'Clásico mexicano con tequila, triple sec y jugo de limón fresco',
    price: '8,00€',
    image: images.cocktails[1],
  },
  {
    name: 'Atardecer Marea',
    description: 'Nuestro cóctel insignia: vodka, jugo de arándano y un toque de misterio',
    price: '9,50€',
    image: images.cocktails[2],
  },
];

const classics: MenuItem[] = [
  { name: 'Mojito Tradicional', description: 'Ron blanco, lima fresca, hierbabuena, azúcar y un toque de soda', price: '7,50€' },
  { name: 'Aperol Spritz', description: 'Aperol, prosecco, toque de soda y rodaja de naranja fresca', price: '8,00€' },
  { name: 'Negroni', description: 'Ginebra, campari y vermut rojo dulce a partes iguales', price: '9,00€' },
];

const mocktails: MenuItem[] = [
  { name: 'San Francisco', description: 'Mix de zumos de naranja, limón, piña y melocotón con granadina', price: '6,00€' },
  { name: 'Mojito Virgen', description: 'Todo el sabor de la hierbabuena y la lima, sin una gota de alcohol', price: '6,00€' },
  { name: 'Limonada Marea', description: 'Limonada casera con un toque de jengibre y sirope de agave', price: '5,50€' },
];

const Price: React.FC<{ value: string }> = ({ value }) => (
  <span className="rounded-full border border-current/20 bg-white/5 px-4 py-1 text-xs font-bold">{value}</span>
);

const MenuList: React.FC<{ items: MenuItem[] }> = ({ items }) => (
  <div className="space-y-10">
    {items.map((item) => (
      <article key={item.name}>
        <div className="mb-2 flex flex-col items-center gap-2 md:flex-row md:items-baseline md:justify-between">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <Price value={item.price} />
        </div>
        <p className="text-sm leading-relaxed opacity-80">{item.description}</p>
      </article>
    ))}
  </div>
);

export const Menu: React.FC = () => (
  <main id="carta" className="min-h-screen px-6 pb-32 pt-32 md:pt-40">
    <div className="mx-auto max-w-6xl space-y-24">
      <div className="flex items-center justify-between gap-4">
        <a href="#hero" className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm">
          <ArrowLeft className="h-4 w-4" />
          Volver
        </a>
        <span className="font-display text-xl italic">Marea Club</span>
      </div>

      <section>
        <h1 className="mb-12 text-center text-3xl tracking-tight md:text-5xl">Nuestros Cócteles Más Vendidos</h1>
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {featuredCocktails.map((item) => (
            <article key={item.name} className="flex min-w-[80%] snap-center flex-col items-center text-center sm:min-w-[60%] md:min-w-0">
              <img src={item.image} alt={item.name} className="mb-6 aspect-square w-full rounded-lg object-cover shadow-2xl" />
              <h2 className="mb-3 text-2xl font-bold">{item.name}</h2>
              <p className="mb-4 max-w-sm text-sm leading-relaxed opacity-80">{item.description}</p>
              <Price value={item.price} />
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-16 text-center text-3xl tracking-tight md:text-4xl">Clásicos & Mocktails</h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 text-center lg:grid-cols-2 lg:text-left">
          <MenuList items={classics} />
          <MenuList items={mocktails} />
        </div>
      </section>

      <div className="flex justify-center pt-8">
        <a href="tel:+34663674312" className="btn-secondary inline-flex items-center gap-2">
          <Phone className="h-4 w-4" />
          Llamar al camarero
        </a>
      </div>
    </div>
  </main>
);