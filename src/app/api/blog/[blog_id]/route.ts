export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(_: NextRequest, { params }: { params: Promise<{ blog_id: string }> }) {
  const { blog_id } = await params

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${blog_id}?populate=image`, {
      cache: 'no-store',
      method: 'GET',
    })

    const data = await res.json()

    return NextResponse.json({ success: true, data: data })
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Неизвестная ошибка' },
      { status: 500 },
    )
  }
}
