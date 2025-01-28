import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { BriefcaseIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import UserProfile from './components/UserProfile';
import CareerRecommendations from './components/CareerRecommendations';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export type UserProfileData = {
  name: string;
  age: string;
  education: string;
  skills: {
    programming: number;
    problem_solving: number;
    communication: number;
    analytics: number;
    creativity: number;
  };
  interests: {
    technology: number;
    healthcare: number;
    business: number;
    arts: number;
    science: number;
  };
};

function App() {
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BriefcaseIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">NextStep-AI</span>
            </div>
            {userProfile && (
              <div className="flex items-center space-x-2">
                <UserCircleIcon className="h-6 w-6 text-gray-400" />
                <span className="text-sm text-gray-600">{userProfile.name}</span>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Ideal Career Path
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our advanced career guidance system analyzes your skills, interests, and experience 
            to recommend the perfect career opportunities tailored just for you.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <Tab.Group>
            <Tab.List className="flex border-b border-gray-200">
              <Tab
                className={({ selected }) =>
                  classNames(
                    'flex-1 px-4 py-4 text-sm font-medium text-center focus:outline-none',
                    selected
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  )
                }
              >
                <div className="flex items-center justify-center space-x-2">
                  <UserCircleIcon className="h-5 w-5" />
                  <span>Profile Creation</span>
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'flex-1 px-4 py-4 text-sm font-medium text-center focus:outline-none',
                    selected
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  )
                }
              >
                <div className="flex items-center justify-center space-x-2">
                  <BriefcaseIcon className="h-5 w-5" />
                  <span>Career Recommendations</span>
                </div>
              </Tab>
            </Tab.List>
            <Tab.Panels className="p-6">
              <Tab.Panel>
                <UserProfile onProfileComplete={setUserProfile} />
              </Tab.Panel>
              <Tab.Panel>
                <CareerRecommendations userProfile={userProfile} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default App;