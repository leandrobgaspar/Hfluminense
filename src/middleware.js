// src/middleware.js
import { NextResponse } from 'next/server';

const maintenancePaths = ['/maintenance', '/_next', '/api'];

export function middleware(req) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // Evita redirecionar a página de manutenção e rotas internas
  if (maintenancePaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const isMaintenanceEnabled = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  if (isMaintenanceEnabled) {
    url.pathname = '/maintenance';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
