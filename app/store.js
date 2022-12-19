import { firebase } from '@nativescript/firebase-core'
import '@nativescript/firebase-firestore'
import { auth }  from '@nativescript/firebase-auth';
import Vue from "nativescript-vue";
// import NSVuexPersistent from 'nativescript-vuex-persistent';
import Vuex from "vuex";
//const NSVuexPersistent = require('NSVuexPersistent');
import NSVuexPersistent from 'nativescript-vuex-persistent';
// Vue.registerElement('NSVuexPersistent', () => require('nativescript-vuex-persistent'))

firebase().initializeApp()
    .then(FirebaseApp => {
        console.log("FirebaseApp initialized");

        firebase()
            .auth()
            .signInAnonymously().then(User => {
                console.log("signInAnonomously completed. User is ", User.user.uid);
                console.log(User);
                global.userNum = User.user.uid;
                //console.log("global.userNum: ", global.userNum);
            })
            .catch(error => {
                console.log("signInAnonomously error", error)
            })
/*
        firebase().auth()
            .addAuthStateChangeListener((user) => {
                console.log('in addAuthStateChangeListener');
                if (!user) {
                    console.log('User is currently signed out!');
                } else {
                    console.log('User is signed in!');
                    store.dispatch("setTestMode");

                }
            })
*/

        let now = new Date();
        
        firebase().firestore().collection('startUps').doc(global.userNum).set({
                test: true,
                time: now.getTime(),
                latest: now.toUTCString(),
                user: global.userNum
            }, {
                merge: true
            })
            .then(() => {
                console.log("in store, startUp successfully written!");
            })
            .catch(error => {
                console.error("in store, Error writing startup to firebase ", error);
            });

          

    }).catch(error => {
        console.info("error on firebase.initialize: ", error);
    });

//const db = firebase().firestore;

Vue.use(Vuex);

let intersection = function(a, b) {
  a = new Set(a), b = new Set(b);
  return [...a].filter(v => b.has(v));
};


