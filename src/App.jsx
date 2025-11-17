import Hero from './components/Hero'
import AdminOverview from './components/AdminOverview'
import EmployeeOverview from './components/EmployeeOverview'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <AdminOverview />
      <EmployeeOverview />
      <footer className="border-t mt-20">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} SyncZenith</p>
          <p>Fintech-inspired, glass morphic design</p>
        </div>
      </footer>
    </div>
  )
}

export default App
