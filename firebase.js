import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getAuth ,GoogleAuthProvider, signInWithPopup, signInWithRedirect} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

  
//하미친 이거 맨위에 이써야 인식하나봌ㅁ 맨 아래있었는데 자꾸 안 돼서 뭐지 햇는데!!!!!!!!
const googleLogin=document.getElementById("google-login-btn")
googleLogin.addEventListener("click",function(){
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log('로그인성공')
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
})



const firebaseConfig = {
  apiKey: "AIzaSyDtmMCvzMsQOfFRIehAHyhUbiqZ0R9uIl8",
  authDomain: "insideout2.firebaseapp.com",
  databaseURL: "https://insideout2-default-rtdb.firebaseio.com",
  projectId: "insideout2",
  storageBucket: "insideout2.appspot.com",
  messagingSenderId: "455782609287",
  appId: "1:455782609287:web:a3b75598653ad82fff2322",
  measurementId: "G-F0WTQQV9BV"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();

const db = getFirestore(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

const user=auth.currentUser;

async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

//signInWithRedirect(auth, provider);//얘때문에 자꾸 브라우저 켜지자마자 로그인창ㅁ뜸!!;;;

auth.languageCode='it'

provider.addScope();
provider.setCustomParameters({'login_hint': 'user@example.com'});

getRedirectResult(auth)
  .then((result) => { const credential = GoogleAuthProvider.  credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

signOut(auth).then(() => {
}).catch((error) => {
  console.log(error)
});

