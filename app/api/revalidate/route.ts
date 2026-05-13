import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
  }
  const { path = "/" } = await request.json().catch(() => ({ path: "/" }));
  revalidatePath(path);
  return NextResponse.json({ revalidated: true, path });
}
