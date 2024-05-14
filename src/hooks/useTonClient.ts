import { TonClient } from "ton";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { getHttpEndpoint } from "@orbs-network/ton-access";

export function useTonClient() {
  return useAsyncInitialize(
    async () => 
      new TonClient({
        endpoint: await getHttpEndpoint({ network: "testnet" })
      })
  )
}