import {
  ActivityIcon,
  DollarSignIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";

import { PageHeading } from "@/components/page-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

function StatCard({ title, value, description, icon, trend }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-muted-foreground text-xs">{description}</p>
        {trend && (
          <div className="mt-2 flex items-center gap-1">
            <TrendingUpIcon
              className={`h-4 w-4 ${trend.isPositive ? "text-green-500" : "rotate-180 text-red-500"}`}
            />
            <span
              className={`text-xs font-medium ${trend.isPositive ? "text-green-500" : "text-red-500"}`}
            >
              {trend.value}
            </span>
            <span className="text-muted-foreground text-xs">
              from last month
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

const RECENT_ORDERS = [
  {
    id: "ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    amount: "$249.99",
    status: "completed",
    avatar: "JD",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    amount: "$149.99",
    status: "processing",
    avatar: "JS",
  },
  {
    id: "ORD-003",
    customer: "Bob Johnson",
    email: "bob@example.com",
    amount: "$349.99",
    status: "completed",
    avatar: "BJ",
  },
  {
    id: "ORD-004",
    customer: "Alice Brown",
    email: "alice@example.com",
    amount: "$199.99",
    status: "pending",
    avatar: "AB",
  },
  {
    id: "ORD-005",
    customer: "Charlie Wilson",
    email: "charlie@example.com",
    amount: "$299.99",
    status: "completed",
    avatar: "CW",
  },
];

const STATUS_COLORS = {
  completed: "default",
  processing: "secondary",
  pending: "outline",
} as const;

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <PageHeading
        title="Admin Dashboard"
        description="Monitor and manage your application"
      />

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          description="Total revenue this month"
          icon={<DollarSignIcon className="text-muted-foreground h-4 w-4" />}
          trend={{ value: "+20.1%", isPositive: true }}
        />
        <StatCard
          title="Active Users"
          value="2,350"
          description="Active users this month"
          icon={<UsersIcon className="text-muted-foreground h-4 w-4" />}
          trend={{ value: "+15.3%", isPositive: true }}
        />
        <StatCard
          title="Total Orders"
          value="1,234"
          description="Orders placed this month"
          icon={<ShoppingCartIcon className="text-muted-foreground h-4 w-4" />}
          trend={{ value: "+8.2%", isPositive: true }}
        />
        <StatCard
          title="Activity Rate"
          value="89.2%"
          description="User engagement rate"
          icon={<ActivityIcon className="text-muted-foreground h-4 w-4" />}
          trend={{ value: "-2.4%", isPositive: false }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Orders */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              You have {RECENT_ORDERS.length} orders this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {RECENT_ORDERS.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="" />
                          <AvatarFallback>{order.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{order.customer}</div>
                          <div className="text-muted-foreground text-sm">
                            {order.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      {order.id}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          STATUS_COLORS[
                            order.status as keyof typeof STATUS_COLORS
                          ]
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {order.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions & Recent Activity */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" variant="default">
              <UsersIcon className="mr-2 h-4 w-4" />
              Manage Users
            </Button>
            <Button className="w-full" variant="outline">
              <ShoppingCartIcon className="mr-2 h-4 w-4" />
              View All Orders
            </Button>
            <Button className="w-full" variant="outline">
              <ActivityIcon className="mr-2 h-4 w-4" />
              Activity Logs
            </Button>
            <Button className="w-full" variant="outline">
              <DollarSignIcon className="mr-2 h-4 w-4" />
              Financial Reports
            </Button>

            <div className="pt-4">
              <h4 className="mb-4 text-sm font-medium">Recent Activity</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">New user registered</p>
                    <p className="text-muted-foreground text-xs">
                      2 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-green-500" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">Order #1234 completed</p>
                    <p className="text-muted-foreground text-xs">
                      15 minutes ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">System backup initiated</p>
                    <p className="text-muted-foreground text-xs">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-purple-500" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">Database optimized</p>
                    <p className="text-muted-foreground text-xs">3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
