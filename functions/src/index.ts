import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.createUser = functions.auth.user().onCreate(snap => {});
