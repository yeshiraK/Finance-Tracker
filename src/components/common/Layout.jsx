import { colors } from '../../utils/colors';

function Layout({ children }) {
  return (
    <div className="min-h-screen" style={{ background: colors.background.primary }}>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {children}
      </div>
    </div>
  );
}

export default Layout;