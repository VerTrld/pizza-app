import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ICart {
  id: number;
  image: string;
  title: string;
  details: string;
  price: number;
}

type Store = {
  addCart: ICart[];
  setAddToCart: (item: ICart) => void;
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      addCart: [],
      setAddToCart: (item) =>
        set((state) => ({
          addCart: [...state.addCart, item],
        })),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage), // localStorage
    }
  )
);

export default useStore;
