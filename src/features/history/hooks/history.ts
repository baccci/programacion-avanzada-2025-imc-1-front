import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getHistoryService } from "../services/get-history";

export function useHistory(desde?: string, hasta?: string) {
  return useQuery({
    queryKey: ['history', { desde, hasta }], // la key depende de los filtros
    queryFn: () => getHistoryService(desde, hasta),
    // Mantener los datos anteriores en pantalla mientras se cargan los nuevos
    placeholderData: keepPreviousData, 
    // Si queremos que no se muestre el loading al cambiar los filtros 
    // y borrar los datos anteriores, descomentar la anterior línea y editar history.tsx
  })
}