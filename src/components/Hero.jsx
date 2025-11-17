import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="backdrop-blur-xl bg-white/60 rounded-2xl shadow-xl p-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">SyncZenith</h1>
          <p className="mt-4 text-lg text-gray-700">Unified Payroll Management with HRMS and CRM integration. Process payrolls, manage employees, and deliver payslips with confidence.</p>
          <div className="mt-6 flex gap-4">
            <a href="#admin" className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700 transition">Admin/HR</a>
            <a href="#employee" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-indigo-700 font-semibold shadow border border-indigo-200 hover:bg-indigo-50 transition">Employee</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
    </section>
  )
}
