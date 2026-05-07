import type { APIContext } from "astro";
import { generateAtom } from "@/utils/feed";

export async function GET(context: APIContext) {
    return generateAtom(context);
}
