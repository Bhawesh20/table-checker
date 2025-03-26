export const fatchProjects = async () => {
  const API_URL = "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}