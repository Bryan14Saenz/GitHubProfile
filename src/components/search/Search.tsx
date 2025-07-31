// Import For Assets Img
import hero from "../../assets/img/hero-image-github-profile.jpg";

// Props
interface Props {
  searchText: string;
  onChange: (value: string) => void;
}

// Function For Search Component
const Search = ({ searchText, onChange }: Props) => {
  // HandleChange For Input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div
      className="h-40 p-6 text-white bg-no-repeat bg-cover md:bg-center md:text-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <input
        type="text"
        className="w-full px-4 py-2 rounded tracking-wider outline-none bg-[#20293A] text-white md:w-1/2"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

// Export For Search Component
export default Search;
