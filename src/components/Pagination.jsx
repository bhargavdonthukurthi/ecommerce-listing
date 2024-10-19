import { Button } from './ui/button';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center gap-2 mt-8">
    <Button 
      variant="outline"
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
    >
      Previous
    </Button>
    {[...Array(totalPages)].map((_, i) => (
      <Button
        key={i + 1}
        variant={currentPage === i + 1 ? "default" : "outline"}
        onClick={() => onPageChange(i + 1)}
      >
        {i + 1}
      </Button>
    ))}
    <Button 
      variant="outline"
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
    >
      Next
    </Button>
  </div>
);