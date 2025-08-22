import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const locale = searchParams.get('locale')
    const query = `${locale ? `locale=${locale}` : ''}`
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/students-raitings?${query}`, {
      cache: 'no-store',
      method: 'GET',
    })

    const data = await res.json()

    return NextResponse.json({ success: true, data: data })
  } catch (error) {
    console.log(error)

    return NextResponse.json({ success: false , error: 500 })
  }
}
