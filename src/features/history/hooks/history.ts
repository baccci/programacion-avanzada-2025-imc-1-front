import { useQuery } from "@tanstack/react-query";
import { getHistoryService } from "../services/get-history";

export function useHistory() {
  return useQuery({
    queryKey: ['history'],
    queryFn: getHistoryService
  })
}