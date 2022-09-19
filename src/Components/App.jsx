import { Profile } from "./Profile/profile";
import { Statistics } from "./Statistics/statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from "../user.json";
import data from "../data.json";
import transactions from "../transactions.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
