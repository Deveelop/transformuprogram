import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Registration from '../../../models/Registration';
import { MongoError } from 'mongodb';
import mongoose from 'mongoose';

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

   
    if (!fullName || !email || !phone || !location || !gender || !whyJoin || !consistencyAreas?.length || !selectedPackage || !commitment) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

  
    await dbConnect();
    console.log('MongoDB connection successful');

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
  } catch (error: unknown) {
    
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { message: 'Validation error', errors: error.errors },
        { status: 400 }
      );
    }

  
    if (error instanceof MongoError) {
      if (error.code === 11000) {
        return NextResponse.json(
          { message: 'Email already registered' },
          { status: 400 }
        );
      }
    }

    
    if (error instanceof Error && 'code' in error && 'syscall' in error) {
      const networkError = error as Error & { code: unknown; syscall: unknown };
      if (networkError.code === 'ECONNREFUSED' || networkError.syscall === 'querySrv') {
        return NextResponse.json(
          { message: 'Database connection failed. Please try again later.' },
          { status: 500 }
        );
      }
    }

  
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { message: 'Internal server error', error: errorMessage },
      { status: 500 }
    );
  }
}