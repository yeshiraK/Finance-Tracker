import { colors } from '../../utils/colors';

function Card({ children, className = '' }) {
  return (
    <div 
      className={`rounded-xl p-6 ${className}`}
      style={{ background: colors.background.card }}
    >
      {children}
    </div>
  );
}

export default Card;