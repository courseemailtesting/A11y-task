export default function FormWrapper({ children, onSubmit }) {
  return (
    <form
      style={{
        margin: '50px 0',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        padding: '0 10%',
      }}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
