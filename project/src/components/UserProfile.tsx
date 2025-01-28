import React, { useState } from 'react';
import { UserProfileData } from '../App';
import { AcademicCapIcon, UserIcon, ChartBarIcon, HeartIcon } from '@heroicons/react/24/outline';

type Props = {
  onProfileComplete: (profile: UserProfileData) => void;
};

const UserProfile: React.FC<Props> = ({ onProfileComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    education: '',
    skills: {
      programming: 1,
      problem_solving: 1,
      communication: 1,
      analytics: 1,
      creativity: 1,
    },
    interests: {
      technology: 1,
      healthcare: 1,
      business: 1,
      arts: 1,
      science: 1,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProfileComplete(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillChange = (skill: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [skill]: value,
      },
    }));
  };

  const handleInterestChange = (interest: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [interest]: value,
      },
    }));
  };

  const renderRatingLabels = (value: number) => {
    const labels = ['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'];
    return labels[value - 1];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-6 pt-8">
          <div>
            <h3 className="flex items-center text-lg font-medium text-gray-900">
              <UserIcon className="h-6 w-6 text-blue-500 mr-2" />
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Please provide your basic information to help us understand your background.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Education</label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
                placeholder="e.g., Bachelor's in Computer Science"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-8">
          <div>
            <h3 className="flex items-center text-lg font-medium text-gray-900">
              <ChartBarIcon className="h-6 w-6 text-blue-500 mr-2" />
              Skills Assessment
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Rate your proficiency in each skill from 1 (Beginner) to 5 (Expert).
            </p>
          </div>

          <div className="space-y-6">
            {Object.entries(formData.skills).map(([skill, value]) => (
              <div key={skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {skill.replace('_', ' ')}
                  </label>
                  <span className="text-sm text-blue-600 font-medium">
                    {renderRatingLabels(value)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={value}
                  onChange={(e) => handleSkillChange(skill, Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 pt-8">
          <div>
            <h3 className="flex items-center text-lg font-medium text-gray-900">
              <HeartIcon className="h-6 w-6 text-blue-500 mr-2" />
              Interest Assessment
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Rate your interest level in each field from 1 (Low Interest) to 5 (High Interest).
            </p>
          </div>

          <div className="space-y-6">
            {Object.entries(formData.interests).map(([interest, value]) => (
              <div key={interest} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {interest}
                  </label>
                  <span className="text-sm text-blue-600 font-medium">
                    Level {value}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={value}
                  onChange={(e) => handleInterestChange(interest, Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-8">
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Get Career Recommendations
        </button>
      </div>
    </form>
  );
};

export default UserProfile;