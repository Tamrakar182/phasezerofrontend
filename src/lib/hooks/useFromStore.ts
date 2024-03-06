import { useEffect, useState } from "react";

interface useFromStorePropsI<T, F> {
  // eslint-disable-next-line no-unused-vars
  store: (callback: (state: T) => unknown) => unknown;
  // eslint-disable-next-line no-unused-vars
  storeCallback: (state: T) => F;
}

export default function useFromStore<T, F>({
  store,
  storeCallback,
}: useFromStorePropsI<T, F>) {
  const [state, setState] = useState<F>();

  const stateOfStore = store(storeCallback) as F;

  useEffect(() => {
    setState(stateOfStore);
  }, [stateOfStore]);

  return state;
}
