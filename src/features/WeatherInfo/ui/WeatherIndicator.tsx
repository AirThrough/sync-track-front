import { useCurrentWeather } from "~/features/WeatherInfo/model/hooks";

export const WeatherIndicator = () => {
  const { data, isLoading, error } = useCurrentWeather();

  console.log(data);
  return <div>WeatherIndicator</div>;
};
