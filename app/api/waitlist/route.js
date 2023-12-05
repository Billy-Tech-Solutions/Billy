import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function POST(req) {
    try {
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        )
        const { email, company_name, company_type } = await req.json()
        const { data, error } = await supabase
            .from('waitlist')
            .insert({ email, company_type, company_name })
        if (error) {
            console.log('db error')
            return NextResponse.json(
                {
                    status: 500,
                    message: 'Server Error!',
                    data: 'Something went wrong with DB',
                },
                { status: 500 }
            )
        }
        return NextResponse.json(
            {
                status: 200,
                message: 'success',
                data: 'Inserted Successfully!',
            },
            { status: 200 }
        )
    } catch (e) {
        console.log(e)
        return NextResponse.json(
            {
                status: 500,
                message: 'Server Error!',
                data: e,
            },
            { status: 500 }
        )
    }
}
