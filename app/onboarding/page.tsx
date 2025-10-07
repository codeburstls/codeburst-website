"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, User, FileText, Shield, Rocket, Upload, AlertCircle } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Client Information",
    description: "Basic information and KYC documentation",
    icon: <User className="h-8 w-8 text-blue-500" />,
  },
  {
    id: 2,
    title: "Project Details",
    description: "Define your project scope and requirements",
    icon: <FileText className="h-8 w-8 text-blue-500" />,
  },
  {
    id: 3,
    title: "Legal & Compliance",
    description: "Review and accept legal agreements",
    icon: <Shield className="h-8 w-8 text-blue-500" />,
  },
  {
    id: 4,
    title: "Final Setup",
    description: "Complete onboarding and project initiation",
    icon: <Rocket className="h-8 w-8 text-blue-500" />,
  },
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Client Information
    fullName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    address: "",
    country: "",
    idDocument: null as File | null,
    proofOfAddress: null as File | null,

    // Project Details
    projectType: "",
    projectScope: "",
    budget: "",
    timeline: "",
    technicalRequirements: "",
    isFintech: false,
    communicationPreference: "",
    technicalContact: "",

    // Legal & Compliance
    ndaSigned: false,
    eulaAccepted: false,
    termsAccepted: false,
    humanRightsAcknowledged: false,
    securityProtocolsAgreed: false,

    // Payment & Compensation
    paymentMethod: "",
    depositAgreed: false,
    compensationType: "",

    // Additional Information
    additionalNotes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleFileChange = (name: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [name]: file }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Onboarding completed:", formData)
    alert("Welcome to CodeBurst! Our team will review your application and contact you within 24 hours.")
  }

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Client Onboarding</h1>
          <p className="text-lg text-gray-600">CodeBurst Pty Ltd - Your Digital Transformation Partner</p>
          <div className="mt-4 text-sm text-gray-500">
            <p>Business ID: 200105876-3 | Registration No.: 74411</p>
            <p>Maseru East, Lesotho</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 M{
                    currentStep >= step.id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {currentStep > step.id ? <CheckCircle className="h-6 w-6" /> : step.icon}
                </div>
                <span className="text-sm text-gray-600 text-center">{step.title}</span>
                {index < steps.length - 1 && (
                  <div className={`h-1 w-full mt-2 M{currentStep > step.id ? "bg-blue-500" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-blue-600">{steps[currentStep - 1].title}</CardTitle>
            <CardDescription>{steps[currentStep - 1].description}</CardDescription>
          </CardHeader>
          <CardContent>
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900">KYC Requirements</h4>
                      <p className="text-sm text-blue-800">
                        Please provide government-issued ID and proof of address for compliance purposes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+266 XXXX XXXX"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                      Position/Title
                    </label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Your role/position"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country *
                    </label>
                    <Select onValueChange={(value: string) => handleSelectChange("country", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lesotho">Lesotho</SelectItem>
                        <SelectItem value="south-africa">South Africa</SelectItem>
                        <SelectItem value="botswana">Botswana</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Physical Address *
                  </label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your full address"
                    rows={3}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Government-issued ID *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload ID document (PDF, JPG, PNG)</p>
                      <Input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange("idDocument", e.target.files?.[0] || null)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Proof of Address *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload utility bill or bank statement</p>
                      <Input
                      
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange("proofOfAddress", e.target.files?.[0] || null)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type *
                  </label>
                  <Select onValueChange={(value: string) => handleSelectChange("projectType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-app">Mobile Application</SelectItem>
                      <SelectItem value="blockchain">Blockchain Solution</SelectItem>
                      <SelectItem value="ai-ml">AI/Machine Learning</SelectItem>
                      <SelectItem value="enterprise">Enterprise Software</SelectItem>
                      <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="projectScope" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Scope & Description *
                  </label>
                  <Textarea
                    id="projectScope"
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleInputChange}
                    placeholder="Describe your project requirements, goals, and expected outcomes"
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Budget Range *
                    </label>
                    <Select onValueChange={(value: string) => handleSelectChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under M10,000</SelectItem>
                        <SelectItem value="10k-25k">M10,000 - M25,000</SelectItem>
                        <SelectItem value="25k-50k">M25,000 - M50,000</SelectItem>
                        <SelectItem value="50k-100k">M50,000 - M100,000</SelectItem>
                        <SelectItem value="over-100k">Over M100,000</SelectItem>
                        <SelectItem value="flexible">Flexible/Alternative Compensation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Timeline *
                    </label>
                    <Select onValueChange={(value: string) => handleSelectChange("timeline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="over-12-months">Over 12 months</SelectItem>
                        <SelectItem value="ongoing">Ongoing partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="technicalRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                    Technical Requirements
                  </label>
                  <Textarea
                    id="technicalRequirements"
                    name="technicalRequirements"
                    value={formData.technicalRequirements}
                    onChange={handleInputChange}
                    placeholder="Specify any technical requirements, integrations, or constraints"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="communicationPreference" className="block text-sm font-medium text-gray-700 mb-1">
                      Communication Preference *
                    </label>
                    <Select onValueChange={(value: string) => handleSelectChange("communicationPreference", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="slack">Slack</SelectItem>
                        <SelectItem value="phone">Phone calls</SelectItem>
                        <SelectItem value="mixed">Mixed approach</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="technicalContact" className="block text-sm font-medium text-gray-700 mb-1">
                      Technical Point of Contact
                    </label>
                    <Input
                      id="technicalContact"
                      name="technicalContact"
                      value={formData.technicalContact}
                      onChange={handleInputChange}
                      placeholder="Name and contact of technical lead"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isFintech"
                    checked={formData.isFintech}
                    onCheckedChange={(checked: boolean) => handleCheckboxChange("isFintech", checked as boolean)}
                  />
                  <label htmlFor="isFintech" className="text-sm text-gray-700">
                    This is a Fintech/Blockchain project requiring additional compliance review
                  </label>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-900">Legal Requirements</h4>
                      <p className="text-sm text-yellow-800">
                        Please review and accept all legal agreements before proceeding.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="ndaSigned"
                      checked={formData.ndaSigned}
                      onCheckedChange={(checked: boolean) => handleCheckboxChange("ndaSigned", checked as boolean)}
                    />
                    <div>
                      <label htmlFor="ndaSigned" className="text-sm font-medium text-gray-900">
                        Non-Disclosure Agreement (NDA) *
                      </label>
                      <p className="text-xs text-gray-600">
                        I agree to sign the NDA to protect confidential information exchanged during this project.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="eulaAccepted"
                      checked={formData.eulaAccepted}
                      onCheckedChange={(checked: boolean) => handleCheckboxChange("eulaAccepted", checked as boolean)}
                    />
                    <div>
                      <label htmlFor="eulaAccepted" className="text-sm font-medium text-gray-900">
                        End User License Agreement (EULA) *
                      </label>
                      <p className="text-xs text-gray-600">
                        I have read and accept the EULA governing the use of CodeBurst software and services.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="termsAccepted"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked: boolean) => handleCheckboxChange("termsAccepted", checked as boolean)}
                    />
                    <div>
                      <label htmlFor="termsAccepted" className="text-sm font-medium text-gray-900">
                        Terms and Conditions *
                      </label>
                      <p className="text-xs text-gray-600">
                        I agree to CodeBurst&apos;s Terms and Conditions governing our working relationship.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="humanRightsAcknowledged"
                      checked={formData.humanRightsAcknowledged}
                      onCheckedChange={(checked: boolean) => handleCheckboxChange("humanRightsAcknowledged", checked as boolean)}
                    />
                    <div>
                      <label htmlFor="humanRightsAcknowledged" className="text-sm font-medium text-gray-900">
                        Human Rights & Ethics Policy *
                      </label>
                      <p className="text-xs text-gray-600">
                        I acknowledge CodeBurst&apos;s commitment to human rights, equality, and ethical practices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="securityProtocolsAgreed"
                      checked={formData.securityProtocolsAgreed}
                      onCheckedChange={(checked: boolean) => handleCheckboxChange("securityProtocolsAgreed", checked as boolean)}
                    />
                    <div>
                      <label htmlFor="securityProtocolsAgreed" className="text-sm font-medium text-gray-900">
                        Security and Data Access Protocols *
                      </label>
                      <p className="text-xs text-gray-600">
                        I agree to follow CodeBurst&apos;s security protocols and data access requirements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Payment & Compensation Terms</h4>
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Payment Method
                      </label>
                      <Select onValueChange={(value: string) => handleSelectChange("paymentMethod", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="cryptocurrency">Cryptocurrency</SelectItem>
                          <SelectItem value="alternative">Alternative Compensation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="depositAgreed"
                        checked={formData.depositAgreed}
                        onCheckedChange={(checked: boolean) => handleCheckboxChange("depositAgreed", checked as boolean)}
                      />
                      <div>
                        <label htmlFor="depositAgreed" className="text-sm font-medium text-gray-900">
                          40% Deposit Agreement *
                        </label>
                        <p className="text-xs text-gray-600">
                          I agree to the 40% upfront deposit requirement for fixed-price projects.
                        </p>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="compensationType" className="block text-sm font-medium text-gray-700 mb-1">
                        Alternative Compensation (if applicable)
                      </label>
                      <Textarea
                        id="compensationType"
                        name="compensationType"
                        value={formData.compensationType}
                        onChange={handleInputChange}
                        placeholder="Describe alternative compensation arrangements (e.g., internet access, tools, mentorship, references)"
                        rows={2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Onboarding Complete!</h3>
                    <p className="text-gray-600">
                      Thank you for completing the CodeBurst onboarding process. Our team will review your application
                      and contact you within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• KYC document verification (1-2 business days)</li>
                    <li>• Project scope review and technical assessment</li>
                    <li>• NDA signing and legal documentation</li>
                    <li>• Project proposal and timeline confirmation</li>
                    <li>• Team assignment and project kickoff</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>
                      <strong>CodeBurst Pty Ltd</strong>
                    </p>
                    <p>Maseru East, Lesotho</p>
                    <p>Email: codeburstls@gmail.com</p>
                    <p>Phone: +266 5362 6661 / +266 6935 6845</p>
                    <p>Website: https://codeburst.co.ls</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes or Questions
                  </label>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="Any additional information or questions you'd like to share"
                    rows={3}
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent"
          >
            Previous
          </Button>
          {currentStep < steps.length ? (
            <Button onClick={nextStep} className="bg-[#3b82f6] hover:bg-blue-700">
              Next Step
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600">
              Submit Application
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
