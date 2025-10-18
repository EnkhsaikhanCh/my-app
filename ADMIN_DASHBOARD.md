# Admin Dashboard

A comprehensive admin dashboard built with Next.js 15, TypeScript, and shadcn/ui components.

## Features

### 📊 Overview Dashboard (`/admin`)

- **Statistics Cards**: Real-time metrics for revenue, users, orders, and activity rates
- **Recent Orders Table**: View and manage the latest orders with status indicators
- **Quick Actions**: Fast access to common administrative tasks
- **Activity Feed**: Real-time system activity logs

### 👥 User Management (`/admin/users`)

- **User Table**: Complete list of all registered users
- **Search & Filter**: Find users by name or email
- **User Statistics**: Active users, inactive users, and totals
- **User Actions**: Edit, view details, and manage user accounts
- **Role Management**: Admin, Moderator, and User roles with visual badges

### 📈 Analytics (`/admin/analytics`)

- **Key Metrics**: Page views, unique visitors, session duration, and bounce rate
- **Traffic Sources**: Visualize where your visitors come from
- **Top Pages**: Most visited pages with bounce rates
- **Demographics**: Age distribution and device type breakdowns
- **Tabbed Interface**: Organized data presentation

### ⚙️ Admin Settings (`/admin/settings`)

- **General Settings**: App name, description, support email, maintenance mode
- **Security**: Session timeout, login attempts, 2FA, password policies
- **Notifications**: Email, push, security alerts, and system updates
- **Advanced**: API configuration, cache settings, debug mode, danger zone

## Structure

```
src/app/admin/
├── page.tsx              # Overview dashboard
├── layout.tsx            # Admin layout wrapper
├── users/
│   └── page.tsx          # User management
├── analytics/
│   └── page.tsx          # Analytics dashboard
└── settings/
    └── page.tsx          # Admin settings
```

## Navigation

The admin section is integrated into the main app sidebar with a dedicated "Admin" section:

- **Overview** - Main admin dashboard
- **Users** - User management interface
- **Analytics** - Performance analytics
- **Settings** - Admin configuration

## Components Used

### shadcn/ui Components

- `Card` - Container components for content sections
- `Table` - Data display for orders and users
- `Badge` - Status indicators for orders, users, and roles
- `Button` - Interactive elements and actions
- `Input` - Form inputs for settings
- `Switch` - Toggle controls
- `Tabs` - Organized content presentation
- `Avatar` - User profile pictures
- `DropdownMenu` - Action menus
- `Separator` - Visual dividers

### Custom Components

- `PageHeading` - Consistent page titles and descriptions

## Styling

- Uses Tailwind CSS v4 with custom theme variables
- Responsive design with mobile-first approach
- Dark mode support via `next-themes`
- Consistent spacing and typography

## Data

Currently uses mock data for demonstration purposes. Replace with your actual data sources:

- `RECENT_ORDERS` in `/admin/page.tsx`
- `MOCK_USERS` in `/admin/users/page.tsx`
- `TRAFFIC_SOURCES`, `TOP_PAGES` in `/admin/analytics/page.tsx`

## Next Steps

1. **Connect to Real Data**: Replace mock data with API calls or database queries
2. **Add Authentication**: Implement role-based access control
3. **Real-time Updates**: Add WebSocket connections for live data
4. **Export Features**: Add CSV/PDF export functionality
5. **Charts**: Integrate chart libraries (Recharts is already available via shadcn/ui)
6. **Filters & Search**: Enhance filtering capabilities
7. **Pagination**: Add pagination for large datasets
8. **Form Validation**: Implement Zod schemas for settings forms

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Package Manager**: Bun

## Development

```bash
# Run development server
bun run dev

# Build for production
bun run build

# Lint code
bun run lint
```

## Routes

- `/admin` - Admin dashboard overview
- `/admin/users` - User management
- `/admin/analytics` - Analytics dashboard
- `/admin/settings` - Admin settings
