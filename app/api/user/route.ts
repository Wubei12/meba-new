"use server";

import { cookies } from "next/headers";
import { COOKIE_NAME } from "@/constants";

const cookieStore = cookies();

export const token = cookieStore.get(COOKIE_NAME);
