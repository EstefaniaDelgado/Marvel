import { createContext } from 'react';

export interface CharacterContextType {
  shouldRefetch: boolean;
  triggerRefetch: () => void;
  resetRefetch: () => void;
}

export const CharacterContext = createContext<CharacterContextType>({
  shouldRefetch: false,
  triggerRefetch: () => {},
  resetRefetch: () => {}
});