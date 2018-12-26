declare module "use-immer" {
  export function useImmer(state: any) {
    return [() => {}, state];
  }
}
declare module "@smooth-ui/core-sc";

declare module "easy-peasy" {
  export const StoreProvider = {} as any;
  export const createStore = (args: any) => {};
  export const useStore = () => {};
  export const useAction = () => {};
  export const select = (fn: any) => ({} as any);
}
