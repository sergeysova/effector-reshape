import { Store } from 'effector';

type StoreShape<S> = {
  [K in keyof S]: Store<S[K]>;
};

export function reshape<T, S extends {}>(
  store: Store<T>,
  shape: { [K in keyof S]: (v: T) => S[K] },
): { [K in keyof S]: Store<S[K]> } {
  const result: Partial<StoreShape<S>> = {};

  for (const key in shape) {
    result[key] = store.map(shape[key]);
  }

  return result as StoreShape<S>;
}
