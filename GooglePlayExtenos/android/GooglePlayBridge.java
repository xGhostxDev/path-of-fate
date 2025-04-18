//package com.gkrsd.pof;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.games.AchievementsClient;
import com.google.android.gms.games.Games;
import com.google.android.gms.games.LeaderboardsClient;
import com.google.android.gms.tasks.OnSuccessListener;

public class GooglePlayBridge {
    private static GoogleSignInClient mGoogleSignInClient;
    private static GoogleSignInAccount account;
    private static Activity activity;
    private static final int RC_SIGN_IN = 9001;

    public static void initialize(Activity act) {
        activity = act;
        GoogleSignInOptions signInOptions = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_GAMES_SIGN_IN).build();
        mGoogleSignInClient = GoogleSignIn.getClient(activity, signInOptions);

        account = GoogleSignIn.getLastSignedInAccount(activity);
        if (account == null) {
            signIn();
        }
    }

    public static void signIn() {
        Intent signInIntent = mGoogleSignInClient.getSignInIntent();
        activity.startActivityForResult(signInIntent, RC_SIGN_IN);
    }

    public static void showLeaderboard(String leaderboardId) {
        if (account != null) {
            LeaderboardsClient leaderboardsClient = Games.getLeaderboardsClient(activity, account);
            leaderboardsClient.getLeaderboardIntent(leaderboardId)
                    .addOnSuccessListener(new OnSuccessListener<Intent>() {
                        @Override
                        public void onSuccess(Intent intent) {
                            activity.startActivityForResult(intent, 9004);
                        }
                    });
        }
    }

    public static void unlockAchievement(String achievementId) {
        if (account != null) {
            AchievementsClient achievementsClient = Games.getAchievementsClient(activity, account);
            achievementsClient.unlock(achievementId);
        }
    }

    public static void submitScore(String leaderboardId, long score) {
        if (account != null) {
            LeaderboardsClient leaderboardsClient = Games.getLeaderboardsClient(activity, account);
            leaderboardsClient.submitScore(leaderboardId, score);
        }
    }
}