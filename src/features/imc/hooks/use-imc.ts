import { useMutation } from "@tanstack/react-query"
import { getIMCService, type IMCData } from "../services/get-imc"

export function useGetIMC() {
  return useMutation({
    mutationFn: async (data: IMCData) => await getIMCService(data),
  })
}