import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
    const body = await req.json();
    const { name, logo } = body;

    try {
        const client = await clientPromise;
        const db = client.db('VocalLocal');
        await db.collection('businesses').insertOne({ name, logo });

        return NextResponse.json({ message: 'Saved' });
    } catch (err) {
        return NextResponse.json({ error: 'DB insert failed' }, { status: 500 });
    }
}
