// import { Profile } from "./Profile/profile";
// import { Statistics } from "./Statistics/statistics";
import { EventBoard } from "./EventBoard/eventBoard";
import user from "../user.json";
import data from "../data.json";

export const App = () => {
  return (
    <div>
      <EventBoard user={user} data={data} />
      {/* <Statistics /> */}
    </div>
  );
};
