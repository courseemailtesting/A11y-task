export function Button({ onClick, children, type }) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
}
