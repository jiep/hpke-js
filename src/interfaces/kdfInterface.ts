import { Kdf } from "../identifiers.ts";

/**
 * The KDF interface.
 */
export interface KdfInterface {
  /** The KDF identifier. */
  readonly id: Kdf;
  /** The output size of the extract() function in bytes (Nh). */
  readonly hashSize: number;

  extract(
    salt: ArrayBuffer,
    ikm: ArrayBuffer,
  ): Promise<ArrayBuffer>;

  expand(
    prk: ArrayBuffer,
    info: ArrayBuffer,
    len: number,
  ): Promise<ArrayBuffer>;

  extractAndExpand(
    salt: ArrayBuffer,
    ikm: ArrayBuffer,
    info: ArrayBuffer,
    len: number,
  ): Promise<ArrayBuffer>;

  labeledExtract(
    salt: ArrayBuffer,
    label: Uint8Array,
    ikm: Uint8Array,
  ): Promise<ArrayBuffer>;

  labeledExpand(
    prk: ArrayBuffer,
    label: Uint8Array,
    info: Uint8Array,
    len: number,
  ): Promise<ArrayBuffer>;
}