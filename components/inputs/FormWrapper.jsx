export default function FormWrapper({ children }) {
  return (
    <form
      style={{
        margin: '50px 0',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        padding: '0 10%',
      }}
    >
      {children}
    </form>
  );
}
