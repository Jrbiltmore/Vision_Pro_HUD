Here's the corrected `README.md` content with the proper directory structure:

```markdown
# VisionPro_HUD

## Authors
- Jacob Thomas Messer Redmond
- ChatGPT-4o

## Description
VisionPro_HUD is a comprehensive Heads-Up Display (HUD) application designed for Apple's Vision Pro. It leverages advanced augmented reality features, gesture controls, and voice commands to provide real-time updates and a seamless user experience. This project includes various components and services that manage notifications, navigation, health metrics, data synchronization, and user preferences.

## Directory Structure
```
VisionPro_HUD/
│
├── README.md
├── package.json
│
├── src/
│   ├── components/
│   │   ├── HUDManager.js
│   │   ├── GestureRecognition.js
│   │   ├── VoiceControl.js
│   │   ├── NotificationDisplay.js
│   │   ├── NavigationDisplay.js
│   │
│   ├── services/
│   │   ├── DataSyncService.js
│   │   ├── UserPreferencesService.js
│   │
│   ├── utils/
│   │   ├── ErrorHandler.js
│   │   ├── Logger.js
│   │
│   ├── styles/
│   │   ├── main.css
│   │   └── themes.css
│
├── tests/
│   ├── HUDManager.test.js
│   ├── GestureRecognition.test.js
│   ├── VoiceControl.test.js
│
├── assets/
│
├── docs/
│
└── .github/
    └── workflows/
        └── ci.yml
```

## Components
### HUDManager.js
Manages the HUD display and updates in the Vision Pro application.

### GestureRecognition.js
Handles gesture input and translates to actions.

### VoiceControl.js
Manages voice commands and interactions.

### NotificationDisplay.js
Displays notifications.

### NavigationDisplay.js
Shows navigation information.

## Services
### DataSyncService.js
Handles data synchronization with cloud services.

### UserPreferencesService.js
Manages user preferences and settings.

## Utilities
### ErrorHandler.js
Centralized error handling utility.

### Logger.js
Logging utility for debugging.

## Styles
### main.css
Main stylesheet for the HUD application.

### themes.css
Contains different themes for the HUD.

## Testing
### HUDManager.test.js
Tests for HUDManager component.

### GestureRecognition.test.js
Tests for GestureRecognition component.

### VoiceControl.test.js
Tests for VoiceControl component.

## CI/CD
### .github/workflows/ci.yml
GitHub Actions workflow for continuous integration.

## Setup and Installation
1. Clone the repository:
    ```
    git clone https://github.com/yourusername/VisionPro_HUD.git
    ```
2. Navigate to the project directory:
    ```
    cd VisionPro_HUD
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Run the application:
    ```
    npm start
    ```
5. Run tests:
    ```
    npm test
    ```

## License
This project is licensed under the MIT License.
```
