import React from "react";
import StickyHeader from "./components/StickyHeader";
const App = () => {
    return (
        <div>
            <StickyHeader />
            <main className="pt-20">
                <h2 className="text-2xl p-4">Content Below the Header</h2>
                <div className="h-screen"></div>
            </main>
        </div>
    );
};

export default App;
