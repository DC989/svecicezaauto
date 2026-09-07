import fs from 'node:fs';
import path from 'node:path';

export interface Product {
  id: string;
  category: string;
  source_url?: string;
  part_number: string;
  oe_number?: string;
  part_type?: string;
  description?: string;
  prices?: string[];
  availability?: string;
  delivery?: string;
  images?: string[];
  vehicles?: {
    make: string;
    models: string[];
    engine_range?: string | null;
    year_from?: number | null;
    year_to?: number | null;
  }[];
}

export interface SearchIndexRecord {
  id: string;
  part_number: string;
  category: string;
}

const PRODUCTS_FILE = path.join(process.cwd(), 'src/data/products.json');

// Map raw JSON categories to UI slug IDs
export const CATEGORY_MAP: Record<string, string> = {
  'Modul paljenja': 'modul-paljenja',
  'Kontrolna jedinica': 'kontrolna-jedinica',
  'Kalem za paljenje (Bobina)': 'kalem-za-paljenje-bobina',
  'Razvodnik paljenja': 'razvodnik-paljenja',
  'Svecice': 'svecice',
  'Pogon razvodnika paljenja': 'pogon-razvodnika-paljenja',
  'Kablovi za paljenje': 'kablovi-za-paljenje-delovi',
  'Otpornik': 'otpornik',
};

// Reverse map for displaying nice names if needed
export const CATEGORY_NAMES: Record<string, string> = {
  'modul-paljenja': 'Modul paljenja',
  'kontrolna-jedinica': 'Kontrolna jedinica',
  'kalem-za-paljenje-bobina': 'Kalem za paljenje-Bobina',
  'razvodnik-paljenja': 'Razvodnik paljenja',
  'svecice': 'Svećice',
  'pogon-razvodnika-paljenja': 'Pogon razvodnika paljenja',
  'kablovi-za-paljenje-delovi': 'Kablovi za paljenje-Delovi',
  'otpornik': 'Otpornik',
};

let _cachedProducts: Product[] | null = null;

export function getAllProducts(): Product[] {
  if (_cachedProducts) {
    return _cachedProducts;
  }
  try {
    const data = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf-8'));
    _cachedProducts = (data.products || []).map((p: any) => ({
      ...p,
      part_number: p.part_number || p.oe_number || ''
    })) as Product[];
    return _cachedProducts;
  } catch (error) {
    console.error('Error reading products.json:', error);
    return [];
  }
}

export function getProductsByCategorySlug(slug: string): Product[] {
  const products = getAllProducts();
  return products.filter(p => {
    const pSlug = CATEGORY_MAP[p.category];
    return pSlug === slug;
  });
}

export function getProductById(id: string): Product | undefined {
  const products = getAllProducts();
  return products.find(p => p.id === id);
}

/**
 * Format price string, subtract 5%, and format back to Serbian locale.
 * e.g. "2.294,64 RSD" -> "2.179,91 RSD"
 */
export function formatAndMarkupPrice(priceStr?: string): string {
  if (!priceStr) return 'Na upit';
  const match = priceStr.match(/([\d\.,]+)/);
  if (!match) return priceStr;

  let numStr = match[1];
  // Serbian format uses . for thousands, , for decimal
  numStr = numStr.replace(/\./g, '').replace(',', '.');
  const num = parseFloat(numStr);

  if (isNaN(num)) return priceStr;

  // Subtract 5%
  const newNum = num * 0.95;

  // Format back to 1.234.567,89 RSD
  const parts = newNum.toFixed(2).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${parts.join(',')} RSD`;
}

export function generateSearchIndex(): SearchIndexRecord[] {
  const products = getAllProducts();
  return products.map(p => ({
    id: p.id,
    part_number: p.part_number || '',
    category: CATEGORY_MAP[p.category] || '',
  }));
}
