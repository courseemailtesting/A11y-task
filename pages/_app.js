function Application({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />{' '}
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </>
  );
}

export default Application;
