export const formatGenres = (genres) => {
  let auxArray = genres.map((genre) => genre.name);
  return auxArray.join(', ');
};

export const formatRunTime = (runtime) => {
  const hour = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  if (hour > 0) {
    return hour + 'h ' + minutes + 'min';
  } else return minutes + 'min';
};

export const formatDate = (data) => {
  if (data === '' || data === null) {
    return 'Informação indisponível';
  }

  const newDate = new Date(data);

  const month = newDate
    .toLocaleString('pt-br', { month: 'short' })
    .toUpperCase()
    .replace('.', '');
  return `${newDate.getUTCDate()} ${month} ${newDate.getFullYear()} `;
};
