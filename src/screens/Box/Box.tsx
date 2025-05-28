import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export const Box = (): JSX.Element => {
  // Data for the dashboard metrics
  const metrics = [
    { title: "Total Revenue", value: "$45,231.89", change: "+20.1%" },
    { title: "Subscriptions", value: "+2350", change: "+180.1%" },
    { title: "Sales", value: "+12,234", change: "+19.5%" },
    { title: "Active Users", value: "+573", change: "+201.2%" },
  ];

  // Data for recent sales
  const recentSales = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
    },
    { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+$299.00",
    },
    { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
    { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-800 p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-8 rounded-full bg-blue-500"></div>
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>

        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Analytics
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Reports
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Settings
          </Button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline">Download</Button>
            <Avatar>
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-gray-400">{metric.title}</p>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-2xl font-bold">{metric.value}</h3>
                        <Badge
                          variant="outline"
                          className="bg-green-900 text-green-400"
                        >
                          {metric.change}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts and Recent Sales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Overview</h3>
                  <div className="h-[240px] flex items-end gap-2">
                    {[40, 30, 70, 80, 50, 60, 30, 90, 40, 60, 50, 70].map(
                      (height, i) => (
                        <div
                          key={i}
                          className="bg-blue-500 rounded-sm w-full"
                          style={{ height: `${height}%` }}
                        ></div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Recent Sales</h3>
                  <div className="space-y-4">
                    {recentSales.map((sale, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>{sale.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{sale.name}</p>
                          <p className="text-sm text-gray-400">{sale.email}</p>
                        </div>
                        <p className="font-medium text-green-400">
                          {sale.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Card */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Task 1</span>
                      <span className="text-sm">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Task 2</span>
                      <span className="text-sm">40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Task 3</span>
                      <span className="text-sm">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
