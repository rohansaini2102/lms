
import { ExamCategory, Question, Subject } from './types';

export const EXAM_CATEGORIES: ExamCategory[] = [
  {
    id: 'ras',
    name: 'RAS',
    description: 'Rajasthan Administrative Service',
    icon: 'Landmark',
  },
  {
    id: 'ias',
    name: 'IAS / UPSC',
    description: 'Union Public Service Commission',
    icon: 'BookOpen',
  },
  {
    id: 'reet',
    name: 'REET',
    description: 'Rajasthan Eligibility Examination for Teachers',
    icon: 'GraduationCap',
  },
  {
    id: 'patwar',
    name: 'Patwar & Police',
    description: 'State Level Competitive Exams',
    icon: 'BadgeCheck',
  },
];

export const SUBJECTS: Record<string, Subject[]> = {
  ras: [
    {
      id: 'raj-history',
      name: 'History of Rajasthan',
      topics: [
        { 
          id: 'raj-dynasties', 
          name: 'Major Dynasties',
          subtopics: [
            { id: 'mewar', name: 'Guhila & Sisodia of Mewar' },
            { id: 'marwar', name: 'Rathores of Marwar' },
            { id: 'amer', name: 'Kachwahas of Amer' },
            { id: 'chauhan', name: 'Chauhans of Ajmer & Ranthambore' }
          ]
        },
        { 
          id: 'raj-modern', 
          name: 'Modern History & Integration',
          subtopics: [
            { id: '1857-revolt', name: 'Revolt of 1857 in Rajasthan' },
            { id: 'peasant-movements', name: 'Peasant Movements (Bijolia, Begun)' },
            { id: 'prajamandal', name: 'Prajamandal Movement' },
            { id: 'integration', name: '7 Stages of Integration' }
          ]
        },
        { 
          id: 'raj-culture', 
          name: 'Art, Culture & Heritage',
          subtopics: [
            { id: 'forts', name: 'Forts & Palaces' },
            { id: 'paintings', name: 'Schools of Painting (Marwar, Mewar, Hadoti)' },
            { id: 'fairs', name: 'Fairs & Festivals' },
            { id: 'folk-deities', name: 'Lok Devta & Deviyan' }
          ]
        },
      ]
    },
    {
      id: 'raj-geography',
      name: 'Geography of Rajasthan',
      topics: [
        { 
          id: 'physiography', 
          name: 'Physiographic Divisions',
          subtopics: [
            { id: 'desert', name: 'Western Sandy Plain' },
            { id: 'aravalli', name: 'Aravalli Range' },
            { id: 'eastern-plains', name: 'Eastern Plains' },
            { id: 'hadoti', name: 'Hadoti Plateau' }
          ]
        },
        { 
          id: 'climate-drainage', 
          name: 'Climate & Drainage System',
          subtopics: [
             { id: 'luni-basin', name: 'Luni River Basin' },
             { id: 'chambal', name: 'Chambal River System' },
             { id: 'lakes', name: 'Saline & Freshwater Lakes' }
          ] 
        },
      ]
    },
    {
      id: 'polity',
      name: 'Indian & State Polity',
      topics: [
        { 
          id: 'state-exec', 
          name: 'State Executive',
          subtopics: [
             { id: 'governor', name: 'Governor: Powers & Functions' },
             { id: 'cm', name: 'Chief Minister & Council' },
             { id: 'secretariat', name: 'State Secretariat & Chief Secretary' }
          ]
        },
        {
          id: 'local-bodies',
          name: 'Local Self Government',
          subtopics: [
            { id: 'panchayati-raj', name: '73rd Amendment & Panchayati Raj' },
            { id: 'urban-bodies', name: '74th Amendment & Urban Bodies' }
          ]
        }
      ]
    }
  ],
  ias: [
    {
      id: 'indian-history',
      name: 'Indian History',
      topics: [
        { 
          id: 'modern', 
          name: 'Modern India', 
          subtopics: [
            { id: 'gandhian-era', name: 'Gandhian Era (1917-1947)' }, 
            { id: 'freedom-struggle', name: 'Indian Freedom Struggle' }
          ] 
        }
      ]
    }
  ],
  reet: [
    { 
      id: 'cdp', 
      name: 'Child Development', 
      topics: [
        { 
          id: 'learning', 
          name: 'Learning Theories',
          subtopics: [
            { id: 'behaviorism', name: 'Behaviorism (Pavlov, Skinner)' },
            { id: 'constructivism', name: 'Constructivism (Piaget, Vygotsky)' }
          ]
        }
      ] 
    }
  ],
  patwar: [
    { 
      id: 'gen-science', 
      name: 'General Science', 
      topics: [
        { 
          id: 'biology', 
          name: 'Human Biology',
          subtopics: [
            { id: 'digestive', name: 'Digestive System' },
            { id: 'circulatory', name: 'Circulatory System' }
          ]
        }
      ] 
    }
  ],
};

