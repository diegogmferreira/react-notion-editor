import { Editor } from "./components/Editor"

function App() {

  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800">
      <div className="bg-white w-[1100px] mx-auto min-h-[700px] shadow-sm rounded-2xl border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>

        <main className="p-4">
          <div className="max-w-[700px] mx-auto pt-16 prose prose-violet">
            <Editor />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
