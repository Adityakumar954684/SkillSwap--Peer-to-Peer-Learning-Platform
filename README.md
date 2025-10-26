
<!-- This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

Backend-supabase -->

# SkillSwap – Peer-to-Peer Learning Platform

**Live Demo:** [https://skill-swap-peer-to-peer-learning-pl.vercel.app/](https://skill-swap-peer-to-peer-learning-pl.vercel.app/)

SkillSwap is a platform where users can **teach and learn skills from each other**. Users can create profiles, list skills they can teach and skills they want to learn, connect with peers, schedule learning sessions, chat in real-time, and rate each other.

This project demonstrates **full-stack development, real-time communication, authentication, and UI/UX design** using modern technologies.

---

## Features

### User Features
- **Authentication**: Sign up/login with email or social accounts (Supabase Auth)
- **Profile Management**: Add bio, skills to teach, skills to learn, profile picture
- **Search & Connect**: Find users by skill and send learning requests
- **Skill Listing**: Add skills you can teach and want to learn
- **Messaging & Chat**: Real-time chat with other users (Supabase Realtime)
- **Session Scheduling**: Schedule learning sessions with calendar integration
- **Ratings & Reviews**: Rate peers after a session

### Admin Features (Optional)
- Manage users and content
- View platform analytics

---

## Tech Stack

### Frontend
- **React** + **TypeScript**
- **Vite** (fast development bundler)
- **Tailwind CSS** / **shadcn-ui** (responsive UI)
- **React Router** (multi-page navigation)
- **FullCalendar.js** (session scheduling UI)

### Backend
- **Supabase**
  - **PostgreSQL** database
  - **Auth** (email & OAuth)
  - **Realtime** (chat)
  - **Storage** (profile pictures, session attachments)

---

## Database Design (Supabase)

### Profiles
- `id` (uuid, primary key)
- `full_name` (text)
- `bio` (text)
- `profile_image` (text)
- `skills_teach` (jsonb)
- `skills_learn` (jsonb)
- `rating` (numeric)
- `created_at` (timestamp)

### Sessions
- `id` (uuid, primary key)
- `teacher_id` (uuid)
- `learner_id` (uuid)
- `skill` (text)
- `start_time` (timestamp)
- `end_time` (timestamp)
- `status` (scheduled/completed/cancelled)
- `notes` (text)

### Messages
- `id` (serial, primary key)
- `from_id` (uuid)
- `to_id` (uuid)
- `content` (text)
- `created_at` (timestamp)

### Reviews
- `id` (serial, primary key)
- `session_id` (uuid)
- `from_id` (uuid)
- `to_id` (uuid)
- `rating` (int)
- `comment` (text)
- `created_at` (timestamp)

---

## Screenshots / Demo
![Profile Page](screenshots/profile.png)  
![Search & Connect](screenshots/search.png)  
![Chat](screenshots/chat.png)  
![Session Calendar](screenshots/calendar.png)

---



