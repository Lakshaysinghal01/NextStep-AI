import json
from typing import List, Dict
import os
from datetime import datetime

class CareerGuidanceSystem:
    def __init__(self):
        self.careers_data = {
            "technology": {
                "Software Developer": {
                    "skills": ["programming", "problem-solving", "analytical thinking"],
                    "education": "Bachelor's in Computer Science or related field",
                    "salary_range": "$60,000 - $150,000",
                    "growth_potential": "High"
                },
                "Data Scientist": {
                    "skills": ["statistics", "machine learning", "programming", "analytics"],
                    "education": "Master's in Data Science, Statistics, or related field",
                    "salary_range": "$70,000 - $160,000",
                    "growth_potential": "High"
                }
            },
            "healthcare": {
                "Registered Nurse": {
                    "skills": ["patient care", "medical knowledge", "communication"],
                    "education": "Bachelor's in Nursing",
                    "salary_range": "$50,000 - $110,000",
                    "growth_potential": "High"
                },
                "Physical Therapist": {
                    "skills": ["anatomy knowledge", "patient care", "rehabilitation"],
                    "education": "Doctorate in Physical Therapy",
                    "salary_range": "$65,000 - $100,000",
                    "growth_potential": "Medium"
                }
            }
        }
        self.user_profiles = {}

    def create_user_profile(self) -> Dict:
        """Create a new user profile with assessment results"""
        print("\n=== Career Profile Creation ===")
        name = input("Enter your name: ")
        age = input("Enter your age: ")
        education = input("Enter your highest education level: ")
        
        # Skills assessment
        print("\nRate your skills from 1-5 in the following areas:")
        skills = {
            "programming": int(input("Programming: ")),
            "problem_solving": int(input("Problem Solving: ")),
            "communication": int(input("Communication: ")),
            "analytics": int(input("Analytics: ")),
            "creativity": int(input("Creativity: "))
        }
        
        # Interest assessment
        print("\nRate your interest from 1-5 in the following fields:")
        interests = {
            "technology": int(input("Technology: ")),
            "healthcare": int(input("Healthcare: ")),
            "business": int(input("Business: ")),
            "arts": int(input("Arts: ")),
            "science": int(input("Science: "))
        }
        
        profile = {
            "name": name,
            "age": age,
            "education": education,
            "skills": skills,
            "interests": interests,
            "assessment_date": datetime.now().strftime("%Y-%m-%d")
        }
        
        self.user_profiles[name] = profile
        return profile

    def recommend_careers(self, profile: Dict) -> List[str]:
        """Recommend careers based on user profile"""
        recommendations = []
        
        # Simple recommendation algorithm based on skills and interests
        for field, careers in self.careers_data.items():
            field_interest = profile["interests"].get(field.lower(), 0)
            if field_interest >= 3:  # If interest is medium or higher
                for career, details in careers.items():
                    skill_match = 0
                    for skill in details["skills"]:
                        if profile["skills"].get(skill.replace(" ", "_").lower(), 0) >= 3:
                            skill_match += 1
                    
                    if skill_match >= len(details["skills"]) / 2:
                        recommendations.append((career, details))
        
        return recommendations

    def display_career_details(self, career_name: str, details: Dict):
        """Display detailed information about a career"""
        print(f"\n=== {career_name} ===")
        print(f"Required Skills: {', '.join(details['skills'])}")
        print(f"Education: {details['education']}")
        print(f"Salary Range: {details['salary_range']}")
        print(f"Growth Potential: {details['growth_potential']}")

    def run_guidance_session(self):
        """Run a complete career guidance session"""
        print("Welcome to Career Guidance System!")
        print("Let's help you find the perfect career path.")
        
        # Create user profile
        profile = self.create_user_profile()
        
        # Get career recommendations
        recommendations = self.recommend_careers(profile)
        
        if recommendations:
            print("\n=== Career Recommendations ===")
            print(f"Based on your profile, here are some recommended careers:")
            for i, (career, details) in enumerate(recommendations, 1):
                print(f"\n{i}. {career}")
                self.display_career_details(career, details)
        else:
            print("\nNo specific career recommendations found. Consider:")
            print("1. Developing more skills in your areas of interest")
            print("2. Exploring different fields")
            print("3. Consulting with a career counselor")

def main():
    guidance_system = CareerGuidanceSystem()
    guidance_system.run_guidance_session()

if __name__ == "__main__":
    main()