import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from './ui/dialog';
  import { Button } from './ui/button';
  
  export const AddToCartModal = ({ product, isOpen, onClose, onConfirm }) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add to Cart</DialogTitle>
        </DialogHeader>
        {product && (
          <div className="flex gap-4 py-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-2">{product.description}</p>
            </div>
          </div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={() => {
            onConfirm(product);
            onClose();
          }}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );