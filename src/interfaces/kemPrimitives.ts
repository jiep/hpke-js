// The key usages for KEM.
export const KEM_USAGES: KeyUsage[] = ["deriveBits"];

// b"dkp_prk"
export const LABEL_DKP_PRK = new Uint8Array([100, 107, 112, 95, 112, 114, 107]);

// b"sk"
export const LABEL_SK = new Uint8Array([115, 107]);

export interface KemPrimitives {
  init(api: SubtleCrypto): void;

  serializePublicKey(key: CryptoKey): Promise<ArrayBuffer>;

  deserializePublicKey(key: ArrayBuffer): Promise<CryptoKey>;

  importKey(
    format: "raw" | "jwk",
    key: ArrayBuffer | JsonWebKey,
    isPublic: boolean,
  ): Promise<CryptoKey>;

  derivePublicKey(key: CryptoKey): Promise<CryptoKey>;

  generateKeyPair(): Promise<CryptoKeyPair>;

  deriveKeyPair(ikm: ArrayBuffer): Promise<CryptoKeyPair>;

  dh(sk: CryptoKey, pk: CryptoKey): Promise<ArrayBuffer>;
}
