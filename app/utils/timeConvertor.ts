export const formatJokeTime = (timestamp: string): string => {
  const time = timestamp.split("T")[1].split(":") 
  return `${time[0] + ":" + time[1]}`
};
