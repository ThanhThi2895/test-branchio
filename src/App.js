import "./styles.css";
import branch from "branch-sdk";

export const branchController = async () => {
  return new Promise((resolve, reject) => {
    branch.init(process.env.REACT_APP_BRANCH_IO_KEY, {}, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data?.data_parsed);
      }
    });
  });
};

export default function App() {
  console.log(typeof SharedArrayBuffer);

  branchController()
    .then((data) => {
      console.log({ data });
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
