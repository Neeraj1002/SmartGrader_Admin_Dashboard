//Third party import
import NextAuth from "next-auth";

//local import
import {options} from "./options"

const handler = NextAuth(options)

export {handler as GET, handler as POST}