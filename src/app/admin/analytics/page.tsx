"use client";

import {
  BarChart3Icon,
  LineChartIcon,
  PieChartIcon,
  TrendingUpIcon,
} from "lucide-react";

import { PageHeading } from "@/components/page-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

function MetricCard({
  title,
  value,
  change,
  isPositive,
  icon,
}: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="mt-2 flex items-center gap-1">
          <TrendingUpIcon
            className={`h-4 w-4 ${isPositive ? "text-green-500" : "rotate-180 text-red-500"}`}
          />
          <span
            className={`text-xs font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}
          >
            {change}
          </span>
          <span className="text-muted-foreground text-xs">vs last period</span>
        </div>
      </CardContent>
    </Card>
  );
}

const TRAFFIC_SOURCES = [
  { source: "Direct", visitors: 3420, percentage: 34 },
  { source: "Organic Search", visitors: 2890, percentage: 29 },
  { source: "Social Media", visitors: 2150, percentage: 21 },
  { source: "Referral", visitors: 980, percentage: 10 },
  { source: "Email", visitors: 560, percentage: 6 },
];

const TOP_PAGES = [
  { page: "/", views: 12453, bounceRate: "32%" },
  { page: "/products", views: 8932, bounceRate: "28%" },
  { page: "/about", views: 5421, bounceRate: "45%" },
  { page: "/contact", views: 3210, bounceRate: "52%" },
  { page: "/blog", views: 2891, bounceRate: "38%" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeading
        title="Analytics"
        description="Track performance and user behavior"
      />

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Page Views"
          value="45,231"
          change="+20.1%"
          isPositive
          icon={<BarChart3Icon className="text-muted-foreground h-4 w-4" />}
        />
        <MetricCard
          title="Unique Visitors"
          value="12,345"
          change="+15.3%"
          isPositive
          icon={<LineChartIcon className="text-muted-foreground h-4 w-4" />}
        />
        <MetricCard
          title="Avg. Session"
          value="4m 32s"
          change="+8.2%"
          isPositive
          icon={<PieChartIcon className="text-muted-foreground h-4 w-4" />}
        />
        <MetricCard
          title="Bounce Rate"
          value="42.3%"
          change="-5.4%"
          isPositive
          icon={<TrendingUpIcon className="text-muted-foreground h-4 w-4" />}
        />
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="traffic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
          <TabsTrigger value="pages">Top Pages</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>
                Where your visitors are coming from
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {TRAFFIC_SOURCES.map((source) => (
                  <div key={source.source} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {source.source}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground text-sm">
                          {source.visitors.toLocaleString()} visitors
                        </span>
                        <Badge variant="secondary">{source.percentage}%</Badge>
                      </div>
                    </div>
                    <div className="bg-secondary h-2 w-full rounded-full">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Pages</CardTitle>
              <CardDescription>
                Most visited pages in the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {TOP_PAGES.map((page, index) => (
                  <div
                    key={page.page}
                    className="flex items-center justify-between border-b pb-4 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-mono text-sm font-medium">
                          {page.page}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {page.views.toLocaleString()} views
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Bounce Rate</p>
                      <p className="text-muted-foreground text-sm">
                        {page.bounceRate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>User age demographics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { range: "18-24", percentage: 25 },
                    { range: "25-34", percentage: 35 },
                    { range: "35-44", percentage: 20 },
                    { range: "45-54", percentage: 12 },
                    { range: "55+", percentage: 8 },
                  ].map((age) => (
                    <div key={age.range} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{age.range}</span>
                        <Badge variant="secondary">{age.percentage}%</Badge>
                      </div>
                      <div className="bg-secondary h-2 w-full rounded-full">
                        <div
                          className="bg-primary h-full rounded-full"
                          style={{ width: `${age.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Types</CardTitle>
                <CardDescription>
                  Devices used to access your site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { device: "Desktop", percentage: 55 },
                    { device: "Mobile", percentage: 35 },
                    { device: "Tablet", percentage: 10 },
                  ].map((device) => (
                    <div key={device.device} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {device.device}
                        </span>
                        <Badge variant="secondary">{device.percentage}%</Badge>
                      </div>
                      <div className="bg-secondary h-2 w-full rounded-full">
                        <div
                          className="bg-primary h-full rounded-full"
                          style={{ width: `${device.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
