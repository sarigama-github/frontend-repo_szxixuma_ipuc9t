import { useEffect, useState } from 'react'

export default function EmployeeOverview() {
  const [payslips, setPayslips] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${backend}/api/payslips`).then(r => r.json()).then(setPayslips).catch(()=>setPayslips([]))
  }, [])

  return (
    <section id="employee" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-900">Employee Self-Service</h2>
      <p className="text-gray-600 mt-1">Access your recent payslips and contributions.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-white p-6 shadow">
          <h3 className="font-semibold text-gray-900">Recent Payslips</h3>
          <ul className="mt-4 space-y-2">
            {payslips.slice(0,5).map(ps => (
              <li key={ps._id} className="flex items-center justify-between rounded-lg border p-3">
                <span>{ps.payrollMonth}</span>
                <span className="font-medium">₹{ps.netSalary}</span>
              </li>
            ))}
            {payslips.length === 0 && <p className="text-gray-500">No payslips yet.</p>}
          </ul>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow">
          <h3 className="font-semibold text-gray-900">EPF / ESI</h3>
          <p className="text-gray-600 mt-2">Track contributions with your HR team. Charting can be added later.</p>
        </div>
      </div>
    </section>
  )
}
