export const calculateRelativeTime = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const differenceInSeconds = Math.floor(
    (now.getTime() - date.getTime()) / 1000,
  ); // Difference in seconds

  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (differenceInSeconds < 60) {
    // Less than a minute
    return formatter.format(-differenceInSeconds, "second");
  } else if (differenceInSeconds < 3600) {
    // Less than an hour
    const minutesAgo = Math.floor(differenceInSeconds / 60);
    return formatter.format(-minutesAgo, "minute");
  } else if (differenceInSeconds < 86400) {
    // Less than a day
    const hoursAgo = Math.floor(differenceInSeconds / 3600);
    return formatter.format(-hoursAgo, "hour");
  } else if (differenceInSeconds < 31536000) {
    // Less than a year
    const daysAgo = Math.floor(differenceInSeconds / 86400);
    return formatter.format(-daysAgo, "day");
  } else {
    // More than a year
    const yearsAgo = Math.floor(differenceInSeconds / 31536000);
    return formatter.format(-yearsAgo, "year");
  }
};

export const getBase64FromImage = (imageFile: File) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.readAsDataURL(imageFile);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
