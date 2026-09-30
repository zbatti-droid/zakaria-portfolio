import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
const authorized=(request:Request)=>!!process.env.ADMIN_PASSWORD && request.headers.get("x-admin-password")===process.env.ADMIN_PASSWORD;
export async function PATCH(request:Request,{params}:{params:Promise<{id:string}>}){if(!authorized(request))return NextResponse.json({error:"Unauthorized"},{status:401});const {id}=await params;try{return NextResponse.json(await prisma.project.update({where:{id},data:await request.json()}));}catch{return NextResponse.json({error:"Project not found"},{status:404})}}
export async function DELETE(request:Request,{params}:{params:Promise<{id:string}>}){if(!authorized(request))return NextResponse.json({error:"Unauthorized"},{status:401});const {id}=await params;try{await prisma.project.delete({where:{id}});return NextResponse.json({ok:true});}catch{return NextResponse.json({error:"Project not found"},{status:404})}}
