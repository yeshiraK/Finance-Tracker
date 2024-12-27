import { colors } from '../../utils/colors';

function PageTitle({ children }) {
  return (
    <h1 
      className="text-4xl font-bold text-center mb-12" 
      style={{ color: colors.text.primary }}
    >
      {children}
    </h1>
  );
}

export default PageTitle;