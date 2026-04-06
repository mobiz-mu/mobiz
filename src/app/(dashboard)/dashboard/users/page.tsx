const users = [
  {
    name: "Moganaden Cluthan",
    role: "Super Admin",
    status: "Active",
  },
  {
    name: "Content Manager",
    role: "Editor",
    status: "Active",
  },
  {
    name: "Sales Operator",
    role: "Sales",
    status: "Pending",
  },
];

export default function UsersPage() {
  return (
    <main className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Users
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
              Manage dashboard access and role permissions
            </h2>
          </div>

          <button className="rounded-full bg-[#071226] px-5 py-3 text-sm font-semibold text-white">
            Invite User
          </button>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-slate-500">
                <th className="px-4">Name</th>
                <th className="px-4">Role</th>
                <th className="px-4">Status</th>
                <th className="px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.name} className="bg-slate-50">
                  <td className="rounded-l-2xl px-4 py-4 font-medium text-[#071226]">
                    {user.name}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{user.role}</td>
                  <td className="px-4 py-4 text-sm text-slate-700">{user.status}</td>
                  <td className="rounded-r-2xl px-4 py-4 text-sm text-slate-700">
                    Manage
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}