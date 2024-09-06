const AboutUs = () => {
  return (
    <>
      <div className="bg-slate-200 text-gray-800 min-h-screen">
        {/* Header Section */}
        <header className="bg-black text-white shadow-md py-6">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl font-bold text-center">About Us</h1>
          </div>
        </header>

        {/* Introduction Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We are passionate coffee enthusiasts dedicated to providing the
              best quality coffee beans from around the world. Our journey began
              with a simple love for coffee, and over the years, we've grown
              into a community-driven business focused on sustainability and
              quality.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to source and roast the finest coffee beans while
                supporting ethical and sustainable farming practices. We believe
                in building lasting relationships with farmers and customers
                alike.
              </p>
            </div>

            {/* Vision Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To create a world where every cup of coffee is a delightful
                experience, and where our customers can trust the quality and
                origins of their coffee. We aim to inspire others to appreciate
                the art of coffee making.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-semibold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="johnDoe.jpg"
                  alt="Team Member 1"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">Founder & Head Roaster</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center ">
                <img
                  src="jane.jpg"
                  alt="Team Member 2"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-600">Marketing Director</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="emily.jpg"
                  alt="Team Member 3"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
                />
                <h3 className="text-xl font-semibold">Emily Johnson</h3>
                <p className="text-gray-600">Quality Control Specialist</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
};
export default AboutUs;
