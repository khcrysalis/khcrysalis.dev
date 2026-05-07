import type { APIContext } from "astro";
import { generateRSS } from "@/utils/feed";

export async function GET(context: APIContext) {
    return generateRSS(context);
}
