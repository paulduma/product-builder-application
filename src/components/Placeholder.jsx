// Dashed frame standing in for an illustration that hasn't been made yet.
export default function Placeholder({ tone = 'terracotta', style, className = '', children }) {
  return (
    <div className={`placeholder placeholder--${tone}${className ? ` ${className}` : ''}`} style={style}>
      {children}
    </div>
  );
}
