export interface Exam {
  id: string;
  name: string;
  fullName?: string;
  color: string;
  totalTests?: number;
  freeTests?: number;
}

export interface ExamCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  logo: string;
  exams: Exam[];
}

export const EXAM_CATEGORIES: ExamCategory[] = [
  {
    id: 'banking',
    name: 'Banking & Insurance',
    icon: 'Landmark',
    color: 'cat-banking',
    logo: '/assets/logos/banking.png',
    exams: [
      { id: 'sbi-po', name: 'SBI PO', fullName: 'State Bank of India PO', color: '#2563EB', totalTests: 150, freeTests: 20 },
      { id: 'sbi-clerk', name: 'SBI Clerk', fullName: 'State Bank of India Clerk', color: '#2563EB', totalTests: 120, freeTests: 15 },
      { id: 'ibps-po', name: 'IBPS PO', fullName: 'Institute of Banking Personnel Selection PO', color: '#0891B2', totalTests: 180, freeTests: 25 },
      { id: 'ibps-clerk', name: 'IBPS Clerk', color: '#0891B2', totalTests: 140, freeTests: 20 },
      { id: 'ibps-rrb', name: 'IBPS RRB', fullName: 'Regional Rural Banks', color: '#059669', totalTests: 100, freeTests: 15 },
      { id: 'rbi-grade-b', name: 'RBI Grade B', fullName: 'Reserve Bank of India Grade B', color: '#4F46E5', totalTests: 80, freeTests: 10 },
      { id: 'rbi-assistant', name: 'RBI Assistant', color: '#4F46E5', totalTests: 90, freeTests: 12 },
      { id: 'lic-aao', name: 'LIC AAO', fullName: 'Life Insurance Corporation AAO', color: '#7C3AED', totalTests: 70, freeTests: 10 },
      { id: 'niacl-ao', name: 'NIACL AO', color: '#DC2626', totalTests: 50, freeTests: 8 },
      { id: 'sebi', name: 'SEBI Grade A', fullName: 'Securities and Exchange Board of India', color: '#059669', totalTests: 60, freeTests: 8 },
      { id: 'nabard', name: 'NABARD', fullName: 'National Bank for Agriculture and Rural Development', color: '#F59E0B', totalTests: 55, freeTests: 7 },
    ]
  },
  {
    id: 'ssc',
    name: 'SSC',
    icon: 'FileText',
    color: 'cat-ssc',
    logo: '/assets/logos/ssc.png',
    exams: [
      { id: 'ssc-cgl', name: 'SSC CGL', fullName: 'Combined Graduate Level', color: '#DC2626', totalTests: 200, freeTests: 30 },
      { id: 'ssc-chsl', name: 'SSC CHSL', fullName: 'Combined Higher Secondary Level', color: '#DC2626', totalTests: 180, freeTests: 25 },
      { id: 'ssc-mts', name: 'SSC MTS', fullName: 'Multi Tasking Staff', color: '#DC2626', totalTests: 150, freeTests: 20 },
      { id: 'ssc-gd', name: 'SSC GD', fullName: 'GD Constable', color: '#DC2626', totalTests: 160, freeTests: 22 },
      { id: 'ssc-cpo', name: 'SSC CPO', fullName: 'Central Police Organization', color: '#DC2626', totalTests: 100, freeTests: 15 },
      { id: 'ssc-je', name: 'SSC JE', fullName: 'Junior Engineer', color: '#DC2626', totalTests: 80, freeTests: 10 },
      { id: 'ssc-steno', name: 'SSC Stenographer', color: '#DC2626', totalTests: 70, freeTests: 10 },
    ]
  },
  {
    id: 'railways',
    name: 'Railways',
    icon: 'Train',
    color: 'cat-railways',
    logo: '/assets/logos/railways.png',
    exams: [
      { id: 'rrb-ntpc', name: 'RRB NTPC', fullName: 'Non-Technical Popular Categories', color: '#059669', totalTests: 220, freeTests: 35 },
      { id: 'rrb-group-d', name: 'RRB Group D', color: '#059669', totalTests: 200, freeTests: 30 },
      { id: 'rrb-je', name: 'RRB JE', fullName: 'Junior Engineer', color: '#059669', totalTests: 90, freeTests: 12 },
      { id: 'rrb-alp', name: 'RRB ALP', fullName: 'Assistant Loco Pilot', color: '#059669', totalTests: 100, freeTests: 15 },
      { id: 'rpf', name: 'RPF Constable', fullName: 'Railway Protection Force', color: '#059669', totalTests: 80, freeTests: 12 },
    ]
  },
  {
    id: 'upsc',
    name: 'UPSC & Civil Services',
    icon: 'Building2',
    color: 'cat-upsc',
    logo: '/assets/logos/upsc.png',
    exams: [
      { id: 'upsc-cse', name: 'UPSC CSE', fullName: 'Civil Services Examination (IAS/IPS)', color: '#4F46E5', totalTests: 300, freeTests: 40 },
      { id: 'upsc-capf', name: 'UPSC CAPF', fullName: 'Central Armed Police Forces', color: '#4F46E5', totalTests: 80, freeTests: 10 },
      { id: 'upsc-cds', name: 'CDS', fullName: 'Combined Defence Services', color: '#4F46E5', totalTests: 100, freeTests: 15 },
      { id: 'upsc-nda', name: 'NDA', fullName: 'National Defence Academy', color: '#4F46E5', totalTests: 120, freeTests: 18 },
      { id: 'upsc-ese', name: 'UPSC ESE', fullName: 'Engineering Services Examination', color: '#4F46E5', totalTests: 70, freeTests: 8 },
    ]
  },
  {
    id: 'defence',
    name: 'Defence',
    icon: 'Shield',
    color: 'cat-defence',
    logo: '/assets/logos/defence.png',
    exams: [
      { id: 'nda', name: 'NDA', fullName: 'National Defence Academy', color: '#7C3AED', totalTests: 120, freeTests: 18 },
      { id: 'cds', name: 'CDS', fullName: 'Combined Defence Services', color: '#7C3AED', totalTests: 100, freeTests: 15 },
      { id: 'afcat', name: 'AFCAT', fullName: 'Air Force Common Admission Test', color: '#7C3AED', totalTests: 80, freeTests: 12 },
      { id: 'indian-navy', name: 'Indian Navy', fullName: 'Indian Navy Sailor/Officer', color: '#7C3AED', totalTests: 70, freeTests: 10 },
      { id: 'indian-army', name: 'Indian Army', fullName: 'Indian Army GD/Technical', color: '#7C3AED', totalTests: 90, freeTests: 12 },
      { id: 'capf', name: 'CAPF AC', fullName: 'Central Armed Police Forces AC', color: '#7C3AED', totalTests: 60, freeTests: 8 },
    ]
  },
  {
    id: 'teaching',
    name: 'Teaching',
    icon: 'GraduationCap',
    color: 'cat-teaching',
    logo: '/assets/logos/teaching.png',
    exams: [
      { id: 'ctet', name: 'CTET', fullName: 'Central Teacher Eligibility Test', color: '#F59E0B', totalTests: 150, freeTests: 20 },
      { id: 'uptet', name: 'UPTET', fullName: 'UP Teacher Eligibility Test', color: '#F59E0B', totalTests: 100, freeTests: 15 },
      { id: 'reet', name: 'REET', fullName: 'Rajasthan Eligibility Examination for Teachers', color: '#F59E0B', totalTests: 120, freeTests: 18 },
      { id: 'kvs', name: 'KVS', fullName: 'Kendriya Vidyalaya Sangathan', color: '#F59E0B', totalTests: 80, freeTests: 10 },
      { id: 'nvs', name: 'NVS', fullName: 'Navodaya Vidyalaya Samiti', color: '#F59E0B', totalTests: 70, freeTests: 10 },
      { id: 'dsssb', name: 'DSSSB', fullName: 'Delhi Subordinate Services Selection Board', color: '#F59E0B', totalTests: 90, freeTests: 12 },
      { id: 'ugc-net', name: 'UGC NET', fullName: 'National Eligibility Test', color: '#F59E0B', totalTests: 100, freeTests: 15 },
    ]
  },
  {
    id: 'state-psc',
    name: 'State PSC',
    icon: 'MapPin',
    color: 'cat-psc',
    logo: '/assets/logos/state-psc.png',
    exams: [
      { id: 'ras', name: 'RAS', fullName: 'Rajasthan Administrative Service', color: '#0891B2', totalTests: 180, freeTests: 25 },
      { id: 'uppsc', name: 'UPPSC', fullName: 'Uttar Pradesh Public Service Commission', color: '#0891B2', totalTests: 150, freeTests: 20 },
      { id: 'bpsc', name: 'BPSC', fullName: 'Bihar Public Service Commission', color: '#0891B2', totalTests: 130, freeTests: 18 },
      { id: 'mppsc', name: 'MPPSC', fullName: 'Madhya Pradesh Public Service Commission', color: '#0891B2', totalTests: 120, freeTests: 15 },
      { id: 'rpsc', name: 'RPSC', fullName: 'Rajasthan Public Service Commission', color: '#0891B2', totalTests: 100, freeTests: 15 },
      { id: 'hpsc', name: 'HPSC', fullName: 'Haryana Public Service Commission', color: '#0891B2', totalTests: 80, freeTests: 10 },
      { id: 'ukpsc', name: 'UKPSC', fullName: 'Uttarakhand Public Service Commission', color: '#0891B2', totalTests: 70, freeTests: 10 },
    ]
  },
  {
    id: 'state-police',
    name: 'State Police & Others',
    icon: 'BadgeCheck',
    color: 'cat-police',
    logo: '/assets/logos/police.png',
    exams: [
      { id: 'rajasthan-police', name: 'Rajasthan Police', fullName: 'Rajasthan Police Constable', color: '#64748B', totalTests: 100, freeTests: 15 },
      { id: 'up-police', name: 'UP Police', fullName: 'Uttar Pradesh Police', color: '#64748B', totalTests: 120, freeTests: 18 },
      { id: 'bihar-police', name: 'Bihar Police', color: '#64748B', totalTests: 90, freeTests: 12 },
      { id: 'patwar', name: 'Patwar', fullName: 'Rajasthan Patwari', color: '#64748B', totalTests: 80, freeTests: 12 },
      { id: 'patwari', name: 'Patwari', fullName: 'MP/UP Patwari', color: '#64748B', totalTests: 70, freeTests: 10 },
      { id: 'lekhpal', name: 'Lekhpal', fullName: 'UP Lekhpal', color: '#64748B', totalTests: 60, freeTests: 8 },
    ]
  }
];

