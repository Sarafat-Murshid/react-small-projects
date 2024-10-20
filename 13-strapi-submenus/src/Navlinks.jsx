import { useGlobalContext } from "./context";
import sublinks from "./data";
const Navlinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        return (
          <button
            key={item.pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(item.pageId)}
          >
            {item.page}
          </button>
        );
      })}
    </div>
  );
};
export default Navlinks;
