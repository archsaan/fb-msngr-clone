import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { forwardRef } from "react";
import "./Messages.css";

const Messages = forwardRef(({ msg, id, user }, ref) => {
  const isLoggedInUser = msg.user === user;
  return (
    <div ref={ref} className={`msg ${isLoggedInUser && "msg__user"}`}>
      <Card className={isLoggedInUser ? "msg__currentUser" : "msg__guestUser"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {isLoggedInUser && `${msg.user}: `} {msg.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Messages;
