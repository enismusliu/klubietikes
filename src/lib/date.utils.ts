import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

const formatDate = (date: string, format = "DD/MM/YYYY") => {
  if (!date) {
    return "N/A";
  }
  const localDate = dayjs.utc(date).tz(dayjs.tz.guess());
  const formattedDate = localDate.format(format);

  return formattedDate;
};

export default formatDate;

export const getStatusColor = (
  dateString: string
): "green" | "orange" | "red" | "grey" => {
  if (!dateString) return "grey";
  const date = dayjs(dateString, "DD/MM/YYYY");
  const now = dayjs();
  const diffInDays = date.diff(now, "day");

  if (diffInDays < 0) return "red";
  if (diffInDays <= 30) return "orange";
  return "green";
};
