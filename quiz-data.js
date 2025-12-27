// ONTARIO G1 PRACTICE TEST - COMPLETE QUESTION DATABASE
// Based on "Driver's Handbook Study Guide" PDF
// 77 Road Sign Questions + 104 Rules of the Road Questions = 181 Total
// ============================================
// PART A: TRAFFIC SIGNS (77 Questions)
// ============================================
const roadSignsQuestions = [
  {
    id: 1,
    image: "images/signs/1.png",
    question: "What does this sign mean?",
    options: [
      "Road slippery when wet",
      "No right turn permitted",
      "No left turn permitted",
      "You must not make a U-turn"
    ],
    correctAnswer: 3,
    explanation: "This sign indicates that making a U-turn is not allowed at this location. Drivers must continue in their current direction.",
    category: "regulatory"
  },
  {
    id: 2,
    image: "images/signs/2.png",
    question: "What does this sign mean?",
    options: [
      "Hidden intersection ahead",
      "Winding road ahead",
      "Road slippery when wet",
      "Narrow road ahead"
    ],
    correctAnswer: 1,
    explanation: "This sign warns that the road ahead has a series of curves. Drivers should slow down and be prepared to steer carefully.",
    category: "warning"
  },
  {
    id: 3,
    image: "images/signs/3.png",
    question: "What does this sign mean?",
    options: [
      "No entry into the intersection",
      "This sign means no stopping",
      "Vehicles approaching from angle shown must stop",
      "Need not stop for stop signs in direction of arrows"
    ],
    correctAnswer: 1,
    explanation: "This sign means stopping is not permitted at any time. Drivers may only stop briefly where permitted to load or unload passengers.",
    category: "regulatory"
  },
  {
    id: 4,
    image: "images/signs/4.png",
    question: "What does this sign warn of?",
    options: [
      "Traffic signal ahead",
      "Stop sign 150 metres ahead",
      "Bump 120 metres ahead",
      "Railway crossing ahead"
    ],
    correctAnswer: 0,
    explanation: "This sign warns that a traffic signal is ahead. Drivers should be ready to stop or proceed depending on the signal.",
    category: "warning"
  },
  {
    id: 5,
    image: "images/signs/5.png",
    question: "What does this sign indicate?",
    options: [
      "Winding road ahead",
      "Bumpy road ahead",
      "Road ahead slippery when wet",
      "No passing ahead"
    ],
    correctAnswer: 2,
    explanation: "This sign warns that the road may become slippery when wet. Reduce speed and increase following distance during rain.",
    category: "warning"
  },
  {
    id: 6,
    image: "images/signs/6.png",
    question: "What does this sign mean?",
    options: [
      "Playground zone sign",
      "Children playing in residential area",
      "School zone sign",
      "Direction sign for children"
    ],
    correctAnswer: 2,
    explanation: "This sign indicates a school zone. Drivers must slow down and watch carefully for children and crossing guards.",
    category: "warning"
  },
  {
    id: 7,
    image: "images/signs/7.png",
    question: "What does this sign mean?",
    options: [
      "Divided highway ahead",
      "You are approaching a one-way street",
      "Hidden intersection ahead",
      "Pavement narrows"
    ],
    correctAnswer: 3,
    explanation: "This sign warns that the pavement will narrow ahead. Drivers should reduce speed and allow space for other vehicles.",
    category: "warning"
  },
  {
    id: 8,
    image: "images/signs/8.png",
    question: "What does this sign mean?",
    options: [
      "Narrow road ahead",
      "Hidden intersection ahead",
      "Railway crossing ahead",
      "Intersection ahead"
    ],
    correctAnswer: 3,
    explanation: "This sign warns that there is an intersection ahead. Be alert for vehicles entering from other roads.",
    category: "warning"
  },
  {
    id: 9,
    image: "images/signs/9.png",
    question: "What does this sign mean?",
    options: [
      "Divided highway ahead",
      "Divided road ends, keep to the right",
      "Narrow bridge ahead",
      "Road under construction"
    ],
    correctAnswer: 1,
    explanation: "This sign indicates that a divided roadway is ending. Traffic will merge, so keep to the right.",
    category: "warning"
  },
  {
    id: 10,
    image: "images/signs/10.png",
    question: "What does this sign mean?",
    options: [
      "Right lane ends",
      "Hidden intersection ahead",
      "You are approaching a steep hill",
      "Passing is not allowed"
    ],
    correctAnswer: 3,
    explanation: "This sign means passing other vehicles is prohibited. Drivers must stay in their lane.",
    category: "regulatory"
  },
  {
    id: 11,
    image: "images/signs/11.png",
    question: "What does this sign mean?",
    options: [
      "Narrow road ahead",
      "Road ahead turns left then right",
      "Road ahead turns right then left",
      "Intersection ahead"
    ],
    correctAnswer: 2,
    explanation: "This sign warns that the road ahead curves to the right and then to the left. Slow down and prepare for changing direction.",
    category: "warning"
  },
  {
    id: 12,
    image: "images/signs/12.png",
    question: "What does this sign mean?",
    options: [
      "Stop sign ahead",
      "Yield right-of-way",
      "Dead end street ahead",
      "Slow moving vehicle ahead"
    ],
    correctAnswer: 0,
    explanation: "This sign warns that a stop sign is ahead. Drivers should prepare to stop.",
    category: "warning"
  },
  {
    id: 13,
    image: "images/signs/13.png",
    question: "A green circle means:",
    options: [
      "Truck route",
      "No trucks",
      "Route for large trucks",
      "Permissive sign"
    ],
    correctAnswer: 3,
    explanation: "A green circle indicates a permitted action. Drivers may proceed as shown by the symbol.",
    category: "regulatory"
  },
  {
    id: 14,
    image: "images/signs/14.png",
    question: "What does this sign mean?",
    options: [
      "Keep to right",
      "Keep to left",
      "Keep out (Do not enter)",
      "Do not pass"
    ],
    correctAnswer: 2,
    explanation: "This sign means do not enter. Vehicles are not allowed to travel beyond this point.",
    category: "regulatory"
  },
  {
    id: 15,
    image: "images/signs/15.png",
    question: "What does this sign mean?",
    options: [
      "Construction sign—slow down obey flagman",
      "Construction sign replacing flagman",
      "Regulatory sign—reduce speed",
      "Road work ahead"
    ],
    correctAnswer: 3,
    explanation: "This sign warns that road work is ahead. Drivers should slow down and be alert for workers and equipment.",
    category: "warning"
  },
  {
    id: 16,
    image: "images/signs/16.png",
    question: "What does this sign mean?",
    options: [
      "Policemen at intersection",
      "Ticket if you disobey traffic signal",
      "Stop for red light",
      "Red light camera at intersection"
    ],
    correctAnswer: 3,
    explanation: "This sign indicates a red light camera is in use at the intersection. Drivers must obey traffic signals.",
    category: "warning"
  },
  {
    id: 17,
    image: "images/signs/17.png",
    question: "What does this sign warn of?",
    options: [
      "Deer regularly cross",
      "Zoo ahead",
      "No honking at animals",
      "Deer are welcome"
    ],
    correctAnswer: 0,
    explanation: "This sign warns that deer frequently cross the road. Drivers should be alert and reduce speed.",
    category: "warning"
  },
  {
    id: 18,
    image: "images/signs/18.png",
    question: "What does this sign mean?",
    options: [
      "Truck entrance on the right side ahead",
      "No truck allowed",
      "Slow down for truck",
      "Truck route"
    ],
    correctAnswer: 0,
    explanation: "This sign warns that trucks may be entering or exiting the roadway from the right.",
    category: "warning"
  },
  {
    id: 19,
    image: "images/signs/19.png",
    question: "What does this sign mean?",
    options: [
      "No right turn",
      "Divided highway ends",
      "Narrow bridge ahead",
      "No right turn on red"
    ],
    correctAnswer: 3,
    explanation: "This sign means right turns on a red light are not permitted at this intersection.",
    category: "regulatory"
  },
  {
    id: 20,
    image: "images/signs/20.png",
    question: "This sign indicates:",
    options: [
      "You may exit if you remain in right hand lane",
      "You must not drive in right hand lane",
      "End of highway, move into right lane",
      "Two-way left turn lane"
    ],
    correctAnswer: 3,
    explanation: "This sign shows a two-way left-turn lane used by vehicles turning left from either direction.",
    category: "guide"
  },
  {
    id: 21,
    image: "images/signs/21.png",
    question: "What does this sign mean?",
    options: [
      "X-intersection for school vehicles",
      "School crosswalk sign",
      "Caution—school bus crossing",
      "Regulatory sign"
    ],
    correctAnswer: 3,
    explanation: "This is a regulatory sign that must be obeyed as instructed.",
    category: "regulatory"
  },
  {
    id: 22,
    image: "images/signs/22.png",
    question: "What does this sign mean?",
    options: [
      "School area ahead",
      "Railway crossing ahead",
      "You must give the right-of-way",
      "You have the right-of-way"
    ],
    correctAnswer: 2,
    explanation: "This sign means you must yield the right-of-way to other traffic.",
    category: "regulatory"
  },
  {
    id: 23,
    image: "images/signs/23.png",
    question: "What does this sign mean?",
    options: [
      "Stop sign 150 metres ahead",
      "Bump 120 metres ahead",
      "Stop at all times",
      "Stop only if other vehicles are approaching"
    ],
    correctAnswer: 2,
    explanation: "This sign means drivers must come to a complete stop every time.",
    category: "regulatory"
  },
  {
    id: 24,
    image: "images/signs/24.png",
    question: "What does this sign mean?",
    options: [
      "You must make a right turn only",
      "You must not make a left turn",
      "Hidden intersection ahead",
      "You are approaching a traffic island"
    ],
    correctAnswer: 1,
    explanation: "This sign indicates that left turns are not permitted at this location.",
    category: "regulatory"
  },
  {
    id: 25,
    image: "images/signs/25.png",
    question: "What does this sign mean?",
    options: [
      "No bicycles allowed",
      "Do not drive through",
      "Bicycle route",
      "No parking"
    ],
    correctAnswer: 2,
    explanation: "This sign means bicycles are not permitted on this roadway.",
    category: "regulatory"
  },
  {
    id: 26,
    image: "images/signs/26.png",
    question: "What does this sign mean?",
    options: [
      "Snowmobiles may not use this road",
      "Snowmobile parking only",
      "Snowmobiles may use this road",
      "Snowmobile repair shop ahead"
    ],
    correctAnswer: 0,
    explanation: "This sign indicates snowmobiles are not allowed on this road.",
    category: "regulatory"
  },
  {
    id: 27,
    image: "images/signs/27.png",
    question: "What does this sign mean?",
    options: [
      "You may park during posted times",
      "You may not park between the signs during posted times",
      "No parking",
      "Weekend parking only"
    ],
    correctAnswer: 1,
    explanation: "This sign means parking is prohibited between the signs during the posted times.",
    category: "regulatory"
  },
  {
    id: 28,
    image: "images/signs/28.png",
    question: "What does this sign mean?",
    options: [
      "Bicycles are allowed on this road",
      "No bicycles allowed on this road",
      "No parking",
      "No stopping"
    ],
    correctAnswer: 1,
    explanation: "This sign means bicycles are not allowed on this road.",
    category: "regulatory"
  },
  {
    id: 29,
    image: "images/signs/29.png",
    question: "What does this sign mean?",
    options: [
      "Care for pedestrian",
      "Watch for traffic signal",
      "Do not block intersection",
      "Do not slow down"
    ],
    correctAnswer: 2,
    explanation: "This sign means drivers must not stop in the intersection and block cross traffic.",
    category: "regulatory"
  },
  {
    id: 30,
    image: "images/signs/30.png",
    question: "What does this sign mean?",
    options: [
      "Reserved lane for certain vehicles at certain times",
      "No buses allowed",
      "No stopping during posted times",
      "Do not enter during posted times"
    ],
    correctAnswer: 0,
    explanation: "This sign indicates a reserved lane that may only be used by certain vehicles at specific times.",
    category: "guide"
  },
  {
    id: 31,
    image: "images/signs/31.png",
    question: "What does this sign mean?",
    options: [
      "Intersection ahead",
      "Narrow bridge ahead",
      "Paved surface ends",
      "Road ahead is split"
    ],
    correctAnswer: 1,
    explanation: "This sign warns that a narrow bridge is ahead. Drivers should slow down and be cautious.",
    category: "warning"
  },
  {
    id: 32,
    image: "images/signs/32.png",
    question: "What does this sign mean?",
    options: [
      "Keep to the right of traffic island",
      "Road turns right then left",
      "Winding road ahead",
      "Pass traffic on the right"
    ],
    correctAnswer: 0,
    explanation: "This sign instructs drivers to keep to the right of the traffic island.",
    category: "regulatory"
  },
  {
    id: 33,
    image: "images/signs/33.png",
    question: "What does this sign mean?",
    options: [
      "Destination board",
      "School zone",
      "Provincial park",
      "Pedestrian control sign"
    ],
    correctAnswer: 0,
    explanation: "This sign provides destination and route information for drivers.",
    category: "guide"
  },
  {
    id: 34,
    image: "images/signs/34.png",
    question: "What does this sign mean?",
    options: [
      "Stop sign ahead",
      "Yield right-of-way",
      "Dead end street ahead",
      "Slow moving vehicle"
    ],
    correctAnswer: 3,
    explanation: "This sign warns that a slow-moving vehicle may be on the road ahead.",
    category: "warning"
  },
  {
    id: 35,
    image: "images/signs/35.png",
    question: "What does this sign mean?",
    options: [
      "Going straight is allowed",
      "No right turn",
      "No left turn",
      "Do not drive straight through the intersection"
    ],
    correctAnswer: 3,
    explanation: "This sign means vehicles are not permitted to go straight through the intersection.",
    category: "regulatory"
  },
  {
    id: 36,
    image: "images/signs/36.png",
    question: "What does this sign mean?",
    options: [
      "Parking only for vehicles displaying a disabled permit",
      "No parking",
      "No standing",
      "Parking not allowed for disabled persons"
    ],
    correctAnswer: 0,
    explanation: "This sign indicates parking is reserved for vehicles displaying a valid disabled permit.",
    category: "regulatory"
  },
  {
    id: 37,
    image: "images/signs/37.png",
    question: "What does this sign mean?",
    options: [
      "No bicycles",
      "No pedestrians allowed",
      "No children allowed",
      "Dogs only"
    ],
    correctAnswer: 1,
    explanation: "This sign means pedestrians are not permitted in this area.",
    category: "regulatory"
  },
  {
    id: 38,
    image: "images/signs/38.png",
    question: "What does this sign mean?",
    options: [
      "Only for parking or dropping off with disabled permit",
      "Standing area for disabled persons only",
      "No parking",
      "Parking permitted"
    ],
    correctAnswer: 0,
    explanation: "This sign restricts stopping or parking to vehicles with a valid disabled permit.",
    category: "regulatory"
  },
  {
    id: 39,
    image: "images/signs/39.png",
    question: "What does this sign mean?",
    options: [
      "School area",
      "Bumpy road",
      "Do not stand or stop in this area",
      "No bicycles allowed"
    ],
    correctAnswer: 2,
    explanation: "This sign means stopping or standing is not allowed in this area.",
    category: "regulatory"
  },
  {
    id: 40,
    image: "images/signs/40.png",
    question: "What does this sign mean?",
    options: [
      "Lane for buses only",
      "Lane for trucks only",
      "Lane not for bicycles",
      "Lane for bicycles only"
    ],
    correctAnswer: 3,
    explanation: "This sign indicates a lane reserved exclusively for bicycles.",
    category: "guide"
  },
  {
    id: 41,
    image: "images/signs/41.png",
    question: "What does this sign mean?",
    options: [
      "Keep right except when passing",
      "Keep right if you want to park",
      "No U-turns",
      "For right turns"
    ],
    correctAnswer: 0,
    explanation: "This sign instructs drivers to keep right except when passing another vehicle.",
    category: "regulatory"
  },
  {
    id: 42,
    image: "images/signs/42.png",
    question: "What does this sign mean?",
    options: [
      "No left turns",
      "Merging traffic ahead",
      "Road branching off ahead",
      "Hidden intersection"
    ],
    correctAnswer: 2,
    explanation: "This sign warns that a road branches off ahead. Be alert for vehicles entering or leaving.",
    category: "warning"
  },
  {
    id: 43,
    image: "images/signs/43.png",
    question: "What does this sign mean?",
    options: [
      "No U-turns",
      "No left turns",
      "Right turn ahead",
      "Side road ahead does not have a clear view of traffic"
    ],
    correctAnswer: 3,
    explanation: "This sign warns that traffic entering from a side road may have limited visibility.",
    category: "warning"
  },
  {
    id: 44,
    image: "images/signs/44.png",
    question: "A red circle means:",
    options: [
      "Do not enter roadway",
      "Do not enter unless local traffic",
      "Traffic circle ahead",
      "Prohibited sign"
    ],
    correctAnswer: 3,
    explanation: "A red circle indicates a prohibited action. Drivers must not do what the symbol shows.",
    category: "regulatory"
  },
  {
    id: 45,
    image: "images/signs/45.png",
    question: "What does this sign mean?",
    options: [
      "Merge with traffic, both roads responsible",
      "Hidden intersection",
      "No U-turns",
      "No left turns"
    ],
    correctAnswer: 0,
    explanation: "This sign warns that traffic from both roads must merge safely.",
    category: "warning"
  },
  {
    id: 46,
    image: "images/signs/46.png",
    question: "What does this sign mean?",
    options: [
      "Paved surface ends ahead",
      "Watch for falling rocks",
      "School zone sign",
      "Do not block intersection"
    ],
    correctAnswer: 0,
    explanation: "This sign warns that the paved road surface will end ahead.",
    category: "warning"
  },
  {
    id: 47,
    image: "images/signs/47.png",
    question: "What does this sign mean?",
    options: [
      "Bicycles are not allowed",
      "Bicycle crossing ahead",
      "No parking",
      "No left turns"
    ],
    correctAnswer: 1,
    explanation: "This sign warns that cyclists may be crossing the road ahead.",
    category: "warning"
  },
  {
    id: 48,
    image: "images/signs/48.png",
    question: "What does this sign mean?",
    options: [
      "Safety check ahead",
      "Warns of a steep hill ahead",
      "Pavement ends, 500 feet ahead",
      "Bumpy road ahead"
    ],
    correctAnswer: 1,
    explanation: "This sign warns drivers of a steep hill ahead. Reduce speed and prepare to adjust braking.",
    category: "warning"
  },

    
    {
  id: 49,
  image: "images/signs/49.png",
  question: "What does this sign mean?",
  options: [
    "Right lane ends",
    "Hidden intersection ahead",
    "You are approaching a steep hill",
    "No parking"
  ],
  correctAnswer: 0,
  explanation: "This sign warns that the right lane ends ahead. Drivers must merge safely into the remaining lane.",
  category: "warning"
},
{
  id: 50,
  image: "images/signs/50.png",
  question: "What does this sign mean?",
  options: [
    "Winding road ahead",
    "Keep to left",
    "Danger, road ends",
    "Danger, sharp turn"
  ],
  correctAnswer: 3,
  explanation: "This sign warns of a sharp turn ahead. Drivers should slow down and be prepared to turn safely.",
  category: "warning"
},
{
  id: 51,
  image: "images/signs/51.png",
  question: "What does this sign mean?",
  options: [
    "You are approaching a four-way intersection",
    "You are approaching a railroad crossing",
    "You are approaching a hospital zone",
    "You are approaching a pedestrian crosswalk"
  ],
  correctAnswer: 1,
  explanation: "This sign warns that a railway crossing is ahead. Drivers should look and listen for trains.",
  category: "warning"
},
{
  id: 52,
  image: "images/signs/52.png",
  question: "What does this sign mean?",
  options: [
    "Maximum speed of 50 km per hour from this sign to the next sign",
    "Speed limit for rural school zones",
    "End of 50 km per hour zone",
    "Maximum speed of 50 km per hour ahead"
  ],
  correctAnswer: 3,
  explanation: "This sign warns that the maximum speed ahead will be 50 km/h. Drivers should reduce speed before reaching the zone.",
  category: "warning"
},
{
  id: 53,
  image: "images/signs/53.png",
  question: "What does this sign mean?",
  options: [
    "I am turning left",
    "I am slowing or stopping",
    "I am turning right",
    "You may pass me"
  ],
  correctAnswer: 1,
  explanation: "This hand signal indicates that the driver is slowing down or stopping.",
  category: "guide"
},
{
  id: 54,
  image: "images/signs/54.png",
  question: "What does this sign mean?",
  options: [
    "Factory ahead, slow down",
    "Bumpy or uneven pavement ahead",
    "Construction zone",
    "Bridge or viaduct"
  ],
  correctAnswer: 1,
  explanation: "This sign warns of uneven or bumpy pavement ahead. Drivers should reduce speed and maintain control.",
  category: "warning"
},
{
  id: 55,
  image: "images/signs/55.png",
  question: "What does this signal mean?",
  options: [
    "I am turning right",
    "I am turning left",
    "I am slowing or stopping",
    "You may pass me"
  ],
  correctAnswer: 0,
  explanation: "This hand signal indicates that the driver intends to turn right.",
  category: "guide"
},
{
  id: 56,
  image: "images/signs/56.png",
  question: "What does this sign indicate?",
  options: [
    "You may exit if you remain in right hand lane",
    "You must not drive in right hand lane under any circumstances",
    "End of highway, you must move into right hand lane",
    "You must exit if you remain in right hand lane"
  ],
  correctAnswer: 3,
  explanation: "This sign means vehicles in the right lane must exit. Drivers not exiting should move out of the lane.",
  category: "guide"
},
{
  id: 57,
  image: "images/signs/57.png",
  question: "What does this sign mean?",
  options: [
    "Drive with caution",
    "Share the road with oncoming traffic",
    "Slippery when wet",
    "No standing"
  ],
  correctAnswer: 1,
  explanation: "This sign warns that traffic from both directions must share the road. Drivers should proceed carefully.",
  category: "warning"
},
{
  id: 58,
  image: "images/signs/58.png",
  question: "What does this sign mean?",
  options: [
    "No trucks allowed",
    "Warns of a steep hill ahead",
    "Passing is not allowed",
    "Watch for falling rocks"
  ],
  correctAnswer: 3,
  explanation: "This sign warns of falling rocks ahead. Drivers should slow down and watch for debris on the road.",
  category: "warning"
},
{
  id: 59,
  image: "images/signs/59.png",
  question: "What does this sign mean?",
  options: [
    "Fire hall",
    "Do not enter",
    "There may be water flowing over the road",
    "Construction zone"
  ],
  correctAnswer: 2,
  explanation: "This sign warns that water may be flowing across the roadway. Drivers should slow down and proceed with caution.",
  category: "warning"
},
{
  id: 60,
  image: "images/signs/60.png",
  question: "What does this sign mean?",
  options: [
    "A hidden school bus stop ahead, slow down, drive with extra caution, watch for children and school buses with flashing red lights",
    "Hidden intersection",
    "School zone",
    "School with playground"
  ],
  correctAnswer: 0,
  explanation: "This sign warns of a hidden school bus stop ahead. Drivers must slow down, watch for children, and be prepared to stop for buses with flashing red lights.",
  category: "warning"
},

    
    {
  "id": 61,
  "image": "images/signs/61.png",
  "question": "What does this sign mean?",
  "options": [
    "Bumpy road ahead",
    "Sign shows the maximum truck clearance height",
    "School zone ahead",
    "Watch for falling rocks"
  ],
  "correctAnswer": 1,
  "explanation": "This sign indicates the maximum vertical clearance allowed for trucks or tall vehicles.",
  "category": "warning"
},
{
  "id": 62,
  "image": "images/signs/62.png",
  "question": "What does this sign mean?",
  "options": [
    "Snowmobile repair shop ahead",
    "Snowmobile parking",
    "Snowmobiles cross this road",
    "Snowmobiles not allowed"
  ],
  "correctAnswer": 2,
  "explanation": "This sign warns drivers that snowmobiles may cross the roadway.",
  "category": "warning"
},
{
  "id": 63,
  "image": "images/signs/63.png",
  "question": "What does this sign mean?",
  "options": [
    "Do not pass any vehicles within 30 metres of a pedestrian crossing",
    "School zone",
    "Uneven pavement ahead",
    "Construction zone"
  ],
  "correctAnswer": 0,
  "explanation": "This sign means passing is prohibited near a pedestrian crossing for safety reasons.",
  "category": "regulatory"
},
{
  "id": 64,
  "image": "images/signs/64.png",
  "question": "What does this sign mean?",
  "options": [
    "Watch for disabled persons",
    "Passing is not allowed",
    "Wheelchair crossing",
    "A school crossing ahead, follow the directions of the crossing guard or school safety patroller"
  ],
  "correctAnswer": 3,
  "explanation": "This sign warns of a school crossing. Drivers must obey the directions of crossing guards or school patrollers.",
  "category": "warning"
},
{
  "id": 65,
  "image": "images/signs/65.png",
  "question": "What does this sign mean?",
  "options": [
    "When a school bus arm swings out with red lights flashing, you must stop and are prohibited from passing",
    "Construction sign",
    "School zone",
    "Stop sign ahead"
  ],
  "correctAnswer": 0,
  "explanation": "This sign reminds drivers that they must stop when a school bus has flashing red lights and a stop arm extended.",
  "category": "regulatory"
},
{
  "id": 66,
  "image": "images/signs/66.png",
  "question": "What does this sign mean?",
  "options": [
    "It is a warning sign",
    "During school hours when the yellow lights are flashing, follow the speed limit shown",
    "Watch for crossing guard only",
    "Watch for children only"
  ],
  "correctAnswer": 1,
  "explanation": "This sign means the posted speed limit applies only when the yellow lights are flashing during school hours.",
  "category": "regulatory"
},
{
  "id": 67,
  "image": "images/signs/67.png",
  "question": "What does this sign mean?",
  "options": [
    "Highway with two express lanes",
    "The two lanes ahead are closed",
    "Two or more passengers must be in the vehicle to use this lane on the highway",
    "Two lanes will merge into one"
  ],
  "correctAnswer": 2,
  "explanation": "This sign indicates a High Occupancy Vehicle (HOV) lane that requires two or more passengers.",
  "category": "regulatory"
},
{
  "id": 68,
  "image": "images/signs/68.png",
  "question": "What does this sign mean?",
  "options": [
    "Hazard, the downward line indicates the side on which you may safely pass",
    "Hazard, the downward line indicates the side on which you may not safely pass",
    "Shopping ahead",
    "Rest area ahead"
  ],
  "correctAnswer": 0,
  "explanation": "This hazard marker shows which side drivers may safely pass an obstruction.",
  "category": "warning"
},
{
  "id": 69,
  "image": "images/signs/69.png",
  "question": "What does this sign mean?",
  "options": [
    "Winding road ahead",
    "By wheelchair only or disabled person parking (handicap)",
    "No parking",
    "No standing"
  ],
  "correctAnswer": 1,
  "explanation": "This sign designates parking reserved for persons with disabilities.",
  "category": "regulatory"
},
{
  "id": 70,
  "image": "images/signs/70.png",
  "question": "What does this sign mean?",
  "options": [
    "Two separate roads by median ahead, keep to the right",
    "Divided highway ends",
    "Narrow bridge ahead",
    "Road under construction"
  ],
  "correctAnswer": 0,
  "explanation": "This sign indicates the road is divided by a median and drivers must keep right.",
  "category": "warning"
},
{
  "id": 71,
  "image": "images/signs/71.png",
  "question": "What does this sign mean?",
  "options": [
    "Lane usage sign permitting all turns including left",
    "No parking from arrows to corner",
    "Advance warning of danger",
    "Lane usage sign meaning right turn only"
  ],
  "correctAnswer": 3,
  "explanation": "This sign indicates that vehicles in this lane must turn right.",
  "category": "regulatory"
},
{
  "id": 72,
  "image": "images/signs/72.png",
  "question": "What does this signal mean?",
  "options": [
    "I am turning right",
    "I am turning left",
    "I am slowing or stopping",
    "I am stopping"
  ],
  "correctAnswer": 1,
  "explanation": "This hand signal indicates that the driver intends to turn left.",
  "category": "guide"

    },

    
   {
  "id": 73,
  "image": "images/signs/73.png",
  "question": "What does this sign mean?",
  "options": [
    "Keep distance away",
    "New born baby on road",
    "New driver",
    "New car"
  ],
  "correctAnswer": 2,
  "explanation": "This sign identifies a new or inexperienced driver. Other drivers should be patient and keep a safe distance.",
  "category": "guide"
},
{
  "id": 74,
  "image": "images/signs/74.png",
  "question": "What does this sign mean?",
  "options": [
    "Housing",
    "Hospital",
    "Horse racing",
    "Hills"
  ],
  "correctAnswer": 1,
  "explanation": "This sign indicates a hospital nearby. Drivers should reduce noise and drive cautiously.",
  "category": "guide"
},
{
  "id": 75,
  "image": "images/signs/75.png",
  "question": "What does this sign mean?",
  "options": [
    "Air show ahead",
    "Air plane landing",
    "Route to airport",
    "None of the above"
  ],
  "correctAnswer": 2,
  "explanation": "This sign indicates the route leading to an airport.",
  "category": "guide"
},
{
  "id": 76,
  "image": "images/signs/76.png",
  "question": "What does this sign mean?",
  "options": [
    "No smoking",
    "Not more than 3 minutes idling",
    "Idling is permitted",
    "No stopping more than 3 minutes"
  ],
  "correctAnswer": 1,
  "explanation": "This sign limits vehicle idling to no more than three minutes to reduce pollution.",
  "category": "regulatory"
},
{
  "id": 77,
  "image": "images/signs/77.png",
  "question": "What does this sign mean?",
  "options": [
    "The bridge ahead lifts or swings to allow boats to pass",
    "Airport",
    "Hotel",
    "Narrow road ahead"
  ],
  "correctAnswer": 0,
  "explanation": "This sign warns of a movable bridge ahead that may lift or swing open for boat traffic.",
  "category": "warning"
}

];
// ============================================
// PART B: RULES OF THE ROAD (104 Questions)
// ============================================

