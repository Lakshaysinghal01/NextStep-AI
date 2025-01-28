import React from 'react';
import { UserProfileData } from '../App';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CurrencyDollarIcon,
  ChartBarIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

type Props = {
  userProfile: UserProfileData | null;
};

const CareerRecommendations: React.FC<Props> = ({ userProfile }) => {
  if (!userProfile) {
    return (
      <div className="text-center py-12">
        <BriefcaseIcon className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-medium text-gray-900">
          Complete Your Profile
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Please complete your profile first to receive personalized career recommendations.
        </p>
      </div>
    );
  }

  // Mock recommendations data
  const mockRecommendations = [
    {
      title: 'Software Developer',
      description: 'Design, develop, and maintain software applications and systems.',
      skills: ['Programming', 'Problem-solving', 'Analytical thinking'],
      education: "Bachelor's in Computer Science or related field",
      salaryRange: '$60,000 - $150,000',
      growthPotential: 'High',
      matchScore: 95,
    },
    {
      title: 'Data Scientist',
      description: 'Analyze complex data sets to help guide business decisions.',
      skills: ['Statistics', 'Machine Learning', 'Programming', 'Analytics'],
      education: "Master's in Data Science, Statistics, or related field",
      salaryRange: '$70,000 - $160,000',
      growthPotential: 'High',
      matchScore: 88,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Profile Match Analysis</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <AcademicCapIcon className="h-5 w-5 text-blue-500" />
              <span className="ml-2 text-sm font-medium text-gray-900">Education</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{userProfile.education}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <ChartBarIcon className="h-5 w-5 text-blue-500" />
              <span className="ml-2 text-sm font-medium text-gray-900">Top Skill</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              {Object.entries(userProfile.skills).reduce((a, b) => a[1] > b[1] ? a : b)[0].replace('_', ' ')}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <LightBulbIcon className="h-5 w-5 text-blue-500" />
              <span className="ml-2 text-sm font-medium text-gray-900">Top Interest</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              {Object.entries(userProfile.interests).reduce((a, b) => a[1] > b[1] ? a : b)[0]}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Recommended Careers</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {mockRecommendations.map((career) => (
            <div
              key={career.title}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {career.title}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {career.matchScore}% Match
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{career.description}</p>
                
                <div className="mt-6 grid grid-cols-1 gap-4">
                  <div>
                    <div className="flex items-center text-sm font-medium text-gray-700">
                      <AcademicCapIcon className="h-5 w-5 text-gray-400 mr-2" />
                      Education
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{career.education}</p>
                  </div>
                  <div>
                    <div className="flex items-center text-sm font-medium text-gray-700">
                      <ChartBarIcon className="h-5 w-5 text-gray-400 mr-2" />
                      Required Skills
                    </div>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {career.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center text-sm font-medium text-gray-700">
                        <CurrencyDollarIcon className="h-5 w-5 text-gray-400 mr-2" />
                        Salary Range
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{career.salaryRange}</p>
                    </div>
                    <div>
                      <div className="flex items-center text-sm font-medium text-gray-700">
                        <ChartBarIcon className="h-5 w-5 text-gray-400 mr-2" />
                        Growth
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{career.growthPotential}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerRecommendations;