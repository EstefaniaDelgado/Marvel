import { useContext } from 'react';
import { CharacterContext } from './CharacterContextDefinition';

export const useCharacterContext = () => {
  return useContext(CharacterContext);
};