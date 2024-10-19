import { Button } from './ui/button';

export const ProductCard = ({ product, onViewProduct, onAddToCart }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img 
      src={product.image} 
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => onViewProduct(product)}
        >
          View Product
        </Button>
        <Button 
          className="flex-1"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  </div>
);