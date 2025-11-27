import React from 'react';

export default function AboutPage() {
  const highlights = [
    {
      title: 'Our Mission',
      description:
        'To democratize access to premium Post-Consumer Recycled materials, empowering industries to transition from virgin inputs to sustainable alternatives with confidence and transparency.'
    },
    {
      title: 'Our Network',
      description:
        'A rigorously vetted ecosystem of 250+ certified PCR suppliers and processors specializing in plastics, metals, composites, and specialty recycled materials.'
    },
    {
      title: 'Our Impact',
      description:
        'Enabling manufacturers worldwide to meet ambitious sustainability commitments while maintaining stringent quality standards and optimizing procurement costs.'
    }
  ];

  const processSteps = [
    {
      title: 'Requirements Discovery',
      description: 'Our specialists conduct in-depth consultations to understand your technical specifications, compliance frameworks, volume requirements, and delivery timelines.'
    },
    {
      title: 'Intelligent Matching',
      description:
        'Leveraging our proprietary supplier intelligence platform, we identify and shortlist qualified PCR producers with verified certifications and proven supply chain reliability.'
    },
    {
      title: 'End-to-End Fulfillment',
      description:
        'Dedicated account managers orchestrate the entire process—from sample coordination and quality documentation to logistics management and ongoing supply monitoring.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/Hero2.jpg"
            alt="Sustainable Materials"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="uppercase text-sm tracking-[0.35em] text-green-200 font-semibold">
              About Eco Marketplace
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Powering the Circular Economy Through Premium PCR Materials
            </h1>
            <p className="text-lg text-green-100 leading-relaxed">
              We bridge the gap between sustainability ambition and supply chain execution—connecting global enterprises, OEMs, and innovative manufacturers with best-in-class Post-Consumer Recycled material suppliers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-green-600 font-semibold mb-4">
                Our Methodology
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                White-Glove PCR Sourcing from Discovery to Deployment
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Eco Marketplace synthesizes advanced data analytics, deep industry expertise, and comprehensive supplier audits to eliminate risk from recycled material procurement. We validate feedstock provenance, processing capabilities, and compliance certifications—enabling your team to launch ambitious recycled content programs with full confidence.
              </p>
              <div className="space-y-5">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-700 font-semibold flex items-center justify-center mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-lg">
              <p className="text-green-300 text-sm uppercase tracking-widest mb-4">Measurable Impact</p>
              <h3 className="text-3xl font-bold mb-4">1M+ Kilograms of Premium PCR Materials Delivered</h3>
              <p className="text-gray-200 leading-relaxed">
                Industry leaders partner with Eco Marketplace to accelerate their transition to circular material strategies. Our integrated platform provides end-to-end visibility—from supplier verification and contract negotiation to shipment tracking and quality assurance—enabling rapid scaling without compromising on standards.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-sm text-gray-200">Quality compliance rate</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold">250+</p>
                  <p className="text-sm text-gray-200">Verified suppliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