const rulesOfTheRoadQuestions = [
  {
    "id": 101,
    "question": "In Ontario, there is a seat belt law",
    "options": [
      "Yes",
      "No",
      "Only when driving on an open highway",
      "Only when driving within a municipality"
    ],
    "correctAnswer": 0,
    "category": "laws",
    "explanation": "In Ontario, every person in a motor vehicle must wear a seatbelt and be properly secured."
  },
  {
    "id": 102,
    "question": "If someone is tailgating you, what should you do?",
    "options": [
      "Move into another lane when it is safe to do so",
      "Slow down slightly to increase the space in front of your car",
      "Pull over to let the tailgater pass",
      "All of the above"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "If someone is tailgating you, move over if possible, or increase your following distance from the car in front to allow more room for braking."
  },
  {
    "id": 103,
    "question": "Failing to stop for a school bus that is unloading passengers will",
    "options": [
      "Result in a one year jail sentence",
      "Cost you 6 demerit points and a fine of up to $1000",
      "Get you a warning and a fine of $100",
      "Result in retaking your road test"
    ],
    "correctAnswer": 1,
    "category": "laws",
    "explanation": "Failing to stop for a school bus with its red lights flashing is a serious offense that carries heavy fines and 6 demerit points."
  },
  {
    "id": 104,
    "question": "When a car is stopped to allow a pedestrian to cross the street at a marked crosswalk, you should",
    "options": [
      "Pass the stopped car on the left",
      "Sound horn for the driver of the stopped car to drive on",
      "Pass the stopped car to the right",
      "Not pass any car stopped to allow a pedestrian to cross"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "It is illegal and dangerous to pass a vehicle that has stopped to allow a pedestrian to cross the road."
  },
  {
    "id": 105,
    "question": "When driving in heavy fog, you should use",
    "options": [
      "Parking lights",
      "Low beam headlights",
      "Parking lights and high beam headlights",
      "High beam headlights"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "Low beams direct light down onto the road. High beams reflect off the fog and create glare, making it harder to see."
  },
  {
    "id": 106,
    "question": "Never change lanes in traffic without",
    "options": [
      "Giving proper signal and looking to make sure the move can be made safely",
      "Decreasing speed and giving the correct signal",
      "Looking into the rear view mirror only",
      "Blowing your horn and looking to the rear"
    ],
    "correctAnswer": 0,
    "category": "safety",
    "explanation": "Always signal your intent and check your mirrors and blind spots before changing lanes."
  },
  {
    "id": 107,
    "question": "What documents may a police officer require a motor vehicle owner to produce?",
    "options": [
      "If the motor vehicle is insured—a liability insurance card",
      "The motor vehicle ownership",
      "If he is operating a motor vehicle—a valid driver's licence",
      "Any of the above"
    ],
    "correctAnswer": 3,
    "category": "laws",
    "explanation": "Drivers must carry their license, registration (ownership), and insurance at all times and present them to police upon request."
  },
  {
    "id": 108,
    "question": "Every accident must be reported to the police where there is personal injury or when the damage exceeds",
    "options": [
      "$100",
      "$150",
      "$1500",
      "$1000"
    ],
    "correctAnswer": 3,
    "category": "laws",
    "explanation": "In Ontario, you must report an accident to the police if anyone is injured or if the total property damage to all vehicles appears to be more than the legal threshold (historically $1000 in this manual, though updated to $2000 in current law)."
  },
  {
    "id": 109,
    "question": "When lights are required, drivers must use lower beam headlights when following another vehicle",
    "options": [
      "Within 30 m (100 ft.)",
      "Within 60 m (200 ft.)",
      "Within 120 m (400 ft.)",
      "This only applies when approaching another vehicle"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "Use low beams when following within 60 meters of another vehicle to avoid blinding the driver in front."
  },
  {
    "id": 110,
    "question": "While travelling on a highway, the driver of a motor vehicle is not permitted to carry, in a house or boat trailer",
    "options": [
      "Firearms",
      "Flammable material",
      "Persons (Passenger)",
      "Pets"
    ],
    "correctAnswer": 2,
    "category": "laws",
    "explanation": "It is illegal to have anyone inside a trailer while it is being towed on a highway."
  },
  {
    "id": 111,
    "question": "When on streets designed for two-way traffic, you hear the siren of an emergency vehicle, what does the law require you to do?",
    "options": [
      "Speed up and get out of the way",
      "Signal the driver to pass",
      "Pull to the right as far as possible and stop",
      "Continue at the same speed"
    ],
    "correctAnswer": 2,
    "category": "laws",
    "explanation": "When an emergency vehicle approaches with sirens/lights, pull to the right and come to a complete stop."
  },
  {
    "id": 112,
    "question": "Which of the following has the right-of-way over all others at an intersection when the signal light is green?",
    "options": [
      "Pedestrians crossing against the light",
      "Pedestrians crossing with the light",
      "Vehicles turning right",
      "Vehicles turning left"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "Pedestrians crossing with the signal have the right of way over turning vehicles."
  },
  {
    "id": 113,
    "question": "To what penalties is a driver liable who is convicted of driving while disqualified?",
    "options": [
      "A fine of $500 or imprisonment for six months or both",
      "Impoundment of the motor vehicle being operated for three months",
      "An additional 6-month period of suspension of driving privilege",
      "Any or all of the above"
    ],
    "correctAnswer": 3,
    "category": "laws",
    "explanation": "Driving while disqualified is a serious offense with multiple cumulative penalties."
  },
  {
    "id": 114,
    "question": "When the traffic signal-light facing you is red and you intend to go straight through the intersection, what must you do?",
    "options": [
      "Stop, give pedestrians the right-of-way, then proceed with caution",
      "Stop, proceed when the way is clear",
      "Slow down, proceed when the way is clear",
      "Stop, proceed only when the signal turns green and when the way is clear"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "A red light means stop. You cannot go straight until the light turns green."
  },
  {
    "id": 115,
    "question": "If you are involved in a reportable accident how soon must you make a report to your nearest provincial or municipal police officer?",
    "options": [
      "At once",
      "Within 24 hours",
      "Within 48 hours",
      "Within 72 hours"
    ],
    "correctAnswer": 0,
    "category": "laws",
    "explanation": "All reportable accidents must be reported to the police immediately."
  },
  {
    "id": 116,
    "question": "If a traffic signal changes while a pedestrian is still in the street, which of the following has the right-of-way?",
    "options": [
      "Motorists making turns",
      "The pedestrian",
      "Motorists coming from his right",
      "Motorists coming from his left"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "Motorists must yield to pedestrians who are already in the intersection."
  },
  {
    "id": 117,
    "question": "Unless otherwise posted, the maximum speed limit allowed in cities, town, villages and built-up area is",
    "options": [
      "30 km/h (20 m.p.h.)",
      "50 km/h (30 m.p.h.)",
      "40 km/h (25 m.p.h.)",
      "60 km/h (35 m.p.h.)"
    ],
    "correctAnswer": 1,
    "category": "laws",
    "explanation": "The default speed limit in built-up areas is 50 km/h unless signs indicate otherwise."
  },
  {
    "id": 118,
    "question": "At an intersection where there is a flashing amber (yellow) traffic light, you must",
    "options": [
      "Stop if making a right turn",
      "Continue at the same speed",
      "Stop if making a left turn",
      "Slow down and proceed with caution"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "A flashing amber light warns you to be cautious and slow down through the intersection."
  },
  {
    "id": 119,
    "question": "Under what circumstances may a driver's licence be cancelled?",
    "options": [
      "For failure to attend a re-examination",
      "For possession of an altered driver's licence",
      "For failure to satisfactorily complete a driver re-examination",
      "Any or all of the above"
    ],
    "correctAnswer": 3,
    "category": "laws",
    "explanation": "The Ministry may cancel a license for failure to complete re-examinations or for using an altered license."
  },
  {
    "id": 120,
    "question": "As a level one (G1) driver, you must be accompanied by a class G or higher licensed driver, who has the following driving experience more than",
    "options": [
      "Three years",
      "Four years",
      "Eight years",
      "Six years"
    ],
    "correctAnswer": 1,
    "category": "laws",
    "explanation": "The accompanying driver must have at least 4 years of driving experience and a valid G license."
  },
  {
    "id": 121,
    "question": "As a level two (G2) driver your alcohol level must not be over",
    "options": [
      "0.08%",
      "0.05%",
      "0.02%",
      "0.00%"
    ],
    "correctAnswer": 3,
    "category": "laws",
    "explanation": "Novice drivers (G1 and G2) must maintain a blood-alcohol level of zero."
  },
  {
    "id": 122,
    "question": "Overdriving your headlights at night is dangerous because",
    "options": [
      "You are driving too fast",
      "Your headlights are too bright",
      "You cannot stop within the distance that you can see",
      "It is not good for the car battery"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "Overdriving means your stopping distance is further than your visibility distance."
  },
  {
    "id": 123,
    "question": "If you want to pass a motorcycle, you should",
    "options": [
      "Honk your horn before you pass",
      "Turn on your high-beam lights before you pass",
      "Pass just as you would with another car",
      "Use half of their lane to pass"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "Motorcycles are entitled to a full lane width; pass them as you would any other vehicle."
  },
  {
    "id": 124,
    "question": "If you are a teenage driver aged 19 or under and in the first six months of receiving your G2 licence. How many passengers are you allowed to carry between midnight and 5 a.m.?",
    "options": [
      "3 passengers aged 19 or under",
      "No passengers aged 19 or under",
      "1 passenger aged 19 or under (no restrictions for passengers the age of 20 and over)",
      "2 passengers aged 19 or under"
    ],
    "correctAnswer": 2,
    "category": "laws",
    "explanation": "For the first 6 months, G2 drivers 19 and under can only carry one passenger 19 or under at night."
  },
  {
    "id": 125,
    "question": "If you are a teenage driver with your G2 licence for 6 months and until you obtain your full G licence or turn 20, how many passengers are you allowed to carry between midnight and 5 a.m.?",
    "options": [
      "3 passengers aged 19 or under (no restrictions for passengers the age of 20 and over)",
      "No passengers aged 19 or under",
      "1 passenger aged 19 or under",
      "2 passengers aged 19 or under"
    ],
    "correctAnswer": 0,
    "category": "laws",
    "explanation": "After 6 months of G2 driving, the limit for young passengers increases from 1 to 3."
  },
  {
    "id": 126,
    "question": "A “No Parking” sign at a certain location means",
    "options": [
      "You may stop here if the driver remains in the vehicle",
      "You may park your vehicle for less than five minutes",
      "You may stop temporarily to load or unload passengers",
      "You may not park your vehicle here"
    ],
    "correctAnswer": 3,
    "category": "signs",
    "explanation": "A 'No Parking' sign means you cannot park your vehicle there, though temporary stops for passengers are usually permitted."
  },
  {
    "id": 127,
    "question": "In what position on the roadway must you be before making a left turn from a one-way traffic street?",
    "options": [
      "Close to the right-hand side of the roadway",
      "Close to the centre line of the roadway",
      "Close to the left side of the roadway",
      "Does not matter"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "When turning left from a one-way street, you must be in the far left lane."
  },
  {
    "id": 128,
    "question": "When lights are required, drivers are required to use low beam headlights?",
    "options": [
      "Within 1 km (0.6 mile) of the approach of another vehicle",
      "Within 150 m (500 ft.) of the approach of another vehicle",
      "Within 300 m (1000 ft.) of the approach of another vehicle",
      "This is a safety practice, not a law"
    ],
    "correctAnswer": 1,
    "category": "laws",
    "explanation": "Ontario law requires switching to low beams within 150 meters of an oncoming vehicle."
    },
  {
    "id": 129,
    "question": "What insurance protection does the owner get who pays the uninsured motor vehicle fee?",
    "options": [
      "$10,000 insurance coverage",
      "$20,000 insurance coverage",
      "$35,000 insurance coverage",
      "No insurance protection whatever"
    ],
    "correctAnswer": 3,
    "category": "laws",
    "explanation": "Paying the uninsured motor vehicle fee does not provide any insurance coverage; it is simply a fee for not having insurance."
  },
  {
    "id": 130,
    "question": "When approaching a railway crossing at which an electrical or mechanical signal device is warning of the approach of a train you must",
    "options": [
      "Stop not less than 1.5 m (5 ft.) from the nearest rail",
      "Increase speed and cross tracks as quickly as possible",
      "Stop not less than 5 m (15 ft.) from the nearest rail",
      "Slow down and proceed with caution"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "When a signal warns of a train, the law requires stopping at least 5 meters from the nearest rail."
  },
  {
    "id": 131,
    "question": "Upon approaching a Yield-sign, what does the law require you to do?",
    "options": [
      "Slow down, stop if necessary, and yield right-of-way",
      "Stop, then enter traffic slowly",
      "Stop, then enter traffic quickly",
      "Speed up and force your way into traffic"
    ],
    "correctAnswer": 0,
    "category": "safety",
    "explanation": "A yield sign requires you to slow down and stop if necessary to give way to other traffic."
  },
  {
    "id": 132,
    "question": "When does the law require lights on vehicles to be turned on?",
    "options": [
      "Between sunset and sunrise",
      "Between dusk and dawn and at any other time you cannot see clearly for a distance of 150 m (500 ft.)",
      "Between half an hour before sunset to half an hour after sunrise and at any other time you cannot see clearly for a distance of 150 m (500 ft.)",
      "No specified time"
    ],
    "correctAnswer": 2,
    "category": "laws",
    "explanation": "Lights must be on from 30 minutes before sunset to 30 minutes after sunrise, and whenever visibility is less than 150 meters."
  },
  {
    "id": 133,
    "question": "A person whose driver’s licence is under suspension, may",
    "options": [
      "Operate a motor vehicle in a case of extreme emergency",
      "Operate a motor vehicle to and from work",
      "Operate a motor vehicle when accompanied by a licensed driver",
      "Not operate a motor vehicle under any conditions"
    ],
    "correctAnswer": 3,
    "category": "laws",
    "explanation": "Driving while your license is suspended is strictly prohibited under any circumstances."
  },
  {
    "id": 134,
    "question": "If the signal light changes from green to amber as you approach an intersection, what should you do?",
    "options": [
      "Stop. If a stop cannot be made safely proceed with caution",
      "Speed up to clear the intersection as quickly as possible",
      "Continue through the intersection without slowing or stopping",
      "Sound horn to warn pedestrians and other drivers that you do not intend to stop"
    ],
    "correctAnswer": 0,
    "category": "safety",
    "explanation": "An amber light means stop if safe to do so; otherwise, proceed with caution."
  },
  {
    "id": 135,
    "question": "When a streetcar is stopped to take on or discharge passengers, where there is no safety zone, what does the law require you to do before passing the streetcar?",
    "options": [
      "Stop behind the rear of the streetcar and then proceed",
      "Sound horn and pass with caution",
      "Pass on the left side when the way is clear",
      "Stop 2 m (6 ft.) behind the rearmost door where passengers are getting on or off, and proceed only when it is safe to do so"
    ],
    "correctAnswer": 3,
    "category": "laws",
    "explanation": "You must stop 2 meters behind the streetcar doors to ensure passenger safety when no safety zone exists."
  },
  {
    "id": 136,
    "question": "On a roadway where traffic is moving in both directions, in what position must you be before making a left turn?",
    "options": [
      "Close to the right-hand side of the roadway",
      "Close to the left side of the roadway",
      "Immediately to the right of the centre line of the roadway",
      "Does not matter"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "To turn left safely on a two-way road, position your vehicle just to the right of the center line."
  },
  {
    "id": 137,
    "question": "Upon approaching a stop sign, a driver must",
    "options": [
      "Slow down, sound horn and then proceed",
      "Slow down, and if the way is clear, proceed",
      "Stop, sound horn, then proceed",
      "Stop, and when it is safe to do so, proceed"
    ],
    "correctAnswer": 3,
    "category": "laws",
    "explanation": "A full stop is required at every stop sign before proceeding safely."
  },
  {
    "id": 138,
    "question": "You should under all condition drive at a speed which will allow you to",
    "options": [
      "Stop within 90 metres (300 feet)",
      "Stop within 60 metres (200 feet)",
      "Stop within a safe distance",
      "Stop within 150 metres (500 feet)"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "Drivers must always maintain a speed that allows for stopping within a safe, clear distance."
  },
  {
    "id": 139,
    "question": "The Ministry of Transportation and Communications may suspend a licence after a 9 Demerit Point interview",
    "options": [
      "If a driver fails to give satisfactory reasons why their licence should not be suspended",
      "If a driver does not have at least 5 years driving experience",
      "If the licence is not needed for business reasons",
      "The Ministry is not permitted to suspend a licence before the 15-point level is reached"
    ],
    "correctAnswer": 0,
    "category": "laws",
    "explanation": "A license can be suspended at the 9-point level if the driver cannot justify keeping it during the interview."
  },
  {
    "id": 140,
    "question": "A “School Bus”, with red signal lights flashing, is stopped on a highway that has no median strip. What does the law require you to do when meeting or overtaking the bus?",
    "options": [
      "Does not matter provided you sound horn",
      "Stop until the bus proceeds or the signal lights are no longer flashing",
      "Wait for approaching vehicles to pass",
      "Reduce speed and pass with care"
    ],
    "correctAnswer": 1,
    "category": "laws",
    "explanation": "On a road without a median, all traffic must stop for a school bus with flashing red lights."
  },
  {
    "id": 141,
    "question": "Which of the following penalties can the court impose on a person convicted of driving 50 km/h (30 m.p.h.) or more over the speed limit?",
    "options": [
      "Suspension of licence for 6 months",
      "Suspension of licence for 30 days",
      "Impoundment of motor vehicle for 6 months",
      "Imprisonment of person for 6 months"
    ],
    "correctAnswer": 1,
    "category": "laws",
    "explanation": "Extreme speeding (50+ km/h over) can result in a 30-day license suspension."
  },
  {
    "id": 142,
    "question": "Before moving your car from a parked position, you should",
    "options": [
      "Check other traffic, signal and pull from the curb quickly",
      "Honk your horn and pull from the curb slowly",
      "Check other traffic, signal and pull from the curb when it is safe to do so",
      "Signal and pull from the curb"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "Safe departure from a parked spot requires checking traffic and signaling until it is safe."
  },
  {
    "id": 143,
    "question": "Should your right wheels drop off the roadway, what is the best way to get back on the roadway?",
    "options": [
      "Steer hard to the left",
      "Apply brakes and steer hard to the left",
      "Take foot off gas pedal, turn back when vehicle has slowed",
      "Apply brakes to reduce speed"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "If wheels drop off, slow down naturally by lifting the gas before steering back gently."
  },
  {
    "id": 144,
    "question": "When 15 or more Demerit Points have accumulated on a record, the driver’s licence is suspended",
    "options": [
      "Automatically, and for 30 days from receipt of licence",
      "At the discretion of the Ministry",
      "Only if the licence is NOT used for business purposes",
      "For 3 months"
    ],
    "correctAnswer": 0,
    "category": "laws",
    "explanation": "Reaching 15 points triggers an automatic 30-day suspension."
  },
  {
    "id": 145,
    "question": "When the driver of another vehicle is about to overtake and pass your vehicle you must",
    "options": [
      "Move to the right and allow such vehicle to pass",
      "Speed up so that passing is not necessary",
      "Signal the other driver not to pass",
      "Move to the left to prevent passing"
    ],
    "correctAnswer": 0,
    "category": "safety",
    "explanation": "You are required to move to the right and cooperate when being passed."
  },
  {
    "id": 146,
    "question": "When descending a steep hill a good safe-driving practice is to",
    "options": [
      "Gear down and allow the engine to assist in braking",
      "Turn off the ignition",
      "Place the gear shift in neutral",
      "Disengage the clutch and coast"
    ],
    "correctAnswer": 0,
    "category": "safety",
    "explanation": "Gearing down uses engine compression to control speed and prevent brake fade."
  },
  {
    "id": 147,
    "question": "A driver may be required to attend an interview and re-examination of his driving ability",
    "options": [
      "When 9 demerit points have been accumulated",
      "When 3 demerit points have been accumulated",
      "When 6 demerit points have been accumulated",
      "When 15 demerit points have been accumulated"
    ],
    "correctAnswer": 0,
    "category": "laws",
    "explanation": "The 9-point threshold triggers a mandatory interview regarding driving habits."
  },
  {
    "id": 148,
    "question": "When may you lend your driver’s licence?",
    "options": [
      "Never",
      "To another person who is learning to drive",
      "For identification purposes only",
      "In emergencies"
    ],
    "correctAnswer": 0,
    "category": "laws",
    "explanation": "Lending a driver's license to anyone is strictly illegal."
  },
  {
    "id": 149,
    "question": "When a red signal light with a green arrow is shown at an intersection it means",
    "options": [
      "Stop and wait for the green light before making a turn in the direction of the arrow",
      "Proceed with caution in the direction of the arrow, yielding right-of-way to pedestrians and other traffic",
      "Stop and then proceed",
      "The green arrow is a signal for pedestrians only"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "A green arrow allows protected movement in that direction even if the main light is red."
  },
  {
    "id": 150,
    "question": "Are drivers responsible for their passengers buckling up?",
    "options": [
      "Only if passengers are over sixteen years of age",
      "Only if passengers are from five years of age up to sixteen",
      "Only if the passengers are in the front seat",
      "Only if passengers are over eighteen years of age"
    ],
    "correctAnswer": 1,
    "category": "laws",
    "explanation": "Drivers are legally responsible for ensuring children under 16 are buckled up."
  },
  {
    "id": 151,
    "question": "When it is safe to do so, passing other vehicles on the right side",
    "options": [
      "Is permitted on any street or highway",
      "Is permitted providing it is possible to do so by driving on the shoulder of the road",
      "Is not permitted under any circumstances",
      "Is permitted when the street or highway has two or more lanes for traffic in the direction you are travelling"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "Passing on the right is allowed on multi-lane roads going in the same direction."
  },
  {
    "id": 152,
    "question": "When a right turn against a red signal light is permitted, what does the law require you to do before entering the intersection and making the turn?",
    "options": [
      "Slow down, proceed with caution",
      "Stop, then edge into traffic",
      "Stop, signal, make the turn so as not to interfere with other traffic, including pedestrians",
      "Slow down, signal and turn"
    ],
    "correctAnswer": 2,
    "category": "laws",
    "explanation": "A right turn on red requires a complete stop and yielding to all other road users."
  },
  {
    "id": 153,
    "question": "A flashing green light at an intersection, where turns to the left and right are permitted, means",
    "options": [
      "You may turn to the left if the way is clear",
      "You may turn to the right if the way is clear",
      "You may proceed straight through if the way is clear",
      "You may do any of the above"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "A flashing green light gives you the right-of-way to go straight or turn in either direction."
  },
  {
    "id": 154,
    "question": "Under which of the following conditions is it dangerous and unlawful to make a “U” turn?",
    "options": [
      "Upon a curve or on a hill where there is a clear view of less than 150 m (500 ft.) in either direction",
      "On a railway crossing or within 30 m (100 ft.) of a railway crossing",
      "Within 150 m (500 ft.) of a bridge, viaduct or tunnel if driver’s view is obstructed",
      "Under all of the above conditions"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "U-turns are banned wherever visibility is obstructed by curves, hills, or structures."
  },
  {
    "id": 155,
    "question": "If you are involved in an accident in which someone is injured you must",
    "options": [
      "Report the accident at once to the nearest provincial or municipal police officer",
      "Report the accident within 48 hours to the nearest provincial or municipal police officer",
      "Report the accident to your insurance company only",
      "Report the accident to the Ministry of Transportation and Communications only"
    ],
    "correctAnswer": 0,
    "category": "laws",
    "explanation": "Injury accidents must be reported to the police immediately."
  },
  {
    "id": 156,
    "question": "How soon after a licensed driver changes his/her name or address is he/she required to notify the Ministry of Transportation and Communications?",
    "options": [
      "Within 6 days",
      "Within 15 days",
      "Within 30 days",
      "At any time prior to renewal of licence"
    ],
    "correctAnswer": 0,
    "category": "laws",
    "explanation": "Personal information changes must be reported within 6 days."
  },
  {
    "id": 157,
    "question": "A flashing red signal light at an intersection means",
    "options": [
      "Slow down and drive with increased caution",
      "Slow down and if necessary yield right-of-way to cars approaching from the left or right",
      "Signal light is out of order, proceed with caution",
      "Stop. Proceed only when it is safe to do so"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "Treat a flashing red light like a stop sign."
  },
  {
    "id": 158,
    "question": "When entering a freeway you should",
    "options": [
      "Stop on acceleration lane, wait for an opening, then enter the freeway rapidly",
      "Accelerate quickly to freeway speed and merge with freeway traffic",
      "Slow down, and then enter freeway at a sharp angle",
      "Drive slowly and be prepared to stop for freeway traffic"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "Use the acceleration lane to match the speed of freeway traffic before merging."
  },
  {
    "id": 159,
    "question": "A flashing blue light mounted on a motor vehicle indicates",
    "options": [
      "A motor vehicle carrying explosives",
      "Snow removal equipment",
      "An ambulance",
      "A police emergency vehicle"
    ],
    "correctAnswer": 1,
    "category": "laws",
    "explanation": "In Ontario, blue flashing lights are used specifically by snow removal vehicles."
  },
  {
    "id": 160,
    "question": "When a truck becomes disabled on the highway, where the speed limit is in excess of 60 km/h flares or reflectors must be placed approximately what distance ahead of and to the rear of the disabled vehicle?",
    "options": [
      "15 m (50 ft.)",
      "30 m (100 ft.)",
      "60 m (200 ft.)",
      "90 m (300 ft.)"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "Disabled commercial vehicles must place warnings 30 meters to the front and rear."
  },
  {
    "id": 161,
    "question": "When selling a motor vehicle to another person, you, the seller, should",
    "options": [
      "Notify the Ministry of the change of ownership within six days of date of sale",
      "Go with the buyer to a vehicle licence issuing office to carry out the change of ownership",
      "If selling the vehicle without a Safety Standards Certificate, you must return the vehicle licence plates and motor vehicle permit to a vehicle licence issuing office and obtain an Unfit Vehicle Permit in the buyer's name",
      "All of the above"
    ],
    "correctAnswer": 3,
    "category": "laws",
    "explanation": "All these steps are required to legally transfer vehicle ownership in Ontario."
  },
  {
    "id": 162,
    "question": "At 15 Demerit points, your licence is suspended, after 30 days, the number of points on the driver’s record is",
    "options": [
      "Reduce to 7 points",
      "Reduce to 0 points",
      "Reduce to 5 points",
      "None of the above"
    ],
    "correctAnswer": 0,
    "category": "laws",
    "explanation": "After serving a suspension, the point total is reduced to 7."
  },
  {
    "id": 163,
    "question": "When approaching an intersection where a traffic signal light is red and a policeman motions you to go through, you should",
    "options": [
      "Wait for the light to turn green",
      "Obey the policeman's signal and go through at once",
      "Call the policeman's attention to the red light",
      "Stop to make sure he wants you to go through"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "Police signals always take precedence over traffic lights."
  },
  {
    "id": 164,
    "question": "Except when passing, what distance must be maintained between commercial vehicles travelling in the same direction on the highway outside a city, town or village?",
    "options": [
      "30 m (100 ft.)",
      "60 m (200 ft.)",
      "120 m (400 ft.)",
      "150 m (500 ft.)"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "Commercial vehicles must leave 60 meters between them to allow others to pass safely."
  },
  {
    "id": 165,
    "question": "At what level of alcohol in the blood can you be convicted of being an impaired driver?",
    "options": [
      "0.03%",
      "0.05%",
      "0.08%",
      "1.0%"
    ],
    "correctAnswer": 2,
    "category": "laws",
    "explanation": "The legal limit for a criminal conviction is 0.08% blood alcohol concentration."
  },
  {
    "id": 166,
    "question": "If you are convicted of drinking and driving, you will lose your driver’s licence on the first offence for",
    "options": [
      "1 month",
      "3 months",
      "6 months",
      "1 year"
    ],
    "correctAnswer": 3,
    "category": "laws",
    "explanation": "A first-time impaired driving conviction carries a mandatory 1-year license suspension."
  },
  {
    "id": 167,
    "question": "Unless otherwise posted, the maximum speed limit on the highway outside of a city, town, village or built-up area is",
    "options": [
      "100 kilometres (60 miles) an hour",
      "80 kilometres (50 miles) an hour",
      "60 kilometres (40 miles) an hour",
      "50 kilometres (30 miles) an hour"
    ],
    "correctAnswer": 1,
    "category": "laws",
    "explanation": "The default rural highway speed limit is 80 km/h unless posted otherwise."
  },
  {
    "id": 168,
    "question": "If you are driving and suddenly one of your tires blows out, you should",
    "options": [
      "Concentrate on steering",
      "Take your foot off the gas pedal to slow down",
      "Bring the vehicle to a stop off the road",
      "All of the above"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "Handle a blowout by steering straight, slowing down gradually, and pulling off the road."
  },
  {
    "id": 169,
    "question": "When a streetcar is stopped to pick up or discharge passengers and there is a safety island, what does the law require you to do?",
    "options": [
      "Pass with caution",
      "Stop at least 2 metres behind the safety island",
      "Sound horn and pass with caution",
      "Pass on the left side of the streetcar"
    ],
    "correctAnswer": 0,
    "category": "safety",
    "explanation": "You may pass a streetcar at a safety island, but must do so with extreme caution."
  },
  {
    "id": 170,
    "question": "When getting out of your car on a busy street you should open your door",
    "options": [
      "After making the proper signals",
      "When you turn on your four-way flashers",
      "When you are sure that it can be done safely",
      "It does not matter"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "Only open doors into traffic when you are certain it will not cause a hazard."
  },
  {
    "id": 171,
    "question": "When exiting an expressway you should",
    "options": [
      "Give yourself plenty of time to move over to the lane closest to the exit",
      "Slow down smoothly to the posted speed limit or to the prevailing speed on the exit ramp",
      "Signal and maintain your speed until you are off the ramp",
      "All of the above"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "Safe exiting involves early lane positioning, proper signaling, and gradual deceleration."
  },
  {
    "id": 172,
    "question": "If two drivers enter an intersection from opposite directions at the same time, one going straight while the other is turning left, which vehicle has the right-of-way?",
    "options": [
      "The one turning left",
      "The one going straight",
      "Both have the right-of-way",
      "Both cars should stop first and then proceed"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "Drivers turning left must yield to oncoming traffic going straight through."
  },
  {
    "id": 173,
    "question": "You should reduce your speed below the posted speed limits for which of the following reasons",
    "options": [
      "Bad weather conditions",
      "When approaching and crossing an intersection",
      "In rush hour with stop and go traffic conditions",
      "All of the above"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "Posted limits are for ideal conditions; hazards like weather and traffic require lower speeds."
  },
  {
    "id": 174,
    "question": "When approaching a sign that reads “merging traffic” you must",
    "options": [
      "Stop your vehicle before proceeding",
      "Let the cars behind you go first",
      "Honk your horn first before proceeding",
      "Adjust your speed and position to avoid a collision with other vehicles"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "Merging requires cooperation and speed adjustment to blend into the traffic flow."
  },
  {
    "id": 175,
    "question": "Drivers who have vision restrictions noted on their driver’s licence must always wear glasses or contact lenses when",
    "options": [
      "Watching movies",
      "Driving",
      "Reading",
      "Sleeping"
    ],
    "correctAnswer": 1,
    "category": "laws",
    "explanation": "Corrective lenses are a mandatory condition for driving if listed on the license."
  },
  {
    "id": 176,
    "question": "If you are involved in an accident that was due to your use of a cellular phone while driving",
    "options": [
      "Your insurance will increase",
      "You will be charged with careless driving and lose 6 demerit points",
      "Your licence will be suspended for one year",
      "You will have to take your road test again"
    ],
    "correctAnswer": 1,
    "category": "laws",
    "explanation": "Distracted driving accidents often result in careless driving charges and 6 demerit points."
   },
  {
    "id": 177,
    "question": "Why is it necessary to look over your shoulder when changing lanes?",
    "options": [
      "It is a good exercise for your neck",
      "There will always be a blind spot in your mirrors, no matter how you adjust them",
      "To see who is driving",
      "All of the above"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "Mirrors have limits; checking over your shoulder ensures no vehicle is hidden in your blind spot."
  },
  {
    "id": 178,
    "question": "If your brakes fail:",
    "options": [
      "Pump the brake pedal",
      "Apply the parking brake gently but firmly",
      "Keep your hand on the release button (of the parking brake)",
      "All of the above"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "Pumping brakes may build pressure, and the emergency brake can help slow the vehicle if applied carefully."
  },
  {
    "id": 179,
    "question": "The police have the right to stop any driver they suspect is impaired. If you refuse to take a breathalyzer test, your licence will be suspended immediately for:",
    "options": [
      "30 days",
      "1 year",
      "60 days",
      "90 days"
    ],
    "correctAnswer": 3,
    "category": "legal",
    "explanation": "Refusal to provide a breath sample results in an immediate 90-day administrative driver's licence suspension."
  },
  {
    "id": 180,
    "question": "If you are driving and your cellular phone rings, what should you do?",
    "options": [
      "Pick up the phone quickly and talk briefly while driving",
      "Let your voice mail service take the call and check your messages when you are parked",
      "Answer the phone if there are no police around",
      "Turn-it-off, it is illegal to talk on the cellular while driving"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "To avoid distracted driving, calls should only be handled when the vehicle is safely parked."
  },
  {
    "id": 181,
    "question": "Snow tires are good for:",
    "options": [
      "Summer driving",
      "All season driving",
      "Winter driving",
      "Spring and fall only"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "Snow tires are specifically designed with rubber compounds and treads for cold temperatures and snow."
  },
  {
    "id": 182,
    "question": "Level one drivers (G1) must keep their blood alcohol level at zero percent and be accompanied by a class G driver with a blood alcohol level of less than:",
    "options": [
      "0.00%",
      "0.05%",
      "0.08%",
      "0.03%"
    ],
    "correctAnswer": 1,
    "category": "legal",
    "explanation": "The accompanying driver must have at least 4 years of experience and a BAC below 0.05%."
  },
  {
    "id": 183,
    "question": "You must report an accident to the police under what condition?",
    "options": [
      "There is less than $600 damage",
      "The damage is over $1000",
      "If someone has been hurt or killed",
      "2 and 3 are correct"
    ],
    "correctAnswer": 3,
    "category": "legal",
    "explanation": "Accidents involving injury or property damage exceeding a specific threshold (often $2,000 in modern rules, though $1,000 in this older text) must be reported."
  },
  {
    "id": 184,
    "question": "As a level one or level two driver you will have your licence suspended if you collect 9 or more demerit points during a two year period. 60 days after suspension your record will be reduced to:",
    "options": [
      "6 points",
      "4 points",
      "Zero",
      "2 points"
    ],
    "correctAnswer": 1,
    "category": "legal",
    "explanation": "Following a demerit point suspension for novice drivers, the point total is reduced to 4."
  },
  {
    "id": 185,
    "question": "Under the Highway Traffic Act, if you are convicted of driving while your licence is suspended, assuming it is your first offence, you will:",
    "options": [
      "Receive a fine of $500",
      "Be fined between $1000 to $5000",
      "Be sentenced to six months in jail",
      "All of the above"
    ],
    "correctAnswer": 1,
    "category": "legal",
    "explanation": "Driving under suspension carries heavy fines between $1,000 and $5,000 for a first offence."
  },
  {
    "id": 186,
    "question": "At night when you meet another vehicle with blinding bright lights, the safest thing to do is:",
    "options": [
      "Open and shut your eyes rapidly",
      "Look at the headlights of the approaching vehicle",
      "Turn your lights on high beam",
      "Look slightly to the right hand side"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "Looking toward the right edge of the road helps prevent being blinded by oncoming high beams."
  },
  {
    "id": 187,
    "question": "When two cars reach an uncontrolled intersection at approximately the same time the right-of-way should be given to:",
    "options": [
      "The one approaching from the left",
      "The one approaching from the right",
      "Neither one",
      "The one moving faster"
    ],
    "correctAnswer": 1,
    "category": "rules",
    "explanation": "At an uncontrolled intersection, you must yield to the vehicle entering from your right."
  },
  {
    "id": 188,
    "question": "In what lane of traffic should you drive when you intend to make a right-hand turn?",
    "options": [
      "Close to the left side of the roadway",
      "Close to the right-hand side of the roadway",
      "Close to the centre line of the roadway",
      "Does not matter"
    ],
    "correctAnswer": 1,
    "category": "rules",
    "explanation": "Right turns should be started and completed as close as possible to the right-hand curb or edge of the road."
  },
  {
    "id": 189,
    "question": "When you are deciding whether or not to make a U turn, your first consideration should be to check:",
    "options": [
      "Traffic regulations",
      "Presence of trees, fire hydrants, or poles near the curb",
      "Turning radius of your car",
      "Height of curb"
    ],
    "correctAnswer": 0,
    "category": "rules",
    "explanation": "Always ensure U-turns are legal in that specific location before checking physical space."
  },
  {
    "id": 190,
    "question": "What is the only effective way to remove alcohol from your body?",
    "options": [
      "Drinking strong coffee",
      "Allow your body time to get rid of the alcohol",
      "Taking a cold shower",
      "Drinking more wine"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "Only time allows the liver to metabolize alcohol; caffeine or cold water do not lower BAC."
  },
  {
    "id": 191,
    "question": "If you miss an expressway exit, what should you do?",
    "options": [
      "Stop on the shoulder and check your map",
      "If there are no cars, you may back up",
      "Go straight and exit at the next exit",
      "Make a U-turn"
    ],
    "correctAnswer": 2,
    "category": "rules",
    "explanation": "Never reverse on a highway; proceed to the next available exit."
  },
  {
    "id": 192,
    "question": "If you are involved in an accident and another person is injured you should:",
    "options": [
      "Keep talking to the injured person",
      "Move the injured person away from the vehicle immediately",
      "Do not move the injured person unnecessarily, keep the injured person warm and administer first aid if possible",
      "Don't talk to the injured person"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "Moving an injured person can cause further harm; only move them if there is an immediate danger like fire."
  },
  {
    "id": 193,
    "question": "Before leaving your car parked on a downgrade, you should:",
    "options": [
      "Leave your front wheels parallel to the curb",
      "Turn your front wheels to the left and set your parking brake",
      "Set your parking brake only",
      "Turn your front wheels to the right and set your parking brake"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "Turning wheels to the right ensures that if the vehicle rolls, it will hit the curb and stop."
  },
  {
    "id": 194,
    "question": "It is more dangerous to drive at the maximum speed limit at night than during day-time because:",
    "options": [
      "Some drivers unlawfully drive with parking lights only",
      "You cannot see as far ahead at night",
      "The roadway are more apt to be slippery at night",
      "Your reaction time is slower at night"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "Headlights only illuminate a limited distance; driving at max speed might mean you cannot stop within the distance you can see."
  },
  {
    "id": 195,
    "question": "The broken centre line on a roadway means you may:",
    "options": [
      "Never pass",
      "Pass if the way is clear",
      "Pass at any time",
      "Pass only during daylight hours"
    ],
    "correctAnswer": 1,
    "category": "rules",
    "explanation": "A dashed or broken line indicates that passing is permitted when traffic conditions are safe."
  },
  {
    "id": 196,
    "question": "How close to a fire hydrant may you legally park?",
    "options": [
      "3 metres (10 ft.)",
      "4.5 metres (15 ft.)",
      "1.5 metres (5 ft.)",
      "6 metres (20 ft.)"
    ],
    "correctAnswer": 0,
    "category": "legal",
    "explanation": "Parking is prohibited within 3 metres of a fire hydrant."
  },
  {
    "id": 197,
    "question": "Except when you intend to overtake and pass another vehicle or when you intend to make a left turn, you should:",
    "options": [
      "Drive in the centre of the roadway",
      "Always keep well to the right",
      "Drive on the shoulder of the highway",
      "Always keep well to the left"
    ],
    "correctAnswer": 1,
    "category": "rules",
    "explanation": "Slower traffic and standard cruising should be done in the right-most lane."
  },
  {
    "id": 198,
    "question": "Parking lights may be used:",
    "options": [
      "At any time",
      "For Parking only",
      "When driving in heavy fog",
      "When driving on well lighted street"
    ],
    "correctAnswer": 1,
    "category": "rules",
    "explanation": "Parking lights are for visibility while parked; they are not a substitute for headlights while driving."
  },
  {
    "id": 199,
    "question": "A solid centre line on the roadway is on your side of a broken centre line. What does the solid centre line mean?",
    "options": [
      "It is unsafe to overtake and pass",
      "Pass only when no traffic is in sight",
      "It is safe to overtake and pass",
      "Pass at any time"
    ],
    "correctAnswer": 0,
    "category": "rules",
    "explanation": "If the solid line is on your side, passing is prohibited."
  },
  {
    "id": 200,
    "question": "The best way to stop quickly on a wet or icy roadway is to:",
    "options": [
      "Pump the brake until you come to a stop",
      "Keep foot off brake and let compression stop you",
      "Slam on brake and try to prevent vehicle from skidding",
      "Apply brakes the same way you always do"
    ],
    "correctAnswer": 0,
    "category": "safety",
    "explanation": "Pumping brakes (for non-ABS vehicles) helps maintain steering control and prevents locking on slippery surfaces."
  },
  {
    "id": 201,
    "question": "If you lose control of your vehicle and it goes off the road, you should:",
    "options": [
      "Grip the steering wheel firmly",
      "Take your foot off the gas pedal to slow down and avoid heavy braking",
      "When the vehicle is under control steer back to the road",
      "All of the above"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "Maintain control without panic braking, slow down, then steer back onto the pavement at a shallow angle."
  },
  {
    "id": 202,
    "question": "Under the Criminal Code, if you are caught driving while your licence is suspended, your vehicle will be impounded for:",
    "options": [
      "1 year",
      "6 months",
      "45 days",
      "30 days"
    ],
    "correctAnswer": 3,
    "category": "legal",
    "explanation": "Driving while suspended results in an immediate vehicle impoundment (the duration in this text is marked as 45 days)."
  },
  {
    "id": 203,
    "question": "When taking any medication, you should:",
    "options": [
      "Have someone follow you home",
      "Drive even slower",
      "Consult your doctor about the effects before driving",
      "Drink lots of water"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "Many medications cause drowsiness or impaired reaction times; professional advice is necessary."
  },
  {
    "id": 204,
    "question": "What should you do if your vehicle becomes disabled on the highway?",
    "options": [
      "Park with all your four wheels off the travelled highway, if possible",
      "Stop where you are",
      "Stop in the right lane",
      "Stop in the left lane"
    ],
    "correctAnswer": 0,
    "category": "safety",
    "explanation": "Move as far away from moving traffic as possible to prevent collisions."
  },
  {
    "id": 205,
    "question": "A defensive driver will:",
    "options": [
      "Drive faster in the rain",
      "Play music loudly",
      "Consider what other drivers might do and is always prepared",
      "Talk on the cell phone while driving"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "Defensive driving involves anticipating hazards and the mistakes of others."
  },
  {
    "id": 206,
    "question": "Which of the following hand-and-arm signals is correct for slowing or stopping?",
    "options": [
      "Arm out and up",
      "Arm straight out the window",
      "Arm out and down",
      "Circle motion"
    ],
    "correctAnswer": 2,
    "category": "rules",
    "explanation": "Extending the arm downward indicates an intent to slow or stop."
  },
  {
    "id": 207,
    "question": "You are required to keep a safe distance behind the vehicle in front of you at 50 kilometres (30 miles) an hour. You should keep at least:",
    "options": [
      "Seven car lengths behind the other vehicle",
      "Three car lengths behind the other vehicle",
      "One car length behind the other vehicle",
      "Five car lengths behind the other vehicle"
    ],
    "correctAnswer": 1,
    "category": "safety",
    "explanation": "A general rule of thumb (prior to the 2-second rule becoming standard) was one car length for every 15km/h."
  },
  {
    "id": 208,
    "question": "When driving a motor vehicle on the highway at night, you should use low beam headlights (dim lights) when:",
    "options": [
      "Approaching an intersection",
      "Meeting or following another vehicle",
      "Another driver dims his lights",
      "Blinded by the headlights of an approaching vehicle"
    ],
    "correctAnswer": 1,
    "category": "rules",
    "explanation": "You must dim your lights to avoid blinding drivers ahead of you or coming toward you."
  },
  {
    "id": 209,
    "question": "What must a driver do before entering a highway from a private road or driveway?",
    "options": [
      "Sound horn and proceed with caution",
      "Enter or cross the highway as quickly as possible",
      "Give hand signal then take right-of-way",
      "Yield right-of-way to all vehicles approaching on the highway"
    ],
    "correctAnswer": 3,
    "category": "rules",
    "explanation": "Traffic on the highway always has priority over vehicles entering from private property."
  },
  {
    "id": 210,
    "question": "Demerit points lost will remain on your driver's record for a period of ______ from the date of offence.",
    "options": [
      "One year",
      "Two years",
      "Three years",
      "Five years"
    ],
    "correctAnswer": 1,
    "category": "legal",
    "explanation": "Demerit points stay on your record for two years from the date of the offense."
  },
  {
    "id": 211,
    "question": "As a level one or level two driver, if you collect nine or more points during a two-year period, your licence will be suspended for:",
    "options": [
      "60 days",
      "30 days",
      "1 year",
      "15 days"
    ],
    "correctAnswer": 0,
    "category": "legal",
    "explanation": "Novice drivers face a 60-day suspension upon reaching the 9-point threshold."
  },
  {
    "id": 212,
    "question": "Highway 407 is:",
    "options": [
      "The longest highway in Ontario",
      "Is a new highway",
      "Is an express toll route (pay toll highway)",
      "An expressway to the USA"
    ],
    "correctAnswer": 2,
    "category": "rules",
    "explanation": "Highway 407 ETR is an electronically tolled highway in Ontario."
  },
  {
    "id": 213,
    "question": "To get your vehicle out of a skid, you should first:",
    "options": [
      "Steer in the opposite direction of the skid",
      "Steer straight ahead",
      "Apply brake hard",
      "Steer in the direction of the skid"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "Steering into the skid (the direction the rear of the car is sliding) helps regain alignment."
  },
  {
    "id": 214,
    "question": "Most automobile skids are the result of:",
    "options": [
      "Under-inflated tires",
      "Over-inflated tires",
      "Snow or ice on the road",
      "Driving too fast"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "While road conditions play a part, speed relative to those conditions is the primary cause of losing traction."
  },
  {
    "id": 215,
    "question": "Roadways are most slippery:",
    "options": [
      "During a heavy downpour",
      "After it has been raining for awhile",
      "The first rain after a dry spell",
      "In construction zones"
    ],
    "correctAnswer": 2,
    "category": "safety",
    "explanation": "Rain mixes with oil and dust on the road surface during the start of a rainfall, making it extremely slick."
  },
  {
    "id": 216,
    "question": "If you become very tired while driving you should:",
    "options": [
      "Stop and rest",
      "Drink coffee",
      "Drive faster to your destination",
      "Open your windows to allow fresh air in the car"
    ],
    "correctAnswer": 0,
    "category": "safety",
    "explanation": "Rest is the only cure for fatigue; air or caffeine are only temporary and unreliable."
  },
  {
    "id": 217,
    "question": "Hydroplaning occurs during heavy rain when a vehicle's tires ride up above the water on the roadway. To help prevent hydroplaning you should:",
    "options": [
      "Ensure that your tires on your vehicle have good tread depth",
      "Ensure that the tires on the vehicle are inflated to the proper tire pressure",
      "Reduce vehicle speed when driving in the rain",
      "All of the above"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "Good treads, proper pressure, and low speed are all necessary to displace water and keep tire contact."
  },
  {
    "id": 218,
    "question": "The two-second rule is used to determine:",
    "options": [
      "How fast they can react to obstacles",
      "How fast they are travelling",
      "How much gas you will save",
      "If they are following at a safe distance"
    ],
    "correctAnswer": 3,
    "category": "safety",
    "explanation": "The 2-second rule provides a safe following distance regardless of speed."
  },
  {
    "id": 219,
    "question": "When approaching a construction area, drivers should:",
    "options": [
      "Honk the horn a few times to let the workers know you are approaching",
      "Watch for children",
      "Slow down and yield the right-of-way",
      "Speed up to get out of the area quicker"
    ],
    "correctAnswer": 2,
    "category": "rules",
    "explanation": "Construction zones require lower speeds and extreme caution for worker safety."
  },
  {
    "id": 220,
    "question": "When are broken white lines (dashes) used on streets and highways?",
    "options": [
      "On a two way street",
      "When it is a no stopping zone",
      "When passing is permitted",
      "On a one way street or highway that has more than one lane of traffic moving in the same direction"
    ],
    "correctAnswer": 3,
    "category": "rules",
    "explanation": "White dashed lines separate lanes of traffic moving in the same direction."
  },
  {
    "id": 221,
    "question": "If you are approaching an intersection and the traffic lights are not working, you should:",
    "options": [
      "Yield to the traffic to your right",
      "Stop until no cars are passing and then go",
      "Treat it as a four way stop sign",
      "Slow down and proceed with caution"
    ],
    "correctAnswer": 2,
    "category": "rules",
    "explanation": "Non-functioning traffic lights must be treated as a multi-way stop."
  },
  {
    "id": 222,
    "question": "When approaching an intersection and you notice the roadway beyond the intersection is blocked with traffic, you should:",
    "options": [
      "Keep as close as possible to the car ahead",
      "Proceed slowly into the intersection until the traffic ahead moves on",
      "Stop before entering the intersection and wait until traffic ahead moves on",
      "Sound horn to warn cars ahead to move on"
    ],
    "correctAnswer": 2,
    "category": "rules",
    "explanation": "Do not enter an intersection unless there is space on the other side to exit it; do not 'block the box'."
  },
  {
    "id": 223,
    "question": "Level one and level two drivers must have a blood alcohol level of zero when driving. New drivers caught drinking and driving will be charged under the Criminal Code and will get how many days suspension?",
    "options": [
      "30 days",
      "60 days",
      "90 days",
      "1 year"
    ],
    "correctAnswer": 0,
    "category": "legal",
    "explanation": "Novice drivers caught with any alcohol in their system face an immediate 30-day suspension."
  }
];

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { roadSignsQuestions, rulesOfTheRoadQuestions };
}
