import { NFTokenMintFlags } from "xrpl";

export const NFTokenFlagsKeys = {
  burnable: NFTokenMintFlags.tfBurnable,
  onlyXRP: NFTokenMintFlags.tfOnlyXRP,
  trustLine: NFTokenMintFlags.tfTrustLine,
  transferable: NFTokenMintFlags.tfTransferable,
  // reservedFlag: NFTokenMintFlags.tfReservedFlag,
};

export interface NFTokenFlagsKeysInterface {
  burnable?: boolean;
  onlyXRP?: boolean;
  trustLine?: boolean;
  transferable?: boolean;
  // reservedFlag?: boolean
}
