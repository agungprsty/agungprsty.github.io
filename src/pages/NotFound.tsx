import { useNavigate } from 'react-router-dom';
import { Home } from '@mui/icons-material';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-2 text-6xl font-bold text-primary dark:text-primary-dark">404</h1>
      <h2 className="mb-2">Page Not Found</h2>
      <p className="mb-8 text-fg-alt dark:text-fg-alt-dark">
        The page you are looking for does not exist or has been moved.
      </p>
      <button
        type="button"
        onClick={() => navigate('/')}
        className="btn btn--outline inline-flex items-center gap-2">
        <Home /> Back to Home
      </button>
    </div>
  );
};

export default NotFound;
