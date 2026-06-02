import React, { Suspense } from "react";

const Home = React.lazy(() => import("homeapp/Home"));
const Card = React.lazy(() => import("cardapp/Card"));

function App() {
  return (
    <>
      <h1>Container App</h1>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Home />
        <Card />
      </Suspense>
    </>
  );
}

export default App;