export interface BlockProps<T> {
  state: T;
  onChange: (state: T) => void;
}
