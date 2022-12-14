export const WEATHER_NAMES = ['fine', 'cloudy', 'rainy'] as const
export type Weather = typeof WEATHER_NAMES[number]
