export type TAsyncState<P> = {
    data: P | null;
    error?: any;
};
  
export type TAsyncPagesState<P> = {
    data: P | null;
    error?: any;
    lastPage : number;
};
  