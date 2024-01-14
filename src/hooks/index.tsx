import { useEffect, useState } from "react";

type ReturnedType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];

export const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): ReturnedType<T> => {
  const [state, setState] = useState<T | undefined>(() => {
    if (!initialValue) return;
    try {
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key) || "");
      }
      localStorage.setItem(key, JSON.stringify(initialValue));
    } catch (e) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (state) {
        localStorage.setItem(key, JSON.stringify(state));
      }
    } catch (e) {
      console.log(e);
    }
  }, [state, key]);

  return [state, setState];
};

// import { useReducer, useEffect, Dispatch } from "react";
//
// // Credits: https://stackoverflow.com/questions/54346866/save-to-localstorage-from-reducer-hook
// export type ReducerType<T> = (state: T, action: ActionType) => T;
// export type InitType<T> = (state: T) => void;
// export interface ActionType {
//   type: string;
// }
//
// var dispatcher: Dispatch<ActionType> | null = null;
//
// const LOCAL_STORAGE_UPDATED_IN_A_DIFFERENT_WINDOW =
//   "LOCAL_STORAGE_UPDATED_IN_A_DIFFERENT_WINDOW";
// export function useLocallyPersistedReducer<T>(
//   reducer: ReducerType<T>,
//   defaultState: T,
//   storageKey: string,
//   init?: InitType<T>
// ): [T, Dispatch<ActionType>] {
//   const reducerWrapper = (status: T, action: ActionType) => {
//     switch (action.type) {
//       case LOCAL_STORAGE_UPDATED_IN_A_DIFFERENT_WINDOW:
//         const statusReadFromLocalStorage = JSON.parse(
//           localStorage.getItem(storageKey) || "{}"
//         );
//         return statusReadFromLocalStorage;
//       default:
//         return reducer(status, action);
//     }
//   };
//
//   const [state, dispatch] = useReducer(
//     reducerWrapper,
//     defaultState,
//     (defaultState) => {
//       const persisted = JSON.parse(localStorage.getItem(storageKey) as string);
//       return persisted !== null
//         ? persisted
//         : init
//         ? init(defaultState)
//         : defaultState;
//     }
//   );
//
//   // NOTE Even if this codes runs multiple time we add only one event listener as long as the callback is singleton
//   dispatcher = dispatch;
//   window.addEventListener("storage", listenForStorageChangesInOtherWindows, {
//     once: true,
//   });
//
//   useEffect(() => {
//     localStorage.setItem(storageKey, JSON.stringify(state));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [localStorage, storageKey, state]);
//
//   return [state, dispatch];
// }
//
// const listenForStorageChangesInOtherWindows = (key: any) => {
//   dispatcher &&
//     dispatcher({ type: LOCAL_STORAGE_UPDATED_IN_A_DIFFERENT_WINDOW });
// };
