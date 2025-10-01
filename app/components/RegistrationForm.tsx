'use client'

import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { X } from 'lucide-react';

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
  consistencyAreas: string[];
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
    consistencyAreas: [],
    otherArea: '',
    selectedPackage: selectedPackage || '',
    commitment: false,
  });

  const [step, setStep] = useState<'form' | 'payment'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const consistencyOptions = [
    'Spiritual Growth',
    'Health & Fitness',
    'Career/Business',
    'Personal Habits (reading, journaling, etc.)',
    'Other',
  ];

  const packages = [
    { id: 'Explorer Path', name: 'Explorer Path', price: '₦3,000', description: 'First steps with daily guidance' },
    { id: 'Trailblazer Path', name: 'Trailblazer Path', price: '₦7,000', description: 'Most Popular: system + accountability + community' },
    { id: 'Mastery Path', name: 'Mastery Path', price: '₦10,000', description: 'Full access, mentorship, recognition' },
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
      consistencyAreas: checked
        ? [...prev.consistencyAreas, area]
        : prev.consistencyAreas.filter((item) => item !== area),
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
    formData.consistencyAreas.length > 0 &&
    formData.selectedPackage &&
    formData.commitment;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      setSubmitMessage('Please fill all required fields.');
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

    

      if (response.ok) {
        setSubmitMessage('Registration successful!');
        setStep('payment');
      } else {
        setSubmitMessage(data.message || 'Registration failed. Please try again.');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitMessage('Network error. Please check your connection and try again.');
    }

    setIsSubmitting(false);
  };

  const handleWhatsAppRedirect = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+2349033317004';
    const message = `Receipt for ${formData.selectedPackage} payment from ${formData.fullName}`;
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
            {step === 'form' ? 'Join the 90-Day Consistency Journey' : 'Payment Details'}
          </CardTitle>
          <CardDescription className="text-center text-black">
            {step === 'form' ? 'Fill out the form below to begin your transformation' : 'Please make payment and send receipt'}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-4 text-black">
                <h3 className="text-lg font-semibold text-[#075326]">Personal Information</h3>

                <div className="space-y-2">
                  <Label className='font-bold' htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2 ">
                  <Label className='font-bold' htmlFor="email">Email Address *</Label>
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
                  <Label className='font-bold' htmlFor="phone">Phone Number (WhatsApp preferred) *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label className='font-bold' htmlFor="location">Location (State/Country) *</Label>
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
                  <Label className='font-bold' htmlFor="gender">Gender *</Label>
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
                <h3 className="text-lg font-semibold text-[#075326]">Your Journey</h3>

                <div className="space-y-2 text-black placeholder-gray-500">
                  <Label className='font-bold ' htmlFor="whyJoin">Why do you want to join the 90 Days Consistency Journey? *</Label>
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
                  <Label className='font-bold'>What's one area you want to stay consistent in? *</Label>
                  {consistencyOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={formData.consistencyAreas.includes(option)}
                        onCheckedChange={(checked) => handleConsistencyAreaChange(option, !!checked)}
                      />
                      <Label htmlFor={option} className="text-sm font-normal">
                        {option}
                      </Label>
                    </div>
                  ))}

                  {formData.consistencyAreas.includes('Other') && (
                    <div className="ml-6 space-y-2">
                      <Label htmlFor="otherArea">Please specify:</Label>
                      <Input
                        id="otherArea"
                        type="text"
                        value={formData.otherArea}
                        onChange={(e) => handleInputChange('otherArea', e.target.value)}
                        placeholder="Specify your area of focus"
                      />
                    </div>
                  )}
                </div>
              </div>

             
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#075326]">Choose Your Path (Packages) *</h3>

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
                <h3 className="text-lg font-semibold text-[#075326]">Commitment</h3>

                <div className="flex items-start space-x-3 text-red-800">
                  <Checkbox
                    id="commitment"
                    required
                    checked={formData.commitment}
                    onCheckedChange={(checked) => handleInputChange('commitment', !!checked)}
                  />
                  <Label htmlFor="commitment" className="text-sm font-normal">
                    I commit to show up daily and give my best for 90 days. *
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
                className="w-full bg-[#ffcd1b]  cursor-pointer text-white py-3 text-lg font-semibold"
                disabled={isSubmitting || !isFormValid()}
              >
                {isSubmitting ? 'Registering...' : 'Register Now'}
              </Button>
            </form>
          ) : (
            <div className="space-y-6 text-center">
              <p className="text-lg">
                Please make payment of <strong>{price}</strong> for <strong>{selectedPkg?.name}</strong> to the following account:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg space-y-2">
                <p><strong>Bank Name:</strong> Kuda MFB</p>
                <p><strong>Account No.:</strong> 2007894244</p>
                <p><strong>Account Name:</strong> Peter Achadu Abah</p>
              </div>
              <p className="text-sm text-gray-600">
                After making the payment, click the button below to send your payment receipt via WhatsApp.
              </p>
              <Button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
              >
                Send Receipt via WhatsApp
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;