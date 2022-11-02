export type GetObjDifferentKeys<T, U> = Omit<T, keyof U> & Omit<U, keyof T>;

export type GetObjSameKeys<T, U> = Omit<T | U, keyof GetObjDifferentKeys<T, U>>;

export type DeepMergeTwoTypes<T, U> = Partial<GetObjDifferentKeys<T, U>> &
	{ [K in keyof GetObjSameKeys<T, U>]: T[K] | U[K] };
