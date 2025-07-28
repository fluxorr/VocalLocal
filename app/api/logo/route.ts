import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('VocalLocal');

        const businesses = await db
            .collection('businesses')
            .find({ logo: { $exists: true } }, { projection: { logo: 1, _id: 0 } })
            .toArray();

        const logos = businesses
            .filter(b => typeof b.logo === 'string' && b.logo.startsWith('data:image/'))
            .map(b => b.logo);

        if (!logos.length) {
            return NextResponse.json({ error: 'No logos found' }, { status: 404 });
        }

        return NextResponse.json({ logos });
    } catch {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
