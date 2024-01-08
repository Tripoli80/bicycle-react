import { toast } from "react-toastify";

export const NotificationManager = {
  error: (text) => toast.error(text ? text : "Something went wrong!"),
  success: (text) => toast.success(text ? text : "Success!"),
};
