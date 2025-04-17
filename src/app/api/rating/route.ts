import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/students-raitings?populate=quarters`, {
      cache: 'no-store',
      method: 'GET',
    })

    const data = await res.json()

    return NextResponse.json({ success: true, data: data })
  } catch (error) {
    console.log(error)
    NextResponse.json({ success: false , error: 500 })
  }
}
