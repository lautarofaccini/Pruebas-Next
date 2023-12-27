import { NextResponse } from "next/server";
console.log(process.env.TOKEN)
console.log(process.env.SECRET_KEY)


export async function GET() {
  // extract params
  // query database
  // communite with other services
  const res = await fetch("https://jsonplaceholder.typicode.com/users?apikey="+process.env.TOKEN);
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const {nombre, apellido} = await request.json();
  console.log(nombre, apellido)
  return NextResponse.json({ message: "creando datos" });
}

export function PUT() {
  return NextResponse.json({ message: "actualizando datos" });
}

export function DELETE() {
  return NextResponse.json({ message: "eliminando datos" });
}
