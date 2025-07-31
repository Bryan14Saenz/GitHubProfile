// Import For React
import { useEffect, useState } from "react";
// Import For Component
import Search from "./components/search/Search";
import Badged from "./components/badged/Badged";
import Repos from "./components/repo/Repos";
// Import For Models
import type { GitHubUser } from "./models/user";
import type { GitHubRepo } from "./models/repos";

// Function For App Component
function App() {
  // UseState
  const [searchText, setSearchText] = useState("Bryan14Saenz");
  const [userData, setUserData] = useState<GitHubUser | undefined>(undefined);
  const [reposData, setReposData] = useState<GitHubRepo[] | undefined>(
    undefined
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const getData = async () => {
        if (!searchText.trim()) {
          setUserData(undefined);
          setReposData(undefined);
          return;
        }

        try {
          const res = await fetch(
            `https://api.github.com/users/${encodeURIComponent(searchText)}`
          );

          if (res.ok) {
            const resRepos = await fetch(
              `https://api.github.com/users/${encodeURIComponent(
                searchText
              )}/repos`
            );

            const jsonRepos = await resRepos.json();
            setReposData(jsonRepos);
          }

          const json = await res.json();
          setUserData(json);
        } catch (e) {
          console.error("Error fetching GitHub user:", e);
          setUserData(undefined);
          setReposData(undefined);
        }
      };

      getData();
    }, 1000);

    // Cleanup: cancelar el timeout si el usuario sigue escribiendo
    return () => clearTimeout(timeoutId);
  }, [searchText]);

  return (
    <>
      <Search searchText={searchText} onChange={setSearchText} />
      <Badged userData={userData} />
      <Repos userData={userData} reposData={reposData} />
    </>
  );
}

// Export For App Component
export default App;
