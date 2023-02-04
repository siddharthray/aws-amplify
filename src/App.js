import { Amplify } from "aws-amplify";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);

function App() {
  return <div className="App"></div>;
}

export default App;
