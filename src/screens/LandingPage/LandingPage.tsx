import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
// import GoogleReviewWidget from "react-google-review-widget";


export const LandingPage = (): JSX.Element => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const { register, handleSubmit } = useForm();

  const courses = [
    {
      title: "AutoCAD Mastery",
      mentor: "Er. Rajesh Kumar",
      mentorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      description: "Master AutoCAD from basics to advanced in just 15 days!",
      features: [
        "Complete 2D & 3D Sketching",
        "Industrial Drawing Standards",
        "Real-world Projects",
        "ISO Certification"
      ],
      originalPrice: "₹10,000",
      price: "₹999",
      highlights: ["100% Job Support", "Live Classes", "Lifetime Access"]
    },
    {
      title: "CivilCAD Pro",
      mentor: "Er. Priya Rajan",
      mentorImage: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
      description: "Complete Civil Engineering CAD course with industry projects",
      features: [
        "Section & Elevation Plans",
        "3D Modeling",
        "Construction Documentation",
        "Site Planning"
      ],
      originalPrice: "₹10,000",
      price: "₹999",
      highlights: ["Industry Projects", "Live Classes", "Placement Support"]
    },
    {
      title: "Python for Engineers",
      mentor: "Er. Senthil Kumar",
      mentorImage: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
      description: "Learn Python programming up to File Handling with real applications",
      features: [
        "Basic to Advanced Concepts",
        "File Handling",
        "Engineering Applications",
        "Hands-on Projects"
      ],
      originalPrice: "₹10,000",
      price: "₹999",
      highlights: ["Beginner Friendly", "Live Support", "Real Projects"]
    }
  ];

  const onSubmit = async (data: any) => {
    toast.success("Registration successful! Check your email for course details.");
  };

  return (
    <div className="min-h-screen bg-[#040D21] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-2 text-center">
        <p className="text-sm md:text-base animate-pulse">🔥 90% Discount Ends Soon - Enroll Now! 🔥</p>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full mb-6 font-bold animate-bounce">
            Special Offer - Save ₹9,001 Today!
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            15 நாட்களில் நிபுணராகுங்கள்!
          </h1>
          <p className="text-2xl md:text-4xl mb-8 text-blue-300">Master Industry-Ready Skills</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-800 p-6 rounded-xl">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold">Live Training</h3>
              <p className="text-blue-300">Interactive Sessions</p>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-800 p-6 rounded-xl">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-xl font-semibold">100% Job Support</h3>
              <p className="text-blue-300">Placement Assistance</p>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-800 p-6 rounded-xl">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-xl font-semibold">ISO Certified</h3>
              <p className="text-blue-300">Industry Recognition</p>
            </div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => (
            <Card key={index} className="bg-gradient-to-br from-[#0A1A3B] to-[#0A1A3B]/80 border-blue-800/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-bl-lg font-semibold">
                90% OFF
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={course.mentorImage} 
                    alt={course.mentor}
                    className="w-20 h-20 rounded-full mr-4 border-2 border-blue-500 p-1"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">{course.title}</h3>
                    <p className="text-blue-300">{course.mentor}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{course.description}</p>

                <div className="bg-blue-900/30 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-2">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-blue-200">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center gap-4 mb-6">
                  {course.highlights.map((highlight, i) => (
                    <span key={i} className="bg-blue-900/50 px-3 py-1 rounded-full text-sm text-blue-300">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="text-center">
                  <div className="mb-6">
                    <p className="line-through text-gray-400 text-lg">{course.originalPrice}</p>
                    <p className="text-4xl font-bold text-green-400 mb-1">{course.price}</p>
                    <p className="text-yellow-400 text-sm font-semibold">Limited Time Offer!</p>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => setSelectedCourse(course.title)}
                        className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-lg py-6"
                      >
                        Enroll Now - 90% OFF
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#0A1A3B] border-blue-800">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Join {selectedCourse}</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Your Name</Label>
                          <Input id="name" {...register("name")} className="bg-blue-900/50" placeholder="Enter your name" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" {...register("email")} className="bg-blue-900/50" placeholder="Enter your email" />
                        </div>
                        <div>
                          <Label htmlFor="phone">WhatsApp Number</Label>
                          <Input id="phone" {...register("phone")} className="bg-blue-900/50" placeholder="Enter your WhatsApp number" />
                        </div>
                        <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-lg py-6">
                          Pay ₹999 - Save ₹9,001 Today!
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
       

  
        {/* FAQ Section */}
<div className="mb-20">
  <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
    Frequently Asked Questions
  </h2>
  <div className="max-w-3xl mx-auto space-y-4">
    {[
      {
    question: "What is the duration of the course?",
    answer: "Each course is designed to be completed in just 15 days with intensive live training sessions."
  },
  {
    question: "Are there any prerequisites?",
    answer: "No prior experience is needed. These courses are beginner-friendly and start from the basics."
  },
  {
    question: "Who are the instructors?",
    answer: "Our instructors are industry experts with real-world experience and a passion for teaching."
  },
  {
    question: "Can I interact with other students?",
    answer: "Yes, you’ll have access to peer discussions and collaborative activities during the course."
  },

  // Certification
  {
    question: "Will I get a certificate?",
    answer: "Yes, you will receive an ISO-certified course completion certificate after successfully completing the training."
  },

  // Class Format
  {
    question: "Is this a live or recorded course?",
    answer: "These are live online classes with real-time interaction. Recordings will also be provided for future reference."
  },
  {
    question: "What if I miss a live session?",
    answer: "Don’t worry! All sessions are recorded and will be shared with you for later viewing."
  },
  {
    question: "Will I work on projects during the course?",
    answer: "Yes, you’ll complete hands-on projects to apply what you learn and build a strong portfolio."
  },

  // Job Assistance
  {
    question: "How do I get job support?",
    answer: "We offer dedicated placement assistance, resume reviews, and interview preparation after the course."
  },

  // Pricing & Policies
  {
    question: "How much does the course cost?",
    answer: "Please visit the pricing page or contact us directly for the latest fee details."
  },
  {
    question: "Is there any refund policy?",
    answer: "Yes, we offer a refund within the first 2 days if you are not satisfied. Terms and conditions apply."
  } 
    ].map((faq, i) => (
      <details key={i} className="bg-blue-900/30 border border-blue-800 p-4 rounded-lg">
        <summary className="cursor-pointer font-semibold text-blue-300 text-lg">
          {faq.question}
        </summary>
        <p className="mt-2 text-gray-300">{faq.answer}</p>
      </details>
    ))}
  </div>
</div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-blue-900 to-blue-800 p-12 rounded-2xl border border-blue-700">
          <h2 className="text-4xl font-bold mb-6">Start Your Success Journey Today! 🚀</h2>
          <p className="text-xl mb-8 text-blue-300">90% Discount Ends Soon - Don't Miss This Opportunity!</p>
          <Button 
            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-xl px-12 py-6"
            onClick={() => window.open("https://wa.me/your_number", "_blank")}
          >
            Chat on WhatsApp for Special Offer 🎁
          </Button>
        </div>
      </div>
    </div>
  );
};