const mapping: Record<string, string> = {
  drills: 'drill',
  'drill-results': 'drill_result',
  'observer-requests': 'observer_request',
  organizations: 'organization',
  scenarios: 'scenario',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
