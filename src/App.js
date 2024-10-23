import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import DivideForm from "./components/DivideForm";
import FriendsList from "./components/FriendsList";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <AddFriendForm />
        <Button>Add Friend</Button>
      </div>
      <DivideForm />
    </div>
  );
}