const store = new Vuex.Store({
    state: {
        isLoggedIn: null,
        userId: 0,
        count: 0,
        points: 5000,
        maxPoints: 100000,
        completedXPs: [],
        currentLevel: 'L1',
        l2Enabled: false,
        badges: [],
        badgeAnnounce: false,
        showIntro: true,
        showModalShanahan: true,
        showModalKosloff: true,
        showModalDyslexia: true,
        studyTime: [],
        pageProgress: [],
        scienceXPs: ["XP1","XP2","XP3","XP4","XP5","XP9","XP10","XP11","XP13","XP14","XP15","XP16","XP17","XP18","XP19","XP21","XP22","XP24","XP25","XP26","XP27","XP28","XP29","XP30","XP31","XP32","XP33","XP34","XP35","XP36","XP37","XP38","XP39","XP40","XP41","XP42","XP45","XP46","XP47","XP48","XP50","XP51","XP52","XP53","XP81","XP82","XP83","XP84","XP101","XP102"],
        practiceXPs: ["XP105","XP106","XP107","XP108","XP109","XP110","XP111","XP112","XP113","XP114","XP115","XP116","XP117","XP120","XP121","XP127","XP128","XP129","XP130","XP131","XP132","XP133","XP134","XP135","XP136","XP140","XP141","XP142","XP143","XP150","XP151","XP152","XP153","XP154","XP160","XP161","XP162","XP170","XP180","XP190","XP200","XP201"],
        completedScienceXPs: [],
        completedPracticeXPs: [],
        test: "slug"
    },
    mutations: {

      setIsLoggedIn: (state, value) => {
        state.isLoggedIn = value;
      },
      setUserId: (state, value) => {
        state.userId = value;
      },
        catchUpCompleted(state) {
          //console.log("Intersection of arrays: " + intersection(state.scienceXPs, state.completedXPs ));
          state.completedScienceXPs = intersection(state.scienceXPs, state.completedXPs );
          state.completedPracticeXPs = intersection(state.practiceXPs, state.completedXPs );
          console.log("Completed Science XPs: " + state.completedScienceXPs);
          console.log("Completed Practice XPs: " + state.completedPracticeXPs);
        },
  
        processXP(state, payload) {
          this.commit(increment(state, payload));
          this.commit(addXP(state, payload));
        },
  
        increment(state, payload) {
          if (!state.completedXPs.includes(payload.XP)) {
            state.points = state.points + payload.newPoints;
          }
        },
  
        levelUp(state, payload) {
          state.currentLevel = payload.newLevel;
          state.l2Enabled = true;
          
        },
  
      addXP(state, payload) {
          console.info("payload: " + payload.XP + ", for " + payload.newPoints + "points.");
          if (!state.completedXPs.includes(payload.XP)) {
          state.completedXPs.push(payload.XP);
          //console.info("$$$$$$$$$$##############In addXP, User uid: " + firebase.User.uid);
          

          }
          let now = new Date();

          //let userRecord = firebase.getCurrentUser;
// See the UserRecord reference doc for the contents of userRecord.
//console.log("&&&&&&&&&&&&&&&&&&&& userRecord &&&&&&&&&&&&&&&&&&&&&&&&&&&&");
          //console.dir(userRecord);
          //console.log("Latest:  ", now.toUTCString());
          console.log("global.userCreatedOn:  ", global.userCreatedOn);
          firebase().firestore().collection('userProgress').doc(global.userNum).set({
            User: global.userNum,
            userCreated: global.userCreatedOn,
            lastUpdated: now.getTime(),
            latest: now.toUTCString(),
            completedXPs: state.completedXPs,
            l2Enabled: state.l2Enabled,
            badges: state.badges,
            practiceXPs: state.completedPracticeXPs
            }, { merge: true })
            .then(() => {
              console.log("userProgress written to DB");
          })
          .catch((error) => {
              console.error("Error logging userProgress to db: ", error);
          });



          console.info(state.completedXPs);
          if (state.scienceXPs.includes(payload.XP) && !state.completedScienceXPs.includes(payload.XP)) {
            state.completedScienceXPs.push(payload.XP);
            }
            console.info("ScienceXPs: " + state.completedScienceXPs);
          if (state.practiceXPs.includes(payload.XP) && !state.completedPracticeXPs.includes(payload.XP)) {
              state.completedPracticeXPs.push(payload.XP);
              }
              console.info("PracticeXPs: " + state.completedPracticeXPs);

         //Badges for completeing x XP's  
          if (state.completedXPs.length >= 25) {
            this.commit('add_badge', {newbadge: "B5"}); }
          if (state.completedXPs.length >= 20) {
            this.commit('add_badge', {newbadge: "B4"}); }
          if (state.completedXPs.length >= 15) {
            this.commit('add_badge', {newbadge: "B3"}); }
          else if (state.completedXPs.length >= 10) {
            this.commit('add_badge', {newbadge: "B2"}); }
          else if (state.completedXPs.length >= 6) {
            this.commit('add_badge', {newbadge: "B1"}); }
          else if (state.completedXPs.length >= 3) {
            this.commit('add_badge', {newbadge: "B0"});
            state.l2Enabled = true; 
            console.info(state.l2Enabled);
            }
            //this.commit('levelUp',  {l2Enabled: true});
          
  
        //King's Counselor badge  
        if (state.completedXPs.includes("XP5")&&state.completedXPs.includes("XP82")&&state.completedXPs.includes("XP3")&&state.completedXPs.includes("XP82")) {
          this.commit('add_badge', {newbadge: "B10"});
        };
        //Queen's Counselor badge  
        if (state.completedXPs.includes("XP1")&&state.completedXPs.includes("XP2")&&state.completedXPs.includes("XP4")&&state.completedXPs.includes("XP13")&&state.completedXPs.includes("XP22")) {
          this.commit('add_badge', {newbadge: "B11"});
        };
        //Court Foole Badge
        if (state.completedXPs.includes("XP1000")) {
          this.commit('add_badge', {newbadge: "B30"});
        };        
        //Slayer of Guessing Monster badge  
          if (state.completedXPs.includes("XP15")) {
            this.commit('add_badge', {newbadge: "B20"});
          };
        //The Matthew Effect Badge
          if (state.completedXPs.includes("XP5") && state.completedXPs.includes("XP19")) {
            this.commit('add_badge', {newbadge: "B21"});
          };
        // Builder of Orthographic Lexicons
          if (state.completedXPs.includes("XP34") && state.completedXPs.includes("XP36")) {
            this.commit('add_badge', {newbadge: "B22"});
          };

          // King's Assessor
          if (state.completedXPs.includes("XP1001") ) {
            this.commit('add_badge', {newbadge: "B31"});
          };

          // H.R.H.' CheesesMonger
          if (state.completedXPs.includes("XP210") && state.completedXPs.includes("XP211")) {
            this.commit('add_badge', {newbadge: "B32"});
          };
         
          console.info("Badges: " + state.badges );
    
        },
  
        add_badge(state, payload) {
          if (!state.badges.includes(payload.newbadge)) {
          state.badges.push(payload.newbadge);
          }
          console.info("badges: " + state.badges );
        },

        add_page(state, payload) {
          console.info("in add_page, payload.page is:  ", payload.page);
          state.pageProgress.push(payload.page);
          console.info("pageProgress: " + state.pageProgress );
        },

        logPageProgress(state, payload) {
          console.log("^^^^^^^^^^^Logging User page progression", payload.pageString);
          
          this.commit('add_page', {page: payload.pageString });
          console.log("state.PageProgress: ", state.pageProgress);
          firebase().firestore().collection('userProgress').doc(global.userNum).update({
            pageProgress: state.pageProgress
            })
            .then(() => {
              console.log("Page progress written to DB");
          })
          .catch((error) => {
              console.error("Error logging page viewing: ", error);
          });
        },
        logXPTime(state, payload) {
          console.log("^^^^^^^^^^^Logging User time on task", payload.XP, ":", payload.logTime,' seconds');
          
          state.studyTime.push(payload.logTime);
          console.log("state.studyTime: ", state.studyTime);
          firebase().firestore().collection('userProgress').doc(global.userNum).set({
            studyTime: state.studyTime
            }, { merge: true })
            .then(() => {
              console.log("XPtime successfully written!");
          })
          .catch((error) => {
              console.error("Error logging XP time: ", error);
          });
          
        },
  
        dontShowIntro(state) {
          state.showIntro = false;
        },
        dontShowModalShanahan(state) {
          state.showModalShanahan = false;
        },
        dontShowModalKosloff(state) {
          state.showModalKosloff = false;
        },
        dontShowModalDyslexia(state) {
          state.showModalDyslexia = false;
        }
      },
      plugins: [NSVuexPersistent([
        'points', 'completedXPs', 'badges', 'showIntro', 'l2Enabled', 'completedScienceXPs',"completedPracticeXPs", "pageProgress", "studyTime"
      ])]
  })

 
  Vue.prototype.$store = store;
  export default store;