// Import For Models
import type { GitHubUser } from "../../models/user";

// Props
interface Props {
  userData: GitHubUser | undefined;
}

// Function For Badged Component
const Badged = ({ userData }: Props) => {
  return (
    <div className="p-6 bg-[#20293A] text-white md:flex md:justify-between md:items-start md:px-12 md:pb-0">
      <div className="relative top-[-60px] left-0 w-20 h-20 p-2 overflow-hidden rounded-md bg-[#20293A] md:w-24 md:h-24 ">
        <img
          className="object-cover w-full h-full rounded-sm"
          src={userData?.avatar_url}
          alt={userData?.name}
        />
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <div className="flex gap-2 w-fit bg-[#111629] px-4 py-2 rounded-sm">
          <h2>Followers |</h2>
          <p> {userData?.followers}</p>
        </div>
        <div className="flex gap-2 w-fit bg-[#111629] px-4 py-2 rounded-sm">
          <h2>Following |</h2>
          <p> {userData?.following}</p>
        </div>
        <div className="flex gap-2 w-fit bg-[#111629] px-4 py-2 rounded-sm">
          <h2>Location |</h2>
          <p> {userData?.location}</p>
        </div>
      </div>
    </div>
  );
};

// Export For Badged Component
export default Badged;
