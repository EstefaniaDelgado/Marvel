import { useState, type ReactNode } from "react";
import { CharacterContext } from "./CharacterContextDefinition";

export default function CharacterProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [shouldRefetch, setShouldRefetch] = useState(false);

  const triggerRefetch = () => setShouldRefetch(true);
  const resetRefetch = () => setShouldRefetch(false);

  return (
    <CharacterContext.Provider
      value={{ shouldRefetch, triggerRefetch, resetRefetch }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
