const gdjs = gdjs || {};

gdjs.evtsExt__GooglePlayGamesExtension = gdjs.evtsExt__GooglePlayGamesExtension || {};

/**
 * Inicjalizacja i automatyczne logowanie (np. przy starcie gry)
 */
gdjs.evtsExt__GooglePlayGamesExtension.SignIn = function(runtimeScene, eventsFunctionContext) {
  if (typeof cordova !== "undefined" && typeof cordova.plugins !== "undefined") {
    if (cordova.plugins.GooglePlayBridge) {
      cordova.plugins.GooglePlayBridge.initialize();
    } else {
      console.warn("GooglePlayBridge plugin nie znaleziony");
    }
  } else {
    console.warn("cordova niedostępne - czy to Android APK?");
  }
};

/**
 * Pokazuje leaderboard (ranking) o zadanym ID
 */
gdjs.evtsExt__GooglePlayGamesExtension.ShowLeaderboard = function(runtimeScene, leaderboardId, eventsFunctionContext) {
  if (typeof cordova !== "undefined" && typeof cordova.plugins !== "undefined") {
    if (cordova.plugins.GooglePlayBridge) {
      cordova.plugins.GooglePlayBridge.showLeaderboard(leaderboardId);
    } else {
      console.warn("GooglePlayBridge plugin nie znaleziony");
    }
  }
};

/**
 * Odblokowuje osiągnięcie
 */
gdjs.evtsExt__GooglePlayGamesExtension.UnlockAchievement = function(runtimeScene, achievementId, eventsFunctionContext) {
  if (typeof cordova !== "undefined" && typeof cordova.plugins !== "undefined") {
    if (cordova.plugins.GooglePlayBridge) {
      cordova.plugins.GooglePlayBridge.unlockAchievement(achievementId);
    } else {
      console.warn("GooglePlayBridge plugin nie znaleziony");
    }
  }
};

/**
 * Wysyła wynik do leaderboardu
 */
gdjs.evtsExt__GooglePlayGamesExtension.SubmitScore = function(runtimeScene, leaderboardId, score, eventsFunctionContext) {
  if (typeof cordova !== "undefined" && typeof cordova.plugins !== "undefined") {
    if (cordova.plugins.GooglePlayBridge) {
      cordova.plugins.GooglePlayBridge.submitScore(leaderboardId, score);
    } else {
      console.warn("GooglePlayBridge plugin nie znaleziony");
    }
  }
};
