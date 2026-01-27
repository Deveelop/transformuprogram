'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { X } from 'lucide-react';
const BTC_ADDRESS = "bc1qexamplebtcwalletaddress123";
interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  gender: string;
  whyJoin: string;
  consistencyAreas: string;
  otherArea: string;
  selectedPackage: string;
  commitment: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ isOpen, onClose, selectedPackage }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    gender: '',
    whyJoin: '',
    consistencyAreas: '', 
    otherArea: '',
    selectedPackage: selectedPackage || '',
    commitment: false,
  });

  const [step, setStep] = useState<'form' | 'payment'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
   const [timeLeft, setTimeLeft] = useState(300); // 5 mins
  const [copied, setCopied] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      if (timeLeft <= 0) {
        onClose();
        return;
      }
  
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(timer);
    }, [timeLeft, onClose]);
  
    const copyAddress = async () => {
      await navigator.clipboard.writeText(BTC_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
  
   
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");

  const consistencyOptions = [
    'Trading Strategies',
    'Analytical Areas',
    'Asset Classes',
    'AI and Utilities',
    'Other',
  ];

  const packages = [
    { id: 'Starter', name: 'Starter', price: '$3,000', description: '15 percent 6 months' },
    { id: 'Advance', name: 'Advance', price: '$7,000', description: '15 percent 6 months' },
    { id: 'VIP', name: 'VIP', price: '$10,000', description: '15 percent 6 months' },
  ];

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleConsistencyAreaChange = (area: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      consistencyAreas: checked ? area : prev.consistencyAreas === area ? '' : prev.consistencyAreas,
    }));
  };

  const handlePackageChange = (packageId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      selectedPackage: checked ? packageId : prev.selectedPackage === packageId ? '' : prev.selectedPackage,
    }));
  };

  const isFormValid = () =>
    formData.fullName &&
    formData.email &&
    formData.phone &&
    formData.location &&
    formData.gender &&
    formData.whyJoin &&
    formData.consistencyAreas !== '' && // Updated to check for non-empty string
    formData.selectedPackage &&
    formData.commitment;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      setSubmitMessage('Please fill all required fields.');
       setSuccess(true);
      setTimeout(onClose, 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response) {
        setSubmitMessage('Registration successful!');
        setStep('payment');
      } else {
        setSubmitMessage(data.message || 'Registration failed. Please try again.');
      }
    } catch (error: unknown) {
      console.error('Form submission error:', error);
      setSubmitMessage('Network error. Please check your connection and try again.');
    }

    setIsSubmitting(false);
  };

  const handleWhatsAppRedirect = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+14065032086';
    const message = `Please confirm this Receipt`;
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    onClose();
  };

  if (!isOpen) return null;

  const selectedPkg = packages.find((pkg) => pkg.id === formData.selectedPackage);
  const price = selectedPkg ? selectedPkg.price : 'N/A';

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2"
            onClick={onClose}
          >
            <X className="w-4 h-4 text-red-800" />
          </Button>
          <CardTitle className="text-2xl text-center text-[#075326]">
            {step === 'form' ? ' Join Tesla Crypto Growth Program  Official Platform' : 'Payment Details'}
          </CardTitle>
          <CardDescription className="text-center text-black">
            {step === 'form' ? 'Fill out the form below to begin your investment journey' : 'Please make payment and send receipt'}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4 text-black">
                <h3 className="text-lg font-semibold text-[#075326]">Personal Information</h3>

                <div className="space-y-2">
                  <Label className="font-bold" htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-bold" htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-bold" htmlFor="phone">Crypto deposit (BTC) *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your choice coin"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-bold" htmlFor="location">Location (State/Country) *</Label>
                  <Input
                    id="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Enter your state/country"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-bold" htmlFor="gender">Gender *</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => handleInputChange('gender', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#075326]">Are you an investor</h3>

                <div className="space-y-2 text-black placeholder-gray-500">
                  <Label className="font-bold" htmlFor="whyJoin">Yes or No? *</Label>
                  <Textarea
                    id="whyJoin"
                    required
                    value={formData.whyJoin}
                    onChange={(e) => handleInputChange('whyJoin', e.target.value)}
                    placeholder="Tell us about your motivation and goals..."
                    rows={4}
                  />
                </div>

                <div className="space-y-3 text-black">
                  <Label className="font-bold">What&apos;s one area you know about crypto investment? *</Label>
                  {consistencyOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={option}
                        name="consistencyArea"
                        checked={formData.consistencyAreas === option}
                        onChange={(e) => handleConsistencyAreaChange(option, e.target.checked)}
                      />
                      <Label htmlFor={option} className="text-sm font-normal">
                        {option}
                      </Label>
                    </div>
                  ))}

                  {formData.consistencyAreas === 'Other' && (
                    <div className="ml-6 space-y-2">
                      <Label htmlFor="otherArea">Please specify:</Label>
                      <Input
                        id="otherArea"
                        type="text"
                        value={formData.otherArea}
                        onChange={(e) => handleInputChange('otherArea', e.target.value)}
                        placeholder="Tell us what you know about crypto investment"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#075326]">Choose Your package by checking the box.*</h3>

                {packages.map((pkg) => (
                  <div key={pkg.id} className="border rounded-lg p-4 text-black">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id={pkg.id}
                        checked={formData.selectedPackage === pkg.id}
                        onCheckedChange={(checked) => handlePackageChange(pkg.id, !!checked)}
                      />
                      <div className="flex-1">
                        <Label htmlFor={pkg.id} className="text-base font-semibold cursor-pointer">
                          {pkg.name} – {pkg.price}
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#075326]">T&C applies</h3>

                <div className="flex items-start space-x-3 text-red-800">
                  <Checkbox
                    id="commitment"
                    required
                    checked={formData.commitment}
                    onCheckedChange={(checked) => handleInputChange('commitment', !!checked)}
                  />
                  <Label htmlFor="commitment" className="text-sm font-normal">
                    I agree*
                  </Label>
                </div>
              </div>

              {submitMessage && (
                <div
                  className={`p-3 rounded-lg text-center ${
                    submitMessage.includes('successful')
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-[#ffcd1b] cursor-pointer text-white py-3 text-lg font-semibold"
                disabled={isSubmitting || !isFormValid()}
              >
                {isSubmitting ? 'Registering...' : 'Register Now'}
              </Button>
            </form>
          ) : (
             <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md text-center">
        {!success ? (
          <>
            <h2 className="text-xl font-semibold mb-3 text-green-900">
              Complete Your BTC Deposit
            </h2>
            <label className='text-black text-sm italic'>Copy link below carefully and head over to your Centralized Cryptocurrency Exchange(CEX)</label>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
              <span className="text-sm break-all text-black font-medium">{BTC_ADDRESS}</span>
              <button onClick={copyAddress} className="text-blue-600 text-sm">
                Copy
              </button>
            </div>

            {copied && (
              <p className="text-green-600 text-sm mt-2">
                Wallet address copied
              </p>
            )}

            <p className="text-red-600 font-bold mt-4">
              Time left: {minutes}:{seconds}
            </p>

            <div className="mt-4 font-bold text-black">
           Tesla Crypto Growth Program - Official Platform
            </div>

            <button
             
              className="mt-5 w-full bg-green-600 text-white py-2 rounded"
            >
              I Have Made Payment
            </button>
          </>
        ) : (
          <p className="text-green-600 font-semibold">
            ✅ Payment submitted successfully. Verification in progress.
          </p>
        )}
      </div>
    </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
