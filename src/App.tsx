import { lazy, Suspense } from "react";
const Notes = lazy(() => import("./components/Notes"));
const App = () => {
  console.log("Reload - App");
  return (
    <div>
      <Suspense fallback={<div className="loading" />}>
        <Notes />
      </Suspense>
    </div>
  );
};
export default App;
