# Wildfire-Detector: TreeHugger

## Inspiration 💡

Due to global warming, Canada is increasingly experiencing forest fires. With this, the inspiration behind TreeHugger was to protect our Canadian forests and wildlife! 

## What it does 🤖

Tree Hugger monitors temperature and humidity. Detecting potential wildfire conditions, it alerts authorities, enabling quick intervention. Authorities can access real-time data through a user-friendly website. Authorities can view information not only from Tree Huggers but also neighbouring robots, ensuring a comprehensive forest monitoring network.

## How we built it ⚙️

ESP32 Microcontroller: Used AHT20 + BMP280 sensor modules to measure temperature, and humidity
Firebase: Database to store the data found from the sensors
React: To design our site and connect the sensor data to firebase
Machine Learning (Tensorflow): To analyze historical temperate and humidity data - in order to determine low, medium, high, extreme and alert wildfire risk levels.

## Challenges we ran into 😬

**General Challenges**
1. Exploring New Software Tools: Learning and using new software tools to improve our project.

2. Diverse Team Skillsets: Leveraging the diverse skillsets within our team, which includes members with varying levels of hardware experience, to create a well-rounded and innovative solution.


**Technical Challenges**
1. Training the AI Model: Teaching the AI model to understand temperature and humidity data and use that information to assess the risk levels for wildfires in the area. This involves developing a simple neutal network algorithm that can accurately classify the risk as low, medium, high, extreme or alert based on the input data, contributing to the safety and preparedness of the community.

2. Setting Up Firebase: Ensuring that Firebase functions properly for our project.

3. TensorFlow.js Integration: Integrating TensorFlow.js into our project to facilitate machine learning tasks. TensorFlow.js allows us to run machine learning models directly in the browser, which is vital for real-time wildfire risk assessment. This integration involves setting up the TensorFlow.js environment, loading and running the trained AI model, and efficiently processing data to make predictions.

## Accomplishments that we're proud of 🥳

We're incredibly excited about our recent achievements. First and foremost, successfully delving into the intricate world of machine learning, both in theory and application, stands as a significant milestone for our team. Additionally, venturing into new frontiers, such as Firebase and TensorFlow.js, has enriched our skill set and demonstrated our team's adaptability.

Another noteworthy accomplishment is our expedition into robotics. None of us had prior experience in this field, but we eagerly embraced the challenge and gave it our all.

Furthermore, it's been a source of great satisfaction to work on a project with a noble cause – to support the well-being of Canadian forests and wildlife.

## What we learned 🧐

We discovered that setting clear objectives and enhancing our communication is crucial for aligning our team. Experimenting with microcontrollers and data flow proved to be an effective method for mastering the intricacies of connecting the microcontroller to the server and other components of the system. Additionally, collaborating with a group of unfamiliar faces turned out to be a successful experience; it allowed us to leverage each other's strengths.

Addressing challenges as they arose sharpened our ability to think on our feet and devise innovative solutions. All in all, the entire project resembled an intensive course in continuous learning, serving as a reminder that personal and collective growth never truly ceases.

## What's next for TreeHugger 🌲🤗

**GPS Coordination with Authorities:** Enable TreeHugger to transmit GPS coordinates to relevant authorities for swift response and assistance.

**Tree Mobility:** Enhance TreeHugger's capabilities to move up and down trees, allowing it to record diverse data points more effectively.

**Fire Safety Measures:** Implement mechanisms for TreeHugger to detach from trees during wildfire situations, ensuring its own safety.

**Ground Mobility:** Equip TreeHugger with the ability to move on the ground, reaching safe areas or potential docking stations autonomously in addition to collecting soil data. 

**Animal Deterrence:** Integrate features to emit noise in high-risk situations, deterring nearby wildlife and protecting them from potential dangers.
