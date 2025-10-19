import { NextResponse } from "next/server";
import { AFFILIATE_URL } from "../../../config";

export async function GET(request) {
  // Optional: append query params if you want to preserve UTM
  const { searchParams } = new URL(request.url);
  // Simple server-side log (shows in Vercel Functions logs)
  console.log("affiliate click", {
    plan: searchParams.get("plan"),
    utm_source: searchParams.get("utm_source"),
    utm_campaign: searchParams.get("utm_campaign"),
    at: new Date().toISOString(),
  });

  return NextResponse.redirect(AFFILIATE_URL || "https://www.fiverr.com/", 302);
}
