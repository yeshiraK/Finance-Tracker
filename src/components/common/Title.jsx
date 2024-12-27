import { colors } from '../../utils/colors';

function Title({ children, className = '' }) {
  return (
    <h2 
      className={`text-2xl font-semibold mb-6 ${className}`}
      style={{ color: colors.text.primary }}
    >
      {children}
    </h2>
  );
}

export default Title;