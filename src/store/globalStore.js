import { create } from "zustand";

const globalStore = create((set) => ({
  isLoading: false,
  setIsLoading: (userInput) => {
    set((state) => ({ isLoading: userInput }));
  },
  buttonDisabled: false,
  setButtonDisabled: (userInput) => {
    set((state) => ({ buttonDisabled: userInput }));
  },
  isAdmin: false,
  setIsAdmin: (userInput) => {
    set((state) => ({ isAdmin: userInput }));
  },
}));

export { globalStore };
