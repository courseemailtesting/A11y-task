import Layout from '@components/Layout';

import { useEffect, useState } from 'react';

export default function Empty() {
  const [header, setHeader] = useState();
  const [windowT, setWindowT] = useState();

  if (typeof window !== 'undefined' && window?.location?.search !== windowT) {
    setWindowT(window?.location?.search);
  }

  useEffect(() => {
    if (windowT) {
      const params = new Proxy(new URLSearchParams(window?.location?.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      setHeader(params?.header);
    }
  }, [windowT]);

  return (
    <Layout>
      <h1>{header}</h1>
    </Layout>
  );
}
