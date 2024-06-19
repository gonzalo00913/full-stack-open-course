const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }


  const notificationClass = message.includes("Added") ? "success" : "error";

  return (
    <div className={notificationClass}>
      {message}
    </div>
  );
};

export default Notification;
