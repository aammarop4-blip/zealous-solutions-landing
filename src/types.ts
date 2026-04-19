export interface Job {
  id: string;
  title: string;
  department: string;
  description: string;
  type: string;
  location: string;
}

export interface Application {
  id: string;
  candidateName: string;
  email: string;
  phone: string;
  experience: number;
  englishLevel: string;
  positionId: string;
  status: 'New' | 'Interviewing' | 'Training' | 'Hired' | 'Rejected';
  appliedDate: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  duration: string;
  status: 'locked' | 'in-progress' | 'completed';
}

export interface User {
  id: string;
  name: string;
  role: 'SUPER_ADMIN' | 'HR' | 'MANAGER' | 'EMPLOYEE';
}
