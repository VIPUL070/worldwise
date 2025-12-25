
# WorldWise 🌍

A world exploration web application that allows users to track their travels and adventures around the globe. Keep a digital diary of all the cities you've visited with an interactive map interface.

## Features ✨

- **Interactive Map** - Explore the world with an interactive mapping interface
- **City Tracking** - Mark and save cities you've visited
- **Travel Journal** - Add notes and dates for each visited location
- **Geolocation** - Use your current location to add cities
- **Data Persistence** - All your travel data is saved locally

> **Note:** This application is currently **not responsive** and is optimized for desktop viewing only.

## Tech Stack 🛠️

- **React** - Frontend library for building the user interface
- **React Router** - Navigation and routing
- **Leaflet** - Interactive mapping library
- **Context API** - State management
- **Vite** - Build tool and development server
- **JSON Server** - Mock REST API for development

## Getting Started 🚀

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/VIPUL070/worldwise.git
```

2. Navigate to the project directory

```bash
cd worldwise
```

3. Install dependencies

```bash
npm install
```

4. Start the JSON server (in a separate terminal)

```bash
npm run server
```

5. Start the development server

```bash
npm run dev
```

6. Open your browser and visit `http://localhost:5173`

## Available Scripts 📝

- `npm run dev` - Starts the development server
- `npm run server` - Starts the JSON server for the backend
- `npm run build` - Creates a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure 📁

```
worldwise/
├── data/              # JSON data files
├── public/            # Static assets
├── src/
│   ├── components/    # React components
│   ├── contexts/      # Context providers
│   ├── pages/         # Page components
│   └── App.jsx        # Main application component
└── index.html         # HTML entry point
```

## Usage 💡

1. **View the Map** - Navigate to the main page to see the interactive world map
2. **Add a City** - Click on the map to add a new city you've visited
3. **View Details** - Click on markers to see details about your visits
4. **Manage Entries** - Edit or delete your travel entries as needed

## Known Limitations ⚠️

- **Not Responsive** - The application is designed for desktop screens and does not adapt to mobile or tablet devices
- **Desktop Only** - For the best experience, use a desktop or laptop computer with a screen width of at least 1024px

## Future Enhancements 🔮

- Add responsive design for mobile and tablet devices
- User authentication and cloud storage
- Social features to share travel experiences
- Trip statistics and analytics
- Photo uploads for each location

## Contributing 🤝

Contributions are welcome! If you'd like to make this app responsive or add new features:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/ResponsiveDesign`)
3. Commit your changes (`git commit -m 'Add responsive design'`)
4. Push to the branch (`git push origin feature/ResponsiveDesign`)
5. Open a Pull Request

## Contact 📧

VIPUL070 - [@VIPUL070](https://github.com/VIPUL070)

Project Link: [https://github.com/VIPUL070/worldwise](https://github.com/VIPUL070/worldwise)

---

⭐ If you find this project helpful, please consider giving it a star!
