export const GENERIC_PAGES = {
  'reporting-dashboard': {
    title: 'Reporting & Analytics Dashboard',
    description: 'Overview of key operational metrics and alerts.',
    stats: [
      { label: 'On-Time Rate', value: '94%' },
      { label: 'Avg Delay', value: '12m' },
      { label: 'Incidents', value: '3' }
    ],
    actions: [
      { label: 'Convoy Performance Report', to: '/reporting/performance' },
      { label: 'Delay Pattern Analysis', to: '/reporting/delays' },
      { label: 'Threat Incident Statistics', to: '/reporting/threat-stats' },
      { label: 'Go to Monitor Dashboard', to: '/monitoring' }
    ]
  },
  'reporting-performance': {
    title: 'Convoy Performance Report',
    description: 'Efficiency and effectiveness of convoys including route adherence.',
    actions: [
      { label: 'View Individual Convoy Report', to: '/reporting/individual' },
      { label: 'Back to Dashboard', to: '/reporting' }
    ]
  },
  'reporting-individual': {
    title: 'Individual Convoy Report',
    description: 'Detailed breakdown including timestamps and actual vs planned routes.',
    actions: [
      { label: 'View Live Map', to: '/monitoring/live-map' },
      { label: 'Back to Performance Report', to: '/reporting/performance' }
    ]
  },
  'reporting-delays': {
    title: 'Delay Pattern Analysis',
    description: 'Identify common causes and patterns of convoy delays.',
    actions: [{ label: 'Back to Dashboard', to: '/reporting' }]
  },
  'reporting-threats': {
    title: 'Threat Incident Statistics',
    description: 'Statistical data on threat incidents categorized by type and severity.',
    actions: [{ label: 'Back to Dashboard', to: '/reporting' }]
  },

  'user-dashboard': {
    title: 'User Management Dashboard',
    description: 'Manage accounts, roles, and permissions.',
    actions: [
      { label: 'Manage Users', to: '/users/manage' },
      { label: 'View Activity Log', to: '/users/activity' },
      { label: 'Go to Planning Hub', to: '/planning' }
    ]
  },
  'user-manage': {
    title: 'Manage Users',
    description: 'List of all registered users with search and filter options.',
    actions: [
      { label: 'Edit User Profile', to: '/users/edit/1' },
      { label: 'Assign Roles', to: '/users/roles' },
      { label: 'Set Permissions', to: '/users/permissions' },
      { label: 'Back to Dashboard', to: '/users' }
    ]
  },
  'user-edit': {
    title: 'Edit User Profile',
    description: 'Modify personal information, contact details, and account status.',
    actions: [{ label: 'Save & Back to Manage Users', to: '/users/manage' }]
  },
  'user-roles': {
    title: 'Assign Roles',
    description: 'Define levels of access and responsibility.',
    actions: [{ label: 'Back to Manage Users', to: '/users/manage' }]
  },
  'user-permissions': {
    title: 'Set Permissions',
    description: 'Granular control over specific actions.',
    actions: [{ label: 'Back to Manage Users', to: '/users/manage' }]
  },
  'user-activity': {
    title: 'User Activity Log',
    description: 'Audit trail of user actions and system events.',
    actions: [{ label: 'Back to Dashboard', to: '/users' }]
  }
};