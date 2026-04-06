import {
  BarChart3,
  BookText,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  Images,
  LayoutDashboard,
  Mail,
  Settings,
  Star,
  Users,
  BriefcaseBusiness,
  FolderKanban,
} from "lucide-react";

export type DashboardNavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const dashboardNav: DashboardNavItem[] = [
  { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { title: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { title: "Leads", href: "/dashboard/leads", icon: Users },
  { title: "Customers", href: "/dashboard/customers", icon: BriefcaseBusiness },
  { title: "Quotations", href: "/dashboard/quotations", icon: FileCheck2 },
  { title: "Invoices", href: "/dashboard/invoices", icon: FileSpreadsheet },
  { title: "Proposals", href: "/dashboard/proposals", icon: FileText },
  { title: "Banners", href: "/dashboard/banners", icon: Images },
  { title: "Newsletters", href: "/dashboard/newsletters", icon: Mail },
  { title: "Blog", href: "/dashboard/blog", icon: BookText },
  { title: "Testimonials", href: "/dashboard/testimonials", icon: Star },
  { title: "Portfolio", href: "/dashboard/portfolio", icon: FolderKanban },
  { title: "Users", href: "/dashboard/users", icon: Users },
  { title: "Settings", href: "/dashboard/settings", icon: Settings },
];