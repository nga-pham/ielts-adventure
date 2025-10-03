//import { Card, CardContent } from "@/components/ui/card";
//import { Badge } from "@/components/ui/badge";
import {
    BookOpen,
    CheckCircle,
    Clock,
    GraduationCap,
    Headphones,
    Heart,
    Monitor,
    Users,
    Volume2
} from "lucide-react";
import { default as heroImage, default as waterHyacinthTest } from "../assets/education.png";
import { default as purposeImage } from "../assets/purpose.png";
import { Button, Card, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { useState } from 'react';

const features = [
    {
        icon: CheckCircle,
        title: "Simulate real tests",
        description: "Practice with authentic IELTS test formats"
    },
    {
        icon: Monitor,
        title: "Reading and Listening tests",
        description: "Comprehensive skill development"
    },
    {
        icon: Users,
        title: "No registration required",
        description: "Start practicing immediately"
    },
    {
        icon: Heart,
        title: "FREE",
        description: "Complete access at no cost"
    }
];

const benefits = [
    {
        icon: GraduationCap,
        title: "EDUCATION",
        description: "Model answers, lessons, tips, free videos, band scores and advice for each section of the IELTS test. Develop your skills by learning IELTS in the right way."
    },
    {
        icon: BookOpen,
        title: "LIBRARY",
        description: "Listening and Reading tests, videos and tips are updated regularly to help you prepare for your test. If you have a question about IELTS, we will do our best to help you."
    },
    {
        icon: Clock,
        title: "EFFICIENCY",
        description: "Saving your time by doing a short test in our website everyday to track your progress."
    }
];

const latestTests = [
    {
        title: "Water hyacinth",
        type: "Listening",
        questions: 10,
        types: ["2 - Multiple Choice", "4 - Matching", "4 - Sentence Completion"],
        image: waterHyacinthTest,
        difficulty: "Intermediate"
    }
];


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <Navbar bg="dark" variant="dark" expand="md" sticky="top" style={{ backgroundColor: '#fff' }}>
            <Container>
                <Navbar.Brand href="#home">IELTS Adventure</Navbar.Brand>
                <Navbar.Toggle onClick={toggleMenu} aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home"><Headphones size={16} />Mini listening test</Nav.Link>
                        <Nav.Link href="#home"><Volume2 size={16} /> Mini speaking test</Nav.Link>
                        <Nav.Link href="#home">About us</Nav.Link>
                        <Nav.Link href="#home">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const HeroSection = () => {
    return (
        <div style={styles.heroBackground}>
            <Container>
                {/*<Row className="align-items-center" style={{ minHeight: '80vh' }}>*/}
                    <Row className="align-items-center">
                    <Col md={6 }>
                        <h5 style={styles.heading}>Simplify the pathway to IELTS exam</h5>
                        <Button variant="primary" size="lg">
                            Join now
                        </Button>
                    </Col>
                    <Col md={6 }><Image src={heroImage} fluid /></Col>
                </Row>
            </Container>
        </div>
    );
};

const styles = {
    heroBackground: {
        backgroundImage: 'url("../assets/education.png")'
    },
    heading: {
        fontSize: '3rem',
    },
    purposeImg: {
        alignItems : 'center'
    }
};

const PurposeSection = () => {
    return (
        <Container>
            <Row className="align-items-center"><h3>Purpose</h3></Row>
            <Row>
                <Card>
                    {/*<Card.Img variant="top" src={purposeImage} />*/}
                    
                    <div className="purposeImg"><img src={purposeImage} width="20%" /></div>
                    <Card.Body>
                        <Card.Title>Our commitment</Card.Title>
                        <Card.Text>
                            At IELTS Adventure, we embrace the power of simplicity. Preparing for the IELTS test can be overwhelming, and that is where we can help you. Our website is designed with a singular focus: to guide you step-by-step to better prepare for your real test. We offer plenty of resources and mini-tests that close to part of real test, so you can practise and see your own progress. 
                        </Card.Text>
                        <Button>Explore more</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}
export default function IeltsLanding() {
    return (
        <div style={{ minHeight: '100vh' }}>
      {/* Header */}
            <NavBar />

            {/* Hero Section */}
            <HeroSection />

            {/* Purpose Section */}
            <PurposeSection />

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              WHY USE OUR TESTS
            </h2>
          </div>
          
          {/*<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>*/}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-sky-blue rounded-full flex items-center justify-center mx-auto">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-sky-blue/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">About</h2>
            <p className="text-xl text-muted-foreground">
              The best free website for IELTS test preparation. Here you have a ton of FREE practice tests in reading and listening skills.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Tests Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              LATEST TESTS
            </h2>
            <div className="flex justify-center gap-4 mb-8">
              <Button variant="outline" className="border-primary text-primary">
                <Headphones className="w-4 h-4 mr-2" />
                Listening
              </Button>
              <Button variant="outline" className="border-primary text-primary">
                <BookOpen className="w-4 h-4 mr-2" />
                Reading
              </Button>
            </div>
          </div>
          
          {/*<div className="max-w-2xl mx-auto">
            {latestTests.map((test, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-primary/10 text-primary">Total questions: {test.questions}</Badge>
                        <Badge variant="secondary">{test.difficulty}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{test.title}</h3>
                      <div className="space-y-2">
                        {test.types.map((type, i) => (
                          <div key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-success" />
                            {type}
                          </div>
                        ))}
                      </div>
                      <Button className="mt-4">
                        <Play className="w-4 h-4 mr-2" />
                        Start Test
                      </Button>
                    </div>
                    <div className="relative">
                      <img 
                        src={test.image} 
                        alt={test.title}
                        className="rounded-lg w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-sky-blue text-white">
                          <Volume2 className="w-3 h-3 mr-1" />
                          {test.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>*/}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-bold text-2xl text-primary mb-4">Mini-ielts.com</div>
              <p className="text-muted-foreground mb-4 max-w-md">
                The best free website for IELTS test preparation. Practice with authentic reading and listening tests to achieve your target band score.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Test Sections</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Listening Tests</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Reading Tests</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Practice Tests</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Band Score Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Study Tips</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Test Strategies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sample Answers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Mini-ielts.com. All rights reserved. Free IELTS practice tests for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
    );
}