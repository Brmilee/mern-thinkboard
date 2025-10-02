import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="forest" className="min-h-screen bg-base-200">
      {/* <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path ="/create" element={<CreatePage />} />
        <Route path ="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;