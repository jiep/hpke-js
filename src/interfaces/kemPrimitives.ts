export interface KemPrimitives {

  serializePublicKey(key: CryptoKey): Promise<ArrayBuffer>;

  deserializePublicKey(key: ArrayBuffer): Promise<CryptoKey>;

  derivePublicKey(key: CryptoKey): Promise<CryptoKey>;

  generateKeyPair(): Promise<CryptoKeyPair>;

  deriveKeyPair(ikm: ArrayBuffer): Promise<CryptoKeyPair>;

  dh(sk: CryptoKey, pk: CryptoKey): Promise<ArrayBuffer>;
}
