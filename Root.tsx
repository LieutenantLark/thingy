import { Outlet } from 'react-router';
import { Header } from './Header';

export function Root() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Outlet />
    </div>
  );
}
