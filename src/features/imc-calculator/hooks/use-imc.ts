import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { getIMCService, type IMCData } from '../services/get-imc'

export function useGetIMC() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: IMCData) => await getIMCService(data),
    onError: () => {
      toast.error('Hubo un error al calcular el IMC')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['history'] })
    }
  })
}
