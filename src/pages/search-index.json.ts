import { generateSearchIndex } from '../utils/products';

export async function GET() {
  const index = generateSearchIndex();
  
  return new Response(JSON.stringify(index), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
