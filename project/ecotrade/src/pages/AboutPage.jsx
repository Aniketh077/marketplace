import React from 'react';

export default function AboutPage() {
  const highlights = [
    {
      title: 'Mission',
      description:
        'Enable transparent and efficient sourcing of post-consumer recycled (PCR) materials for enterprises of every size.'
    },
    {
      title: 'Network',
      description:
        '250+ verified PCR suppliers and processors across plastics, metals, and specialty materials.'
    },
    {
      title: 'Impact',
      description:
        'Helping manufacturers replace virgin inputs and achieve sustainability targets without compromising quality.'
    }
  ];

  const processSteps = [
    {
      title: 'Discovery',
      description: 'We understand your technical specs, compliance requirements, and recurring demand.'
    },
    {
      title: 'Curation',
      description:
        'Our supplier intelligence engine shortlists qualified PCR producers with proven track record.'
    },
    {
      title: 'Fulfillment',
      description:
        'Dedicated success managers coordinate samples, documentation, and logistics until your material is received.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="uppercase text-sm tracking-[0.35em] text-green-200 font-semibold">
              About Eco Marketplace
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Building a reliable supply chain for post-consumer recycled materials.
            </h1>
            <p className="text-lg text-green-100 leading-relaxed">
              We connect global brands, OEMs, and specialized manufacturers with verified PCR suppliers, helping
              sustainability teams hit recycled-content targets faster.
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
                How we work
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expert sourcing support from the first inquiry to repeat shipments.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Eco Marketplace blends data, domain knowledge, and on-ground audits to remove guesswork from PCR sourcing.
                We validate feedstock availability, processing capabilities, and certifications so procurement teams can
                launch new recycled programs with confidence.
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
              <p className="text-green-300 text-sm uppercase tracking-widest mb-4">Sustainability Outcomes</p>
              <h3 className="text-3xl font-bold mb-4">1M+ kgs of PCR materials delivered</h3>
              <p className="text-gray-200 leading-relaxed">
                Customers rely on Eco Marketplace to accelerate their transition away from virgin feedstock. Our platform
                centralizes verified suppliers, contract execution, and supply visibility so teams can scale quickly.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-sm text-gray-200">On-spec shipments</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold">45%</p>
                  <p className="text-sm text-gray-200">Average cost savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

