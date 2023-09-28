import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Friends } from "./FriendsList/Friends";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { GlobalStyle } from "./GlobalStyle";
import user from '../user.json';
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'


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
      <Statistics title ="Upload stats" stats={data}
      />
      <Friends friends={friends} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle/>
    </div>
  );
};


