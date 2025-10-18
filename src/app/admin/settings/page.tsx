"use client";

import { useState } from "react";

import { BellIcon, DatabaseIcon, LockIcon, PaletteIcon } from "lucide-react";

import { PageHeading } from "@/components/page-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function AdminSettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeading
        title="Admin Settings"
        description="Configure application settings and preferences"
      />

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <PaletteIcon className="text-muted-foreground h-5 w-5" />
                <CardTitle>Application Settings</CardTitle>
              </div>
              <CardDescription>
                Manage general application settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="app-name">Application Name</Label>
                <Input
                  id="app-name"
                  defaultValue="My App"
                  placeholder="Enter application name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="app-description">Description</Label>
                <Textarea
                  id="app-description"
                  defaultValue="A modern admin dashboard built with Next.js"
                  placeholder="Enter application description"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input
                  id="support-email"
                  type="email"
                  defaultValue="support@example.com"
                  placeholder="Enter support email"
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-muted-foreground text-sm">
                    Enable to show maintenance page to users
                  </p>
                </div>
                <Switch
                  checked={maintenanceMode}
                  onCheckedChange={setMaintenanceMode}
                />
              </div>

              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <LockIcon className="text-muted-foreground h-5 w-5" />
                <CardTitle>Security Settings</CardTitle>
              </div>
              <CardDescription>
                Configure security and access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="session-timeout">
                  Session Timeout (minutes)
                </Label>
                <Input
                  id="session-timeout"
                  type="number"
                  defaultValue="30"
                  placeholder="Enter session timeout"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-login-attempts">
                  Maximum Login Attempts
                </Label>
                <Input
                  id="max-login-attempts"
                  type="number"
                  defaultValue="5"
                  placeholder="Enter max attempts"
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-muted-foreground text-sm">
                    Require 2FA for all admin accounts
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Password Expiration</Label>
                  <p className="text-muted-foreground text-sm">
                    Require password change every 90 days
                  </p>
                </div>
                <Switch />
              </div>

              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BellIcon className="text-muted-foreground h-5 w-5" />
                <CardTitle>Notification Settings</CardTitle>
              </div>
              <CardDescription>Manage notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-muted-foreground text-sm">
                    Receive important updates via email
                  </p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-muted-foreground text-sm">
                    Receive push notifications in browser
                  </p>
                </div>
                <Switch
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Security Alerts</Label>
                  <p className="text-muted-foreground text-sm">
                    Get notified about security events
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>System Updates</Label>
                  <p className="text-muted-foreground text-sm">
                    Notifications for system updates
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <DatabaseIcon className="text-muted-foreground h-5 w-5" />
                <CardTitle>Advanced Settings</CardTitle>
              </div>
              <CardDescription>Advanced configuration options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-url">API Base URL</Label>
                <Input
                  id="api-url"
                  defaultValue="https://api.example.com"
                  placeholder="Enter API URL"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cache-duration">Cache Duration (seconds)</Label>
                <Input
                  id="cache-duration"
                  type="number"
                  defaultValue="3600"
                  placeholder="Enter cache duration"
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Debug Mode</Label>
                  <p className="text-muted-foreground text-sm">
                    Enable detailed logging for troubleshooting
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>API Rate Limiting</Label>
                  <p className="text-muted-foreground text-sm">
                    Enable rate limiting for API endpoints
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label className="text-destructive">Danger Zone</Label>
                <div className="border-destructive/50 space-y-3 rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-medium">Clear All Cache</p>
                      <p className="text-muted-foreground text-sm">
                        Remove all cached data
                      </p>
                    </div>
                    <Button variant="destructive" size="sm">
                      Clear Cache
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="font-medium">Reset to Defaults</p>
                      <p className="text-muted-foreground text-sm">
                        Reset all settings to default values
                      </p>
                    </div>
                    <Button variant="destructive" size="sm">
                      Reset Settings
                    </Button>
                  </div>
                </div>
              </div>

              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
