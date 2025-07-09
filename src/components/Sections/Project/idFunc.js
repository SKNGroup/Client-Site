
import {create} from 'zustand';

export const useIdStore = create(set => ({
    id: null,
    setId: newId => set({ id: newId }),
  }));