import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Shield, Clock, CheckCircle, Hammer, Zap, Wrench, Paintbrush, Users, Search, Calendar, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Hammer className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">BuildConnect</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#workers" className="text-gray-600 hover:text-blue-600 transition-colors">Find Workers</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Reviews</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:inline-flex">Sign In</Button>
              <Button className="bg-orange-500 hover:bg-orange-600">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect with Skilled
              <span className="text-blue-600"> Construction Workers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find verified, trusted professionals for your next project. From carpenters to electricians, 
              connect with skilled workers in your area quickly and safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Search className="mr-2 h-5 w-5" />
                Find a Worker
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 border-orange-500 text-orange-600 hover:bg-orange-50">
                <Calendar className="mr-2 h-5 w-5" />
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Workers</h3>
              <p className="text-gray-600">All workers are background-checked and verified for your safety</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Connections</h3>
              <p className="text-gray-600">Get matched with available workers in minutes, not days</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Rated workers with proven track records and customer reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How BuildConnect Works</h2>
            <p className="text-xl text-gray-600">Simple, safe, and efficient - connecting you with the right workers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <CardTitle className="text-xl">Post Your Job</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Describe your project, timeline, and budget. Our platform matches you with qualified workers in your area.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <CardTitle className="text-xl">Review & Choose</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Browse verified worker profiles, read reviews, and select the best match for your project needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <CardTitle className="text-xl">Get It Done</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Work directly with your chosen professional. Rate and review after completion to help others.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Worker Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Skilled Professionals</h2>
            <p className="text-xl text-gray-600">Whatever your project needs, we have the right worker for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="bg-blue-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Hammer className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Carpenters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Custom woodwork, framing, and finish carpentry</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="bg-yellow-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Electricians</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Wiring, installations, and electrical repairs</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="bg-blue-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Wrench className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Plumbers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Pipe work, fixtures, and plumbing systems</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="bg-green-100 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Paintbrush className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Painters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Interior and exterior painting services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Workers */}
      <section id="workers" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Top Workers</h2>
            <p className="text-xl text-gray-600">Highly rated professionals ready to help with your next project</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Avatar className="mx-auto mb-4 w-20 h-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-blue-100 text-blue-600">MR</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">Mike Rodriguez</CardTitle>
                <CardDescription className="text-gray-600">Master Carpenter</CardDescription>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.9 (127 reviews)</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                  <p className="text-gray-600">15+ years experience in custom woodwork and home renovations</p>
                  <p className="text-sm text-gray-500">Available in Los Angeles, CA</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Avatar className="mx-auto mb-4 w-20 h-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-yellow-100 text-yellow-600">SJ</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">Sarah Johnson</CardTitle>
                <CardDescription className="text-gray-600">Licensed Electrician</CardDescription>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0 (89 reviews)</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                  <p className="text-gray-600">Certified electrician specializing in residential and commercial work</p>
                  <p className="text-sm text-gray-500">Available in Austin, TX</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Avatar className="mx-auto mb-4 w-20 h-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-green-100 text-green-600">DL</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">David Lee</CardTitle>
                <CardDescription className="text-gray-600">Master Plumber</CardDescription>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.8 (156 reviews)</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                  <p className="text-gray-600">Expert in plumbing installations, repairs, and emergency services</p>
                  <p className="text-sm text-gray-500">Available in Miami, FL</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of homeowners nationwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-orange-100 text-orange-600">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Jennifer Davis</CardTitle>
                    <CardDescription>Homeowner</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600">"Found an amazing carpenter through BuildConnect. The verification process gave me confidence, and the work was exceptional. Highly recommend!"</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-blue-100 text-blue-600">RM</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Robert Mitchell</CardTitle>
                    <CardDescription>Property Manager</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600">"As a property manager, I need reliable workers fast. BuildConnect delivers every time. The quality of professionals is outstanding."</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-green-100 text-green-600">LT</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Lisa Thompson</CardTitle>
                    <CardDescription>Small Business Owner</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600">"Needed emergency electrical work for my shop. Found a certified electrician within an hour. Saved my business!"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied customers and skilled workers</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Users className="mr-2 h-5 w-5" />
              I Need a Worker
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
              <Briefcase className="mr-2 h-5 w-5" />
              I'm a Worker
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hammer className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold">BuildConnect</span>
              </div>
              <p className="text-gray-400">Connecting homeowners with skilled construction professionals safely and efficiently.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Homeowners</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Find Workers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Workers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Join as Worker</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Verification Process</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BuildConnect. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
