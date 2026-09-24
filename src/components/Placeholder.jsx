// Dashed frame standing in for an illustration that hasn't been made yet.
export default function Placeholder({ tone = 'terracotta', style, children }) {
  return (
    <div className={`placeholder placeholder--${tone}`} style={style}>
      {children}
    </div>
  );
}
