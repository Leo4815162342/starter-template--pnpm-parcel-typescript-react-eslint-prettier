import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementsByTagName("main")[0];

const root = createRoot(container);

root.render(<App />);

// Best Practice recommended by ParcelJs bundler that we are currently using:
// Keep entry components in their own files
// — Entry components should be in a separate file from the one that calls ReactDOM.render
//   or they will be remounted on every change.

// In our case,
// the file that calls ReactDOM.render is this file,
// the entry component is <App> which is in a separate file than this one,
// and we have make sure that we do not bring in any other component beside that one.
