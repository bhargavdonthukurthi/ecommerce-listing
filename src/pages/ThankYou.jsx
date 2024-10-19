import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export const ThankYou = () => {
    const [searchParams] = useSearchParams();
    const productName = searchParams.get('product');
  
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-4 p-8 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
            {productName && (
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your interest in {productName}!
              </p>
            )}
            <p className="text-gray-500 mb-8">
              We appreciate your interest in our products.
            </p>
            <Link to="/">
              <Button className="w-full">
                {/* <ArrowLeft className="w-4 h-4 mr-2" /> */}
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };