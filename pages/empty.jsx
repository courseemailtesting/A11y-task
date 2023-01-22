import Layout from '@components/Layout';

import { useEffect, useRef, useState } from 'react';

export default function Empty() {
  const [header, setHeader] = useState();
  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window?.location?.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    setHeader(params?.header);
  }, [window?.location?.search]);

  return (
    <Layout>
      <h1>{header}</h1>
    </Layout>
  );
}
