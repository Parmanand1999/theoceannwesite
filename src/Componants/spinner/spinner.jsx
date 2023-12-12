import "./spinner.css";
import { ClipLoader } from "react-spinners";
import { globalStore } from "../../store/globalStore";

const Spinner = () => {
  const { isLoading } = globalStore();

  return (
    <>
      <div className="spinnerDiv">
        {isLoading ? (
          <ClipLoader
            color={"#000000"}
            backgroundcolor={"#ff0000"}
            loading={isLoading}
            size={100}
          />
        ) : null}
      </div>
    </>
  );
};

export default Spinner;
