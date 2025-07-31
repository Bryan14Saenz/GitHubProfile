// Import For Models
import type { GitHubUser } from "../../models/user";
import type { GitHubRepo } from "../../models/repos";

// Props
interface Props {
  userData: GitHubUser | undefined;
  reposData: GitHubRepo[] | undefined;
}

// Function For Repos Component
const Repos = ({ userData, reposData }: Props) => {
  return (
    <div className="py-2 px-6 bg-[#20293A] text-white">
      <h1 className="text-2xl font-black">{userData?.name}</h1>
      <p className="w-1/2 my-2 text-lg text-balance">{userData?.bio}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
        {reposData?.map((repo) => (
          <button
            key={repo.id}
            onClick={() => window.open(repo.html_url, "_blank")}
            className="text-left p-4 rounded-lg mt-4 bg-gradient-to-l from-[#1C1B45] to-[#111629] hover:from-[#1E1D47] hover:to-[#13172B] transition-all duration-200"
          >
            <h2 className="text-xl font-normal">{repo.name}</h2>
            <p className="mt-2 text-sm text-gray-300">
              {repo.description || "No description available"}
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-4 text-xs text-gray-400">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
                {repo.language && <span>📝 {repo.language}</span>}
              </div>
              <span className="text-xs text-gray-500">
                {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Export For Repos Component
export default Repos;