export const SUBJECTS = [
  {
    id: 'english',
    name: 'English',
    icon: 'BookOpen',
    color: '#2563EB',
    topics: ['Grammar', 'Vocabulary', 'Comprehension', 'Error Spotting', 'Fill in the Blanks', 'Cloze Test']
  },
  {
    id: 'maths',
    name: 'Mathematics',
    icon: 'Calculator',
    color: '#DC2626',
    topics: ['Arithmetic', 'Algebra', 'Geometry', 'Trigonometry', 'Data Interpretation', 'Number System']
  },
  {
    id: 'reasoning',
    name: 'Reasoning',
    icon: 'Brain',
    color: '#7C3AED',
    topics: ['Verbal Reasoning', 'Non-Verbal Reasoning', 'Logical Reasoning', 'Analytical Reasoning', 'Coding-Decoding', 'Puzzles']
  },
  {
    id: 'gk',
    name: 'General Knowledge',
    icon: 'Globe',
    color: '#059669',
    topics: ['History', 'Geography', 'Polity', 'Science', 'Economics', 'Art & Culture']
  },
  {
    id: 'current-affairs',
    name: 'Current Affairs',
    icon: 'Newspaper',
    color: '#F59E0B',
    topics: ['National', 'International', 'Sports', 'Awards', 'Appointments', 'Science & Tech']
  },
  {
    id: 'computer',
    name: 'Computer',
    icon: 'Monitor',
    color: '#0891B2',
    topics: ['Computer Basics', 'MS Office', 'Internet', 'Networking', 'Database', 'Security']
  },
];

