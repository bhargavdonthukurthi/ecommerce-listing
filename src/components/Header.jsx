import { Search, ShoppingCart, User } from 'lucide-react';
import { Input } from './ui/input';

export const Header = ({ onSearch }) => (
  <header className="sticky top-0 z-10 bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">E-Shop</h1>
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full pl-10"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <User className="h-6 w-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ShoppingCart className="h-6 w-6" />
        </button>
      </div>
    </div>
  </header>
);