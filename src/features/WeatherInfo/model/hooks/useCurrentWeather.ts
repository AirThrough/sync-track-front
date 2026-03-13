import { useQuery } from "@tanstack/react-query";
import { weatherApiService } from "~/shared/api/weather.service";

export const useCurrentWeather = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["currentWeather"],
    queryFn: () => weatherApiService.getWeather(),
    select: (response) => response.data,
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  return { data, isLoading, error };
};
