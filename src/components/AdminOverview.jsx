import { useEffect, useState } from 'react'

export default function AdminOverview() {
  const [summary, setSummary] = useState(null)
  const [status, setStatus] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${backend}/test`).then(r => r.json()).then(setStatus).catch(() => setStatus(null))
    const month = new Date().toISOString().slice(0,7)
    fetch(`${backend}/api/reports/summary?month=${month}`).then(r => r.json()).then(setSummary).catch(() => setSummary(null))
  }, [])

  return (
    <section id="admin" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-900">Admin / HR Dashboard</h2>
      <p className="text-gray-600 mt-1">Quick view into payroll health and HRMS status.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-white p-6 shadow">
          <p className="text-sm text-gray-500">Processed</p>
          <p className="mt-2 text-3xl font-semibold">{summary?.counts?.processed ?? 0}</p>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow">
          <p className="text-sm text-gray-500">Total</p>
          <p className="mt-2 text-3xl font-semibold">{summary?.counts?.total ?? 0}</p>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow">
          <p className="text-sm text-gray-500">Sent</p>
          <p className="mt-2 text-3xl font-semibold">{summary?.counts?.sent ?? 0}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-white p-6 shadow">
          <h3 className="font-semibold text-gray-900">Monthly totals</h3>
          <p className="text-gray-600 mt-2">Gross: ₹{summary?.totals?.gross?.toLocaleString?.() ?? 0}</p>
          <p className="text-gray-600">Net: ₹{summary?.totals?.net?.toLocaleString?.() ?? 0}</p>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow">
          <h3 className="font-semibold text-gray-900">HRMS Connection</h3>
          <p className="text-gray-600 mt-2">{status?.connection_status || 'Unknown'}</p>
          <button onClick={async () => {
            await fetch(`${backend}/api/hrms/sync`, { method: 'POST' })
            const month = new Date().toISOString().slice(0,7)
            const s = await fetch(`${backend}/api/reports/summary?month=${month}`).then(r=>r.json())
            setSummary(s)
          }} className="mt-4 inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700">Sync HRMS</button>
        </div>
      </div>
    </section>
  )
}
