import { create } from 'zustand';

export const useStageStore = create((set) => ({
  firstStage: {},
  secondStage: {},
  thirdStage: { itemList: [] },
  setFirstStage: (firstStage) => set((state) => ({ firstStage })),
  setSecondStage: (secondStage) => set((state) => ({ secondStage })),
  setThirdStage: (thirdStage) => set((state) => ({ thirdStage })),
}));

function Application({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />{' '}
      <style jsx global>{`
        body {
          margin: 0;
        }
        button {
          border-width: 1px;
          border-radius: 3px;
        }
      `}</style>
    </>
  );
}

export default Application;