// A full 10-question demo set for RAS History (Mewar Dynasty focus for demo)
export const DEMO_QUESTIONS: Question[] = [
  {
    id: '1',
    text: 'Who was the founder of the Mewar Kingdom (Guhila Dynasty)?',
    options: ['Rana Sanga', 'Bappa Rawal', 'Maharana Pratap', 'Rana Kumbha'],
    correctAnswer: 1,
    explanation: 'Bappa Rawal (Kalbor) is widely considered the real founder of the Mewar Kingdom and the Guhila dynasty in the 8th century AD, establishing the capital at Nagda.',
  },
  {
    id: '2',
    text: 'The Battle of Khanwa (1527) was fought between Babur and which Rajput ruler?',
    options: ['Rana Sanga', 'Maldeo', 'Prithviraj Chauhan', 'Rana Kumbha'],
    correctAnswer: 0,
    explanation: 'The Battle of Khanwa was fought near Bharatpur between Babur and Rana Sanga, marking a turning point in Mughal establishment in India.',
  },
  {
    id: '3',
    text: 'Who built the "Vijay Stambh" (Tower of Victory) in Chittorgarh?',
    options: ['Rana Sanga', 'Rana Lakha', 'Rana Kumbha', 'Rana Mokal'],
    correctAnswer: 2,
    explanation: 'Rana Kumbha built the Vijay Stambh to commemorate his victory over the combined armies of Malwa and Gujarat (Battle of Sarangpur, 1437).',
  },
  {
    id: '4',
    text: 'Maharana Pratap was born in which fort?',
    options: ['Chittorgarh', 'Kumbhalgarh', 'Mandalgarh', 'Gogunda'],
    correctAnswer: 1,
    explanation: 'Maharana Pratap was born on May 9, 1540, in the Badal Mahal of Kumbhalgarh Fort.',
  },
  {
    id: '5',
    text: 'Which Mewar ruler signed the treaty with the British East India Company in 1818?',
    options: ['Maharana Bhim Singh', 'Maharana Swaroop Singh', 'Maharana Fateh Singh', 'Maharana Shambhu Singh'],
    correctAnswer: 0,
    explanation: 'Maharana Bhim Singh signed the subordinate alliance treaty with the British East India Company on January 13, 1818.',
  },
  {
    id: '6',
    text: 'The "Panna Dhai" sacrificed her son Chandan to save which future ruler of Mewar?',
    options: ['Udai Singh II', 'Vikramaditya', 'Ratnasimha', 'Ari Singh'],
    correctAnswer: 0,
    explanation: 'Panna Dhai sacrificed her own son to save the young Udai Singh II from the usurper Banvir.',
  },
  {
    id: '7',
    text: 'Who is known as the "Bheeshma Pitamah" of Rajasthan?',
    options: ['Rana Sanga', 'Rao Chunda', 'Rawal Jait Singh', 'Rana Hammir'],
    correctAnswer: 1,
    explanation: 'Rao Chunda (son of Rana Lakha) is called the Bheeshma of Rajasthan because he renounced his claim to the throne for his step-brother Mokal.',
  },
  {
    id: '8',
    text: 'Which inscription mentions the achievements of the Guhila rulers up to Samar Singh?',
    options: ['Bijolia Inscription', 'Chirwa Inscription', 'Kumbhalgarh Inscription', 'Ghosundi Inscription'],
    correctAnswer: 1,
    explanation: 'The Chirwa Inscription (1273 AD) provides information about the Guhila rulers of Mewar and the social conditions of that time.',
  },
  {
    id: '9',
    text: 'The capital of Mewar was shifted from Chittor to Udaipur by whom?',
    options: ['Rana Sanga', 'Udai Singh II', 'Maharana Pratap', 'Amar Singh I'],
    correctAnswer: 1,
    explanation: 'Udai Singh II founded the city of Udaipur in 1559 and subsequently shifted the capital there for better strategic defense.',
  },
  {
    id: '10',
    text: 'Who was the commander of the Rajput forces in the Battle of Haldighati alongside Maharana Pratap?',
    options: ['Hakim Khan Sur', 'Bhamashah', 'Man Singh', 'Asaf Khan'],
    correctAnswer: 0,
    explanation: 'Hakim Khan Sur was a Pathan commander who led the vanguard of Maharana Pratap\'s army and fought loyally against the Mughals.',
  },
];
