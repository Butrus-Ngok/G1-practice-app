// ONTARIO G1 PRACTICE TEST - COMPLETE QUESTION DATABASE
// Based on "Driver's Handbook Study Guide" PDF
// 77 Road Sign Questions + 104 Rules of the Road Questions = 181 Total
// ============================================
// PART A: TRAFFIC SIGNS (77 Questions)
// ============================================
const roadSignsQuestions = [
    {
        id: 1,
        question: "What does this sign mean?",
        image: "images/signs/1.png",
        options: [
            "Road slippery when wet",
            "No right turn permitted",
            "No left turn permitted",
            "You must not make a \"U\" turn"
        ],
        correctAnswer: 3,
        category: "regulatory",
        explanation: "This sign prohibits making a U-turn. Doing so at this location is illegal and dangerous."
    },
    {
        id: 2,
        question: "What does this sign indicate?",
        image: "images/signs/2.png",
        options: [
            "Hidden intersection ahead",
            "Winding road",
            "Road slippery when wet",
            "Narrow road ahead"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign warns that the road ahead is winding. Reduce speed and drive with caution."
    },
    {
        id: 3,
        question: "What does this sign mean?",
        image: "images/signs/3.png",
        options: [
            "No entry into the intersection",
            "This sign means no stopping",
            "Vehicles approaching from angle shown must stop",
            "Need not stop for stop signs in direction of arrows"
        ],
        correctAnswer: 1,
        category: "regulatory",
        explanation: "This sign means no stopping. You must not stop in the area where this sign is posted."
    },
    {
        id: 4,
        question: "What does this sign warn about?",
        image: "images/signs/4.png",
        options: [
            "Traffic signal ahead",
            "Stop sign 150 metres (500 feet) ahead",
            "Bump 120 metres (400 feet) ahead",
            "Railway crossing ahead"
        ],
        correctAnswer: 0,
        category: "warning",
        explanation: "This sign warns that there is a traffic signal ahead. Be prepared to stop if the light is red or yellow."
    },
    {
        id: 5,
        question: "This sign indicates:",
        image: "images/signs/5.png",
        options: [
            "Winding road ahead",
            "Bumpy road ahead",
            "Road ahead slippery when wet",
            "No passing ahead"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign indicates a bumpy road ahead. Reduce speed and drive with caution."
    },
    {
        id: 6,
        question: "What does this sign mean?",
        image: "images/signs/6.png",
        options: [
            "Playground zone",
            "Children playing in residential area",
            "School zone",
            "Direction sign for children"
        ],
        correctAnswer: 2,
        category: "warning",
        explanation: "This pentagon-shaped sign indicates a school zone. Reduce speed and watch for children, especially during school hours."
    },
    {
        id: 7,
        question: "When you see this sign, you must:",
        image: "images/signs/7.png",
        options: [
            "Divided highway ahead",
            "You are approaching a one-way street",
            "Hidden intersection ahead",
            "Pavement narrows"
        ],
        correctAnswer: 3,
        category: "warning",
        explanation: "This sign warns that the pavement narrows ahead. Keep to the right."
    },
    {
        id: 8,
        question: "This sign warns of:",
        image: "images/signs/8.png",
        options: [
            "Narrow road ahead",
            "Hidden intersection ahead",
            "Railway crossing ahead",
            "Intersection ahead"
        ],
        correctAnswer: 3,
        category: "warning",
        explanation: "This sign warns that there is an intersection ahead. Be prepared for crossing traffic."
    },
    {
        id: 9,
        question: "What does this sign mean?",
        image: "images/signs/9.png",
        options: [
            "Divided highway ahead",
            "Divided road ends, keep to the right",
            "Narrow bridge ahead",
            "Road under construction"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign indicates that the divided road ends ahead. Prepare for two-way traffic."
    },
    {
        id: 10,
        question: "A green circle on a sign means:",
        image: "images/signs/10.png",
        options: [
            "Right lane ends",
            "Hidden intersection ahead",
            "You are approaching a steep hill",
            "No parking"
        ],
        correctAnswer: 3,
        category: "regulatory",
        explanation: "This sign prohibits parking in the area."
    },
    {
        id: 11,
        question: "This sign means:",
        image: "images/signs/11.png",
        options: [
            "Narrow road ahead",
            "Road ahead turns left then right",
            "Road ahead turns right then left",
            "Intersection ahead"
        ],
        correctAnswer: 2,
        category: "warning",
        explanation: "This sign warns that the road ahead turns right then left. Reduce speed."
    },
    {
        id: 12,
        question: "What does this sign mean?",
        image: "images/signs/12.png",
        options: [
            "Stop sign ahead",
            "Yield right-of-way",
            "Dead end street ahead",
            "Slow moving vehicle"
        ],
        correctAnswer: 0,
        category: "warning",
        explanation: "This sign warns that there is a stop sign ahead. Begin slowing down and prepare to stop."
    },
    {
        id: 13,
        question: "A green circle means:",
        image: "images/signs/13.png",
        options: [
            "Truck route",
            "No trucks",
            "Route for large trucks",
            "Permissive sign"
        ],
        correctAnswer: 3,
        category: "regulatory",
        explanation: "A green circle indicates that the action shown is permitted. It's a permissive sign."
    },
    {
        id: 14,
        question: "This sign means:",
        image: "images/signs/14.png",
        options: [
            "Keep to right",
            "Keep to left",
            "Keep out (Do not enter)",
            "Do not pass"
        ],
        correctAnswer: 2,
        category: "regulatory",
        explanation: "This sign means 'Do Not Enter'. You must not enter the roadway where this sign is posted."
    },
    {
        id: 15,
        question: "This sign means:",
        image: "images/signs/15.png",
        options: [
            "Construction sign - slow down obey flagman's direction",
            "A construction sign replacing flag person on duty",
            "Regulatory sign - reduce speed",
            "This sign warns of road work operation ahead"
        ],
        correctAnswer: 3,
        category: "warning",
        explanation: "This sign warns drivers that there is road work ahead. Reduce speed and be prepared to stop or follow directions."
    },
    {
        id: 16,
        question: "This sign means:",
        image: "images/signs/16.png",
        options: [
            "Policeman at intersection",
            "You will get a ticket if you do not obey traffic signal",
            "Stop for red light at intersection",
            "Red light camera at intersection"
        ],
        correctAnswer: 3,
        category: "warning",
        explanation: "This sign indicates that there is a red light camera at the intersection. The camera will photograph vehicles that run red lights."
    },
    {
        id: 17,
        question: "What does this warning sign indicate?",
        image: "images/signs/17.png",
        options: [
            "Deer regularly cross - be alert for animals",
            "Zoo ahead",
            "No honking at animals",
            "Deer are welcome"
        ],
        correctAnswer: 0,
        category: "warning",
        explanation: "This sign warns that deer may cross the road in this area. Reduce speed and be prepared to stop."
    },
    {
        id: 18,
        question: "What does this sign indicate?",
        image: "images/signs/18.png",
        options: [
            "Truck entrance on the right side ahead",
            "No trucks allowed",
            "Slow down for truck",
            "Truck route"
        ],
        correctAnswer: 0,
        category: "warning",
        explanation: "This sign indicates a truck entrance on the right side ahead. Be cautious of entering trucks."
    },
    {
        id: 19,
        question: "This sign means:",
        image: "images/signs/19.png",
        options: [
            "No right turn",
            "Divided highway ends",
            "Narrow bridge ahead",
            "No right turn on red"
        ],
        correctAnswer: 3,
        category: "regulatory",
        explanation: "This sign prohibits making a right turn on a red light."
    },
    {
        id: 20,
        question: "This sign indicates:",
        image: "images/signs/20.png",
        options: [
            "You may exit if you remain in right hand lane",
            "You must not drive in right hand lane under any circumstances",
            "End of highway, you must move into right hand lane",
            "Two-way left turn lane"
        ],
        correctAnswer: 3,
        category: "regulatory",
        explanation: "This sign indicates a two-way left turn lane for vehicles turning left from either direction."
    },
    {
        id: 21,
        question: "This sign means:",
        image: "images/signs/21.png",
        options: [
            "X-intersection for school vehicles",
            "School crosswalk sign",
            "Caution—school bus crossing",
            "Regulatory sign"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign indicates a school crosswalk. Watch for children and school buses."
    },
    {
        id: 22,
        question: "This sign warns of:",
        image: "images/signs/22.png",
        options: [
            "School area ahead",
            "Railway crossing ahead",
            "You must give the right-of-way",
            "You have the right-of-way"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign warns that there is a railway crossing ahead. Be prepared to stop if lights are flashing or gates are down."
    },
    {
        id: 23,
        question: "What does this sign mean?",
        image: "images/signs/23.png",
        options: [
            "No bicycles allowed",
            "Do not drive through",
            "Bicycle route",
            "No parking"
        ],
        correctAnswer: 0,
        category: "regulatory",
        explanation: "This sign prohibits bicycles from using this roadway or path."
    },
    {
        id: 24,
        question: "This sign indicates:",
        image: "images/signs/24.png",
        options: [
            "You must make a right turn only",
            "You must not make a left turn",
            "Hidden intersection ahead",
            "You are approaching a traffic island"
        ],
        correctAnswer: 0,
        category: "regulatory",
        explanation: "This sign indicates that you must make a right turn only."
    },
    {
        id: 25,
        question: "This sign means:",
        image: "images/signs/25.png",
        options: [
            "No bicycles allowed",
            "Do not drive through",
            "Bicycle route",
            "No parking"
        ],
        correctAnswer: 2,
        category: "guide",
        explanation: "This sign indicates a designated bicycle route."
    },
    {
        id: 26,
        question: "This sign indicates:",
        image: "images/signs/26.png",
        options: [
            "Snowmobiles may not use this road",
            "Snowmobile parking only",
            "Snowmobiles may use this road",
            "Snowmobile repair shop ahead"
        ],
        correctAnswer: 2,
        category: "guide",
        explanation: "This sign indicates that snowmobiles may use this road."
    },
    {
        id: 27,
        question: "What does this sign mean?",
        image: "images/signs/27.png",
        options: [
            "You may park in the designated area during the posted times",
            "You may not park between the signs during the posted times",
            "No parking",
            "Weekend parking only"
        ],
        correctAnswer: 0,
        category: "regulatory",
        explanation: "This sign allows parking in the designated area during the posted times."
    },
    {
        id: 28,
        question: "This sign means:",
        image: "images/signs/28.png",
        options: [
            "Bicycles are allowed on this road",
            "No bicycles allowed on this road",
            "No parking",
            "No stopping"
        ],
        correctAnswer: 1,
        category: "regulatory",
        explanation: "This sign prohibits bicycles on this road."
    },
    {
        id: 29,
        question: "What does this sign mean?",
        image: "images/signs/29.png",
        options: [
            "Care for pedestrian",
            "Watch for traffic signal",
            "Do not block intersection",
            "Do not slow down"
        ],
        correctAnswer: 2,
        category: "regulatory",
        explanation: "This sign means do not block the intersection. Ensure you can clear it before entering."
    },
    {
        id: 30,
        question: "This sign indicates:",
        image: "images/signs/30.png",
        options: [
            "This lane is reserved for specific types of vehicles during certain times and days such as buses, taxis, bicycles and vehicles with more than three passengers",
            "No buses allowed on the specified lane during times and days posted",
            "No stopping during the times and days posted",
            "Do not enter between the times and days posted"
        ],
        correctAnswer: 0,
        category: "guide",
        explanation: "This sign indicates a reserved lane for specific vehicles during posted times."
    },
    {
        id: 31,
        question: "This sign means:",
        image: "images/signs/31.png",
        options: [
            "Intersection ahead",
            "Narrow bridge ahead",
            "Paved surface ends ahead",
            "The road ahead is split"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign warns of a narrow bridge ahead. Slow down and be cautious."
    },
    {
        id: 32,
        question: "This sign indicates:",
        image: "images/signs/32.png",
        options: [
            "Keep to the right of the traffic island",
            "Road turns right then left",
            "Winding road ahead",
            "Pass other traffic on the right"
        ],
        correctAnswer: 0,
        category: "guide",
        explanation: "This sign instructs to keep to the right of the traffic island."
    },
    {
        id: 33,
        question: "What does this sign mean?",
        image: "images/signs/33.png",
        options: [
            "Destination board",
            "School zone—watch for Children playing",
            "Provincial park",
            "Pedestrian control sign"
        ],
        correctAnswer: 0,
        category: "guide",
        explanation: "This sign is a destination board showing directions to locations."
    },
    {
        id: 34,
        question: "This sign warns of:",
        image: "images/signs/34.png",
        options: [
            "Stop sign ahead",
            "Yield right-of-way",
            "Dead end street ahead",
            "Slow moving vehicle"
        ],
        correctAnswer: 1,
        category: "regulatory",
        explanation: "This is a yield sign. You must slow down and yield the right-of-way to traffic on the intersecting road."
    },
    {
        id: 35,
        question: "This sign means:",
        image: "images/signs/35.png",
        options: [
            "Going straight is allowed",
            "No right turn",
            "No left turn",
            "Do not drive straight through the intersection"
        ],
        correctAnswer: 3,
        category: "regulatory",
        explanation: "This sign prohibits driving straight through the intersection."
    },
    {
        id: 36,
        question: "This sign means:",
        image: "images/signs/36.png",
        options: [
            "Parking is only for vehicles displaying a valid disabled person parking permit",
            "No parking",
            "No standing",
            "Parking is not allowed for a disable person with a permit"
        ],
        correctAnswer: 0,
        category: "regulatory",
        explanation: "This sign reserves parking for vehicles with a valid disabled person parking permit."
    },
    {
        id: 37,
        question: "What does this sign mean?",
        image: "images/signs/37.png",
        options: [
            "No bicycles",
            "No pedestrians allowed",
            "No children allowed",
            "Dogs only"
        ],
        correctAnswer: 1,
        category: "regulatory",
        explanation: "This sign prohibits pedestrians from the area or roadway."
    },
    {
        id: 38,
        question: "This sign indicates:",
        image: "images/signs/38.png",
        options: [
            "Only for picking up and dropping off passengers if you have a disabled persons permit",
            "Standing area for disabled persons only",
            "No parking",
            "Parking is permitted"
        ],
        correctAnswer: 0,
        category: "regulatory",
        explanation: "This sign allows picking up and dropping off passengers if you have a disabled persons permit."
    },
    {
        id: 39,
        question: "What does this sign mean?",
        image: "images/signs/39.png",
        options: [
            "School area",
            "Bumpy road",
            "Do not stand or stop in this area",
            "No bicycles allowed on this road"
        ],
        correctAnswer: 2,
        category: "regulatory",
        explanation: "This sign prohibits standing or stopping in this area."
    },
    {
        id: 40,
        question: "This sign indicates:",
        image: "images/signs/40.png",
        options: [
            "This lane is for buses only",
            "This lane is for trucks only",
            "This lane is not for bicycles",
            "This lane is for bicycles only"
        ],
        correctAnswer: 3,
        category: "guide",
        explanation: "This sign indicates a lane reserved for bicycles only."
    },
    {
        id: 41,
        question: "What does this sign mean?",
        image: "images/signs/41.png",
        options: [
            "Keep to the right lane except when passing",
            "Keep right if you want to park",
            "No U-turns",
            "For right turns"
        ],
        correctAnswer: 0,
        category: "regulatory",
        explanation: "This sign instructs to keep to the right lane except when passing."
    },
    {
        id: 42,
        question: "A red circle means:",
        image: "images/signs/42.png",
        options: [
            "No left turns",
            "Merging traffic ahead",
            "Road branching off ahead",
            "Hidden intersection"
        ],
        correctAnswer: 2,
        category: "warning",
        explanation: "This sign warns of a road branching off ahead."
    },
    {
        id: 43,
        question: "This sign means:",
        image: "images/signs/43.png",
        options: [
            "No U-turns",
            "No left turns",
            "Right turn ahead",
            "The side-road at the intersection ahead does not have a clear view of traffic"
        ],
        correctAnswer: 3,
        category: "warning",
        explanation: "This sign warns that the side-road at the intersection ahead has limited visibility."
    },
    {
        id: 44,
        question: "This sign means:",
        image: "images/signs/44.png",
        options: [
            "Do not enter roadway",
            "Do not enter unless local traffic",
            "A traffic circle ahead",
            "Prohibited sign"
        ],
        correctAnswer: 0,
        category: "regulatory",
        explanation: "This sign means do not enter the roadway."
    },
    {
        id: 45,
        question: "This sign means:",
        image: "images/signs/45.png",
        options: [
            "Merge with traffic, two roads are equally responsible",
            "Hidden intersection",
            "No U-turns",
            "No left turns"
        ],
        correctAnswer: 0,
        category: "warning",
        explanation: "This sign indicates merging traffic, with equal responsibility for both roads."
    },
    {
        id: 46,
        question: "What does this sign warn of?",
        image: "images/signs/46.png",
        options: [
            "Paved surface ends ahead",
            "Watch for falling rocks",
            "School zone sign",
            "Do not block intersection"
        ],
        correctAnswer: 0,
        category: "warning",
        explanation: "This sign warns that the paved surface ends ahead."
    },
    {
        id: 47,
        question: "This sign indicates:",
        image: "images/signs/47.png",
        options: [
            "Bicycles are not allowed",
            "Bicycle crossing ahead",
            "No parking",
            "No left turns"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign warns of a bicycle crossing ahead. Watch for cyclists."
    },
    {
        id: 48,
        question: "What does this sign mean?",
        image: "images/signs/48.png",
        options: [
            "Safety check ahead",
            "Warns of a steep hill ahead",
            "Pavement ends, 500 feet ahead",
            "Bumpy road ahead"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign warns of a steep hill ahead. Gear down if driving down."
    },
    {
        id: 49,
        question: "This sign warns of:",
        image: "images/signs/49.png",
        options: [
            "Right lane ends",
            "Hidden intersection ahead",
            "You are approaching a steep hill",
            "No parking"
        ],
        correctAnswer: 0,
        category: "warning",
        explanation: "This sign warns that the right lane ends ahead. Merge left."
    },
    {
        id: 50,
        question: "What does this sign mean?",
        image: "images/signs/50.png",
        options: [
            "Winding road ahead",
            "Keep to left",
            "Danger, road ends",
            "Danger, sharp turn"
        ],
        correctAnswer: 3,
        category: "warning",
        explanation: "This sign warns of a danger, sharp turn ahead. Reduce speed."
    },
    {
        id: 51,
        question: "This sign means:",
        image: "images/signs/51.png",
        options: [
            "You are approaching a four-way intersection",
            "You are approaching a railroad crossing",
            "You are approaching a hospital zone",
            "You are approaching a pedestrian crosswalk"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign warns of a railroad crossing ahead."
    },
    {
        id: 52,
        question: "This sign means:",
        image: "images/signs/52.png",
        options: [
            "Maximum speed of 50 km (30 miles) per hour from this sign to the next sign",
            "Speed limit for rural school zones",
            "End of 50 km (30 miles) per hour zone",
            "Maximum speed of 50 km (30 miles) per hour ahead"
        ],
        correctAnswer: 3,
        category: "regulatory",
        explanation: "This sign indicates the maximum speed of 50 km/h ahead."
    },
    {
        id: 53,
        question: "This sign means:",
        image: "images/signs/53.png",
        options: [
            "I am turning left",
            "I am slowing or stopping",
            "I am turning right",
            "You may pass me"
        ],
        correctAnswer: 0,
        category: "safety",
        explanation: "This hand signal indicates the driver is turning left."
    },
    {
        id: 54,
        question: "This sign means:",
        image: "images/signs/54.png",
        options: [
            "Factory ahead, slow down",
            "Bumpy or uneven pavement ahead",
            "Construction zone",
            "Bridge or viaduct"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign warns of bumpy or uneven pavement ahead."
    },
    {
        id: 55,
        question: "This sign means:",
        image: "images/signs/55.png",
        options: [
            "I am turning right",
            "I am turning left",
            "I am slowing or stopping",
            "You may pass me"
        ],
        correctAnswer: 2,
        category: "safety",
        explanation: "This hand signal indicates slowing or stopping."
    },
    {
        id: 56,
        question: "This sign means:",
        image: "images/signs/56.png",
        options: [
            "You may exit if you remain in right hand lane",
            "You must not drive in right hand lane under any circumstances",
            "End of highway, you must move into right hand lane",
            "You must exit if you remain in right hand lane"
        ],
        correctAnswer: 3,
        category: "regulatory",
        explanation: "This sign indicates that you must exit if you stay in the right hand lane."
    },
    {
        id: 57,
        question: "This sign warns of:",
        image: "images/signs/57.png",
        options: [
            "Drive with caution",
            "Share the road with oncoming traffic",
            "Slippery when wet",
            "No standing"
        ],
        correctAnswer: 2,
        category: "warning",
        explanation: "This sign warns that the road is slippery when wet. Reduce speed in wet conditions."
    },
    {
        id: 58,
        question: "This sign means:",
        image: "images/signs/58.png",
        options: [
            "No trucks allowed",
            "Warns of a steep hill ahead",
            "Passing is not allowed",
            "Watch for falling rocks"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign warns of a steep hill ahead."
    },
    {
        id: 59,
        question: "This sign means:",
        image: "images/signs/59.png",
        options: [
            "Fire hall",
            "Do not enter",
            "There may be water flowing over the road",
            "Constructions zone"
        ],
        correctAnswer: 0,
        category: "warning",
        explanation: "This sign indicates a fire hall ahead. Watch for emergency vehicles."
    },
    {
        id: 60,
        question: "This sign warns of:",
        image: "images/signs/60.png",
        options: [
            "A hidden school bus stop ahead, slow down, drive with extra caution, watch for children and school buses with flashing red lights",
            "Hidden intersection",
            "School zone",
            "School with play ground"
        ],
        correctAnswer: 0,
        category: "warning",
        explanation: "This sign warns of a hidden school bus stop ahead. Be cautious for children and buses."
    },
    {
        id: 61,
        question: "This sign indicates:",
        image: "images/signs/61.png",
        options: [
            "Bumpy road ahead",
            "Sign shows the maximum truck clearance height",
            "School zone ahead",
            "Watch for falling rocks"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign shows the maximum clearance height for vehicles."
    },
    {
        id: 62,
        question: "What does this sign mean?",
        image: "images/signs/62.png",
        options: [
            "Snowmobile repair shop ahead",
            "Snowmobile parking",
            "Snowmobiles cross this road",
            "Snowmobiles not allowed"
        ],
        correctAnswer: 2,
        category: "warning",
        explanation: "This sign warns that snowmobiles cross this road."
    },
    {
        id: 63,
        question: "This sign indicates:",
        image: "images/signs/63.png",
        options: [
            "Do not pass any vehicles within 30 metres of a pedestrian crossing",
            "School zone",
            "Uneven pavement ahead",
            "Construction zone"
        ],
        correctAnswer: 0,
        category: "regulatory",
        explanation: "This sign prohibits passing within 30 metres of a pedestrian crossing."
    },
    {
        id: 64,
        question: "What does this sign indicate?",
        image: "images/signs/64.png",
        options: [
            "It is a warning sign",
            "During school hours when the yellow lights are flashing, follow the speed limit shown",
            "Watch for cross guard only",
            "Watch for children only"
        ],
        correctAnswer: 1,
        category: "regulatory",
        explanation: "This sign indicates to follow the speed limit when yellow lights flash during school hours."
    },
    {
        id: 65,
        question: "This sign indicates:",
        image: "images/signs/65.png",
        options: [
            "Highway with two express lanes",
            "The two lanes ahead are closed",
            "Two or more passengers must be in the vehicle to use this lane on the highway",
            "Two lanes will merge into one"
        ],
        correctAnswer: 2,
        category: "guide",
        explanation: "This sign indicates an HOV lane requiring two or more passengers."
    },
    {
        id: 66,
        question: "What does this sign indicate?",
        image: "images/signs/66.png",
        options: [
            "Hazard, the downward line indicates the side on which you may safely pass",
            "Hazard, the downward line indicates the side on which you may not safely pass",
            "Shopping ahead",
            "Rest area ahead"
        ],
        correctAnswer: 1,
        category: "warning",
        explanation: "This sign indicates a hazard, and the downward line shows the side not to pass on."
    },
    {
        id: 67,
        question: "This sign indicates:",
        image: "images/signs/67.png",
        options: [
            "Winding road ahead",
            "By wheel-chair only or disabled person parking (handicap)",
            "No parking",
            "No standing"
        ],
        correctAnswer: 1,
        category: "regulatory",
        explanation: "This sign indicates disabled person parking only."
    },
    {
        id: 68,
        question: "What does this sign mean?",
        image: "images/signs/68.png",
        options: [
            "Two separate roads by median ahead, keep to the right",
            "Divided highway ends",
            "Narrow bridge ahead",
            "Road under construction"
        ],
        correctAnswer: 0,
        category: "warning",
        explanation: "This sign warns of two separate roads by a median ahead. Keep to the right."
    },
    {
        id: 69,
        question: "This sign indicates:",
        image: "images/signs/69.png",
        options: [
            "Lane usage sign permitting all turns including left",
            "No parking from arrows to corner",
            "Advance warning of danger",
            "Lane usage sign meaning right turn only"
        ],
        correctAnswer: 3,
        category: "guide",
        explanation: "This sign indicates the lane is for right turns only."
    },
    {
        id: 70,
        question: "This sign means:",
        image: "images/signs/70.png",
        options: [
            "I am turning right",
            "I am turning left",
            "I am slowing or stopping",
            "I am stopping"
        ],
        correctAnswer: 0,
        category: "safety",
        explanation: "This hand signal indicates a right turn."
    },
    {
        id: 71,
        question: "What does this sign mean?",
        image: "images/signs/71.png",
        options: [
            "Keep distance away",
            "New born baby on board",
            "New driver",
            "New car"
        ],
        correctAnswer: 1,
        category: "information",
        explanation: "This sign indicates a new born baby on board. Drive with caution."
    },
    {
        id: 72,
        question: "What does this sign mean?",
        image: "images/signs/72.png",
        options: [
            "Housing",
            "Hospital",
            "Horse racing",
            "Hills"
        ],
        correctAnswer: 1,
        category: "information",
        explanation: "This sign indicates a hospital ahead."
    },
    {
        id: 73,
        question: "What does this sign mean?",
        image: "images/signs/73.png",
        options: [
            "Air show ahead",
            "Air plane landing",
            "Route to Airport",
            "None of the above"
        ],
        correctAnswer: 2,
        category: "information",
        explanation: "This sign indicates the route to the airport."
    },
    {
        id: 74,
        question: "What does this sign mean?",
        image: "images/signs/74.png",
        options: [
            "No smoking",
            "Not more than 3 minutes idling",
            "Idling is permitted",
            "No stopping more than 3 minutes"
        ],
        correctAnswer: 1,
        category: "regulatory",
        explanation: "This sign limits idling to no more than 3 minutes."
    },
    {
        id: 75,
        question: "What does this sign mean?",
        image: "images/signs/75.png",
        options: [
            "The bridge ahead lifts or swings to allow boats to pass",
            "Airport",
            "Hotel",
            "Narrow road ahead"
        ],
        correctAnswer: 0,
        category: "warning",
        explanation: "This sign warns that the bridge ahead is a movable bridge."
    },
    {
        id: 76,
        question: "This sign indicates:",
        image: "images/signs/76.png",
        options: [
            "Keep to the right lane except when passing",
            "Keep right if you want to park",
            "No U-turns",
            "For right turns"
        ],
        correctAnswer: 0,
        category: "regulatory",
        explanation: "This sign instructs to keep to the right lane except when passing."
    },
    {
        id: 77,
        question: "What does this sign indicate?",
        image: "images/signs/77.png",
        options: [
            "Parking is permitted",
            "You may not park between the signs during posted times",
            "No parking",
            "Weekend parking only"
        ],
        correctAnswer: 1,
        category: "regulatory",
        explanation: "This sign prohibits parking between the signs during posted times."
    }

];
// ============================================
// PART B: RULES OF THE ROAD (104 Questions)
// ============================================

const rulesOfTheRoadQuestions = [
    {
        id: 101,
        question: "In Ontario, there is a seat belt law. This means:",
        options: [
            "Yes, all drivers and passengers must wear seat belts",
            "No, seat belts are optional in Ontario",
            "Only when driving on an open highway",
            "Only when driving within a municipality"
        ],
        correctAnswer: 0,
        category: "laws",
        explanation: "Yes, Ontario law requires all drivers and passengers to wear seat belts that are properly adjusted and fastened.",
        image: "images/rules/1.png"
    },
    {
        id: 102,
        question: "If someone is tailgating you, what should you do?",
        options: [
            "Move into another lane when it is safe to do so",
            "Slow down slightly to increase the space in front of your car",
            "Pull over to let the tailgater pass",
            "All of the above"
        ],
        correctAnswer: 3,
        category: "safety",
        explanation: "All of these are safe responses to tailgaters. The best approach depends on the specific situation and road conditions.",
        image: "images/rules/2.png"
    },
    {
        id: 103,
        question: "Failing to stop for a school bus that is unloading passengers will:",
        options: [
            "Result in a one year jail sentence",
            "Cost you 6 demerit points and a fine of up to $1000",
            "Get you a warning and a fine of $100",
            "Result in retaking your road test"
        ],
        correctAnswer: 1,
        category: "penalties",
        explanation: "Failing to stop for a school bus with flashing red lights carries severe penalties: 6 demerit points and fines up to $1000.",
        image: "images/rules/3.png"
    },
    {
        id: 104,
        question: "When a car is stopped to allow a pedestrian to cross the street at a marked crosswalk, you should:",
        options: [
            "Pass the stopped car on the left",
            "Sound horn for the driver of the stopped car to drive on",
            "Pass the stopped car to the right",
            "Not pass any car stopped to allow a pedestrian to cross"
        ],
        correctAnswer: 3,
        category: "safety",
        explanation: "Never pass a vehicle that is stopped at a crosswalk. There may be pedestrians you cannot see crossing the road.",
        image: "images/rules/4.png"
    },
    {
        id: 105,
        question: "When driving in heavy fog, you should use:",
        options: [
            "Parking lights",
            "Low beam headlights",
            "Parking lights and high beam headlights",
            "High beam headlights"
        ],
        correctAnswer: 1,
        category: "conditions",
        explanation: "Use low beam headlights in fog. High beams will reflect off the fog and reduce visibility even more.",
        image: "images/rules/5.png"
    },
    {
        id: 106,
        question: "Never change lanes in traffic without:",
        options: [
            "Giving proper signal and looking to make sure the move can be made safely",
            "Decreasing speed and giving the correct signal",
            "Looking into the rear view mirror only",
            "Blowing your horn and looking to the rear"
        ],
        correctAnswer: 0,
        category: "maneuvers",
        explanation: "Always signal your intention and check mirrors and blind spots before changing lanes to ensure it's safe.",
        image: "images/rules/6.png"
    },
    {
        id: 107,
        question: "What documents may a police officer require a motor vehicle owner to produce?",
        options: [
            "If the motor vehicle is insured - a liability insurance card",
            "The motor vehicle ownership",
            "If he is operating a motor vehicle - a valid driver's licence",
            "Any of the above"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "Police officers can require any of these documents during a traffic stop to verify ownership, insurance, and licensing.",
        image: "images/rules/7.png"
    },
    {
        id: 108,
        question: "Every accident must be reported to the police where there is personal injury or when the damage exceeds:",
        options: ["$100", "$150", "$1500", "$1000"],
        correctAnswer: 3,
        category: "laws",
        explanation: "In Ontario, you must report collisions to police if there are injuries or if total damage appears to be more than $1000.",
        image: "images/rules/8.png"
    },
    {
        id: 109,
        question: "When lights are required, drivers must use lower beam headlights when following another vehicle:",
        options: [
            "Within 30 m (100 ft.)",
            "Within 60 m (200 ft.)",
            "Within 120 m (400 ft.)",
            "This only applies when approaching another vehicle"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "You must use low beam headlights when following within 60 metres (200 feet) of another vehicle to avoid blinding the driver.",
        image: "images/rules/9.png"
    },
    {
        id: 110,
        question: "While travelling on a highway, the driver of a motor vehicle is not permitted to carry, in a house or boat trailer:",
        options: ["Firearms", "Flammable material", "Persons (Passenger)", "Pets"],
        correctAnswer: 2,
        category: "safety",
        explanation: "It is illegal and extremely dangerous to carry passengers in a trailer. They must ride in the vehicle itself.",
        image: "images/rules/10.png"
    },
    {
        id: 111,
        question: "When on streets designed for two-way traffic, you hear the siren of an emergency vehicle, what does the law require you to do?",
        options: [
            "Speed up and get out of the way",
            "Signal the driver to pass",
            "Pull to the right as far as possible and stop",
            "Continue at the same speed"
        ],
        correctAnswer: 2,
        category: "laws",
        explanation: "When you hear an emergency vehicle siren, pull to the right as far as possible and stop to let it pass safely.",
        image: "images/rules/11.png"
    },
    {
        id: 112,
        question: "Which of the following has the right-of-way over all others at an intersection when the signal light is green?",
        options: [
            "Pedestrians crossing against the light",
            "Pedestrians crossing with the light",
            "Vehicles turning right",
            "Vehicles turning left"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "Pedestrians crossing with the light have the right-of-way over all vehicles when the signal light is green.",
        image: "images/rules/12.png"
    },
    {
        id: 113,
        question: "To what penalties is a driver liable who is convicted of driving while disqualified?",
        options: [
            "A fine of $500 or imprisonment for six months or both",
            "Impoundment of the motor vehicle being operated for three months",
            "An additional 6-month period of suspension of driving privilege",
            "Any or all of the above"
        ],
        correctAnswer: 3,
        category: "penalties",
        explanation: "All of these penalties can be imposed for driving while disqualified, including fines, imprisonment, vehicle impoundment, and additional suspension.",
        image: "images/rules/13.png"
    },
    {
        id: 114,
        question: "When the traffic signal-light facing you is red and you intend to go straight through the intersection, what must you do?",
        options: [
            "Stop, give pedestrians the right-of-way, then proceed with caution",
            "Stop, proceed when the way is clear",
            "Slow down, proceed when the way is clear",
            "Stop, proceed only when the signal turns green and when the way is clear"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "At a red light, you must come to a complete stop and wait for the light to turn green before proceeding, if safe.",
        image: "images/rules/14.png"
    },
    {
        id: 115,
        question: "If you are involved in a reportable accident how soon must you make a report to your nearest provincial or municipal police officer?",
        options: ["At once", "Within 24 hours", "Within 48 hours", "Within 72 hours"],
        correctAnswer: 0,
        category: "laws",
        explanation: "Reportable accidents (with injuries or damage over $1000) must be reported to police immediately, at the scene if possible.",
        image: "images/rules/15.png"
    },
    {
        id: 116,
        question: "If a traffic signal changes while a pedestrian is still in the street, which of the following has the right-of-way?",
        options: [
            "Motorists making turns",
            "The pedestrian",
            "Motorists coming from his right",
            "Motorists coming from his left"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "Pedestrians who have already started crossing when the signal changes have the right-of-way to complete their crossing.",
        image: "images/rules/16.png"
    },
    {
        id: 117,
        question: "Unless otherwise posted, the maximum speed limit allowed in cities, town, villages and built-up area is:",
        options: [
            "30 km/h (20 m.p.h.)",
            "50 km/h (30 m.p.h.)",
            "40 km/h (25 m.p.h.)",
            "60 km/h (55 m.p.h.)"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "The default speed limit in built-up areas in Ontario is 50 km/h, unless otherwise posted.",
        image: "images/rules/17.png"
    },
    {
        id: 118,
        question: "At an intersection where there is a flashing amber (yellow) traffic light, you must:",
        options: [
            "Stop if making a right turn",
            "Continue at the same speed",
            "Stop if making a left turn",
            "Slow down and proceed with caution"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "A flashing amber light means you should proceed with caution after yielding to pedestrians and other vehicles in the intersection.",
        image: "images/rules/18.png"
    },
    {
        id: 119,
        question: "Under what circumstances may a driver's licence be cancelled?",
        options: [
            "For failure to attend a re-examination",
            "For possession of an altered driver's licence",
            "For failure to satisfactorily complete a driver re-examination",
            "Any or all of the above"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "All of these are reasons why the Ministry of Transportation may cancel a driver's licence.",
        image: "images/rules/19.png"
    },
    {
        id: 120,
        question: "As a level one (G1) driver, you must be accompanied by a class G or higher licensed driver, who has the following driving experience more than:",
        options: ["Three years", "Four years", "Eight years", "Six years"],
        correctAnswer: 1,
        category: "laws",
        explanation: "G1 drivers must be accompanied by a fully licensed driver (Class G or higher) with at least 4 years of driving experience.",
        image: "images/rules/20.png"
    },
    {
        id: 121,
        question: "As a level two (G2) driver your alcohol level must not be over:",
        options: ["0.08%", "0.05%", "0.02%", "0.00%"],
        correctAnswer: 3,
        category: "laws",
        explanation: "G1 and G2 drivers must have a zero blood alcohol level (0.00%) when driving. This is stricter than for fully licensed drivers.",
        image: "images/rules/21.png"
    },
    {
        id: 122,
        question: "Overdriving your headlights at night is dangerous because:",
        options: [
            "You are driving too fast",
            "Your headlights are too bright",
            "You cannot stop within the distance that you can see",
            "It is not good for the car battery"
        ],
        correctAnswer: 2,
        category: "safety",
        explanation: "Overdriving your headlights means driving too fast to stop within the distance illuminated by your headlights.",
        image: "images/rules/22.png"
    },
    {
        id: 123,
        question: "If you want to pass a motorcycle, you should:",
        options: [
            "Honk your horn before you pass",
            "Turn on your high-beam lights before you pass",
            "Pass just as you would with another car",
            "Use half of their lane to pass"
        ],
        correctAnswer: 2,
        category: "safety",
        explanation: "Pass motorcycles as you would any other vehicle, giving them a full lane and maintaining a safe distance.",
        image: "images/rules/23.png"
    },
    {
        id: 124,
        question: "If you are a teenage driver aged 19 or under and in the first six months of receiving your G2 licence. How many passengers are you allowed to carry between midnight and 5 a.m.?",
        options: [
            "3 passengers aged 19 or under",
            "No passengers aged 19 or under",
            "1 passenger aged 19 or under (no restrictions for passengers the age of 20 and over)",
            "2 passengers aged 19 or under"
        ],
        correctAnswer: 2,
        category: "laws",
        explanation: "New G2 drivers (first 6 months) can carry only one passenger aged 19 or under between midnight and 5 a.m.",
        image: "images/rules/24.png"
    },
    {
        id: 125,
        question: "If you are a teenage driver with your G2 licence for 6 months and until you obtain your full G licence or turn 20, how many passengers are you allowed to carry between midnight and 5 a.m.?",
        options: [
            "3 passengers aged 19 or under (no restrictions for passengers the age of 20 and over)",
            "No passengers aged 19 or under",
            "1 passenger aged 19 or under",
            "2 passengers aged 19 or under"
        ],
        correctAnswer: 0,
        category: "laws",
        explanation: "After 6 months with G2, you can carry up to 3 passengers aged 19 or under between midnight and 5 a.m.",
        image: "images/rules/25.png"
    },
    {
        id: 126,
        question: "A 'No Parking' sign at a certain location means:",
        options: [
            "You may stop here if the driver remains in the vehicle",
            "You may park your vehicle for less than five minutes",
            "You may stop temporarily to load or unload passengers",
            "You may not park your vehicle here"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "A 'No Parking' sign means you cannot leave your vehicle unattended, but you may stop briefly to load/unload.",
        image: "images/rules/26.png"
    },
    {
        id: 127,
        question: "In what position on the roadway must you be before making a left turn from a one-way traffic street?",
        options: [
            "Close to the right-hand side of the roadway",
            "Close to the centre line of the roadway",
            "Close to the left side of the roadway",
            "Does not matter"
        ],
        correctAnswer: 2,
        category: "maneuvers",
        explanation: "On a one-way street, position your vehicle close to the left side before making a left turn.",
        image: "images/rules/27.png"
    },
    {
        id: 128,
        question: "When lights are required, drivers are required to use low beam headlights?",
        options: [
            "Within 1 km (0.6 mile) of the approach of another vehicle",
            "Within 150 m (500 ft.) of the approach of another vehicle",
            "Within 300 m (1000 ft.) of the approach of another vehicle",
            "This is a safety practice, not a law"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "You must use low beam headlights when approaching within 150 metres (500 feet) of another vehicle.",
        image: "images/rules/28.png"
    },
    {
        id: 129,
        question: "What insurance protection does the owner get who pays the uninsured motor vehicle fee?",
        options: [
            "$10,000 insurance coverage",
            "$20,000 insurance coverage",
            "$35,000 insurance coverage",
            "No insurance protection whatever"
        ],
        correctAnswer: 3,
        category: "insurance",
        explanation: "The uninsured motor vehicle fee provides no insurance coverage. It only allows you to register a vehicle without insurance.",
        image: "images/rules/29.png"
    },
    {
        id: 130,
        question: "When approaching a railway crossing at which an electrical or mechanical signal device is warning of the approach of a train you must:",
        options: [
            "Stop not less than 15 m (5 ft) from the nearest rail",
            "Increase speed and cross tracks as quickly as possible",
            "Stop not less than 5 m (15 ft) from the nearest rail",
            "Slow down and proceed with caution"
        ],
        correctAnswer: 2,
        category: "safety",
        explanation: "Stop at least 5 metres (15 feet) from the nearest rail when warning signals are active.",
        image: "images/rules/30.png"
    },
    {
        id: 131,
        question: "Upon approaching a Yield-sign, what does the law require you to do?",
        options: [
            "Slow down, stop if necessary, and yield right-of-way",
            "Stop, then enter traffic slowly",
            "Stop, then enter traffic quickly",
            "Speed up and force your way into traffic"
        ],
        correctAnswer: 0,
        category: "laws",
        explanation: "At a yield sign, slow down and be prepared to stop. Yield to traffic on the intersecting road.",
        image: "images/rules/31.png"
    },
    {
        id: 132,
        question: "When does the law require lights on vehicles to be turned on?",
        options: [
            "Between sunset and sunrise",
            "Between dusk and dawn and at any other time you cannot see clearly for a distance of 150 m (500 ft)",
            "Between half an hour before sunset to half an hour after sunrise and at any other time you cannot see clearly for a distance of 150 m (500 ft)",
            "No specified time"
        ],
        correctAnswer: 2,
        category: "laws",
        explanation: "Lights must be on from half an hour before sunset to half an hour after sunrise, and anytime visibility is less than 150 metres.",
        image: "images/rules/32.png"
    },
    {
        id: 133,
        question: "A person whose driver's licence is under suspension, may:",
        options: [
            "Operate a motor vehicle in a case of extreme emergency",
            "Operate a motor vehicle to and from work",
            "Operate a motor vehicle when accompanied by a licensed driver",
            "Not operate a motor vehicle under any conditions"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "When your licence is suspended, you cannot drive under any circumstances.",
        image: "images/rules/33.png"
    },
    {
        id: 134,
        question: "If the signal light changes from green to amber as you approach an intersection, what should you do?",
        options: [
            "Stop. If a stop cannot be made safely proceed with caution",
            "Speed up to clear the intersection as quickly as possible",
            "Continue through the intersection without slowing or stopping",
            "Sound horn to warn pedestrians and other drivers that you do not intend to stop"
        ],
        correctAnswer: 0,
        category: "safety",
        explanation: "At a yellow light, stop if you can do so safely. If you're too close to stop safely, proceed with caution.",
        image: "images/rules/34.png"
    },
    {
        id: 135,
        question: "When a streetcar is stopped to take on or discharge passengers, where there is no safety zone, what does the law require you to do before passing the streetcar?",
        options: [
            "Stop behind the rear of the streetcar and then proceed",
            "Sound horn and pass with caution",
            "Pass on the left side when the way is clear",
            "Stop 2 m (6 ft) behind the rearmost door where passengers are getting on or off, and proceed only when it is safe to do so"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "Stop at least 2 metres behind streetcar doors where passengers are boarding or exiting, and proceed only when safe.",
        image: "images/rules/35.png"
    },
    {
        id: 136,
        question: "On a roadway where traffic is moving in both directions, in what position must you be before making a left turn?",
        options: [
            "Close to the right-hand side of the roadway",
            "Close to the left side of the roadway",
            "Immediately to the right of the centre line of the roadway",
            "Does not matter"
        ],
        correctAnswer: 2,
        category: "maneuvers",
        explanation: "On a two-way road, position your vehicle just to the right of the centre line before making a left turn.",
        image: "images/rules/36.png"
    },
    {
        id: 137,
        question: "Upon approaching a stop sign, a driver must:",
        options: [
            "Slow down, sound horn and then proceed",
            "Slow down, and if the way is clear, proceed",
            "Stop, sound horn, then proceed",
            "Stop, and when it is safe to do so, proceed"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "At a stop sign, come to a complete stop, then proceed when it is safe to do so.",
        image: "images/rules/37.png"
    },
    {
        id: 138,
        question: "You should under all condition drive at a speed which will allow you to:",
        options: [
            "Stop within 90 metres (300 feet)",
            "Stop within 60 metres (200 feet)",
            "Stop within a safe distance",
            "Stop within 150 metres (500 feet)"
        ],
        correctAnswer: 2,
        category: "safety",
        explanation: "Always drive at a speed that allows you to stop within a safe distance, considering road and weather conditions.",
        image: "images/rules/38.png"
    },
    {
        id: 139,
        question: "The Ministry of Transportation and Communications may suspend a licence after a 9 Demerit Point interview:",
        options: [
            "If a driver fails to give satisfactory reasons why their licence should not be suspended",
            "If a driver does not have at least 5 years driving experience",
            "If the licence is not needed for business reasons",
            "The Ministry is not permitted to suspend a licence before the 15-point level is reached"
        ],
        correctAnswer: 0,
        category: "penalties",
        explanation: "After accumulating 9 points, you may be required to attend an interview where your licence could be suspended.",
        image: "images/rules/39.png"
    },
    {
        id: 140,
        question: "A 'School Bus', with red signal lights flashing, is stopped on a highway that has no median strip. What does the law require you to do when meeting or overtaking the bus?",
        options: [
            "Does not matter provided you sound horn",
            "Stop until the bus proceeds or the signal lights are no longer flashing",
            "Wait for approaching vehicles to pass",
            "Reduce speed and pass with care"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "You must stop for a school bus with flashing red lights, regardless of direction, unless there's a physical median.",
        image: "images/rules/40.png"
    },
    {
        id: 141,
        question: "Which of the following penalties can the court impose on a person convicted of driving 50 km/h (30 m.p.h.) or more over the speed limit?",
        options: [
            "Suspension of licence for 6 months",
            "Suspension of licence for 30 days",
            "Impoundment of motor vehicle for 6 months",
            "Imprisonment of person for 6 months"
        ],
        correctAnswer: 1,
        category: "penalties",
        explanation: "Driving 50 km/h or more over the speed limit can result in a 30-day licence suspension.",
        image: "images/rules/41.png"
    },
    {
        id: 142,
        question: "Before moving your car from a parked position, you should:",
        options: [
            "Check other traffic, signal and pull from the curb quickly",
            "Honk your horn and pull from the curb slowly",
            "Check other traffic, signal and pull from the curb when it is safe to do so",
            "Signal and pull from the curb"
        ],
        correctAnswer: 2,
        category: "safety",
        explanation: "Check mirrors and blind spots, signal, and pull out only when it's safe and there's a gap in traffic.",
        image: "images/rules/42.png"
    },
    {
        id: 143,
        question: "Should your right wheels drop off the roadway, what is the best way to get back on the roadway?",
        options: [
            "Steer hard to the left",
            "Apply brakes and steer hard to the left",
            "Take foot off gas pedal, turn back when vehicle has slowed",
            "Apply brakes to reduce speed"
        ],
        correctAnswer: 2,
        category: "safety",
        explanation: "Ease off the gas, slow down, then gradually steer back onto the roadway when it's safe.",
        image: "images/rules/43.png"
    },
    {
        id: 144,
        question: "When 15 or more Demerit Points have accumulated on a record, the driver's licence is suspended:",
        options: [
            "Automatically, and for 30 days from receipt of licence",
            "At the discretion of the Ministry",
            "Only if the licence is NOT used for business purposes",
            "For 3 months"
        ],
        correctAnswer: 0,
        category: "penalties",
        explanation: "15+ demerit points results in an automatic 30-day licence suspension.",
        image: "images/rules/44.png"
    },
    {
        id: 145,
        question: "When the driver of another vehicle is about to overtake and pass your vehicle you must:",
        options: [
            "Move to the right and allow such vehicle to pass",
            "Speed up so that passing is not necessary",
            "Signal the other driver not to pass",
            "Move to the left to prevent passing"
        ],
        correctAnswer: 0,
        category: "safety",
        explanation: "When being passed, stay to the right and maintain or reduce speed to allow safe passing.",
        image: "images/rules/45.png"
    },
    {
        id: 146,
        question: "When descending a steep hill a good safe-driving practice is to:",
        options: [
            "Gear down and allow the engine to assist in braking",
            "Turn off the ignition",
            "Place the gear shift in neutral",
            "Disengage the clutch and coast"
        ],
        correctAnswer: 0,
        category: "safety",
        explanation: "Use a lower gear when going downhill to help control speed and reduce brake wear.",
        image: "images/rules/46.png"
    },
    {
        id: 147,
        question: "A driver may be required to attend an interview and re-examination of his driving ability:",
        options: [
            "When 9 demerit points have been accumulated",
            "When 3 demerit points have been accumulated",
            "When 6 demerit points have been accumulated",
            "When 15 demerit points have been accumulated"
        ],
        correctAnswer: 0,
        category: "penalties",
        explanation: "At 9 demerit points, you may be called for an interview and possible re-examination.",
        image: "images/rules/47.png"
    },
    {
        id: 148,
        question: "When may you lend your driver's licence?",
        options: [
            "Never",
            "To another person who is learning to drive",
            "For identification purposes only",
            "In emergencies"
        ],
        correctAnswer: 0,
        category: "laws",
        explanation: "Never lend your driver's licence to anyone. It's illegal and can result in serious penalties.",
        image: "images/rules/48.png"
    },
    {
        id: 149,
        question: "When a red signal light with a green arrow is shown at an intersection it means:",
        options: [
            "Stop and wait for the green light before making a turn in the direction of the arrow",
            "Proceed with caution in the direction of the arrow, yielding right-of-way to pedestrians and other traffic",
            "Stop and then proceed",
            "The green arrow is a signal for pedestrians only"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "A green arrow with a red light means you may turn in the direction of the arrow, but must yield to pedestrians.",
        image: "images/rules/49.png"
    },
    {
        id: 150,
        question: "Are drivers responsible for their passengers buckling up?",
        options: [
            "Only if passengers are over sixteen years of age",
            "Only if passengers are from five years of age up to sixteen",
            "Only if the passengers are in the front seat",
            "Only if passengers are over eighteen years of age"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "Drivers are responsible for ensuring passengers under 16 are properly buckled up.",
        image: "images/rules/50.png"
    },
    {
        id: 151,
        question: "When it is safe to do so, passing other vehicles on the right side:",
        options: [
            "Is permitted on any street or highway",
            "Is permitted providing it is possible to do so by driving on the shoulder of the road",
            "Is not permitted under any circumstances",
            "Is permitted when the street or highway has two or more lanes for traffic in the direction you are travelling"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "You may pass on the right only when there are two or more lanes going in your direction.",
        image: "images/rules/51.png"
    },
    {
        id: 152,
        question: "When a right turn against a red signal light is permitted, what does the law require you to do before entering the intersection and making the turn?",
        options: [
            "Slow down, proceed with caution",
            "Stop, then edge into traffic",
            "Stop, signal, make the turn so as not to interfere with other traffic, including pedestrians",
            "Slow down, signal and turn"
        ],
        correctAnswer: 2,
        category: "laws",
        explanation: "For right turns on red: come to a complete stop first, then turn only when safe, yielding to all traffic and pedestrians.",
        image: "images/rules/52.png"
    },
    {
        id: 153,
        question: "A flashing green light at an intersection, where turns to the left and right are permitted, means:",
        options: [
            "You may turn to the left if the way is clear",
            "You may turn to the right if the way is clear",
            "You may proceed straight through if the way is clear",
            "You may do any of the above"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "A flashing green light means you have the right-of-way to go straight, turn left, or turn right.",
        image: "images/rules/53.png"
    },
    {
        id: 154,
        question: "Under which of the following conditions is it dangerous and unlawful to make a 'U' turn?",
        options: [
            "Upon a curve or on a hill where there is a clear view of less than 150 m (500 ft.) in either direction",
            "On a railway crossing or within 30 m (100 ft.) of a railway crossing",
            "Within 150 m (500 ft.) of a bridge, viaduct or tunnel if driver's view is obstructed",
            "Under all of the above conditions"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "U-turns are prohibited in all these situations due to limited visibility or safety concerns.",
        image: "images/rules/54.png"
    },
    {
        id: 155,
        question: "If you are involved in an accident in which someone is injured you must:",
        options: [
            "Report the accident at once to the nearest provincial or municipal police officer",
            "Report the accident within 48 hours to the nearest provincial or municipal police officer",
            "Report the accident to your insurance company only",
            "Report the accident to the Ministry of Transportation and Communications only"
        ],
        correctAnswer: 0,
        category: "laws",
        explanation: "Accidents with injuries must be reported to police immediately.",
        image: "images/rules/55.png"
    },
    {
        id: 156,
        question: "How soon after a licensed driver changes his/her name or address is he/she required to notify the Ministry of Transportation and Communications?",
        options: ["Within 6 days", "Within 15 days", "Within 30 days", "At any time prior to renewal of licence"],
        correctAnswer: 0,
        category: "laws",
        explanation: "You must notify the Ministry of address or name changes within 6 days.",
        image: "images/rules/56.png"
    },
    {
        id: 157,
        question: "A flashing red signal light at an intersection means:",
        options: [
            "Slow down and drive with increased caution",
            "Slow down and if necessary yield right-of-way to cars approaching from the left or right",
            "Signal light is out of order, proceed with caution",
            "Stop. Proceed only when it is safe to do so"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "Treat a flashing red light as a stop sign. Come to a complete stop, then proceed when safe.",
        image: "images/rules/57.png"
    },
    {
        id: 158,
        question: "When entering a freeway you should:",
        options: [
            "Stop on acceleration lane, wait for an opening, then enter the freeway rapidly",
            "Accelerate quickly to freeway speed and merge with freeway traffic",
            "Slow down, and then enter freeway at a sharp angle",
            "Drive slowly and be prepared to stop for freeway traffic"
        ],
        correctAnswer: 1,
        category: "maneuvers",
        explanation: "Use the acceleration lane to reach freeway speed, then merge smoothly with traffic.",
        image: "images/rules/58.png"
    },
    {
        id: 159,
        question: "A flashing blue light mounted on a motor vehicle indicates:",
        options: [
            "A motor vehicle carrying explosives",
            "Snow removal equipment",
            "An ambulance",
            "A police emergency vehicle"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "Flashing blue lights are used on snow removal equipment and other maintenance vehicles.",
        image: "images/rules/59.png"
    },
    {
        id: 160,
        question: "When a truck becomes disabled on the highway, where the speed limit is in excess of 60 km/h flares or reflectors must be placed approximately what distance ahead of and to the rear of the disabled vehicle?",
        options: ["15 m (50 ft.)", "30 m (100 ft.)", "60 m (200 ft.)", "90 m (300 ft.)"],
        correctAnswer: 1,
        category: "safety",
        explanation: "Place warning devices about 30 metres (100 feet) in front of and behind a disabled vehicle.",
        image: "images/rules/60.png"
    },
    {
        id: 161,
        question: "When selling a motor vehicle to another person, you, the seller, should:",
        options: [
            "Notify the Ministry of the change of ownership within six days of date of sale",
            "Go with the buyer to a vehicle licence issuing office to carry out the change of ownership",
            "If selling the vehicle without a Safety Standards Certificate, you must return the vehicle licence plates and motor vehicle permit to a vehicle licence issuing office and obtain an Unfit Vehicle Permit in the buyer's name",
            "All of the above"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "All of these are requirements when selling a vehicle in Ontario.",
        image: "images/rules/61.png"
    },
    {
        id: 162,
        question: "At 15 Demerit points, your licence is suspended, after 30 days, the number of points on the driver's record is:",
        options: ["Reduce to 7 points", "Reduce to 0 points", "Reduce to 5 points", "None of the above"],
        correctAnswer: 0,
        category: "penalties",
        explanation: "After a 30-day suspension for 15+ points, your points are reduced to 7 upon licence reinstatement.",
        image: "images/rules/62.png"
    },
    {
        id: 163,
        question: "When approaching an intersection where a traffic signal light is red and a policeman motions you to go through, you should:",
        options: [
            "Wait for the light to turn green",
            "Obey the policeman's signal and go through at once",
            "Call the policeman's attention to the red light",
            "Stop to make sure he wants you to go through"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "Always obey a police officer's directions, even if they contradict traffic signals.",
        image: "images/rules/63.png"
    },
    {
        id: 164,
        question: "Except when passing, what distance must be maintained between commercial vehicles travelling in the same direction on the highway outside a city, town or village?",
        options: ["30 m (100 ft.)", "60 m (200 ft.)", "120 m (400 ft.)", "150 m (500 ft.)"],
        correctAnswer: 1,
        category: "laws",
        explanation: "Commercial vehicles must maintain at least 60 metres (200 feet) between them on highways.",
        image: "images/rules/64.png"
    },
    {
        id: 165,
        question: "At what level of alcohol in the blood can you be convicted of being an impaired driver?",
        options: ["0.03%", "0.05%", "0.08%", "1.0%"],
        correctAnswer: 2,
        category: "laws",
        explanation: "The legal limit for blood alcohol concentration is 0.08% for fully licensed drivers.",
        image: "images/rules/65.png"
    },
    {
        id: 166,
        question: "If you are convicted of drinking and driving, you will lose your driver's licence on the first offence for:",
        options: ["1 month", "3 months", "6 months", "1 year"],
        correctAnswer: 3,
        category: "penalties",
        explanation: "First offence impaired driving results in a 1-year licence suspension.",
        image: "images/rules/66.png"
    },
    {
        id: 167,
        question: "Unless otherwise posted, the maximum speed limit on the highway outside of a city, town, village or built-up area is:",
        options: [
            "100 kilometres (60 miles) an hour",
            "80 kilometres (50 miles) an hour",
            "60 kilometres (40 miles) an hour",
            "50 kilometres (30 miles) an hour"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "The default speed limit on rural highways is 80 km/h, unless otherwise posted.",
        image: "images/rules/67.png"
    },
    {
        id: 168,
        question: "If you are driving and suddenly one of your tires blows out, you should:",
        options: [
            "Concentrate on steering",
            "Take your foot off the gas pedal to slow down",
            "Bring the vehicle to a stop off the road",
            "All of the above"
        ],
        correctAnswer: 3,
        category: "safety",
        explanation: "All of these actions are correct for handling a tire blowout safely.",
        image: "images/rules/68.png"
    },
    {
        id: 169,
        question: "When a streetcar is stopped to pick up or discharge passengers and there is a safety island, what does the law require you to do?",
        options: [
            "Pass with caution",
            "Stop at least 2 metres behind the safety island",
            "Sound horn and pass with caution",
            "Pass on the left side of the streetcar"
        ],
        correctAnswer: 0,
        category: "laws",
        explanation: "With a safety island, you may pass the streetcar with caution, watching for pedestrians.",
        image: "images/rules/69.png"
    },
    {
        id: 170,
        question: "When getting out of your car on a busy street you should open your door:",
        options: [
            "After making the proper signals",
            "When you turn on your four-way flashers",
            "When you are sure that it can be done safely",
            "It does not matter"
        ],
        correctAnswer: 2,
        category: "safety",
        explanation: "Always check for approaching traffic, cyclists, and pedestrians before opening your door.",
        image: "images/rules/70.png"
    },
    {
        id: 171,
        question: "When exiting an expressway you should:",
        options: [
            "Give yourself plenty of time to move over to the lane closest to the exit",
            "Slow down smoothly to the posted speed limit or to the prevailing speed on the exit ramp",
            "Signal and maintain your speed until you are off the ramp",
            "All of the above"
        ],
        correctAnswer: 3,
        category: "maneuvers",
        explanation: "All of these are proper techniques for safely exiting an expressway.",
        image: "images/rules/71.png"
    },
    {
        id: 172,
        question: "If two drivers enter an intersection from opposite directions at the same time, one going straight while the other is turning left, which vehicle has the right-of-way?",
        options: [
            "The one turning left",
            "The one going straight",
            "Both have the right-of-way",
            "Both cars should stop first and then proceed"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "The vehicle going straight has the right-of-way over the vehicle turning left.",
        image: "images/rules/72.png"
    },
    {
        id: 173,
        question: "You should reduce your speed below the posted speed limits for which of the following reasons:",
        options: [
            "Bad weather conditions",
            "When approaching and crossing an intersection",
            "In rush hour with stop and go traffic conditions",
            "All of the above"
        ],
        correctAnswer: 3,
        category: "safety",
        explanation: "All of these situations require reducing your speed for safety.",
        image: "images/rules/73.png"
    },
    {
        id: 174,
        question: "When approaching a sign that reads 'merging traffic' you must:",
        options: [
            "Stop your vehicle before proceeding",
            "Let the cars behind you go first",
            "Honk your horn first before proceeding",
            "Adjust your speed and position to avoid a collision with other vehicles"
        ],
        correctAnswer: 3,
        category: "safety",
        explanation: "Adjust your speed and position to allow merging traffic to enter safely.",
        image: "images/rules/74.png"
    },
    {
        id: 175,
        question: "Drivers who have vision restrictions noted on their driver's licence must always wear glasses or contact lenses when:",
        options: ["Watching movies", "Driving", "Reading", "Sleeping"],
        correctAnswer: 1,
        category: "laws",
        explanation: "If your licence requires corrective lenses, you must wear them whenever you drive.",
        image: "images/rules/75.png"
    },
    {
        id: 176,
        question: "If you are involved in an accident that was due to your use of a cellular phone while driving:",
        options: [
            "Your insurance will increase",
            "You will be charged with careless driving and lose 6 demerit points",
            "Your licence will be suspended for one year",
            "You will have to take your road test again"
        ],
        correctAnswer: 1,
        category: "penalties",
        explanation: "Using a cell phone while driving can result in careless driving charges with 6 demerit points.",
        image: "images/rules/76.png"
    },
    {
        id: 177,
        question: "Before leaving your car parked on a downgrade, you should:",
        options: [
            "Leave your front wheels parallel to the curb",
            "Turn your front wheels to the left and set your parking brake",
            "Set your parking brake only",
            "Turn your front wheels to the right and set your parking brake"
        ],
        correctAnswer: 3,
        category: "safety",
        explanation: "When parking downhill with a curb, turn wheels to the right and use parking brake.",
        image: "images/rules/77.png"
    },
    {
        id: 178,
        question: "It is more dangerous to drive at the maximum speed limit at night than during day-time because:",
        options: [
            "Some drivers unlawfully drive with parking lights only",
            "You cannot see as far ahead at night",
            "The roadway are more apt to be slippery at night",
            "Your reaction time is slower at night"
        ],
        correctAnswer: 1,
        category: "safety",
        explanation: "Reduced visibility at night means you have less time to react to hazards.",
        image: "images/rules/78.png"
    },
    {
        id: 179,
        question: "The broken centre line on a roadway means you may:",
        options: ["Never pass", "Pass if the way is clear", "Pass at any time", "Pass only during daylight hours"],
        correctAnswer: 1,
        category: "laws",
        explanation: "A broken centre line means you may pass when it's safe to do so.",
        image: "images/rules/79.png"
    },
    {
        id: 180,
        question: "How close to a fire hydrant may you legally park?",
        options: ["3 metres (10 ft.)", "4.5 metres (15 ft.)", "1.5 metres (5 ft.)", "6 metres (20 ft.)"],
        correctAnswer: 0,
        category: "laws",
        explanation: "You must not park within 3 metres (10 feet) of a fire hydrant.",
        image: "images/rules/80.png"
    },
    {
        id: 181,
        question: "Except when you intend to overtake and pass another vehicle or when you intend to make a left turn, you should:",
        options: [
            "Drive in the centre of the roadway",
            "Always keep well to the right",
            "Drive on the shoulder of the highway",
            "Always keep well to the left"
        ],
        correctAnswer: 1,
        category: "safety",
        explanation: "Keep to the right except when passing or preparing to turn left.",
        image: "images/rules/81.png"
    },
    {
        id: 182,
        question: "Parking lights may be used:",
        options: [
            "At any time",
            "For Parking only",
            "When driving in heavy fog",
            "When driving on well lighted street"
        ],
        correctAnswer: 1,
        category: "laws",
        explanation: "Parking lights are for parked vehicles only, not for driving.",
        image: "images/rules/82.png"
    },
    {
        id: 183,
        question: "A solid centre line on the roadway is on your side of a broken centre line. What does the solid centre line mean?",
        options: [
            "It is unsafe to overtake and pass",
            "Pass only when no traffic is in sight",
            "It is safe to overtake and pass",
            "Pass at any time"
        ],
        correctAnswer: 0,
        category: "laws",
        explanation: "A solid line on your side means passing is prohibited from your direction.",
        image: "images/rules/83.png"
    },
    {
        id: 184,
        question: "The best way to stop quickly on a wet or icy roadway is to:",
        options: [
            "Pump the brake until you come to a stop",
            "Keep foot off brake and let compression stop you",
            "Slam on brake and try to prevent vehicle from skidding",
            "Apply brakes the same way you always do"
        ],
        correctAnswer: 0,
        category: "safety",
        explanation: "Pump brakes gently on slippery surfaces to avoid skidding.",
        image: "images/rules/84.png"
    },
    {
        id: 185,
        question: "If you lose control of your vehicle and it goes off the road, you should:",
        options: [
            "Grip the steering wheel firmly",
            "Take your foot off the gas pedal to slow down and avoid heavy braking",
            "When the vehicle is under control steer back to the road",
            "All of the above"
        ],
        correctAnswer: 3,
        category: "safety",
        explanation: "All of these actions help regain control when leaving the roadway.",
        image: "images/rules/85.png"
    },
    {
        id: 186,
        question: "Under the Criminal Code, if you are caught driving while your licence is suspended, your vehicle will be impounded for?",
        options: ["1 year", "6 months", "45 days", "30 days"],
        correctAnswer: 2,
        category: "penalties",
        explanation: "Driving while suspended can result in a 45-day vehicle impoundment.",
        image: "images/rules/86.png"
    },
    {
        id: 187,
        question: "When taking any medication, you should:",
        options: [
            "Have someone follow you home",
            "Drive even slower",
            "Consult your doctor about the effects before driving",
            "Drink lots of water"
        ],
        correctAnswer: 2,
        category: "safety",
        explanation: "Always check if medication affects your ability to drive safely.",
        image: "images/rules/87.png"
    },
    {
        id: 188,
        question: "What should you do if your vehicle becomes disabled on the highway?",
        options: [
            "Park with all your four wheels off the travelled highway, if possible",
            "Stop where you are",
            "Stop in the right lane",
            "Stop in the left lane"
        ],
        correctAnswer: 0,
        category: "safety",
        explanation: "Get completely off the roadway if possible, and turn on hazard lights.",
        image: "images/rules/88.png"
    },
    {
        id: 189,
        question: "A defensive driver will:",
        options: [
            "Drive faster in the rain",
            "Play music loudly",
            "Consider what other drivers might do and is always prepared",
            "Talk on the cell phone while driving"
        ],
        correctAnswer: 2,
        category: "safety",
        explanation: "Defensive drivers anticipate potential hazards and are prepared to react safely.",
        image: "images/rules/89.png"
    },
    {
        id: 190,
        question: "Which of the following hand-and-arm signals is correct for slowing or stopping?",
        options: ["Arm out and up", "Arm straight out the window", "Arm out and down", "Circle motion"],
        correctAnswer: 2,
        category: "laws",
        explanation: "Arm out and down indicates slowing or stopping.",
        image: "images/rules/90.png"
    },
    {
        id: 191,
        question: "You are required to keep a safe distance behind the vehicle in front of you at 50 kilometres (30 miles) an hour. You should keep at least:",
        options: [
            "Seven car lengths behind the other vehicle",
            "Three car lengths behind the other vehicle",
            "One car length behind the other vehicle",
            "Five car lengths behind the other vehicle"
        ],
        correctAnswer: 1,
        category: "safety",
        explanation: "A good rule is one car length for every 15 km/h. At 50 km/h, about 3 car lengths.",
        image: "images/rules/91.png"
    },
    {
        id: 192,
        question: "When driving a motor vehicle on the highway at night, you should use low beam headlights (dim lights) when:",
        options: [
            "Approaching an intersection",
            "Meeting or following another vehicle",
            "Another driver dims his lights",
            "Blinded by the headlights of an approaching vehicle"
        ],
        correctAnswer: 1,
        category: "safety",
        explanation: "Use low beams when meeting or following other vehicles to avoid blinding other drivers.",
        image: "images/rules/92.png"
    },
    {
        id: 193,
        question: "Hydroplaning occurs during heavy rain when a vehicle's tires ride up above the water on the roadway. To help prevent hydroplaning you should:",
        options: [
            "Ensure that your tires on your vehicle have good tread depth",
            "Ensure that the tires on the vehicle are inflated to the project tire pressure",
            "Reduce vehicle speed when driving in the rain",
            "All of the above"
        ],
        correctAnswer: 3,
        category: "safety",
        explanation: "All of these help prevent hydroplaning in wet conditions.",
        image: "images/rules/93.png"
    },
    {
        id: 194,
        question: "The two-second rule is used to determine:",
        options: [
            "How fast they can react to obstacles",
            "How fast they are travelling",
            "How much gas you will save",
            "If they are following at a safe distance"
        ],
        correctAnswer: 3,
        category: "safety",
        explanation: "The two-second rule helps maintain a safe following distance.",
        image: "images/rules/94.png"
    },
    {
        id: 195,
        question: "When approaching a construction area, drivers should:",
        options: [
            "Honk the horn a few times to let the workers know you are approaching",
            "Watch for children",
            "Slow down and yield the right-of-way",
            "Speed up to get out of the area quicker"
        ],
        correctAnswer: 2,
        category: "safety",
        explanation: "Slow down in construction zones and be prepared to stop or yield.",
        image: "images/rules/95.png"
    },
    {
        id: 196,
        question: "When are broken white lines (dashes) used on streets and highways?",
        options: [
            "On a two way street",
            "When it is a no stopping zone",
            "When passing is permitted",
            "On a one way street or highway that has more than one lane of traffic moving in the same direction"
        ],
        correctAnswer: 3,
        category: "laws",
        explanation: "Broken white lines separate lanes going in the same direction on multi-lane roads.",
        image: "images/rules/96.png"
    },
    {
        id: 197,
        question: "If you are approaching an intersection and the traffic lights are not working, you should:",
        options: [
            "Yield to the traffic to your right",
            "Stop until no cars are passing and then go",
            "Treat it as a four way stop sign",
            "Slow down and proceed with caution"
        ],
        correctAnswer: 2,
        category: "laws",
        explanation: "Malfunctioning traffic lights should be treated as a four-way stop.",
        image: "images/rules/97.png"
    },
    {
        id: 198,
        question: "When approaching an intersection and you notice the roadway beyond the intersection is blocked with traffic, you should:",
        options: [
            "Keep as close as possible to the car ahead",
            "Proceed slowly into the intersection until the traffic ahead moves on",
            "Stop before entering the intersection and wait until traffic ahead moves on",
            "Sound horn to warn cars ahead to move on"
        ],
        correctAnswer: 2,
        category: "safety",
        explanation: "Never enter an intersection if you can't clear it completely. Wait until there's space.",
        image: "images/rules/98.png"
    },
    {
        id: 199,
        question: "Level one and level two drivers must have a blood alcohol level of zero when driving. New drivers caught drinking and driving will be charged under the Criminal Code and will get how many days suspension?",
        options: ["30 days", "60 days", "90 days", "1 year"],
        correctAnswer: 2,
        category: "penalties",
        explanation: "Novice drivers (G1/G2) caught drinking and driving face a 90-day licence suspension.",
        image: "images/rules/99.png"
    },
    {
        id: 200,
        question: "When a streetcar is stopped to pick up or discharge passengers and there is a safety island, what does the law require you to do?",
        options: [
            "Pass with caution",
            "Stop at least 2 metres behind the safety island",
            "Sound horn and pass with caution",
            "Pass on the left side of the streetcar"
        ],
        correctAnswer: 0,
        category: "laws",
        explanation: "With a safety island, you may pass the streetcar with caution, watching for pedestrians.",
        image: "images/rules/100.png"
    },
    {
        id: 201,
        question: "When are you permitted to turn right on a red light?",
        options: [
            "After stopping, if it is safe and unless otherwise posted",
            "Only when there is a green arrow",
            "Never, it is illegal",
            "Only during daylight hours"
        ],
        correctAnswer: 0,
        category: "laws",
        explanation: "Right turns on red are allowed after a complete stop, unless prohibited by a sign.",
        image: "images/rules/101.png"
    },
    {
        id: 202,
        question: "What is the minimum following distance you should maintain behind another vehicle under ideal conditions?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        correctAnswer: 1,
        category: "safety",
        explanation: "The two-second rule is the minimum following distance under good conditions.",
        image: "images/rules/102.png"
    },
    {
        id: 203,
        question: "When parking on a hill facing uphill with a curb, you should turn your wheels:",
        options: [
            "Away from the curb",
            "Toward the curb",
            "Straight ahead",
            "It doesn't matter as long as the parking brake is set"
        ],
        correctAnswer: 0,
        category: "safety",
        explanation: "When parking uphill with a curb, turn wheels away from the curb.",
        image: "images/rules/103.png"
    },
    {
        id: 204,
        question: "What must you do when approaching a railway crossing with flashing red lights?",
        options: [
            "Stop at least 5 metres from the nearest rail",
            "Slow down and proceed with caution",
            "Increase speed to cross quickly",
            "Stop only if a train is visible"
        ],
        correctAnswer: 0,
        category: "safety",
        explanation: "Stop at least 5 metres from the nearest rail when crossing signals are active.",
        image: "images/rules/104.png"
    }

];

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { roadSignsQuestions, rulesOfTheRoadQuestions };
}
