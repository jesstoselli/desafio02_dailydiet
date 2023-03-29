function formatDate(dateInMilliseconds: number, type: "date" | "time") {
  switch (type) {
    case "date":
      const unformattedDate = new Date(dateInMilliseconds);
      const day = unformattedDate.getDate().toString().padStart(2, "0");
      const month = (unformattedDate.getMonth() + 1)
        .toString()
        .padStart(2, "0");
      const year = unformattedDate.getFullYear().toString().slice(2);
      const formattedDate = `${day}/${month}/${year}`;
      return formattedDate;

    case "time":
      return new Date(dateInMilliseconds).toLocaleTimeString().substring(0, 5);
    default:
      return new Date().toLocaleDateString();
  }
}

function formatPercentage(value: number, total: number) {
  const percentage = (value / total) * 100;
  const formattedPercentage = percentage.toFixed(2).replace(".", ",");
  return `${formattedPercentage}%`;
}

export { formatDate, formatPercentage };
