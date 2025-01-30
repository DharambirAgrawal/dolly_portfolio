import { BookOpen, Award, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src="/images/dolly-agarwal.jpg"
                alt="Professional headshot"
                className="relative rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Passionate About Financial Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              As a passonate accounting professional, I am dedicated to academic
              excellence and professional growth. I am a CPA Exam Candidate with
              a focus on Advanced Financial Accounting. I have a GPA of
              3.74/4.0. I am excited to bring my skills and experience to a new
              role in the accounting field.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Academic Excellence
                  </h3>
                  <p className="text-gray-600">
                    GPA 3.74/4.0 with focus on Advanced Financial Accounting
                  </p>
                </div>
              </div>

              {/* <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Certifications
                  </h3>
                  <p className="text-gray-600">
                    CPA Exam Candidate with completed coursework
                  </p>
                </div>
              </div> */}

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Professional Experience
                  </h3>
                  <p className="text-gray-600">Internship at Sunrise Bank</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
