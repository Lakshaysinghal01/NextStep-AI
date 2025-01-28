from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, List
import json
from datetime import datetime

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserProfile(BaseModel):
    name: str
    age: str
    education: str
    skills: Dict[str, int]
    interests: Dict[str, int]

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

    def recommend_careers(self, profile: UserProfile) -> List[dict]:
        recommendations = []
        
        for field, careers in self.careers_data.items():
            field_interest = profile.interests.get(field.lower(), 0)
            if field_interest >= 3:  # If interest is medium or higher
                for career, details in careers.items():
                    skill_match = 0
                    for skill in details["skills"]:
                        if profile.skills.get(skill.replace(" ", "_").lower(), 0) >= 3:
                            skill_match += 1
                    
                    if skill_match >= len(details["skills"]) / 2:
                        recommendations.append({
                            "name": career,
                            "details": details
                        })
        
        return recommendations

guidance_system = CareerGuidanceSystem()

@app.post("/api/recommendations")
async def get_recommendations(profile: UserProfile):
    try:
        recommendations = guidance_system.recommend_careers(profile)
        return {"recommendations": recommendations}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))