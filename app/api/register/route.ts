import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Registration from '../../../models/Registration';

export async function POST(req: Request) {
  try {
    const {
      fullName,
      email,
      phone,
      location,
      gender,
      whyJoin,
      consistencyAreas,
      otherArea,
      selectedPackage,
      commitment,
    } = await req.json();

    console.log('Received data:', {
      fullName,
      email,
      phone,
      location,
      gender,
      whyJoin,
      consistencyAreas,
      otherArea,
      selectedPackage,
      commitment,
    });

    
    if (!fullName || !email || !phone || !location || !gender || !whyJoin || !consistencyAreas?.length || !selectedPackage || !commitment) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    console.log('Connecting to MongoDB...');
    await dbConnect();
    

    const existingUser = await Registration.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'Email already registered' }, { status: 400 });
    }

    const user = new Registration({
      fullName,
      email,
      phone,
      location,
      gender,
      whyJoin,
      consistencyAreas,
      otherArea,
      selectedPackage,
      commitment,
    });

    
    await user.save();
   

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error: any) {
    
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { message: 'Validation error', errors: error.errors },
        { status: 400 }
      );
    }
    if (error.code === 'ECONNREFUSED' || error.syscall === 'querySrv') {
      return NextResponse.json(
        { message: 'Database connection failed. Please try again later.' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 }
    );
  }
}