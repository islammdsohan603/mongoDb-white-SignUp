const posts = [
  {
    "id": 1,
    "name": "Sohan Islam",
    "role": "Frontend Developer",
    "skills": ["HTML", "CSS", "JavaScript"],
    "experience": 2,
    "available": true
  },
  {
    "id": 2,
    "name": "Rahim Uddin",
    "role": "Backend Developer",
    "skills": ["Node.js", "Express", "MongoDB"],
    "experience": 3,
    "available": false
  },
  {
    "id": 3,
    "name": "Karim Hasan",
    "role": "Full Stack Developer",
    "skills": ["React", "Next.js", "Node.js"],
    "experience": 4,
    "available": true
  },
  {
    "id": 4,
    "name": "Nusrat Jahan",
    "role": "UI/UX Designer",
    "skills": ["Figma", "Adobe XD", "Photoshop"],
    "experience": 2,
    "available": true
  },
  {
    "id": 5,
    "name": "Mehedi Hasan",
    "role": "Mobile App Developer",
    "skills": ["Flutter", "Dart", "Firebase"],
    "experience": 3,
    "available": false
  },
  {
    "id": 6,
    "name": "Ayesha Akter",
    "role": "QA Engineer",
    "skills": ["Manual Testing", "Automation", "Selenium"],
    "experience": 2,
    "available": true
  },
  {
    "id": 7,
    "name": "Tanvir Ahmed",
    "role": "DevOps Engineer",
    "skills": ["Docker", "AWS", "CI/CD"],
    "experience": 5,
    "available": true
  },
  {
    "id": 8,
    "name": "Sabbir Hossain",
    "role": "Data Analyst",
    "skills": ["Python", "Pandas", "SQL"],
    "experience": 3,
    "available": false
  },
  {
    "id": 9,
    "name": "Farhana Rahman",
    "role": "Cyber Security Specialist",
    "skills": ["Network Security", "Ethical Hacking", "Kali Linux"],
    "experience": 4,
    "available": true
  },
  {
    "id": 10,
    "name": "Imran Khan",
    "role": "Software Engineer",
    "skills": ["Java", "Spring Boot", "Microservices"],
    "experience": 5,
    "available": true
  }
]

export const addPost = (newPost) => {
  posts.push(newPost)
  console.log(posts)
}

export const getPosts = () => {
  return posts
}