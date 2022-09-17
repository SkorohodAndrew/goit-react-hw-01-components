import { Profile } from "Components/Profile/profile";

export const EventBoard = ({ user, data }) => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" /> */}
      <Statistics stats={data.label} title={data.percentage} />
    </div>
  );
};
