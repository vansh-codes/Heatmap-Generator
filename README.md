# 🌟 Heatmap Generator 🌟

Welcome to the **Heatmap Generator**! This project provides a visual representation of your progress on a particular repository through a heatmap. Click on any day's box to see the activity and commits made on that day.

## 📖 Table of Contents
- [🌟 Heatmap Generator 🌟](#-heatmap-generator-)
  - [📖 Table of Contents](#-table-of-contents)
  - [💡 Features](#-features)
  - [🔧 Installation](#-installation)
  - [🛠️ Environment Variables](#️-environment-variables)
  - [🚀 Usage](#-usage)
  - [🔗 Deployment](#-deployment)
  - [🔍 Acknowledgments](#-acknowledgments)
  - [📞 Contact](#-contact)
  - [📝 TODO](#-todo)
## 💡 Features
- Interactive heatmap visualizing activity 🗓️
- Tooltip information on each day's activity 📊
- Responsive design for seamless usage on all devices 📱💻
- Dynamic rendering of activities and commits made 💪

## 🔧 Installation
To get started with the Heatmap Generator project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/vansh-codes/Heatmap-Generator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Heatmap-Generator
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

Now open [http://localhost:3000](http://localhost:3000) in your browser to view the application!

## 🛠️ Environment Variables
Before running the application, you need to set up environment variables to access the GitHub API. Create a `.env.local` file in the root of your project and add the following lines:

```
GITHUB_TOKEN=your_personal_access_github_token
```

## 🚀 Usage
- Click on any box in the heatmap to view the problems solved on that day.
- Use the dropdown to filter by year for a more tailored experience.

## 🔗 Deployment
Check out the live application here: [Heatmap Generator](https://heatmap-generator.vercel.app/) 🌐

## 🔍 Acknowledgments
A special thanks to the following libraries that made this project possible:

- [react-activity-calendar](https://github.com/grubersjoe/react-activity-calendar): For the beautiful heatmap component 🌈
- [react-tooltip](https://github.com/wwayne/react-tooltip): For providing elegant tooltips on hover 💬
- [framer-motion](https://www.framer.com/motion/): For stunning animations that enhance user experience 🎨
- [lucide-react](https://lucide.dev/): For beautiful icons that add visual appeal 🔍

## 📞 Contact
For any inquiries or suggestions, feel free to reach out to me:

- [GitHub](https://github.com/vansh-codes)  
- [LinkedIn](https://www.linkedin.com/in/vanshchaurasiya24/)  

## 📝 TODO

- [ ] Sort rate limit issue to handle load
- [ ] Render Year dropdown dynamically based on the year of creation of repo
  - currently year is set to 2023 so it will display heatmap from 2023
- [ ] Dynamic URL bypass fix
- [ ] Sort commit msg and commit files issue when there are mutliple files changed in a commit
- [ ] Ignore Merge 'etc etc' commits (might depend on user to user if they wanna change or not)

Thank you for checking out the Heatmap Generator! Happy coding! 🚀