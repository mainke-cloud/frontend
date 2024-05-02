export const classification = [
  {
    id: 1,
    name: 'Marketing Department',
    // desc: 'Responsible for promoting products and services',
    desc:'',
    code: [
      {
        id: 101,
        name1: 'Marketing Manager',
        // desc1: 'Oversees marketing campaigns and strategies',
        desc1: '',
        code1: [
          {
            id: 1011,
            name2: 'Digital Marketing Specialist',
            // desc2: 'Executes digital marketing campaigns and manages online presence',
            desc2: '',
            code2: [
              {
                id: 10111,
                name3: 'Social Media Manager',
                desc3: 'Manages social media accounts and engagement',
                code3: 'MKT-001',
              },
              {
                id: 10112,
                name3: 'Content Creator',
                desc3: 'Creates engaging content for marketing purposes',
                code3: 'MKT-002',
              },
            ],
          },
          {
            id: 1012,
            name2: 'Marketing Analyst',
            // desc2: 'Analyzes marketing data and provides insights',
            desc2:'',
            code2: [
              {
                id: 10121,
                name3: 'Market Researcher',
                desc3: 'Conducts market research and gathers consumer insights',
                code3: 'MKT-003',
              },
            ],
          },
        ],
      },
      {
        id: 102,
        name1: 'Public Relations',
        desc1:'',
        // desc1: 'Handles public relations and media relations',
        code1: [
          {
            id: 1021,
            name2: 'PR Manager',
            desc2: '',
            // desc2: 'Develops PR strategies and manages media relations',
            code2: [
              {
                id: 10211,
                name3: 'Press Relations Officer',
                desc3: 'Maintains relationships with media outlets and journalists',
                code3: 'PR-001',
              },
            ],
          },
        ],
      },
    ],
  },
  // Add more departments and roles as needed
];
