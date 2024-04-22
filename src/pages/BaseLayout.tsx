import { Outlet } from 'react-router-dom';

export function BaseLayout() {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
