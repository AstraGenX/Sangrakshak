# Sangrakshak: Next-Generation Security Tool to Replace CAPTCHA

![Screenshot 2024-11-09 010348](https://github.com/user-attachments/assets/fd4f501f-bdda-48f8-a52b-23bb7f167496)


## 🌟 Introduction

**Sangrakshak** is a pioneering software tool that redefines online security by eliminating the need for traditional CAPTCHAs. This innovative security mechanism leverages AI-driven behavioral analysis to differentiate between human users and bots, offering a seamless user experience without compromising security. Our approach focuses on enhancing security with precision, speed, and convenience, paving the way for CAPTCHA-free online interactions in the near future.

![1730950544141 (1)](https://github.com/user-attachments/assets/390f01a6-8b1b-4827-9db2-67f65fbce36e)

---

## 🎯 Key Features

- **AI-Based User Verification:** Sangrakshak uses advanced machine learning models to detect bot activity based on user behavior data, providing robust security.
- **Seamless User Interaction:** Replaces traditional CAPTCHAs, ensuring an uninterrupted user experience without frustrating verifications.
- **Real-Time Detection:** Continuously monitors and evaluates user behavior, providing dynamic feedback on security status.
- **Cutting-Edge UI/UX:** Modern, sleek, and responsive user interface for optimal accessibility and engagement.

---

## Direct and Indirect Stakeholders

![Screenshot 2024-11-09 024601](https://github.com/user-attachments/assets/f4831d97-1a42-43ce-afb7-0f620ba70887)

### Direct Stakeholders

1. **End Users (Consumers/Visitors)**
   - Individuals who interact with websites or applications protected by Sangrakshak.
   - Benefit from an improved user experience with seamless, CAPTCHA-free interactions.

2. **Website Owners/Administrators**
   - Organizations or businesses that integrate Sangrakshak into their platforms.
   - Gain enhanced security, reduced bot activity, and better user engagement.

3. **Security Experts**
   - Professionals responsible for cybersecurity on digital platforms.
   - Benefit from an AI-driven mechanism that effectively detects and prevents bot-driven attacks.

4. **Developers (Frontend/Backend)**
   - Developers integrating Sangrakshak into their websites or applications.
   - They benefit from a simplified security solution that improves user experience without compromising security.

5. **AI/ML Model Engineers**
   - Data scientists or AI engineers who build and maintain the machine learning models.
   - They work on improving model performance, feature engineering, and adapting the tool to detect evolving bot behavior.

6. **System Administrators**
   - Individuals overseeing the deployment and maintenance of Sangrakshak in production environments.
   - Benefit from easier management and monitoring of user interactions and security threats.

### Indirect Stakeholders

1. **Regulatory Bodies (e.g., UIDAI, Data Protection Authorities)**
   - Entities that ensure Sangrakshak adheres to legal and privacy standards.
   - Ensure the tool is compliant with regulations in sensitive sectors like online identity verification.

2. **E-commerce Platform Users**
   - Customers shopping on e-commerce platforms that use Sangrakshak.
   - Indirectly benefit from a more secure and trustworthy shopping environment, free from bots or fraud.

3. **Advertising Networks**
   - Companies that rely on genuine user data to target advertisements.
   - They benefit from reduced bot traffic, improving the quality of user data and the effectiveness of ad targeting.

4. **Online Service Providers**
   - Platforms like banking, insurance, or government portals.
   - They benefit from a more secure, bot-free environment, ensuring legitimate user access and transactions.

5. **Researchers and Data Scientists**
   - Professionals who may leverage the data generated by Sangrakshak to understand bot behavior or improve machine learning models.
   - They indirectly benefit from the insights and advancements provided by Sangrakshak’s AI-driven analysis.

6. **Online Communities and Forums**
   - Communities that are impacted by bot interactions, such as fake accounts, spam, and malicious activities.
   - Indirectly benefit from a cleaner environment, fostering more authentic and valuable interactions among users.

---

## Technology Stack

![Screenshot 2024-11-09 040219](https://github.com/user-attachments/assets/825b16ac-9b34-4d3b-b35c-0fa952d2659c)

**Our project, Sangrakshak, is in the development phase and we have already implemented a robust foundation using several cutting-edge technologies. We plan to integrate even more features to make it fully market-ready.**

### Frontend:
- **JavaScript**: Core scripting for capturing user activity data.
- **React**: Responsive and interactive user interfaces.
- **HTML/CSS**: Provides structure and styling for seamless user experience.

### Backend:
- **Python**: Main language for AI/ML model development and backend logic.
- **Django**: Handles backend API requests and model integration.
- **Flask**: Lightweight framework for serving machine learning models and quick API prototyping.
- **Node.js**: Optional for real-time data handling and integration.

### Machine Learning:
- **Keras**: High-level neural network API for building and training the detection models.
- **TensorFlow**: Underlying framework for training and deploying ML models.
- **Scikit-Learn**: Used for data preprocessing and feature engineering.

### Data Management:
- **MySQL**: Relational database to store captured data and user interactions.
- **MongoDB**: Alternative for managing unstructured or JSON-based data.

### API Integration:
- **RESTful APIs**: Facilitates secure data exchange between frontend and backend components.
- **UIDAI API Compliance**: Ensures seamless integration with Aadhaar authentication systems.

### Security & Privacy:
- **JWT (JSON Web Tokens)**: Provides secure user authentication.
- **Data Obfuscation Libraries**: Protects sensitive user information.

### Deployment & Scalability:
- **Docker**: Containerization for consistency across different environments.
- **AWS**: Cloud hosting for scalability and high availability.
- **Kubernetes**: Manages containerized applications at scale (optional).

### Monitoring & Analytics:
- **Prometheus**: Real-time monitoring of system and security performance.
- **ELK Stack (Elasticsearch, Logstash, Kibana)**: Comprehensive logging and analytics.

---

## Sangrakshak Workflow

![Screenshot 2024-11-09 025218](https://github.com/user-attachments/assets/2b88652f-8c76-4f7b-981e-bf3856f1aa31)

1. **User Interaction with Sangrakshak Interface (Frontend)**
   - **Data Capture**: As a user interacts with the Sangrakshak portal (Aadhaar or other), the frontend components (built using **React** and **JavaScript**) capture various user behavior metrics, such as:
     - Linear movement of the mouse
     - Click count and multi-click events
     - Scrolling rates and rapid scroll events
     - Session time and activity gaps
     - Mouse movement variance
   - **Real-Time Analysis**: Environmental parameters (e.g., screen size, interaction timing) are also collected, making data unique for every user session.

2. **Data Preprocessing (Frontend to Backend Communication)**
   - **Data Transmission**: The collected data is transmitted to the backend via **RESTful APIs**, ensuring secure communication.
   - **Data Normalization and Standardization**: Using **Scikit-Learn**, data preprocessing occurs to ensure that inputs conform to the expected formats for model predictions.

3. **Machine Learning Model Prediction (Backend)**
   - **Data Analysis**: The preprocessed user activity data is fed to the trained detection model created using **TensorFlow** and **Keras**. 
   - **Bot Detection**: The model evaluates patterns and detects potential bot-like behavior using sophisticated neural networks. The prediction (0 for Human, 1 for Bot) is returned as output.
     - The detection process leverages data such as historical patterns, time gaps, scrolling behavior, and click metrics.

4. **Decision Handling and Alert System**
   - **Secure Session Handling**: Based on the prediction:
     - **Legitimate User (No Suspicious Activity)**: Displays a green indicator, “**Account Secured**.”
     - **Bot-Like Behavior Detected (Suspicious Activity)**: The system flags the session and displays a red alert, “**Suspicious Activity Detected – Account Session Terminated**,” while logging the event for future analysis.
   - **Real-Time Communication**: If real-time data handling is required, **Node.js** can be employed to ensure instantaneous responses and alerts.

5. **Data Storage and Logging**
   - **Storing Interaction Data**: Captured data and detection outcomes are stored in **MySQL** (or **MongoDB** for unstructured data) for record-keeping and model retraining.
   - **User Privacy and Security Measures**: All user data is secured through **JWT (JSON Web Token)** authentication and **Data Obfuscation** methods.

6. **Continuous Model Improvement and Monitoring**
   - **Monitoring and Feedback Loops**: System performance and detection accuracy are monitored using tools like **Prometheus** and the **ELK Stack (Elasticsearch, Logstash, Kibana)** to ensure optimal operation and quick adaptation to new threats.
   - **Retraining**: Periodic retraining of the model using new data helps keep the detection mechanism up-to-date against evolving bot behaviors.

---

## Feasibility and Viability

![Screenshot 2024-11-09 013519](https://github.com/user-attachments/assets/ea0d669d-be10-4a5f-b929-d716eabaebc7)

### Technical Feasibility
1. **State-of-the-Art Machine Learning Models**: 
   - Sangrakshak leverages **TensorFlow** and **Keras** for building and deploying advanced detection models capable of distinguishing between human and bot interactions with high accuracy. 
   - The use of **Scikit-Learn** for feature engineering and **Django**/ **Flask** frameworks ensures seamless backend integration with the frontend.
   - Our chosen technology stack, including **React** and **JavaScript**, makes it easy to capture complex user interaction data and supports rapid development cycles.
2. **Scalability**: 
   - The backend is designed to scale with user volume, leveraging **Docker** for containerization and **AWS** for cloud services to dynamically handle load and ensure high availability.
   - The modular architecture allows for easy expansion and integration with existing web applications, making it viable for widespread adoption across multiple sectors.

### Economic Viability
1. **Cost-Effective Solution**: 
   - Sangrakshak's design eliminates the need for traditional Captcha mechanisms, reducing user friction and offering a faster, more seamless experience. This can lead to increased customer retention and engagement.
   - By utilizing open-source technologies and cloud infrastructure, the cost of deployment and maintenance is minimized, making it accessible to a wide range of organizations.
2. **Potential Market Impact**: 
   - The potential to replace conventional Captcha systems makes Sangrakshak a disruptive solution that can penetrate sectors such as e-commerce, banking, government portals, and more.
   - Organizations can achieve significant cost savings by mitigating bot-related threats without relying on traditional, cumbersome methods.

### Operational Feasibility
1. **Easy Integration**: 
   - Sangrakshak is designed to integrate smoothly with existing web platforms via **RESTful APIs**. Its flexible architecture means minimal disruption during adoption.
   - Existing authentication and security frameworks, like **JWT**, ensure seamless compatibility with current security systems.
2. **User Experience Enhancement**: 
   - Sangrakshak offers a superior user experience by eliminating the need for time-consuming Captchas, ensuring a frictionless journey for end-users while maintaining robust security measures.
   - Real-time feedback through visual indicators enhances transparency and engagement.

### Legal and Security Compliance
1. **Data Security**: 
   - **Data Obfuscation** and robust encryption methods ensure user data remains protected, in line with data privacy laws such as GDPR.
   - Our adherence to **UIDAI API Compliance** guarantees smooth integration with sensitive systems like the Aadhaar portal.
2. **Bot Prevention and Account Security**: 
   - Sangrakshak detects and mitigates automated bot threats in real-time, ensuring compliance with industry standards for security and user protection.

### Viability for Future Expansion
1. **Continuous Improvement**: 
   - Our monitoring tools (**Prometheus**, **ELK Stack**) ensure continuous tracking of system performance, enabling rapid adaptation to new threats.
   - **AI Model Retraining** using up-to-date data ensures Sangrakshak remains effective against evolving bot behaviors.
2. **Innovative Use Cases**: 
   - Beyond web security, Sangrakshak’s behavioral analytics can be expanded to sectors like fraud detection, personalized user experiences, and more.

---

## Impact and Benefits

![Screenshot 2024-11-09 014027](https://github.com/user-attachments/assets/1d2e76d2-0790-4a1f-9213-8596f73f0cfa)

### 1. Enhanced Security without User Friction
- **Seamless Bot Detection**: Sangrakshak eliminates the need for traditional Captchas, providing users with a smooth and uninterrupted experience. By analyzing user behavior in real time, it effectively detects and mitigates bot threats, making it a robust security solution.
- **Improved User Experience**: Unlike cumbersome Captcha challenges that often frustrate users, Sangrakshak works unobtrusively in the background, preserving the integrity of user sessions without disrupting workflows.

### 2. Cost Savings and Efficiency Gains
- **Reduced Operational Costs**: Sangrakshak minimizes resources needed for Captcha-based authentication and security measures, saving organizations time and money.
- **Scalable and Flexible Architecture**: With its cloud-native, scalable design using tools like Docker and AWS, Sangrakshak adapts to growing user volumes and evolving security threats efficiently, ensuring cost-effective scalability.

### 3. Real-Time Threat Mitigation
- **Immediate Response to Threats**: Sangrakshak’s advanced AI models detect suspicious activities in real-time and respond promptly by terminating sessions or issuing alerts, significantly reducing the risk of data breaches and cyber attacks.
- **Adaptive Learning**: By leveraging ongoing data collection and model retraining capabilities, Sangrakshak adapts to new forms of automated threats, continuously enhancing security and staying ahead of malicious actors.

### 4. Business Benefits
- **Increased User Retention**: By providing a frictionless security layer that does not deter users with cumbersome Captcha processes, Sangrakshak helps businesses retain more users, leading to improved engagement and customer satisfaction.
- **Brand Trust and Reputation**: Companies using Sangrakshak benefit from enhanced trust and reputation, as users appreciate a strong, invisible layer of security that does not compromise usability.

### 5. Market Potential and Versatility
- **Wide Range of Applications**: Sangrakshak is designed to integrate across a broad spectrum of sectors, including banking, e-commerce, government portals, healthcare, and more, where it can effectively mitigate bot-related threats.
- **Innovative and Disruptive Solution**: The project's ability to replace traditional Captchas positions it as a disruptive technology, setting new standards for user authentication and online security. This opens doors for future applications in AI-driven behavioral analytics, fraud detection, and personalized user interactions.

### 6. Compliance and Privacy Advantages
- **Data Protection and Compliance**: With robust data obfuscation and encryption methods, Sangrakshak adheres to data protection regulations such as GDPR and ensures that sensitive user data remains secure.
- **UIDAI API Compatibility**: Sangrakshak is designed to integrate seamlessly with sensitive systems like the Aadhaar portal while ensuring compliance with UIDAI guidelines and standards.

### 7. Educational and Community Contributions
- **Open-Source Potential**: The modular architecture and use of widely accepted frameworks make it an excellent candidate for open-source contributions, fostering community-driven innovation and improvement.
- **Awareness and Education**: Sangrakshak serves as a tool to raise awareness about bot threats and cutting-edge approaches to security, encouraging further research and adoption of AI-powered behavioral analytics in cybersecurity.

### 8. Societal Impact
- **Secure Digital Transformation**: As organizations and governments continue to digitize services, Sangrakshak supports a safer, more secure digital experience, contributing to the growth and trust in digital platforms.
- **Accessibility and Inclusivity**: By removing Captchas, Sangrakshak offers a more inclusive web experience, particularly benefiting users with accessibility needs who may find traditional Captchas challenging to complete.

---

## 💻 Prototype



---

## 📊 Model Performance

### 1. Model Accuracy

The current performance of our Sangrakshak model achieves an accuracy of 70.16%, showcasing its capability to effectively distinguish between human and bot activity. This milestone underscores Sangrakshak's potential as a robust, CAPTCHA-free security solution. Below is a visual depiction of the model's performance metrics.

![Screenshot 2024-11-09 084141](https://github.com/user-attachments/assets/bf992cfa-c570-48a5-962c-9d4fda64014f)

![Screenshot 2024-11-09 082633](https://github.com/user-attachments/assets/389f6b74-487b-4722-9fde-e3d015c4e2fa) ![Screenshot 2024-11-09 082540](https://github.com/user-attachments/assets/cfd62284-14df-415f-986d-bb67653cd8ec)



### 2. Feature Importance for Enhanced Bot Detection
To gain insights into the decision-making process of our model, the plot below illustrates the importance of various features used to distinguish bot-like behavior from human interaction:

![Screenshot 2024-11-09 014706](https://github.com/user-attachments/assets/a3bf2502-f254-4b05-a995-b9d1de94b834)

---

## 📝 Future Roadmap

1. **Model Optimization**
   - Improve accuracy from 70.16% to 85%+.
   - Implement advanced feature engineering and hyperparameter tuning.

2. **Real-Time Detection**
   - Enable real-time bot activity detection during user interactions.
   - Integrate predictive modeling for immediate threat prevention.

3. **Expanded Features**
   - Add IP tracking, device fingerprinting, and session analysis.
   - Use continuous feedback to improve detection capabilities.

4. **Scalability & Deployment**
   - Migrate to cloud infrastructure (AWS, Google Cloud).
   - Implement Kubernetes for scalable deployments.

5. **UI/UX Improvements**
   - Enhance the user interface for better navigation and alerts.

6. **Security Enhancements**
   - Strengthen encryption and ensure compliance with data protection laws (GDPR, CCPA).

7. **Third-Party Integration**
   - Develop API integrations with platforms needing bot detection (e.g., e-commerce, social media).

8. **User Testing & Feedback**
   - Conduct large-scale testing and release periodic updates based on user feedback.

Our roadmap focuses on refining Sangrakshak into a scalable, efficient and market-ready CAPTCHA alternative.

---

## 🙌 Contributions

We welcome contributions! Feel free to submit issues, fork the repository and create pull requests.

---

## 📞 Contact

- **Email**: 

---

**Thank you for using Sangrakshak!** Please star the repository if you found it useful!