export const STATS = [
  { label: 'Registered Students', value: '10L+', icon: 'Users' },
  { label: 'Mock Tests', value: '5000+', icon: 'FileText' },
  { label: 'Questions', value: '50L+', icon: 'HelpCircle' },
  { label: 'Success Rate', value: '94%', icon: 'TrendingUp' },
];

export const FEATURES = [
  {
    id: 'ai',
    title: 'AI-Powered Questions',
    description: 'Unique questions generated every time using advanced AI. Never solve the same paper twice.',
    icon: 'Sparkles',
    color: '#7C3AED',
  },
  {
    id: 'explanations',
    title: 'Detailed Explanations',
    description: 'Learn from your mistakes with comprehensive explanations for every question.',
    icon: 'BookOpen',
    color: '#2563EB',
  },
  {
    id: 'analytics',
    title: 'Performance Analytics',
    description: 'Track your progress with detailed insights and identify areas for improvement.',
    icon: 'BarChart3',
    color: '#059669',
  },
  {
    id: 'bilingual',
    title: 'Bilingual Support',
    description: 'Practice in Hindi or English. Switch languages anytime as per your comfort.',
    icon: 'Languages',
    color: '#F59E0B',
  },
  {
    id: 'mobile',
    title: 'Mobile-First Design',
    description: 'Practice anywhere, anytime. Our platform works seamlessly on all devices.',
    icon: 'Smartphone',
    color: '#DC2626',
  },
  {
    id: 'updated',
    title: '2025 Updated Syllabus',
    description: 'Questions aligned with the latest exam patterns and current syllabus.',
    icon: 'RefreshCw',
    color: '#0891B2',
  },
];
