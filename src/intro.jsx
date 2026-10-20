import { createRoot } from 'react-dom/client';
import './index.css';
import WelcomeLoader from './components/WelcomeLoader';

function IntroPage() {
  return (
    <main className="min-h-screen bg-[#06101a]">
      <WelcomeLoader onFinish={() => window.location.replace('/portfolio.html')} />
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <IntroPage />,
);
