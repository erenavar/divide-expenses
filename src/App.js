import AddFriendForm from "./components/AddFriendForm";
import FriendsList from "./components/FriendsList";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <AddFriendForm />
      </div>
    </div>
  );
}
