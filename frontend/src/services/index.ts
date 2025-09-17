import CryptoJS from "crypto-js";

export const MARVEL_CONFIG = {
  publicKey: import.meta.env.VITE_MARVEL_PUBLIC_KEY,
  privateKey: import.meta.env.VITE_MARVEL_PRIVATE_KEY,
  baseUrl: "https://gateway.marvel.com/v1/public",
};

export const generateMD5 = (keys: string) => {
  return CryptoJS.MD5(keys).toString();
};


export const generateMarvelAuth = () => {
  const timestamp = Date.now().toString();
  const hash = generateMD5(timestamp + MARVEL_CONFIG.privateKey + MARVEL_CONFIG.publicKey);

  return {
    ts: timestamp,
    apikey: MARVEL_CONFIG.publicKey,
    hash: hash,
  };
};
