import React, { Suspense } from "react";

const App1 = React.lazy(() => import("app1/App"));
const App2 = React.lazy(() => import("app2/App"));

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Container Application</h1>

      <Suspense fallback={<div>Loading App1...</div>}>
        <App1 />
      </Suspense>

      <br />

      <Suspense fallback={<div>Loading App2...</div>}>
        <App2 />
      </Suspense>
    </div>
  );
}

export default App;