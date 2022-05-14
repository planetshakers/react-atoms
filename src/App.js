import { PrimaryButton } from "./componets/atoms/button/PrimaryButton";
import { SecondaryButton } from "./componets/atoms/button/SecondaryButton";
import { SearchInput } from "./componets/molecules/SearchInput";
import { UserCard } from "./componets/organism/user/UserCard";
import "./styles.css";

const user = {
  name: "ABC",
  image: "https://source.unsplash.com/nc11Hg2ja-s",
  email: "sample@sample.com",
  tel: "090-1234-5678",
  company: {
    name: "株式会社サンプル"
  },
  website: "https://sample.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>これはボタン</PrimaryButton>
      <SecondaryButton>これもボタン</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
