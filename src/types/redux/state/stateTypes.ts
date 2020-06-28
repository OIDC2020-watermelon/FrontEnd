export type TAsyncState<P> = {
    loading: boolean;
    data: P | null;
    error?: any;
};
  
export type TAsyncPagesState<P> = {
    loading: boolean;
    data: P | null;
    error?: any;
    lastPage : number;
};
  