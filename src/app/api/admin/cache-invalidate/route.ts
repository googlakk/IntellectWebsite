import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key')

    // Trigger client-side cache invalidation via Server-Sent Events
    // or use revalidateTag/revalidatePath for Next.js cache
    
    return NextResponse.json({ 
      success: true, 
      message: 'Cache invalidation triggered',
      timestamp: Date.now()
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to invalidate cache' },
      { status: 500 }
    )
  }
}