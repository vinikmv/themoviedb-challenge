export const formatGenres = (genres) => {
  let auxArray = genres.map((genre) => genre.name);
  return auxArray.join(', ');
};

export const formatRunTime = (runtime) => {
  return Math.floor(runtime / 60) + 'h ' + (runtime % 60) + 'min';
};

export const formatDate = (data) => {
  const newDate = new Date(data);
  const month = newDate
    .toLocaleString('pt-br', { month: 'short' })
    .toUpperCase()
    .replace('.', '');
  return `${newDate.getDay()} ${month} ${newDate.getFullYear()} `;
};
