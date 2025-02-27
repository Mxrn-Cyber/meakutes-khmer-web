import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DestinationCard from "../components/DestinationCard";
import TestimonialCard from "../components/TestimonialCard";
import "../app/globals.css"; // Ensure correct path for global styles

export default function Home() {
  const destinations = [
    {
      image: "/assets/SR.jpeg", // ✅ Correct path (from public folder)
      title: "Siem Reap, Cambodia",
    },
    {
      image: "/assets/SR1.jpeg", // ✅ Correct path (from public folder)
      title: "New York, USA",
    },
    {
      image: "/assets/SR.jpeg", // ✅ Correct path (from public folder)
      title: "Siem Reap, Cambodia",
    },
    {
      image: "/assets/SR1.jpeg", // ✅ Correct path (from public folder)
      title: "New York, USA",
    },
    {
      image: "/assets/SR.jpeg", // ✅ Correct path (from public folder)
      title: "Siem Reap, Cambodia",
    },
    {
      image: "/assets/SR1.jpeg", // ✅ Correct path (from public folder)
      title: "New York, USA",
    },
    {
      image: "/assets/SR.jpeg", // ✅ Correct path (from public folder)
      title: "Siem Reap, Cambodia",
    },
    {
      image: "/assets/SR1.jpeg", // ✅ Correct path (from public folder)
      title: "New York, USA",
    },
    {
      image: "/assets/SR.jpeg", // ✅ Correct path (from public folder)
      title: "Siem Reap, Cambodia",
    },
    {
      image: "/assets/SR1.jpeg", // ✅ Correct path (from public folder)
      title: "New York, USA",
    },
    {
      image: "/assets/SR.jpeg", // ✅ Correct path (from public folder)
      title: "Siem Reap, Cambodia",
    },
    {
      image: "/assets/SR1.jpeg", // ✅ Correct path (from public folder)
      title: "New York, USA",
    },
  ];

  const testimonials = [
    { name: "Angelina Simple", feedback: "Amazing experience!" },
    { name: "Robert John K.", feedback: "Loved every moment!" },
    { name: "Angelina Simple", feedback: "Amazing experience!" },
    { name: "Robert John K.", feedback: "Loved every moment!" },
    { name: "Angelina Simple", feedback: "Amazing experience!" },
    { name: "Robert John K.", feedback: "Loved every moment!" },
    { name: "Angelina Simple", feedback: "Amazing experience!" },
    { name: "Robert John K.", feedback: "Loved every moment!" },
    { name: "Angelina Simple", feedback: "Amazing experience!" },
    { name: "Robert John K.", feedback: "Loved every moment!" },
  ];

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className="main">
        <section className="intro">
          <h2>Travelers Point</h2>
          <p>We help to find your dream place.</p>
        </section>
        <section className="destinations">
          <h2 className="intro">Discover your love</h2>
          <div className="destinationGrid">
            {destinations.map((dest, index) => (
              <DestinationCard
                key={index}
                image={dest.image} // Pass the image correctly
                title={dest.title}
              />
            ))}
          </div>
        </section>
        <section className="intro">
          <h2 className="destinations">What’s your most favourite place?</h2>
          <div className="testimonialGrid">
            {testimonials.map((test, index) => (
              <TestimonialCard
                key={index}
                name={test.name}
                feedback={test.feedback}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
