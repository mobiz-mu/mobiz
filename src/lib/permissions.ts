export type AppRole =
  | "super_admin"
  | "admin"
  | "editor"
  | "sales"
  | "finance"
  | "marketing"
  | "support";

export const roleLabels: Record<AppRole, string> = {
  super_admin: "Super Admin",
  admin: "Admin",
  editor: "Editor",
  sales: "Sales",
  finance: "Finance",
  marketing: "Marketing",
  support: "Support",
};

export const rolePermissions: Record<AppRole, string[]> = {
  super_admin: ["*"],
  admin: [
    "analytics.read",
    "leads.read",
    "leads.write",
    "blog.read",
    "blog.write",
    "banners.read",
    "banners.write",
    "users.read",
    "users.write",
    "quotations.read",
    "quotations.write",
    "invoices.read",
    "invoices.write",
    "proposals.read",
    "proposals.write",
  ],
  editor: ["blog.read", "blog.write", "banners.read", "banners.write"],
  sales: ["leads.read", "leads.write", "quotations.read", "quotations.write", "proposals.read", "proposals.write"],
  finance: ["invoices.read", "invoices.write", "quotations.read", "quotations.write"],
  marketing: ["analytics.read", "blog.read", "blog.write", "banners.read", "banners.write"],
  support: ["leads.read"],
};

export function hasPermission(role: AppRole, permission: string) {
  const permissions = rolePermissions[role];
  return permissions.includes("*") || permissions.includes(permission);
}
