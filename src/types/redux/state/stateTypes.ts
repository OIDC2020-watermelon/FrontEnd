export type TAsyncState<P> = {
  data: P | null;
  error?: any;
};

export type TAsyncMultiState<P> = {
  data: P | null;
  error?: any;
  issues: P[] | null;
};

export type TAsyncPagesState<P> = {
  data: P | null;
  error?: any;
  lastPage: number;
};
